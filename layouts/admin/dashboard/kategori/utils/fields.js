import { Input } from 'antd';

const fields = [
  {
    item: {
      name: 'kategori',
      label: 'Nama Kategori',
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'id',
    },
    element: <Input type="hidden" />,
  },
];

export default fields;
