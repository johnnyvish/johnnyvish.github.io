import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';

const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();

// stars
const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2});

const starPoints = [];
for (let i = 0; i < 20000; i++) {
  const x = THREE.MathUtils.randFloatSpread(2000);
  const y = THREE.MathUtils.randFloatSpread(2000);
  const z = THREE.MathUtils.randFloatSpread(2000);
  starPoints.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPoints, 3));
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Asteroid
const asteroidGeometry = new THREE.SphereGeometry(0.5,5,8);
const asteroidTexture = loader.load('asteroid.jpeg');
const asteroidMaterial = new THREE.MeshPhongMaterial({ map: asteroidTexture });
const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
asteroid.position.set(-200,-200,-200);
scene.add(asteroid);

// Earth
const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
const earthTexture = loader.load('earth.jpeg');
const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(25,25,25);
scene.add(earth);

// Sun
const sunGeometry = new THREE.SphereGeometry(109, 64, 64);
const sunTexture = loader.load('sun.jpeg');
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(1000,1000,1000);
scene.add(sun);

// Sun Light
const sunLight = new THREE.DirectionalLight('white', 1);
sunLight.position.set(1000,1000,1000);
scene.add(sunLight);

// Ambient Light
const ambientLight = new THREE.AmbientLight( 0x404040, 3); // soft white light
scene.add(ambientLight);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
camera.position.set(0,0,5);
asteroid.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Disable zoom
controls.enableZoom = true;

// Animation
function animate() {
  requestAnimationFrame(animate);

  // Move asteroid towards earth
  asteroid.position.z += 0.1;
  asteroid.position.y += 0.1;
  asteroid.position.x += 0.1;
  earth.rotation.y += 0.001;


  camera.lookAt(asteroid.position.x,asteroid.position.y,asteroid.position.z);

  renderer.render(scene, camera);
}

animate();
