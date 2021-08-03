import { Input } from 'antd';

const fieldsProfile = [
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
];

const fieldsSosmed = [
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
      name: 'whatssup',
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
  {
    item: {
      name: 'email',
      label: 'Email Perusahaan',
      rules: [{ type: 'email' }],
    },
  },
  {
    item: {
      name: 'id',
    },
    element: <Input type="hidden" />,
  },
];

export { fieldsProfile, fieldsSosmed };
