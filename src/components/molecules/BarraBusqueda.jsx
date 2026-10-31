import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Boton } from '../atoms/Boton';

export function BarraBusqueda({ busqueda, setBusqueda }) {
  return (
    <InputGroup className="mb-3 shadow-sm rounded-pill overflow-hidden max-w-lg mx-auto">
      <InputGroup.Text className="bg-white border-end-0 ps-3">
        🔍
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Buscar manhwa, novela o autor..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="border-start-0 shadow-none py-2"
      />
      {busqueda && (
        <Boton
          variant="light"
          onClick={() => setBusqueda('')}
          className="border-0 text-muted"
        >
          ✖
        </Boton>
      )}
    </InputGroup>
  );
}

export default BarraBusqueda;