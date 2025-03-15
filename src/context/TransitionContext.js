'use client';
import { createContext, useContext, useState } from 'react';

const TransitionContext = createContext({
  transitionComplete: false,
  setTransitionComplete: () => {},
});

export function TransitionProvider({ children }) {
  const [transitionComplete, setTransitionComplete] = useState(false);

  return (
    <TransitionContext.Provider value={{ transitionComplete, setTransitionComplete }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
} 