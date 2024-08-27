import * as THREE from 'three';

// Constants
const particlesCount = 600;
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
const objectDistance = 10;
const deltaTime = 0.01; // Reduced for smoother animation
const fadeSpeed = 1.5;

// Scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);

// Geometry setup
const positions = new Float32Array(particlesCount * 3);
const phases = new Float32Array(particlesCount);
const blinkSpeeds = new Float32Array(particlesCount); // New array for individual blink speeds

for (let i = 0; i < particlesCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  
  phases[i] = Math.random() * Math.PI * 2;
  blinkSpeeds[i] = Math.random() * 2 + 0.5; // Random speed between 0.5 and 2.5
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particlesGeometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
particlesGeometry.setAttribute('blinkSpeed', new THREE.BufferAttribute(blinkSpeeds, 1));

// Particle material setup
const particleMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    attribute float phase;
    attribute float blinkSpeed;
    varying float vBrightness;
    uniform float uTime;
    
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
      
      gl_PointSize = 3.0;
      
      // Calculate brightness based on time, phase, and blink speed
      vBrightness = abs(sin((uTime * blinkSpeed) + phase));
    }
  `,
  fragmentShader: `
    varying float vBrightness;
    
    void main() {
      float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
      float alpha = 1.0 - smoothstep(0.4, 0.5, distanceFromCenter);
      
      vec3 color = vec3(vBrightness);
      gl_FragColor = vec4(color, alpha * vBrightness);
    }
  `,
  transparent: true,
  depthWrite: false,
  uniforms: {
    uTime: { value: 0 }
  }
});

const particles = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(particles);

// Camera and scene setup
camera.position.z = 5;
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
cameraGroup.add(camera);

// Cursor setup
const cursor = { x: 0, y: 0 };
window.addEventListener('mousemove', event => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

// Animation variables
let elapsedTime = 0;

// Animation loop
function tick() {
  elapsedTime += deltaTime;

  const parallaxX = cursor.x;
  const parallaxY = cursor.y;

  // Update camera position for parallax effect
  cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
  cameraGroup.position.y += (-parallaxY - cameraGroup.position.y) * 5 * deltaTime;

  // Update uniform time for shader
  particleMaterial.uniforms.uTime.value = elapsedTime;

  // Render the scene
  renderer.render(scene, camera);
    renderer.setClearColor( 0x000000, 0 )
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();