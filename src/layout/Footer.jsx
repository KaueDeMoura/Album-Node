import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            <h4>Sobre a empresa</h4>
            <h1>Site</h1>
            <p>Rua dos Curiosos</p>
          </div>
        </Col>
        <Col lg={8} sm={12}>
          <div>
            <h4>Redes sociais</h4>
            <p>
              <a href="//facebook.com" target="_blank">
                Facebook
              </a>
            </p>
            <p>
              <a href="//instragam.com" target="_blank">
              Instagram
              </a>
              </p>
            <p>
              <a href="//whatsapp.com" target="_blank">
              WhatsApp
              </a>
              </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
