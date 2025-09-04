import React from 'react';
import { useNavigate } from 'react-router-dom';
import AmiraButton from '@/components/AmiraButton';

const Step4: React.FC = () => {
  const navigate = useNavigate();

  const handleResponse = (response: 'yes' | 'no') => {
    navigate('/step5');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-soft p-8 text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Amira souhaite partager avec vous son numéro WhatsApp
            </h1>
            <p className="text-lg text-muted-foreground">
              Êtes-vous d'accord ?
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
    </div>
  );
};

export default Step4;