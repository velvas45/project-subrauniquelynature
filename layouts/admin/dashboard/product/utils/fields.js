import { Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const fields = [
  {
    item: {
      name: 'nama-product',
      label: 'Nama Product',
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'description',
      label: 'Deskripsi Product',
      //   rules: [{ required: true }],
    },
  },
  {
    item: {
      name: 'pilih-kategori',
      label: 'Pilih Kategori',
      //   rules: [{ required: true }],
    },
    element: (
      <Select placeholder="Pilih jenis kategori">
        <Option value="A">Kategori A</Option>
        <Option value="B">Kategori B</Option>
      </Select>
    ),
  },
  {
    item: {
      name: 'image',
      label: 'Upload Image Product',
      //   rules: [{ required: true }],
    },
    element: (
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    ),
  },
  {
    item: {
      name: 'image',
      label: 'Upload Image Product',
      //   rules: [{ required: true }],
    },
    element: (
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    ),
  },

  {
    item: {
      name: 'image',
      label: 'Upload Image Product',
      //   rules: [{ required: true }],
    },
    element: (
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    ),
  },
];

export default fields;
