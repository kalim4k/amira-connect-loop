import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AmiraButton from '@/components/AmiraButton';
import ErrorModal from '@/components/ErrorModal';
import { useAmira } from '@/contexts/AmiraContext';

const Step5: React.FC = () => {
  const navigate = useNavigate();
  const { clickCount, incrementClick, resetClick, showError, setShowError } = useAmira();
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setShowButton(true), 1000);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleShowNumber = () => {
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
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
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
            Nous recherchons le numéro, cela peut prendre quelques minutes.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-3 mb-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-[60000ms] ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {showButton && (
          <div className="animate-scale-in">
            <AmiraButton
              variant="elegant"
              size="lg"
              onClick={handleShowNumber}
              className="w-full"
            >
              MONTRER LE NUMÉRO
            </AmiraButton>
          </div>
        )}
      </div>

      <ErrorModal 
        isOpen={showError} 
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Step5;