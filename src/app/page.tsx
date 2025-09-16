'use client';

import MinervaTitle from '@/components/MinervaTitle';
import Countdown from '@/components/Countdown';
import ActionButtons from '@/components/ActionButtons';
import { useEffect } from 'react';
import { animate, utils } from 'animejs';

export default function Home() {
  useEffect(() => {
    // Matrix Code Rain Background
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    document.body.appendChild(matrixContainer);

    const matrixChars = '01';
    const codeSnippets = [
      'npm install minerva',
      'git clone repo',
      'docker run -p 8080',
      'sudo chmod +x',
      'make build',
      'yarn start',
      'pip install --upgrade',
      'curl -X POST',
      'ssh user@server',
      'rm -rf node_modules',
      'ng new project',
      'mvn clean install',
      'cargo build --release',
      'go run main.go',
      'python3 app.py',
      'node server.js',
      'php artisan serve',
      'rails new app',
      'composer install',
      'webpack --mode prod'
    ];

    const createMatrixColumn = () => {
      const column = document.createElement('div');
      column.className = 'matrix-column';

      // Generate random code/terminal output
      let codeString = '';
      const useCodeSnippet = utils.random(1, 100) <= 40; // 40% chance for code snippets

      if (useCodeSnippet) {
        // Use terminal commands
        const numCommands = utils.random(3, 8);
        for (let i = 0; i < numCommands; i++) {
          const command = codeSnippets[utils.random(0, codeSnippets.length - 1)];
          codeString += `$ ${command}\n`;
          if (utils.random(1, 100) <= 30) {
            codeString += `[${utils.random(100, 999)}ms] OK\n`;
          }
        }
      } else {
        // Use binary/hex matrix style
        for (let i = 0; i < utils.random(15, 35); i++) {
          if (utils.random(1, 100) <= 70) {
            codeString += matrixChars.charAt(utils.random(0, matrixChars.length - 1));
          } else {
            codeString += String.fromCharCode(utils.random(65, 90)); // A-Z
          }
          codeString += '\n';
        }
      }
      column.textContent = codeString;

      // Random positioning
      column.style.left = `${utils.random(0, window.innerWidth)}px`;
      column.style.animationDuration = `${utils.random(2, 5)}s`;
      column.style.animationDelay = `${utils.random(0, 1)}s`;
      column.style.fontSize = `${utils.random(12, 18)}px`;
      column.style.opacity = `${utils.random(0.6, 1.0)}`;

      matrixContainer.appendChild(column);

      // Remove after animation
      setTimeout(() => column.remove(), 10000);
    };

    // Add static terminal headers
    const topTerminal = document.createElement('div');
    topTerminal.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      color: #00bb22;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      z-index: 5;
      opacity: 0.4;
      text-shadow: 0 0 3px #00bb22;
    `;
    topTerminal.textContent = '$ minerva-system --status=initializing';
    document.body.appendChild(topTerminal);

    const bottomTerminal = document.createElement('div');
    bottomTerminal.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      color: #00bb22;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      z-index: 5;
      opacity: 0.4;
      text-shadow: 0 0 3px #00bb22;
    `;
    bottomTerminal.textContent = '[MINERVA GEN 3 IS COOMING!]';
    document.body.appendChild(bottomTerminal);

    // Create matrix columns periodically - more frequent
    const matrixInterval = setInterval(() => {
      if (utils.random(1, 100) <= 95) { // 95% chance
        createMatrixColumn();
      }
    }, 200);

    // Initial burst of matrix columns
    for (let i = 0; i < 40; i++) {
      setTimeout(() => createMatrixColumn(), utils.random(0, 1000));
    }

    // Create floating particles background
    const createFloatingParticle = () => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = `${utils.random(2, 4)}px`;
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(0, 255, 0, ${utils.random(0.1, 0.4)})`;
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '2';
      particle.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.5)';

      // Random starting position
      particle.style.left = `${utils.random(-50, window.innerWidth + 50)}px`;
      particle.style.top = `${window.innerHeight + 50}px`;

      document.body.appendChild(particle);

      // Animate upward with random movement
      animate(particle, {
        translateY: -window.innerHeight - 100,
        translateX: utils.random(-200, 200),
        rotate: utils.random(0, 360),
        opacity: [0, utils.random(0.3, 1), 0],
        duration: utils.random(6000, 12000),
        ease: 'linear',
        complete: () => particle.remove()
      });
    };

    // Create particles periodically
    const particleInterval = setInterval(() => {
      if (utils.random(1, 100) <= 40) { // 40% chance each interval
        createFloatingParticle();
      }
    }, 800);

    // Create initial batch of particles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createFloatingParticle(), utils.random(0, 4000));
    }

    return () => {
      clearInterval(matrixInterval);
      clearInterval(particleInterval);
      matrixContainer.remove();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative px-4 box-border">
      <main className="flex flex-col items-center justify-center relative z-10 w-full">
        <MinervaTitle />
        <Countdown />
        <ActionButtons />
      </main>

      <div className="footer-text">
        <p>MINERVA GEN 3 IS COOMING!</p>
      </div>
    </div>
  );
}
