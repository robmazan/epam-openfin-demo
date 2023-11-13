import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { DesktopAgentProvider } from './DesktopAgentContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
    <DesktopAgentProvider DesktopAgent={window.fdc3}>
      <App />
    </DesktopAgentProvider>
  </React.StrictMode>,
);
