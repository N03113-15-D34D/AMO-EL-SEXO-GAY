import Button from 'react-bootstrap/Button';

export function Boton({ 
  children, 
  variant = 'primary', 
  size, 
  onClick, 
  type = 'button', 
  className = '', 
  disabled = false 
}) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`rounded-pill fw-semibold shadow-sm ${className}`}
    >
      {children}
    </Button>
  );
}

export default Boton;