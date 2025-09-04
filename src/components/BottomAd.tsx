import { useEffect } from 'react';

const BottomAd = () => {
  useEffect(() => {
    // Configuration des options de publicité
    (window as any).atOptions = {
      'key': 'e5ea33d2ff586acf2400b741fdb3dc6a',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Créer et ajouter le script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/e5ea33d2ff586acf2400b741fdb3dc6a/invoke.js';
    script.async = true;
    
    document.body.appendChild(script);

    // Nettoyer le script lors du démontage du composant
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex justify-center py-4 bg-background/50">
      <div id="bottom-ad-container" />
    </div>
  );
};

export default BottomAd;