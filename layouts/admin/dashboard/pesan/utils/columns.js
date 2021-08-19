import { Button, Space, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const columns = ({
  getColumnSearchProps,
  clickEdit = () => {},
  clickDelete = () => {},
}) => {
  return [
    {
      title: 'Pengirim',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Email Pengirim',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '20%',
      ...getColumnSearchProps('createdAt'),
    },
    {
      title: '',
      key: 'id',
      width: '20%',
      render: (dataRow, record) => (
        <Space size="middle">
          <Button onClick={() => clickEdit(dataRow)} type="primary">
            View
          </Button>
          <Popconfirm
            title="Apakah kamu ingin menghapus pesan ini？"
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
