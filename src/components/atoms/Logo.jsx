export function Logo({ className = '' }) {
  return (
    <div className={`d-flex align-items-center gap-2 fw-bold fs-4 ${className}`}>
      <span role="img" aria-label="flor">🌸</span>
      <span className="text-white">Velvet</span>
      <span style={{ color: '#F5DDE7' }}>BL</span>
    </div>
  );
}

export default Logo;
