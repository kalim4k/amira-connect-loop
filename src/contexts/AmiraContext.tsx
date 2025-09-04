import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AmiraContextType {
  clickCount: number;
  incrementClick: () => void;
  resetClick: () => void;
  showError: boolean;
  setShowError: (show: boolean) => void;
}

const AmiraContext = createContext<AmiraContextType | undefined>(undefined);

export const useAmira = () => {
  const context = useContext(AmiraContext);
  if (context === undefined) {
    throw new Error('useAmira must be used within an AmiraProvider');
  }
  return context;
};

interface AmiraProviderProps {
  children: ReactNode;
}

export const AmiraProvider: React.FC<AmiraProviderProps> = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);
  const [showError, setShowError] = useState(false);

  const incrementClick = () => {
    setClickCount(prev => prev + 1);
  };

  const resetClick = () => {
    setClickCount(0);
    setShowError(false);
  };

  return (
    <AmiraContext.Provider value={{
      clickCount,
      incrementClick,
      resetClick,
      showError,
      setShowError
    }}>
      {children}
    </AmiraContext.Provider>
  );
};