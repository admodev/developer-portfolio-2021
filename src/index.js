import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index-min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Onboarding from './pages/Onboarding';
import About from './pages/About';
import Trabajo from './pages/Trabajo';
import Emprendimientos from './pages/Emprendimientos';

function App() {
  return (
    <>
      <Onboarding />
      <About />
      <Trabajo />
      <Emprendimientos />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
