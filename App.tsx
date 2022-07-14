import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './src/router/Root';

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
  return <Root />;
};

root.render(<App />);
