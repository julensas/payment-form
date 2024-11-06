import './App.css';
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Typography,
  InputNumber,
} from 'antd';
import ThemeSwitch from './components/ThemeSwitch';

const { Title } = Typography;
const { Option } = Select;

const payerAccounts = [
  {
    iban: 'LT307300010172619160',
    id: '1',
    balance: 1000.12,
  },
  {
    iban: 'LT307300010172619161',
    id: '2',
    balance: 2.43,
  },
  {
    iban: 'LT307300010172619162',
    id: '3',
    balance: -5.87,
  },
];

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Row justify="center" className="form-container">
      <Col xs={24} sm={16} md={12} lg={8}>
        <ThemeSwitch />
        <Title level={3} className="form-title">
          User Information
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="user-form"
        >
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              { required: true, message: 'Please enter an amount' },
              {
                type: 'number',
                min: 0.01,
                message: 'Amount must be at least 0.01',
              },
            ]}
          >
            <InputNumber placeholder="Enter amount" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Payee Account"
            name="payeeAccount"
            rules={[
              { required: true, message: 'Please enter the payee account' },
              { type: 'string' },
            ]}
          >
            <Input placeholder="Enter payee account" />
          </Form.Item>

          <Form.Item
            label="Purpose"
            name="purpose"
            rules={[
              { required: true, message: 'Please enter the purpose' },
              { min: 3, message: 'Purpose must be at least 3 characters' },
              { max: 135, message: 'Purpose cannot exceed 135 characters' },
            ]}
          >
            <Input.TextArea placeholder="Enter purpose" maxLength={135} />
          </Form.Item>

          {/* Payer Account Field (Select) */}
          <Form.Item
            label="Payer Account"
            name="payerAccount"
            rules={[
              { required: true, message: 'Please select a payer account' },
            ]}
          >
            <Select placeholder="Select payer account">
              {payerAccounts.map((account) => (
                <Option key={account.id} value={account.id}>
                  {account.iban} (Balance: {account.balance})
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Payee"
            name="payee"
            rules={[
              { required: true, message: 'Please enter the payee' },
              { max: 70, message: 'Payee cannot exceed 70 characters' },
            ]}
          >
            <Input placeholder="Enter payee name" maxLength={70} />
          </Form.Item>

          <Form.Item className="form-submit">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default App;
