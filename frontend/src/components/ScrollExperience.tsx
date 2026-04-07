import React, { useRef, Suspense, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Float, Stars, PerspectiveCamera, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';

interface ScrollExperienceProps {
  onBookClick: () => void;
}

// --- Cinematic Text Overlays ---
const SceneOverlay = ({ 
  title, 
  subtitle, 
  progress, 
  range,
  description,
  isFirst = false,
  descriptionColorClass = "text-white/80"
}: { 
  title: string; 
  subtitle: string; 
  description?: string;
  progress: any; 
  range: [number, number];
  isFirst?: boolean;
  descriptionColorClass?: string;
}) => {
  // If it's the first scene, opacity starts at 1
  const opacity = useTransform(
    progress, 
    [range[0], isFirst ? range[0] : range[0] + 0.05, range[1] - 0.05, range[1]], 
    [isFirst ? 1 : 0, 1, 1, 0]
  );
  
  const y = useTransform(progress, [range[0], range[1]], [0, -100]);
  const scale = useTransform(progress, [range[0], range[1]], [1, 0.9]);
  
  return (
    <motion.div 
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 px-6 text-center"
    >
      <motion.span className="text-lisbon-yellow font-heading font-black tracking-[0.5em] text-[10px] md:text-sm uppercase mb-6 block drop-shadow-lg">
        {subtitle}
      </motion.span>
      <h2 className="font-heading text-5xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] uppercase break-words px-4">
        {title}
      </h2>
      {description && (
        <p className={`${descriptionColorClass} font-body text-sm md:text-xl max-w-2xl font-bold tracking-tight bg-black/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/5 shadow-2xl`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

// --- 3D Components ---
const Particles = () => {
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FFD700" transparent opacity={0.4} sizeAttenuation={true} />
    </points>
  );
};

const PanoramaRoom = ({ progress }: { progress: any }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  
  // Use the local image downloaded to public/ to avoid CORS issues
  const texture = useTexture('high_res_royal_suite.png', (tex) => {
    console.log('Texture loaded successfully', tex);
    tex.needsUpdate = true;
  });
  
  useEffect(() => {
    if (texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
    }
  }, [texture]);

  useFrame((state) => {
    const p = progress.get();
    
    // Smoothly interpolate mouse position for interactive "look around"
    // state.mouse.x/y are normalized (-1 to 1)
    mousePos.current.x = THREE.MathUtils.lerp(mousePos.current.x, state.mouse.x, 0.05);
    mousePos.current.y = THREE.MathUtils.lerp(mousePos.current.y, state.mouse.y, 0.05);

    if (sphereRef.current) {
      // Base rotation from scroll + 360 offset from mouse (x * PI gives -180 to 180 degrees)
      sphereRef.current.rotation.y = (p * Math.PI * 4) + (mousePos.current.x * Math.PI);
      
      // Vertical tilt from mouse (clamped to prevent flipping) + idle animation
      // Increase range to ~45 degrees (PI/4) or more if desired. 
      // Using 0.8 for a more pronounced effect (~45 degrees up/down)
      sphereRef.current.rotation.x = (Math.sin(state.clock.elapsedTime * 0.2) * 0.05) + (mousePos.current.y * 0.8);
    }

    // Dynamic FOV for "speed" effect while scrolling quickly
    const scrollSpeed = Math.abs(progress.getVelocity());
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = 75 + (scrollSpeed * 5);
      camera.updateProjectionMatrix();
    }
    // Positioning camera slightly off-center to ensure we are inside the sphere
    camera.position.set(0, 0, 0.1);
  });

  return (
    <group>
      <mesh ref={sphereRef} scale={[-1, 1, 1]}>
        <sphereGeometry args={[50, 64, 32]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      
      <Particles />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#FFD700" />
    </group>
  );
};

const LoadingManager = () => {
  const { progress, active } = useProgress();
  
  return (
    <AnimatePresence>
      {active && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-[#050505] z-50"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-lisbon-yellow border-t-transparent rounded-full animate-spin" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-lisbon-yellow font-black tracking-[0.5em] text-[10px] uppercase">Entering Sanctuary</span>
              <span className="text-white/30 font-mono text-[10px]">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ScrollExperience({ onBookClick }: ScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for 3D
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background color transition from dark to white at the end of the scroll
  const containerBg = useTransform(smoothProgress, [0.6, 0.9], ["#050505", "#ffffff"]);
  const canvasOpacity = useTransform(smoothProgress, [0.7, 1], [1, 0]);
  
  return (
    <div ref={containerRef} className="relative h-[120vh] w-full bg-black">
      <motion.div style={{ backgroundColor: containerBg }} className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Cinematic Content Overlays */}
        <SceneOverlay 
          progress={smoothProgress} 
          range={[0, 0.2]} 
          subtitle="Welcome to Lisbon" 
          title="Royalty Suite" 
          description="Experience the pinnacle of Rossio elegance in our curated sanctuary."
          descriptionColorClass="text-lisbon-yellow"
          isFirst={true}
        />
        
        <SceneOverlay 
          progress={smoothProgress} 
          range={[0.25, 0.45]} 
          subtitle="The Social Soul" 
          title="Rossio Lounge" 
          description="Where travelers meet, work, and share stories 24/7."
        />
        
        <SceneOverlay 
          progress={smoothProgress} 
          range={[0.5, 0.7]} 
          subtitle="Premium Comfort" 
          title="Smart Dorms" 
          description="Privacy curtains, power ports, and digital security in every bed."
        />
        
        <SceneOverlay 
          progress={smoothProgress} 
          range={[0.75, 1]} 
          subtitle="Your Hub" 
          title="Rossio Square" 
          description="Step out of our door and into the heart of history."
        />

        {/* 3D Canvas */}
        <motion.div
          style={{ opacity: canvasOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-full"
        >
          <Canvas camera={{ position: [0, 0, 0.1], fov: isMobile ? 90 : 75 }}>
            <Suspense fallback={null}>
              <PanoramaRoom progress={smoothProgress} />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Loading Overlay - Shown when texture isn't ready */}
        <LoadingManager />

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 pointer-events-none"
        >
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-lisbon-yellow/50 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}

