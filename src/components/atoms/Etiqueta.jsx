import Badge from 'react-bootstrap/Badge';

export function Etiqueta({ text, bg = 'secondary', className = '' }) {
  return (
    <Badge 
      bg={bg} 
      className={`px-3 py-2 rounded-pill fw-normal shadow-sm ${className}`}
    >
      {text}
    </Badge>
  );
}

export default Etiqueta;