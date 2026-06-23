import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  withText?: boolean;
}

export function Logo({ width = 40, height = 40, withText = true }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core Node */}
        <circle cx="50" cy="50" r="20" fill="var(--primary)" />
        {/* Orbiting Nodes */}
        <circle cx="20" cy="50" r="8" fill="var(--accent)" />
        <circle cx="80" cy="50" r="8" fill="var(--primary)" opacity="0.6" />
        <circle cx="50" cy="20" r="8" fill="var(--primary)" opacity="0.8" />
        <circle cx="50" cy="80" r="8" fill="var(--accent)" opacity="0.6" />
        {/* Connections */}
        <path d="M28 50 L30 50" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M72 50 L70 50" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 28 L50 30" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 72 L50 70" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round"/>
        {/* Glowing effect */}
        <circle cx="50" cy="50" r="30" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 50 50" 
            to="360 50 50" 
            dur="20s" 
            repeatCount="indefinite" 
          />
        </circle>
      </svg>
      {withText && (
        <span style={{ 
          fontFamily: 'var(--font-manrope)', 
          fontWeight: 800, 
          fontSize: `${width * 0.55}px`,
          color: 'var(--foreground)',
          letterSpacing: '-0.5px'
        }}>
          Elvancore
        </span>
      )}
    </div>
  );
}
