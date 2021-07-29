import { Select, Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const fields = [
  {
    item: {
      name: 'email',
      label: 'Email',
      disabled: true,
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'password',
      label: 'Password',
      //   rules: [{ required: true }],
    },
    element: <Input.Password />,
  },
  {
    item: {
      name: 'confirmPassword',
      label: 'Confirm Password',
      //   rules: [{ required: true }],
    },
    element: <Input.Password />,
  },
  {
    item: {
      name: 'twitter',
      label: 'Twitter',
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'facebook',
      label: 'Facebook',
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'whatsapp',
      label: 'Whatsapp',
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'instagram',
      label: 'Instagram',
      //   rules: [{ required: true }],
    },
  },
];

export default fields;
