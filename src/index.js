import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BodyPartSelector from './components/BodyPartSelector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BodyPartSelector onInjuriyChange={()=>{}}/>
  </React.StrictMode>
);