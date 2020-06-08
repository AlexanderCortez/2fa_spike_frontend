import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Row, Col } from 'antd';

export const Verification = ({ handleActivation }) => {
  const [form] = Form.useForm();
  return (
    <Row>
      <Col span={6}>
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          onFinish={handleActivation}
        >
          <Form.Item
            name="verificationToken"
            rules={[{ required: true, message: 'Verification code is required' }]}
          >
            <Input
              autoFocus
              placeholder="Verification code"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Enable two-step verification
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

Verification.propTypes = {
  handleActivation: PropTypes.func.isRequired,
};
