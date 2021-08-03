import { useEffect } from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

export default function CustomForm({
  title,
  fields,
  handleSubmit,
  layout = 'vertical',
  formlayout,
  tailLayout,
  showReset = false,
  showSubmit = true,
  withButton = true,
  initialValues,
  loading,
}) {
  const defaultFormLayout =
    layout === 'horizontal'
      ? formlayout || {
          labelCol: { span: 8 },
          wrapperCol: { span: 16 },
        }
      : null;
  const defaultTailLayout = tailLayout || {
    wrapperCol: { offset: 20, span: 4 },
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  const onFinish = (values) => {
    handleSubmit(values);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...defaultFormLayout}
      {...{ layout }}
      {...{ initialValues }}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Title level={2}>{title}</Title>
      <Row gutter={16}>
        {fields.map((field, idx) => {
          const defaultElement = field.element ? (
            { ...field.element }
          ) : (
            <Input disabled={field.item.disabled} />
          );
          return (
            <Col span={24} key={idx}>
              <Form.Item {...field.item}>{defaultElement}</Form.Item>
            </Col>
          );
        })}
      </Row>
      {withButton && (
        <Form.Item {...defaultTailLayout} style={{ textAlign: 'right' }}>
          {showSubmit && (
            <Button type="primary" htmlType="submit" loading={loading}>
              Simpan
            </Button>
          )}
          {showReset && (
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          )}
        </Form.Item>
      )}
    </Form>
  );
}
