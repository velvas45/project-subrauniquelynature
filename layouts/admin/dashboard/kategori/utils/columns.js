import { Button, Space } from 'antd';

const columns = ({ getColumnSearchProps, clickEdit }) => {
  return [
    {
      title: 'Nama Kategori',
      dataIndex: 'namaKategori',
      key: 'name',
      width: '80%',
      ...getColumnSearchProps('name'),
    },

    {
      title: '',
      key: 'action',
      width: '20%',
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
