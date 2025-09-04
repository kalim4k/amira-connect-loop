import React from 'react';
import { useNavigate } from 'react-router-dom';
import AmiraButton from '@/components/AmiraButton';
import BottomAd from '@/components/BottomAd';
import amiraImage2 from '@/assets/amira-2.jpg';

const Step2: React.FC = () => {
  const navigate = useNavigate();

  const ageRanges = [
    '18-25 ans',
    '26-35 ans',
    '36-45 ans',
    '46-55 ans',
    '56+ ans'
  ];

  const handleAgeSelect = (age: string) => {
    navigate('/step3');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-soft p-8 text-center animate-fade-in">
          <div className="mb-8">
            <img
              src={amiraImage2}
              alt="Amira"
              className="w-48 h-48 object-cover rounded-xl mx-auto shadow-soft"
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Quelle est votre tranche d'âge ?
            </h1>
            <p className="text-muted-foreground">
              Sélectionnez votre âge pour continuer
            </p>
          </div>
          
          <div className="space-y-3">
            {ageRanges.map((range, index) => (
              <AmiraButton
                key={range}
                variant={index === 0 ? "primary" : "secondary"}
                size="md"
                onClick={() => handleAgeSelect(range)}
                className="w-full"
              >
                {range}
              </AmiraButton>
            ))}
          </div>
        </div>
      </div>
      <BottomAd />
    </div>
  );
};

export default Step2;