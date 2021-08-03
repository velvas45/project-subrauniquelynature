import { Input } from 'antd';

const { TextArea } = Input;

const fields = [
  {
    item: {
      name: 'name',
      label: 'Pengirim',
      disabled: true,
    },
  },
  {
    item: {
      name: 'email',
      label: 'Email Pengirim',
      disabled: true,
    },
  },
  {
    item: {
      name: 'company',
      label: 'Perusahaan Pengirim',
      disabled: true,
    },
  },
  {
    item: {
      name: 'country',
      label: 'Negara',
      disabled: true,
    },
  },
  {
    item: {
      name: 'message',
      label: 'Pesan',
    },
    element: <TextArea rows={4} disabled />,
  },
];

export default fields;
