import Badge from 'react-bootstrap/Badge';

export function Etiqueta({
  text,
  bg = 'ciruela',
  className = ''
}) {
  const colores = {
    ciruela: '#38213F',
    malva: '#75435F',
    rosa: '#C47798',
    pastel: '#F5DDE7'
  };

  const esColorPersonalizado = colores[bg];

  return (
    <Badge
      bg={esColorPersonalizado ? undefined : bg}
      className={`px-3 py-2 rounded-pill fw-normal shadow-sm ${className}`}
      style={
        esColorPersonalizado
          ? {
              backgroundColor: colores[bg],
              color: bg === 'pastel' ? '#38213F' : '#FFFFFF'
            }
          : {}
      }
    >
      {text}
    </Badge>
  );
}

export default Etiqueta;