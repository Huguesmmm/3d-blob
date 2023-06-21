import React from 'react'
import './App.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

function App() {

  // camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 70, 100000);
  camera.position.set(60.25, 61.65, 1104.67);
  camera.quaternion.setFromEuler(new THREE.Euler(-0.06, 0.05, 0));

  // scene
  const scene = new THREE.Scene();

  // spline scene
  const loader = new SplineLoader();
  loader.load(
    'https://prod.spline.design/BKzVCK3es3jwln2y/scene.splinecode',
    (splineScene) => {
      scene.add(splineScene);
    }
  );

  // renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  // scene settings
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  scene.background = new THREE.Color('#d4daf3');
  renderer.setClearAlpha(1);

  // orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.125;

  window.addEventListener('resize', onWindowResize);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();

  return (
    <div className="App">
    </div>
  )
}

export default App
