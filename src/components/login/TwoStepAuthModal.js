import React from 'react';
import { Modal, Input, Form } from 'antd';
import PropTypes from 'prop-types';

export const TwoStepAuthModal = ({
  visible,
  handleCancel,
  handleOk,
  loading,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Two-Step Verification"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            handleOk(values);
          })
          .catch((err) => err);
      }}
      confirmLoading={loading}
      onCancel={handleCancel}
      okText="Verify"
    >
      <Form
        form={form}
      >
        <Form.Item
          name="token"
          rules={[{ required: true, message: 'Token is required' }]}
          label="Token"
        >
          <Input
            autoComplete="off"
            autoFocus
            placeholder="Token code"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

TwoStepAuthModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
