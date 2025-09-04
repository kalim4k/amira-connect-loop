import { useEffect } from 'react';

const BottomAd = () => {
  useEffect(() => {
    // Create and append the ad script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : 'e5ea33d2ff586acf2400b741fdb3dc6a',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.head.appendChild(script);

    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/e5ea33d2ff586acf2400b741fdb3dc6a/invoke.js';
    document.head.appendChild(invokeScript);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script);
      document.head.removeChild(invokeScript);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-4 bg-background/50">
      <div className="w-[300px] h-[250px] flex items-center justify-center border border-border/20 rounded-lg">
        <p className="text-muted-foreground text-sm">Publicité</p>
      </div>
    </div>
  );
};

export default BottomAd;