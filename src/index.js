import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as THREE from 'three';
import { render, events, extend } from '@react-three/fiber';
import ParticleContainer from './ParticleContainer';

extend(THREE)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import './styles.css'
// import App from './App'


window.addEventListener('load', () =>
  render(<ParticleContainer />, document.querySelector('canvas'), {
    events,
    linear: true,
    camera: { fov: 25, position: [0, 0, 6] },
    // https://barradeau.com/blog/?p=621
    // This examples needs WebGL1 (?)
    gl: new THREE.WebGLRenderer({
      canvas: document.querySelector('canvas'),
      antialias: true,
      alpha: true
    })
  })
)

window.dispatchEvent(new Event('load'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
