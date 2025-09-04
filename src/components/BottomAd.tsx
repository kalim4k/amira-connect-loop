import { useEffect, useRef } from 'react';

const BottomAd = () => {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adContainerRef.current) {
      // Clear any existing content
      adContainerRef.current.innerHTML = '';
      
      // Create the configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.text = `
        atOptions = {
          'key' : 'e5ea33d2ff586acf2400b741fdb3dc6a',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      
      // Create the invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = '//www.highperformanceformat.com/e5ea33d2ff586acf2400b741fdb3dc6a/invoke.js';
      
      // Append both scripts to the container
      adContainerRef.current.appendChild(configScript);
      adContainerRef.current.appendChild(invokeScript);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-4 bg-background/50">
      <div 
        ref={adContainerRef}
        className="w-[300px] h-[250px]"
      />
    </div>
  );
};

export default BottomAd;