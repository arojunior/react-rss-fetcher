import React from 'react';
import { render } from 'react-dom';
import './assets/css/index.css';
import ErrorBoundary from './common/components/error-boundary';
import HomeContainer from './pages/home/home.container';
import HomeComponent from './pages/home/home.component';

render(
  <React.StrictMode>
    <ErrorBoundary>
      <HomeContainer Component={HomeComponent} />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
