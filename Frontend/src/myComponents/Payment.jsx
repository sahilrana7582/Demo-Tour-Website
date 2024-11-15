import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
const Payment = () => {
  return (
    <Form>
      <h2 className="text-xl font-semibold">Payment</h2>
      <Divider />
      <Form.Item label="Full Name">
        <Input placeholder="Enter Name" />
      </Form.Item>
      <Form.Item label="Payment Mode">
        <Select>
          <Select.Option value="demo">Credit/Debit</Select.Option>
          <Select.Option value="demo">UPI</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item className="w-full ">
        <Button className="w-full">Make a payment</Button>
      </Form.Item>
    </Form>
  );
};
export default Payment;
