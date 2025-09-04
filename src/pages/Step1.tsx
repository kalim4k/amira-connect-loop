import React from 'react';
import { useNavigate } from 'react-router-dom';
import AmiraButton from '@/components/AmiraButton';
import amiraImage1 from '@/assets/amira-1.jpg';

const Step1: React.FC = () => {
  const navigate = useNavigate();

  const handleResponse = (response: 'yes' | 'no') => {
    navigate('/step2');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-soft p-8 text-center animate-fade-in">
        <div className="mb-8">
          <img
            src={amiraImage1}
            alt="Amira"
            className="w-48 h-48 object-cover rounded-xl mx-auto shadow-soft"
          />
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Amira souhaite entrer en contact avec toi
          </h1>
          <p className="text-lg text-muted-foreground">
            Acceptes-tu ?
          </p>
        </div>
        
        <div className="space-y-4">
          <AmiraButton
            variant="primary"
            size="lg"
            onClick={() => handleResponse('yes')}
            className="w-full"
          >
            OUI
          </AmiraButton>
          
          <AmiraButton
            variant="outline"
            size="lg"
            onClick={() => handleResponse('no')}
            className="w-full"
          >
            NON
          </AmiraButton>
        </div>
      </div>
    </div>
  );
};

export default Step1;