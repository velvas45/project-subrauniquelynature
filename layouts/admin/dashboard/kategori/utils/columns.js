import { Button, Space, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const columns = ({
  getColumnSearchProps,
  clickEdit = () => {},
  clickDelete = () => {},
}) => {
  return [
    {
      title: 'Nama Kategori',
      dataIndex: 'name',
      key: 'name',
      width: '80%',
      ...getColumnSearchProps('name'),
    },

    {
      title: '',
      key: 'id',
      width: '20%',
      render: (dataRow, record) => (
        <Space size="middle">
          <Button onClick={() => clickEdit(dataRow)}>Edit</Button>
          <Popconfirm
            title="Apakah kamu ingin menghapus kategori ini？"
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
