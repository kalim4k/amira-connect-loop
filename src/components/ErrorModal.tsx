import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import AmiraButton from './AmiraButton';

interface ErrorModalProps {
  isOpen: boolean;
  onRestart: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onRestart }) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border animate-scale-in">
        <div className="text-center p-6">
          <div className="mb-6">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Une erreur s'est produite
            </h3>
            <p className="text-muted-foreground">
              Nous rencontrons des difficultés techniques. Veuillez recommencer le processus.
            </p>
          </div>
          <AmiraButton
            variant="primary"
            size="md"
            onClick={onRestart}
            className="w-full"
          >
            RECOMMENCER
          </AmiraButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;