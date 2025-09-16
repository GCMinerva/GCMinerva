'use client';

import { useState } from 'react';

export default function ActionButtons() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleNotifyClick = () => {
    alert('Notification system is not yet active. Check back when MINERVA GEN 3 launches!');
  };

  const handleLearnMoreClick = () => {
    alert('More information will be available soon. Stay tuned for updates!');
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <button
        onClick={handleNotifyClick}
        onMouseEnter={() => setHoveredButton('notify')}
        onMouseLeave={() => setHoveredButton(null)}
        className="bg-transparent border-2 border-green-500 text-green-400 px-8 py-3 rounded-lg font-mono text-lg hover:bg-green-500 hover:text-black transition-all duration-300 relative overflow-hidden group min-w-[200px]"
        style={{
          boxShadow: hoveredButton === 'notify'
            ? '0 0 20px rgba(0, 187, 34, 0.6)'
            : '0 0 10px rgba(0, 187, 34, 0.3)'
        }}
      >
        <span className="relative z-10">NOTIFY ME</span>
        <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>

      <button
        onClick={handleLearnMoreClick}
        onMouseEnter={() => setHoveredButton('learn')}
        onMouseLeave={() => setHoveredButton(null)}
        className="bg-green-500 text-black px-8 py-3 rounded-lg font-mono text-lg hover:bg-transparent hover:text-green-400 border-2 border-green-500 transition-all duration-300 relative overflow-hidden group min-w-[200px]"
        style={{
          boxShadow: hoveredButton === 'learn'
            ? '0 0 20px rgba(0, 187, 34, 0.6)'
            : '0 0 10px rgba(0, 187, 34, 0.3)'
        }}
      >
        <span className="relative z-10">LEARN MORE</span>
        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>

      <div className="text-center mt-4 md:mt-0 md:ml-6">
        <div className="text-xs text-green-600 font-mono opacity-70">
          [ACCESS LEVEL: PENDING]
        </div>
        <div className="text-xs text-green-500 font-mono mt-1">
          AUTHORIZATION REQUIRED
        </div>
      </div>
    </div>
  );
}