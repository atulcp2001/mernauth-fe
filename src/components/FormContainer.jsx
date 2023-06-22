import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col xs={6} lg={12} className='card p-10'>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;