import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const ThreeDScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(
      themeRef.current === 'dark' ? 0x1e293b : 0xffffff,
      themeRef.current === 'dark' ? 1.2 : 1.8
    );
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5db, 2.0);
    sunLight.position.set(10, 15, 10);
    scene.add(sunLight);

    const emeraldLight = new THREE.DirectionalLight(0x10b981, 1.5);
    emeraldLight.position.set(-10, -5, 5);
    scene.add(emeraldLight);

    // Mouse interactive point light
    const mouseLight = new THREE.PointLight(0xf59e0b, 2.5, 30);
    mouseLight.position.set(0, 0, 5);
    scene.add(mouseLight);

    // 3. Helper: Generate Rupee Coin Texture with ₹ symbol
    const createCoinTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Base gold gradient
        const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 128);
        grad.addColorStop(0, '#FFFBEB');
        grad.addColorStop(0.3, '#FDE047');
        grad.addColorStop(0.7, '#D97706');
        grad.addColorStop(1, '#92400E');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(128, 128, 120, 0, Math.PI * 2);
        ctx.fill();

        // Outer rim ring
        ctx.strokeStyle = '#FBBF24';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(128, 128, 110, 0, Math.PI * 2);
        ctx.stroke();

        // ₹ symbol
        ctx.fillStyle = '#78350F';
        ctx.font = 'bold 120px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('₹', 128, 134);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const coinFaceTex = createCoinTexture();

    // 4. Gold Rupee Coins Mesh Creation
    const coinGeom = new THREE.CylinderGeometry(0.7, 0.7, 0.12, 32);
    
    // Materials: side is reeded gold, top/bottom have the rupee texture
    const coinSideMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.25
    });
    const coinFaceMat = new THREE.MeshStandardMaterial({
      map: coinFaceTex,
      metalness: 0.85,
      roughness: 0.2
    });

    const coinMaterials = [coinSideMat, coinFaceMat, coinFaceMat];

    interface CoinData {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      bobSpeed: number;
      bobAmplitude: number;
      phase: number;
    }

    const coins: CoinData[] = [];
    const coinPositions = [
      { x: 4.8, y: 3.2, z: 2.0, scale: 0.95 },
      { x: 3.6, y: 1.5, z: 1.0, scale: 0.75 },
      { x: 5.5, y: -0.2, z: 3.0, scale: 1.1 },
      { x: 2.8, y: 4.0, z: -1.0, scale: 0.65 },
      { x: 6.2, y: 2.2, z: 0.5, scale: 0.85 },
      { x: 4.2, y: -2.0, z: 2.5, scale: 0.9 }
    ];

    coinPositions.forEach((pos, i) => {
      const mesh = new THREE.Mesh(coinGeom, coinMaterials);
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.scale.set(pos.scale, pos.scale, pos.scale);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);

      coins.push({
        mesh,
        baseX: pos.x,
        baseY: pos.y,
        baseZ: pos.z,
        rotSpeedX: (Math.random() * 0.015 + 0.008) * (i % 2 === 0 ? 1 : -1),
        rotSpeedY: (Math.random() * 0.02 + 0.01) * (i % 2 === 0 ? 1 : -1),
        rotSpeedZ: (Math.random() * 0.01 + 0.005),
        bobSpeed: Math.random() * 0.8 + 0.8,
        bobAmplitude: Math.random() * 0.3 + 0.2,
        phase: Math.random() * Math.PI * 2
      });
    });

    // 5. 3D Floating Particles & Stardust Spores
    const particleCount = 140;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Clustered towards the right side near the floating island
      const x = (Math.random() * 8) + 1;
      const y = (Math.random() * 12) - 6;
      const z = (Math.random() * 8) - 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.006,
        y: Math.random() * 0.008 + 0.003, // gently drifting upward
        z: (Math.random() - 0.5) * 0.006
      });
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(250, 204, 21, 0.9)');
      grad.addColorStop(0.7, 'rgba(16, 185, 129, 0.4)');
      grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.arc(32, 32, 32, 0, Math.PI * 2);
      pCtx.fill();
    }
    const particleTex = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 6. Mouse Tracking & Smooth Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 7. Window Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // 8. Animation Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (spring lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Subtle 3D camera parallax tilt
      camera.position.x = mouse.x * 0.8;
      camera.position.y = mouse.y * 0.6;
      camera.lookAt(0, 0, 0);

      // Move dynamic mouse point light
      mouseLight.position.x = mouse.x * 10;
      mouseLight.position.y = mouse.y * 8;

      // Animate coins: tumble, rotate, and float
      coins.forEach(coin => {
        coin.mesh.rotation.x += coin.rotSpeedX;
        coin.mesh.rotation.y += coin.rotSpeedY;
        coin.mesh.rotation.z += coin.rotSpeedZ;
        coin.mesh.position.y = coin.baseY + Math.sin(elapsedTime * coin.bobSpeed + coin.phase) * coin.bobAmplitude;
        coin.mesh.position.x = coin.baseX + Math.cos(elapsedTime * 0.5 + coin.phase) * 0.1;
      });

      // Animate stardust particles drifting upward
      const posAttr = particleGeom.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        arr[i * 3 + 1] += particleVelocities[i].y;
        arr[i * 3] += particleVelocities[i].x;
        arr[i * 3 + 2] += particleVelocities[i].z;

        // Reset if drifted too high
        if (arr[i * 3 + 1] > 7) {
          arr[i * 3 + 1] = -7;
          arr[i * 3] = (Math.random() * 8) + 1;
        }
      }
      posAttr.needsUpdate = true;

      // Update theme lighting dynamically
      const isDark = themeRef.current === 'dark';
      ambientLight.color.setHex(isDark ? 0x0f172a : 0xffffff);
      ambientLight.intensity = isDark ? 0.9 : 1.8;
      sunLight.intensity = isDark ? 1.2 : 2.2;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coinGeom.dispose();
      coinSideMat.dispose();
      coinFaceMat.dispose();
      coinFaceTex.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      particleTex.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: theme === 'dark' ? 0.85 : 0.95 }}
    />
  );
};
