import React from 'react';
import { useNavigate } from 'react-router-dom';
import AmiraButton from '@/components/AmiraButton';
import amiraImage3 from '@/assets/amira-3.jpg';

const Step3: React.FC = () => {
  const navigate = useNavigate();

  const budgetOptions = [
    '7000 FCFA',
    '10000 FCFA',
    '15000 FCFA',
    '20000 FCFA'
  ];

  const handleBudgetSelect = (budget: string) => {
    navigate('/step4');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-soft p-8 text-center animate-fade-in">
          <div className="mb-8">
            <img
              src={amiraImage3}
              alt="Amira"
              className="w-48 h-48 object-cover rounded-xl mx-auto shadow-soft"
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Quel est votre budget ?
            </h1>
            <p className="text-muted-foreground">
              Choisissez le montant qui vous convient
            </p>
          </div>
          
          <div className="space-y-3">
            {budgetOptions.map((budget, index) => (
              <AmiraButton
                key={budget}
                variant={index === budgetOptions.length - 1 ? "primary" : "secondary"}
                size="md"
                onClick={() => handleBudgetSelect(budget)}
                className="w-full"
              >
                {budget}
              </AmiraButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;