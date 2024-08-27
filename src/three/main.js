// import './style.css';
// import './particle.js';

// import('./particle.js').then(module => {
//   if (module.initializeParticleScene) {
//     module.initializeParticleScene();
//   }
// });
import './style.css';
import '../index.css';
async function ParticleJS() {
  try {
    const module = await import('./particle.js');
    if (module.initializeParticleScene) {
      module.ParticleJS();
    } else {
      console.error('ParticleJS function is not exported by particle.js');
    }
  } catch (error) {
    console.error('Error loading particle.js:', error);
  }
}

// Export the function if needed elsewhere
export { ParticleJS };

// Optionally, call the function to initialize particles when the script loads
ParticleJS();
