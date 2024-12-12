import React, { createContext, ReactNode } from 'react';

interface VariantContextProps {
  getVariant<T>(): T;
}

const VariantContext = createContext<VariantContextProps | null>(null);

export const VariantProvider = ({ children, variant }: { children: ReactNode, variant: string }) => {

  const getVariant = <K,>(): K => {
    const newVariant = variant as K;
    return newVariant;
  }

  return (
    <VariantContext.Provider value={{ getVariant }}>
      {children}
    </VariantContext.Provider>
  );
};

export const useVariant = () => {
  const context = React.useContext(VariantContext);
  if (!context) {
    throw new Error('useVariant must be used within an VariantProvider');
  }
  return context;
};
