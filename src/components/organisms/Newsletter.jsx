import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Boton } from '../atoms/Boton';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEnviado(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 my-5 text-center border w-100">
      <h3 className="fw-bold text-dark mb-2">
        ¡No te pierdas ningún estreno! 💌
      </h3>
      <p className="text-muted mb-4">
        Suscríbete para recibir recomendaciones semanales y nuevos capítulos.
      </p>

      {enviado ? (
        <div className="alert alert-success d-inline-block rounded-pill px-4">
          ¡Gracias por suscribirte! 🌸
        </div>
      ) : (
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <InputGroup style={{ maxWidth: '450px' }} className="shadow-sm rounded-pill overflow-hidden">
            <Form.Control
              type="email"
              placeholder="Tu correo electrónico..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-0 shadow-none ps-3"
            />
            <Boton type="submit" variant="primary">
              Suscribir
            </Boton>
          </InputGroup>
        </Form>
      )}
    </div>
  );
}

export default Newsletter;