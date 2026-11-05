import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Boton } from '../atoms/Boton';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setEnviado(true);
      setEmail('');
    }
  };

  return (
    <div
      className="rounded-4 shadow-sm p-4 p-md-5 my-5 text-center w-100"
      style={{ backgroundColor: '#F5DDE7' }}
    >
      <h3
        className="fw-bold mb-2"
        style={{ color: '#38213F' }}
      >
        ¡No te pierdas ningún estreno! 💌
      </h3>

      <p className="text-muted mb-4">
        Suscríbete para recibir recomendaciones semanales y nuevos capítulos.
      </p>

      {enviado ? (
        <div
          className="d-inline-block rounded-pill px-4 py-2"
          style={{
            backgroundColor: '#38213F',
            color: '#FFFFFF'
          }}
        >
          ¡Gracias por suscribirte! 🌸
        </div>
      ) : (
        <Form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center"
        >
          <InputGroup
            style={{ maxWidth: '450px' }}
            className="shadow-sm rounded-pill overflow-hidden"
          >
            <Form.Control
              type="email"
              placeholder="Tu correo electrónico..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-0 shadow-none ps-3"
            />

            <Boton type="submit" variant="rosa">
              Suscribir
            </Boton>
          </InputGroup>
        </Form>
      )}
    </div>
  );
}

export default Newsletter;
