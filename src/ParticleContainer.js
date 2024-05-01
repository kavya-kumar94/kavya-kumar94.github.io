import { Particles } from './Particles';

function ParticleContainer() {

const props = {
    focus: 5.1,
    speed: 2.0,
    aperture: 4.8,
    fov: 12,
    curl: 0.07
  }

  return <Particles {...props}/>
}

export default ParticleContainer;
