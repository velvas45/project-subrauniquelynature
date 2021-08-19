import { Button, Space, Image, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const columns = ({ getColumnSearchProps, clickEdit, clickDelete }) => {
  return [
    {
      title: 'Nama Product',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Jenis Kategori',
      dataIndex: 'kategoriNama',
      key: 'kategoriNama',
      ...getColumnSearchProps('kategoriNama'),
    },
    {
      title: 'Deskripsi Product',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '',
      key: 'action',
      render: (dataRow, record) => (
        <Space size="middle">
          <Button onClick={() => clickEdit(dataRow)}>Edit</Button>
          <Popconfirm
            title="Apakah kamu ingin menghapus produk ini？"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => clickDelete(dataRow)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
};

export default columns;
