import logoImg from '../assets/logo.png';

export default function Logo({ className = '' }) {
  return (
    <img
      src={logoImg}
      alt="Vertex Print Technologies LLC"
      className={className}
      style={{ width: 'auto', display: 'block' }}
    />
  );
}
