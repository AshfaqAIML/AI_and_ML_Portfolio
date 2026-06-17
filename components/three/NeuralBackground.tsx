"use client";
// components/three/NeuralBackground.tsx
//
// Signature visual: a layered neural network rendered in Three.js.
// Nodes pulse and signal travels along edges layer-to-layer, echoing
// forward propagation — tying the hero's motion directly to the
// AI/ML subject matter rather than generic floating particles.
import { useEffect, useRef } from "react";
import * as THREE from "three";

const LAYER_SIZES = [5, 8, 10, 8, 5];
const LAYER_SPACING = 2.6;
const NODE_COLOR = 0x6fb4ff;
const PULSE_COLOR = 0x22d3ee;

export function NeuralBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.6, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- Build node positions, layer by layer ---
    const layerGroups: THREE.Vector3[][] = [];
    const totalWidth = (LAYER_SIZES.length - 1) * LAYER_SPACING;

    LAYER_SIZES.forEach((count, layerIdx) => {
      const x = layerIdx * LAYER_SPACING - totalWidth / 2;
      const nodes: THREE.Vector3[] = [];
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * 0.95;
        const z = (Math.random() - 0.5) * 1.4;
        nodes.push(new THREE.Vector3(x, y, z));
      }
      layerGroups.push(nodes);
    });

    // --- Node points ---
    const nodePositions: number[] = [];
    layerGroups.forEach((layer) =>
      layer.forEach((v) => nodePositions.push(v.x, v.y, v.z))
    );
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodePositions, 3)
    );
    const nodeMaterial = new THREE.PointsMaterial({
      color: NODE_COLOR,
      size: 0.16,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // --- Edges between consecutive layers ---
    const edgePositions: number[] = [];
    const edgeMeta: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];
    for (let l = 0; l < layerGroups.length - 1; l++) {
      layerGroups[l].forEach((a) => {
        layerGroups[l + 1].forEach((b) => {
          if (Math.random() < 0.35) {
            edgePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
            edgeMeta.push({ a, b });
          }
        });
      });
    }
    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(edgePositions, 3)
    );
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x2f6fed,
      transparent: true,
      opacity: 0.16,
    });
    const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    scene.add(edgeLines);

    // --- Traveling signal pulses along a subset of edges ---
    const PULSE_COUNT = 26;
    const pulseGeometry = new THREE.BufferGeometry();
    const pulsePositions = new Float32Array(PULSE_COUNT * 3);
    pulseGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(pulsePositions, 3)
    );
    const pulseMaterial = new THREE.PointsMaterial({
      color: PULSE_COLOR,
      size: 0.22,
      transparent: true,
      opacity: 0.95,
    });
    const pulsePoints = new THREE.Points(pulseGeometry, pulseMaterial);
    scene.add(pulsePoints);

    const pulses = Array.from({ length: PULSE_COUNT }, () => {
      const edge = edgeMeta[Math.floor(Math.random() * edgeMeta.length)];
      return { edge, t: Math.random(), speed: 0.4 + Math.random() * 0.6 };
    });

    // --- Ambient particle field ---
    const PARTICLE_COUNT = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      nodePoints.rotation.y = Math.sin(elapsed * 0.05) * 0.12;
      edgeLines.rotation.y = nodePoints.rotation.y;
      pulsePoints.rotation.y = nodePoints.rotation.y;

      // pulse positions
      const posAttr = pulseGeometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      pulses.forEach((p, i) => {
        p.t += p.speed * 0.01;
        if (p.t > 1) {
          p.t = 0;
          p.edge = edgeMeta[Math.floor(Math.random() * edgeMeta.length)];
        }
        const x = p.edge.a.x + (p.edge.b.x - p.edge.a.x) * p.t;
        const y = p.edge.a.y + (p.edge.b.y - p.edge.a.y) * p.t;
        const z = p.edge.a.z + (p.edge.b.z - p.edge.a.z) * p.t;
        posAttr.setXYZ(i, x, y, z);
      });
      posAttr.needsUpdate = true;

      particles.rotation.y = elapsed * 0.01;
      particles.rotation.x = Math.sin(elapsed * 0.04) * 0.05;

      camera.position.x = Math.sin(elapsed * 0.07) * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      pulseGeometry.dispose();
      pulseMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
