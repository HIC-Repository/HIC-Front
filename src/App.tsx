import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { useTheme, ThemeProvider } from './lib/ThemeProvider.tsx';
import loading from './lib/loading';
import { ErrorBoundary } from './lib/ErrorBoundary';

import { Background } from './lib/background/Background.tsx';
const Routes = lazy(() => import('./Routes'));

const App = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Function to enter full screen
  const enterFullScreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`);
      });
    }
  };

  useEffect(() => {
    // Automatically enter full screen on component mount
    enterFullScreen();

    // Clean up
    return () => {
      // Exit full screen when component unmounts
      if(document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <Background speed={0.25} isDarkMode={isDarkMode}/>
      <Suspense fallback={loading()}>
        <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
          <Routes />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
