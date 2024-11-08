import { Row, Col } from 'antd';
import ThemeSwitch from 'app/components/ThemeSwitch';
import PaymentForm from 'app/components/PaymentForm';

function App() {
  return (
    <Row justify="center" className="form-container">
      <Col xs={24} sm={16} md={12} lg={8}>
        <ThemeSwitch />
        <PaymentForm />
      </Col>
    </Row>
  );
}

export default App;
