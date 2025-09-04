import { useEffect, useRef } from 'react';

const BottomAd = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.hasChildNodes()) {
      // Create the ad configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : 'e5ea33d2ff586acf2400b741fdb3dc6a',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      
      // Create the ad invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = '//www.highperformanceformat.com/e5ea33d2ff586acf2400b741fdb3dc6a/invoke.js';
      
      // Append scripts to the ad container
      adRef.current.appendChild(configScript);
      adRef.current.appendChild(invokeScript);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-4 bg-background/50">
      <div 
        ref={adRef}
        className="w-[300px] h-[250px] flex items-center justify-center"
      />
    </div>
  );
};

export default BottomAd;