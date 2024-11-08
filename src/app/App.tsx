import { Row, Col } from 'antd';
import ThemeSwitch from 'app/components/ThemeSwitch';
import LocaleSelect from 'app/components/LoclaleSelect';
import PaymentForm from 'app/components/PaymentForm';

function App() {
  return (
    <Row justify="center" className="form-container">
      <Col xs={24} sm={16} md={12} lg={8}>
        <Row justify="center" align="middle" style={{ gap: 8, padding: 8 }}>
          <ThemeSwitch />
          <LocaleSelect />
        </Row>
        <PaymentForm />
      </Col>
    </Row>
  );
}

export default App;
