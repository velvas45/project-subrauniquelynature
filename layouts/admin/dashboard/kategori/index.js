import React, { useState } from 'react';
import { Button, Modal, notification } from 'antd';
import styles from '../../menuAdmin.module.scss';

import CustomTable from '../../../../components/Table';
import CustomForm from '../../../../components/CustomFormLayout';

import columns from './utils/columns';
import fields from './utils/fields';

import { myAxios } from '../../../../utils/axios';
import { admin } from '../../../../utils/api';
import useAsync from '../../../../utils/libs/useAsync';

function KategoriAdmin() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [kategori, loading, error, reValidate] = useAsync(
    admin.getListKategori,
    'GET'
  );

  const data = kategori?.data;

  const showModal = () => {
    setIsModalVisible(true);
  };
  const editShowModal = (data) => {
    setEditData(data);
    setIsEditModalVisible(true);
  };

  const handleSubmit = async (value) => {
    setLoadingPost(true);
    const data = {
      name: value.kategori,
    };
    const result = await myAxios.post(`${admin.createKategori}`, data);
    if (result.status === 200) {
      setLoadingPost(false);
      notification.success({
        message: 'Berhasil Menambahkan Kategori.',
        description: `Data kategori ${data.name} berhasil di tambahkan`,
        duration: 1.5,
        onClick: () => {},
      });
      reValidate();
      setIsModalVisible(false);
    } else {
      setLoadingPost(false);
      notification.error({
        message: 'Terdapat kesalahan',
        description: `Data kategori ${data.name} tidak berhasil di buat`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  const handleEditSubmit = async (value) => {
    setLoadingPost(true);
    const id = value.id;
    const data = {
      name: value.kategori,
    };
    const result = await myAxios.put(`${admin.editKategori}/${id}`, data);
    if (result.status === 200) {
      setLoadingPost(false);
      notification.success({
        message: 'Berhasil Memperbaharui Kategori.',
        description: `Data kategori ${data.name} berhasil di perbarui`,
        duration: 1.5,
        onClick: () => {},
      });
      reValidate();
      setIsEditModalVisible(false);
    } else {
      setLoadingPost(false);
      notification.error({
        message: 'Terdapat kesalahan',
        description: `Data kategori ${data.name} tidak berhasil di perbarui`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  const handleDeleteSubmit = async ({ id }) => {
    const result = await myAxios.delete(`${admin.deleteKategori}/${id}`);
    if (result.status === 200) {
      notification.success({
        message: 'Berhasil Menghapus Kategori.',
        description: `Data kategori ${data.name} berhasil di hapus`,
        duration: 1.5,
        onClick: () => {},
      });
      reValidate();
    } else if (result.status === 500) {
      notification.error({
        message: 'Gagal Menghapus Kategori.',
        description: `Data kategori ${data.name} tidak bisa dihapus karena terdapat data yang berhubungan`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h3>Kategori</h3>
      </div>
      <Button type="primary" className="mb-3" onClick={showModal}>
        Add Kategori
      </Button>
      <CustomTable
        data={data}
        columns={columns}
        clickEdit={editShowModal}
        loading={loading}
        clickDelete={handleDeleteSubmit}
      />

      {/* modal add */}
      <AddModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        handleSubmit={handleSubmit}
        fields={fields}
        loading={loadingPost}
      />

      <EditModal
        visible={isEditModalVisible}
        setVisible={setIsEditModalVisible}
        handleSubmit={handleEditSubmit}
        fields={fields}
        data={editData}
        loading={loadingPost}
      />
    </div>
  );
}

const AddModal = ({ visible, setVisible, handleSubmit, fields, loading }) => {
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
          title: 'Tambah Kategori',
          loading,
        }}
      />
    </Modal>
  );
};

const EditModal = ({
  visible,
  setVisible,
  handleSubmit,
  fields,
  data,
  loading,
}) => {
  const initialValues = {
    id: data?.id,
    kategori: data?.name,
  };
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
          title: 'Edit Kategori',
          initialValues,
          loading,
        }}
      />
    </Modal>
  );
};

export default KategoriAdmin;
