import { Button, Space } from 'antd';

const columns = ({ getColumnSearchProps, clickEdit }) => {
  return [
    {
      title: 'Nama Product',
      dataIndex: 'namaProduct',
      key: 'namaProduct',
      ...getColumnSearchProps('namaProduct'),
    },
    {
      title: 'Jenis Kategori',
      dataIndex: 'jenisKategori',
      key: 'jenisKategori',
      ...getColumnSearchProps('jenisKategori'),
    },
    {
      title: 'Deskripsi Product',
      dataIndex: 'deskripsi',
      key: 'deskripsi',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Product Image',
      dataIndex: 'imageSatu',
      key: 'imageSatu',
      ...getColumnSearchProps('imageSatu'),
    },
    {
      title: 'Product Image 2',
      dataIndex: 'imageDua',
      key: 'imageDua',
      ...getColumnSearchProps('imageDua'),
    },
    {
      title: 'Product Image 3',
      dataIndex: 'imageTiga',
      key: 'imageTiga',
      ...getColumnSearchProps('imageTiga'),
    },

    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={clickEdit}>Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
};

export default columns;
