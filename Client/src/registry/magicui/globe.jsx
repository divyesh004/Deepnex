import React, { useRef, useEffect } from 'react';

export function Globe({ className = '' }) {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Globe parameters
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2.5;
    
    // Grid parameters
    const meridians = 24; // Vertical lines
    const parallels = 12; // Horizontal lines
    
    // Colors
    const globeColor = 'rgba(230, 57, 70, 0.1)';
    const gridColor = 'rgba(230, 57, 70, 0.3)';
    const highlightColor = 'rgba(255, 127, 127, 0.8)';
    
    // Points of interest
    const points = [
      { lat: 40, lng: -74 }, // New York
      { lat: 51, lng: 0 },   // London
      { lat: 35, lng: 139 }, // Tokyo
      { lat: 19, lng: 72 },  // Mumbai
      { lat: -33, lng: 151 }, // Sydney
      { lat: -23, lng: -46 }, // São Paulo
    ];
    
    // Convert lat/lng to 3D coordinates
    const latLngTo3D = (lat, lng, r) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);
      
      return { x, y, z };
    };
    
    // Project 3D point to 2D
    const project = (point3D, rotation) => {
      // Apply rotation
      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);
      
      const x = point3D.x * cosR - point3D.z * sinR;
      const y = point3D.y;
      const z = point3D.x * sinR + point3D.z * cosR;
      
      // Simple projection (orthographic)
      return {
        x: x + centerX,
        y: y + centerY,
        depth: z
      };
    };
    
    let rotation = 0;
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw globe background
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = globeColor;
      ctx.fill();
      
      // Draw meridians (longitude lines)
      for (let i = 0; i < meridians; i++) {
        const lng = (i * 360 / meridians) - 180;
        
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const point3D = latLngTo3D(lat, lng, radius);
          const point2D = project(point3D, rotation);
          
          if (lat === -90) {
            ctx.moveTo(point2D.x, point2D.y);
          } else {
            ctx.lineTo(point2D.x, point2D.y);
          }
        }
        
        ctx.strokeStyle = gridColor;
        ctx.stroke();
      }
      
      // Draw parallels (latitude lines)
      for (let i = 0; i < parallels; i++) {
        const lat = (i * 180 / parallels) - 90;
        
        ctx.beginPath();
        for (let lng = -180; lng <= 180; lng += 5) {
          const point3D = latLngTo3D(lat, lng, radius);
          const point2D = project(point3D, rotation);
          
          if (lng === -180) {
            ctx.moveTo(point2D.x, point2D.y);
          } else {
            ctx.lineTo(point2D.x, point2D.y);
          }
        }
        
        ctx.strokeStyle = gridColor;
        ctx.stroke();
      }
      
      // Draw points of interest
      points.forEach(point => {
        const point3D = latLngTo3D(point.lat, point.lng, radius);
        const point2D = project(point3D, rotation);
        
        // Only draw points on the visible side
        if (point3D.x * Math.cos(rotation) - point3D.z * Math.sin(rotation) > 0) {
          ctx.beginPath();
          ctx.arc(point2D.x, point2D.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = highlightColor;
          ctx.fill();
          
          // Add glow effect
          ctx.beginPath();
          ctx.arc(point2D.x, point2D.y, 8, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            point2D.x, point2D.y, 4,
            point2D.x, point2D.y, 8
          );
          gradient.addColorStop(0, 'rgba(255, 127, 127, 0.6)');
          gradient.addColorStop(1, 'rgba(255, 127, 127, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
      
      // Update rotation for animation
      rotation += 0.005;
      
      // Request next frame
      requestIdRef.current = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      width="400" 
      height="400" 
      className={`globe-canvas ${className}`}
    />
  );
}

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}