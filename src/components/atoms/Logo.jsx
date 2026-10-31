export function Logo({ className = '' }) {
  return (
    <div className={`d-flex align-items-center gap-2 fw-bold fs-4 ${className}`}>
      <span role="img" aria-label="flor">🌸</span>
      <span className="text-dark">Velvet</span>
      <span className="text-danger">BL</span>
    </div>
  );
}

export default Logo;