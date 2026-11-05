import Button from 'react-bootstrap/Button';

export function Boton({
  children,
  variant = 'principal',
  size,
  onClick,
  type = 'button',
  className = '',
  disabled = false
}) {
  const estilos = {
    backgroundColor: '#38213F',
    borderColor: '#38213F',
    color: '#FFFFFF'
  };

  const variantes = {
    principal: estilos,
    rosa: {
      backgroundColor: '#C47798',
      borderColor: '#C47798',
      color: '#FFFFFF'
    }
  };

  return (
    <Button
      variant={variant === 'principal' || variant === 'rosa' ? 'secondary' : variant}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`rounded-pill fw-semibold shadow-sm ${className}`}
      style={variantes[variant]}
    >
      {children}
    </Button>
  );
}

export default Boton;