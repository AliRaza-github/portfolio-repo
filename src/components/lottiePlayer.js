'use client'

import { useEffect } from 'react'

function LottieClient() {
  useEffect(() => {
    // Create and append DotLottie player script
    const dotLottieScript = document.createElement('script');
    dotLottieScript.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    dotLottieScript.type = 'module';
    document.body.appendChild(dotLottieScript);

    // Create and append Lottie player script
    const lottieScript = document.createElement('script');
    lottieScript.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    document.body.appendChild(lottieScript);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(dotLottieScript);
      document.body.removeChild(lottieScript);
    };
  }, []);

  return null;
}

export default LottieClient;
