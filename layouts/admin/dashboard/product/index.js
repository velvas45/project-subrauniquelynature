import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from '../../menuAdmin.module.scss';

import CustomTable from '../../../../components/Table';
import CustomForm from '../../../../components/CustomFormLayout';

import columns from './utils/columns';
import fields from './utils/fields';

function ProductAdmin() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };
  const editShowModal = () => {
    setIsEditModalVisible(true);
  };

  const handleSubmit = (value) => console.log(value);
  const handleEditSubmit = (value) => console.log(value);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h3>Products</h3>
      </div>
      <Button type="primary" className="mb-3" onClick={showModal}>
        Add Product
      </Button>
      <CustomTable data={data} columns={columns} clickEdit={editShowModal} />

      {/* modal add */}
      <AddModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        handleSubmit={handleSubmit}
        fields={fields}
      />

      <EditModal
        visible={isEditModalVisible}
        setVisible={setIsEditModalVisible}
        handleSubmit={handleEditSubmit}
        fields={fields}
      />
    </div>
  );
}

const AddModal = ({ visible, setVisible, handleSubmit, fields }) => {
  return (
    <Modal
      //   title="Add Products"
      width={1000}
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      destroyOnClose={true}
    >
      <CustomForm
        {...{
          fields: fields,
          handleSubmit,
          title: 'Add Product',
        }}
      />
    </Modal>
  );
};

const EditModal = ({ visible, setVisible, handleSubmit, fields }) => {
  return (
    <Modal
      //   title="Edit Products"
      width={1000}
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      destroyOnClose={true}
    >
      <CustomForm
        {...{
          fields: fields,
          handleSubmit,
          title: 'Edit Product',
        }}
      />
    </Modal>
  );
};

export default ProductAdmin;
