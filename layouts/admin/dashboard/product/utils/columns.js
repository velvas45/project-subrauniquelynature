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
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Product Image',
      dataIndex: 'photoOne',
      key: 'photoOne',
      render: (data, record) => (
        <Space size="middle">
          <Image src={`http://localhost:5000/${data}`} />
        </Space>
      ),
    },
    {
      title: 'Product Image 2',
      dataIndex: 'photoTwo',
      key: 'photoTwo',
      render: (data, record) => (
        <Space size="middle">
          <Image src={`http://localhost:5000/${data}`} />
        </Space>
      ),
    },
    {
      title: 'Product Image 3',
      dataIndex: 'photoThree',
      key: 'photoThree',
      render: (data, record) => (
        <Space size="middle">
          <Image src={`http://localhost:5000/${data}`} />
        </Space>
      ),
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
