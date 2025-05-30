import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for iOS 100vh issue
const setVhVariable = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Set the variable initially
setVhVariable();

// Update on resize and orientation change
window.addEventListener('resize', setVhVariable);
window.addEventListener('orientationchange', setVhVariable);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);