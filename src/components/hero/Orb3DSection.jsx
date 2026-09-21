import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Target, TrendingUp, Trophy, ArrowRight, 
  Sparkles, CheckCircle, ChevronRight, Zap, Shield, Flame
} from 'lucide-react';
import { facultyData } from '../../data/mockData';

export default function Orb3DSection() {
  const mountRef = useRef(null);
  const [activeNode, setActiveNode] = useState('LEARN');
  const [hoveredNode, setHoveredNode] = useState(null);

  const orbNodes = [
    {
      id: 'LEARN',
      title: 'LEARN',
      subtitle: 'Conceptual Architecture',
      color: 'from-cyan-400 to-blue-600',
      textColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/40',
      shadowColor: 'shadow-cyan-500/30',
      icon: BookOpen,
      heading: 'Visual & Interactive Physics, Math & Chemistry Pedagogy',
      desc: 'Breaking away from rote memorization. Master core fundamentals through 3D interactive physics engines, molecular dynamics, and geometric visualization.',
      facultyMatch: facultyData[0], // Dr. Rajesh Sharma
      highlights: [
        '3D Interactive Anatomy & Molecular Reaction Engine',
        'Senior IITian & Doctor Led Conceptual Lectures',
        'Micro-concept Breakdown (10-Minute Focus Modules)',
        'Comprehensive NCERT Line-by-Line Micro Notes'
      ],
      metricLabel: 'Concept Retention Rate',
      metricValue: '98.4%'
    },
    {
      id: 'PRACTICE',
      title: 'PRACTICE',
      subtitle: 'Adaptive DPP Drills',
      color: 'from-purple-400 to-indigo-600',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/40',
      shadowColor: 'shadow-purple-500/30',
      icon: Target,
      heading: 'Multi-Level Question Vault & Instant Solution Video',
      desc: 'Over 150,000+ curated problems categorized into Level 1 (Foundational), Level 2 (JEE Main/NEET), Level 3 (JEE Advanced & Olympiad).',
      facultyMatch: facultyData[1], // Dr. Ananya Mukherjee
      highlights: [
        'Daily Practice Papers (DPP) with Step Video Walkthroughs',
        'NCERT Micro-Drill Question Bank with 100% Coverage',
        'Time-Bound Speed Drills for Exam Stamina',
        'Error Log Auto-Generation for Every Incorrect Attempt'
      ],
      metricLabel: 'Question Bank Solved',
      metricValue: '150,000+'
    },
    {
      id: 'IMPROVE',
      title: 'IMPROVE',
      subtitle: 'AI Diagnostic Engine',
      color: 'from-emerald-400 to-teal-600',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/40',
      shadowColor: 'shadow-emerald-500/30',
      icon: TrendingUp,
      heading: 'Precision Weakness Heatmaps & Speed-Accuracy Audits',
      desc: 'Our proprietary AI tracks your time spent per question, question skipping pattern, and subject conceptual gaps to prescribe instant targeted revision.',
      facultyMatch: facultyData[2], // Prof. Vikramaditya Verma
      highlights: [
        'AI Weakness Heatmap across 120+ Sub-topics',
        'Silly Mistake vs Conceptual Mistake Analyzer',
        'Custom Remedial Problem Sets Generated Automatically',
        'Peer Comparison Radar & Speed Optimization Tuning'
      ],
      metricLabel: 'Avg Rank Jump Post-Analytics',
      metricValue: '+42.5%'
    },
    {
      id: 'ACHIEVE',
      title: 'ACHIEVE',
      subtitle: 'AIR Hall of Fame',
      color: 'from-amber-400 to-orange-600',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/40',
      shadowColor: 'shadow-amber-500/30',
      icon: Trophy,
      heading: 'Simulated NTA Exam Portal & All-India Rank Predictor',
      desc: 'Test your nerve in exact NTA computer-based exam environments with over 100,000 concurrent aspirants nationwide.',
      facultyMatch: facultyData[3], // Dr. Sunita Rao
      highlights: [
        'Exact Replicas of NTA JEE & NEET Examination Portals',
        'Predictive All India Rank (AIR) Machine Learning Model',
        '1-on-1 Mentorship Audits with Super-30 Master Faculty',
        'Psychometric Pressure & Exam Hall Anxiety Counseling'
      ],
      metricLabel: 'Top 100 AIR Selections',
      metricValue: '340+ Ranks'
    }
  ];

  const currentData = orbNodes.find(n => n.id === activeNode) || orbNodes[0];

  // Three.js 3D Orb Effect Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Inner Glowing Core Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner Solid Sphere Core
    const innerGeo = new THREE.SphereGeometry(1.1, 32, 32);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x4f46e5,
      emissive: 0x0284c7,
      shininess: 90,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Outer Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Particle Cloud Surrounding Sphere
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.8;

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.75
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Lighting
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

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      coreMesh.rotation.y += 0.006;
      coreMesh.rotation.x += 0.003;

      innerMesh.rotation.y -= 0.004;

      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;

      particleSystem.rotation.y += 0.002;

      // Subtle mouse tilt effect
      scene.rotation.y += (mouseX * 0.5 - scene.rotation.y) * 0.05;
      scene.rotation.x += (-mouseY * 0.5 - scene.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleMorphToFaculty = (mentorId) => {
    const el = document.getElementById('faculty');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="orb-section" className="py-24 relative bg-slate-950 overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Nexora 4-Stage <span className="text-gradient-cyan">Orb of Mastery</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Interact with the central sphere to experience how Nexora transforms raw dedication into Top All-India Ranks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Interactive 3D Canvas & Orbit Nodes */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[480px]">
            
            {/* 3D WebGL Canvas */}
            <div 
              ref={mountRef} 
              className="w-full h-[400px] sm:h-[480px] relative z-10 cursor-grab active:cursor-grabbing" 
            />

            {/* Orbiting Interactive Node Buttons */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              
              {/* Top Node: LEARN */}
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 pointer-events-auto">
                <OrbNodeButton 
                  node={orbNodes[0]} 
                  isActive={activeNode === 'LEARN'} 
                  onClick={() => setActiveNode('LEARN')} 
                />
              </div>

              {/* Right Node: PRACTICE */}
              <div className="absolute top-1/2 right-2 sm:right-6 -translate-y-1/2 pointer-events-auto">
                <OrbNodeButton 
                  node={orbNodes[1]} 
                  isActive={activeNode === 'PRACTICE'} 
                  onClick={() => setActiveNode('PRACTICE')} 
                />
              </div>

              {/* Bottom Node: IMPROVE */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
                <OrbNodeButton 
                  node={orbNodes[2]} 
                  isActive={activeNode === 'IMPROVE'} 
                  onClick={() => setActiveNode('IMPROVE')} 
                />
              </div>

              {/* Left Node: ACHIEVE */}
              <div className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 pointer-events-auto">
                <OrbNodeButton 
                  node={orbNodes[3]} 
                  isActive={activeNode === 'ACHIEVE'} 
                  onClick={() => setActiveNode('ACHIEVE')} 
                />
              </div>

            </div>

            <p className="text-xs text-slate-400 font-mono-tech mt-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Click any orbital node to inspect methodology & mentor mapping</span>
            </p>
          </div>

          {/* Right Detailed Inspector Panel */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl"
              >
                {/* Glowing Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${currentData.color}`} />

                {/* Node Title Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl ${currentData.bgColor} border`}>
                      <currentData.icon className={`w-6 h-6 ${currentData.textColor}`} />
                    </div>
                    <div>
                      <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block">
                        STAGE {orbNodes.findIndex(n => n.id === currentData.id) + 1} OF 4
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                        {currentData.title}
                        <span className={`text-xs px-2 py-0.5 rounded-full font-mono-tech font-semibold ${currentData.bgColor} ${currentData.textColor}`}>
                          {currentData.subtitle}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block">
                    <span className="text-xs text-slate-400 font-mono-tech uppercase block">BENCHMARK</span>
                    <span className={`font-heading text-xl font-black ${currentData.textColor}`}>
                      {currentData.metricValue}
                    </span>
                  </div>
                </div>

                {/* Main Heading & Description */}
                <h4 className="text-lg font-bold text-slate-100 mb-3">
                  {currentData.heading}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {currentData.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-8">
                  {currentData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${currentData.textColor}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Connected Mentor Transition Card */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={currentData.facultyMatch.avatar} 
                      alt={currentData.facultyMatch.name} 
                      className="w-12 h-12 rounded-xl object-cover border border-cyan-500/40"
                    />
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase text-cyan-400 block">
                        STAGE MENTOR LEAD
                      </span>
                      <h5 className="text-sm font-bold text-white">
                        {currentData.facultyMatch.name}
                      </h5>
                      <p className="text-xs text-slate-400">
                        {currentData.facultyMatch.qualification.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleMorphToFaculty(currentData.facultyMatch.id)}
                    className="px-4 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-200 flex items-center gap-1.5 shrink-0"
                  >
                    <span>View Mentor Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

function OrbNodeButton({ node, isActive, onClick }) {
  const Icon = node.icon;

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-xl ${
        isActive 
          ? `${node.bgColor} text-white shadow-xl ${node.shadowColor} scale-110 border-2` 
          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
      }`}
    >
      <div className={`p-1.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-800 group-hover:bg-slate-700'}`}>
        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : node.textColor}`} />
      </div>
      <span className="font-heading font-bold text-xs sm:text-sm tracking-wide">
        {node.title}
      </span>
      {isActive && (
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
      )}
    </button>
  );
}
