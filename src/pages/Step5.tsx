import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AmiraButton from '@/components/AmiraButton';
import ErrorModal from '@/components/ErrorModal';
import TopAd from '@/components/TopAd';
import BottomAd from '@/components/BottomAd';
import { useAmira } from '@/contexts/AmiraContext';

const Step5: React.FC = () => {
  const navigate = useNavigate();
  const { clickCount, incrementClick, resetClick, showError, setShowError } = useAmira();
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const startProgress = () => {
      const startTime = Date.now();
      const duration = 60000; // 60 seconds
      
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          clearInterval(interval);
        }
      }, 100); // Update every 100ms for smooth animation
    };

    startProgress();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleShowNumber = () => {
    if (progress < 100) return; // Ne rien faire si pas à 100%
    
    if (clickCount >= 5) {
      setShowError(true);
      return;
    }

    incrementClick();
    window.open('https://www.revenuecpmgate.com/sw3sywkqm0?key=9c1e5bf89076f5091c1c1677715a55d2', '_blank');
  };

  const handleRestart = () => {
    resetClick();
    setShowError(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      <TopAd />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-soft p-8 text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Patientez, s'il vous plaît
            </h1>
            <p className="text-muted-foreground mb-6">
              Amira prépare votre contact, cela peut prendre quelques minutes.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-3 mb-6 overflow-hidden">
              <div 
                className="h-full bg-gradient-primary transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          {showButton && (
            <div className="animate-scale-in">
              <AmiraButton
                variant={progress >= 100 ? "primary" : "secondary"}
                size="lg"
                onClick={handleShowNumber}
                disabled={progress < 100}
                className={`w-full transition-all duration-300 ${
                  progress >= 100 
                    ? "bg-green-500 hover:bg-green-600 text-white shadow-glow" 
                    : "opacity-50 cursor-not-allowed bg-muted text-muted-foreground"
                }`}
              >
                CONTACTER
              </AmiraButton>
            </div>
          )}
        </div>
      </div>

      <ErrorModal 
        isOpen={showError} 
        onRestart={handleRestart}
      />
      
      <BottomAd />
    </div>
  );
};

export default Step5;