import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle, Zap, ChevronRight } from "lucide-react";
import { orbNodes, orbSectionConfig } from "../../data/orb";
import { SectionHeading, EASE } from "../ui/SectionHeading";

const STATE_COLORS = {
  LEARN: 0x22d3ee,
  PRACTICE: 0x38bdf8,
  IMPROVE: 0x6366f1,
  ACHIEVE: 0xfbbf24,
};

function OrbNodeButton({ node, isActive, onClick }) {
  const Icon = node.icon;
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`${node.title} stage — ${node.subtitle}`}
      className={`group relative flex items-center gap-2 pl-2.5 pr-4 py-2 rounded-full border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
        isActive
          ? `${node.bgColor} text-white scale-105 shadow-lg ${node.shadowColor}`
          : "bg-[var(--surface-raised)]/85 border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-white"
      }`}
    >
      {/* connector dot that visually links toward the orb */}
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 self-center ${isActive ? "bg-white" : "bg-[var(--text-tertiary)] group-hover:bg-cyan-300"} transition-colors`}
        aria-hidden="true"
      />
      <span className={`p-1.5 rounded-full ${isActive ? "bg-white/20" : "bg-[var(--surface)] group-hover:bg-[var(--surface-hover)]"}`}>
        <Icon className={`w-4 h-4 ${isActive ? "text-white" : node.textColor}`} />
      </span>
      <span className="font-heading font-bold text-xs sm:text-sm tracking-wide whitespace-nowrap">
        {node.title}
      </span>
      {isActive && <span className={`w-1.5 h-1.5 rounded-full ${node.textColor} animate-pulse`} aria-hidden="true" />}
    </button>
  );
}

export default function Orb3DSection() {
  const mountRef = useRef(null);
  const activeRef = useRef("LEARN");
  const [activeNode, setActiveNode] = useState("LEARN");

  const currentIndex = orbNodes.findIndex((n) => n.id === activeNode);
  const currentData = orbNodes[currentIndex] || orbNodes[0];

  // Three.js orb — one system, subtly responding to the selected stage.
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.5 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    const innerGeo = new THREE.SphereGeometry(1.08, 40, 40);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x1e3a8a,
      emissive: 0x0891b2,
      shininess: 85,
      transparent: true,
      opacity: 0.88,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    const ringGeo1 = new THREE.TorusGeometry(2.25, 0.018, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.014, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.45 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    const particleCount = reducedMotion ? 120 : 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.9 + Math.random() * 0.9;
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.032, transparent: true, opacity: 0.7 });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    const pointLight = new THREE.PointLight(0x38bdf8, 3, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    let reqId;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    const reduceTilt = reducedMotion
      ? () => {}
      : (e) => handleMouseMove(e);
    window.addEventListener("mousemove", reduceTilt);

    const lerpColor = (mat, targetHex) => {
      const target = new THREE.Color(targetHex);
      if (mat.color) mat.color.lerp(target, 0.08);
      if (mat.emissive) mat.emissive.lerp(target, 0.08);
    };

    const animate = () => {
      if (!reducedMotion) reqId = requestAnimationFrame(animate);

      const target = STATE_COLORS[activeRef.current] ?? 0x22d3ee;
      lerpColor(coreMat, target);
      lerpColor(innerMat, target);
      lerpColor(ringMat1, target);
      lerpColor(ringMat2, target);
      lerpColor(particleMat, target);

      if (!reducedMotion) {
        coreMesh.rotation.y += 0.006;
        coreMesh.rotation.x += 0.003;
        innerMesh.rotation.y -= 0.004;
        ring1.rotation.z += 0.008;
        ring2.rotation.z -= 0.006;
        particleSystem.rotation.y += 0.002;
        scene.rotation.y += (mouseX * 0.5 - scene.rotation.y) * 0.05;
        scene.rotation.x += (-mouseY * 0.5 - scene.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    if (reducedMotion) animate();
    else animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", reduceTilt);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      innerGeo.dispose();
      coreGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      particleGeo.dispose();
      Object.values({ coreMat, innerMat, ringMat1, ringMat2, particleMat }).forEach((m) => m.dispose());
    };
  }, []); // mounted once; stage color is driven live via activeRef

  const selectStage = (id) => {
    activeRef.current = id;
    setActiveNode(id);
  };

  const jumpToFaculty = () => {
    const el = document.getElementById("faculty");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="orb-section" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={orbSectionConfig.badge}
          badgeIcon={Sparkles}
          headlineTop={orbSectionConfig.headlineTop}
          headlineGradient={orbSectionConfig.headlineGradient}
          support={orbSectionConfig.support}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Orb + connected nodes */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square max-w-[560px] mx-auto w-full">
              {/* connection lines to orb center */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[
                  [50, 7, 50, 50],
                  [93, 50, 50, 50],
                  [50, 93, 50, 50],
                  [7, 50, 50, 50],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#orbConnector)"
                    strokeWidth="0.35"
                    strokeDasharray="1.5 2.5"
                    opacity="0.55"
                  />
                ))}
                <defs>
                  <linearGradient id="orbConnector" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 3D canvas */}
              <div ref={mountRef} className="absolute inset-[14%] cursor-grab active:cursor-grabbing" aria-label="Interactive Nexora mastery orb" />

              {/* Nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <OrbNodeButton node={orbNodes[0]} isActive={activeNode === "LEARN"} onClick={() => selectStage("LEARN")} />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <OrbNodeButton node={orbNodes[1]} isActive={activeNode === "PRACTICE"} onClick={() => selectStage("PRACTICE")} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                <OrbNodeButton node={orbNodes[2]} isActive={activeNode === "IMPROVE"} onClick={() => selectStage("IMPROVE")} />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <OrbNodeButton node={orbNodes[3]} isActive={activeNode === "ACHIEVE"} onClick={() => selectStage("ACHIEVE")} />
              </div>
            </div>

            <p className="mt-3 text-xs text-[var(--text-secondary)] font-mono-tech flex items-center justify-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-300" />
              {orbSectionConfig.hint}
            </p>
          </div>

          {/* Inspector panel */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.32, ease: EASE }}
                className="surface-base surface-accent relative overflow-hidden p-6 sm:p-8 bg-[var(--surface-raised)]/70 backdrop-blur-xl"
              >
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${currentData.color}`} aria-hidden="true" />

                {/* STAGE + OUTCOME benchmark */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${currentData.bgColor} border`}>
                      <currentData.icon className={`w-6 h-6 ${currentData.textColor}`} />
                    </div>
                    <div>
                      <span className="eyebrow-label block text-[11px]">{currentData.stageLabel}</span>
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {currentData.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="eyebrow-label block text-[10px] !tracking-widest">{currentData.metricLabel}</span>
                    <span className={`font-heading text-2xl font-black ${currentData.textColor}`}>
                      {currentData.metricValue}
                    </span>
                  </div>
                </div>

                {/* METHOD */}
                <h4 className="text-base font-bold text-slate-100 mb-2">{currentData.heading}</h4>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {currentData.desc}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {currentData.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${currentData.textColor}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* OUTCOME progress */}
                <div className="mb-7">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-[var(--text-secondary)] mb-2">
                    <span>Stage completion signal</span>
                    <span className={currentData.textColor}>{Math.round(((currentIndex + 1) / orbNodes.length) * 100)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--surface-hover)] overflow-hidden">
                    <motion.div
                      key={currentData.id}
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / orbNodes.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className={`h-full bg-gradient-to-r ${currentData.color}`}
                    />
                  </div>
                  <div className="flex justify-between mt-2" aria-hidden="true">
                    {orbNodes.map((n, i) => (
                      <span key={n.id} className={`h-1.5 w-1.5 rounded-full ${i <= currentIndex ? currentData.textColor : "bg-[var(--text-tertiary)]"}`} />
                    ))}
                  </div>
                </div>

                {/* MENTOR */}
                <div className="p-4 rounded-2xl bg-[var(--background)]/70 border border-[var(--border-subtle)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={currentData.facultyMatch.avatar}
                      alt={currentData.facultyMatch.name}
                      loading="lazy"
                      className="w-11 h-11 rounded-xl object-cover object-top border border-cyan-500/40 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="eyebrow-label block text-[9px] !tracking-widest">Stage Mentor Lead</span>
                      <h5 className="text-sm font-bold text-white truncate">{currentData.facultyMatch.name}</h5>
                      <p className="text-xs text-[var(--text-secondary)] truncate">
                        {currentData.facultyMatch.qualification.split(" (")[0]}
                      </p>
                    </div>
                  </div>
                  <button onClick={jumpToFaculty} className="btn btn-ghost btn-sm shrink-0 !text-xs">
                    <span>Mentor Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stage switcher strip */}
            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={() => selectStage(orbNodes[(currentIndex - 1 + orbNodes.length) % orbNodes.length].id)}
                className="btn btn-ghost btn-sm"
                aria-label="Previous stage"
              >
                <ChevronRight className="w-4 h-4 rotate-180 text-cyan-300" />
              </button>
              <div className="flex items-center gap-1.5 font-mono-tech text-xs text-[var(--text-secondary)]">
                STAGE
                <span className="text-cyan-300 font-bold">{currentIndex + 1}</span> / {orbNodes.length}
              </div>
              <button
                onClick={() => selectStage(orbNodes[(currentIndex + 1) % orbNodes.length].id)}
                className="btn btn-ghost btn-sm"
                aria-label="Next stage"
              >
                <ChevronRight className="w-4 h-4 text-cyan-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}