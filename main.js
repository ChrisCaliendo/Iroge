import './style.css';
import javascriptLogo from './javascript.svg'
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  /* Field of View */ 75,
  /* Aspect Ratio */ window.innerWidth / window.innerHeight,
  /* View Frustrum */ 0.1, 1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial({
  color: 0xFF6347, wireframe: true 
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// VVV These secions must always be at the end VVV
function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();

function reestablishView() {
  //window.alert();
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
};
window.addEventListener('resize', reestablishView);