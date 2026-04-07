import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n'

// Force scroll to top before hydration and every frame for a bit
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  let frames = 0;
  const lockScroll = () => {
    window.scrollTo(0, 0);
    frames++;
    if (frames < 60) requestAnimationFrame(lockScroll);
  };
  requestAnimationFrame(lockScroll);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
