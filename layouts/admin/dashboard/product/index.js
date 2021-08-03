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

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function ProductAdmin() {
  const [editData, setEditData] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [product, loadingProduct, error, reValidate] = useAsync(
    admin.getListProduct,
    'GET'
  );
  const [kategori, loadingKategori, errorKategori] = useAsync(
    admin.getListKategori,
    'GET'
  );

  const newProduct = product?.response?.data?.rows.map((each) => ({
    id: each.id,
    name: each.name,
    description: each.description,
    kategoriNama: each?.Category?.name,
    categoryId: each.categoryId,
    photoOne: each.photoOne,
    photoTwo: each.photoTwo,
    photoThree: each.photoThree,
  }));

  const data = newProduct;

  const showModal = () => {
    setIsModalVisible(true);
  };
  const editShowModal = (data) => {
    setEditData(data);
    setIsEditModalVisible(true);
  };

  const handleSubmit = async (value) => {
    setLoadingPost(true);
    try {
      const photoOne64 = await toBase64(value.image?.file?.originFileObj);
      const photoTwo64 = await toBase64(value.image2?.file?.originFileObj);
      const photoThree64 = await toBase64(value.image3?.file?.originFileObj);
      const data = {
        name: value.name,
        description: value.description,
        categoryId: value.kategori,
        photoOne: photoOne64,
        photoTwo: photoTwo64,
        photoThree: photoThree64,
      };
      const result = await myAxios.post(`${admin.createProduct}`, data);
      if (result.status === 200) {
        setLoadingPost(false);
        notification.success({
          message: 'Berhasil Memperbaharui Product.',
          description: `Data product ${data.name} berhasil di perbarui`,
          duration: 1.5,
          onClick: () => {},
        });
        reValidate();
        setIsModalVisible(false);
      }
    } catch (err) {
      setLoadingPost(false);
      notification.error({
        message: 'Terdapat kesalahan',
        description: `Data product tidak berhasil di perbarui`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  const handleEditSubmit = async (value) => {
    setLoadingPost(true);
    try {
      const photoOne64 = await toBase64(value.image?.file?.originFileObj);
      const photoTwo64 = await toBase64(value.image2?.file?.originFileObj);
      const photoThree64 = await toBase64(value.image3?.file?.originFileObj);

      const id = value.id;
      const data = {
        name: value.name,
        description: value.description,
        categoryId: value.kategori,
        photoOne: photoOne64,
        photoTwo: photoTwo64,
        photoThree: photoThree64,
      };
      const result = await myAxios.put(`${admin.editProduct}/${id}`, data);
      if (result.status === 200) {
        setLoadingPost(false);
        notification.success({
          message: 'Berhasil Memperbaharui Product.',
          description: `Data product ${data.name} berhasil di perbarui`,
          duration: 1.5,
          onClick: () => {},
        });
        reValidate();
        setIsEditModalVisible(false);
      }
    } catch (err) {
      setLoadingPost(false);
      notification.error({
        message: 'Terdapat kesalahan',
        description: `Data product tidak berhasil di perbarui`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  const handleDeleteSubmit = async ({ id }) => {
    try {
      const result = await myAxios.delete(`${admin.deleteProduct}/${id}`);
      if (result.status === 200) {
        notification.success({
          message: 'Berhasil Menghapus Kategori.',
          description: `Data kategori berhasil di hapus`,
          duration: 1.5,
          onClick: () => {},
        });
        reValidate();
      }
    } catch (err) {
      notification.error({
        message: 'Gagal Menghapus Kategori.',
        description: `Data kategori tidak dihapus!`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h3>Products</h3>
      </div>
      <Button type="primary" className="mb-3" onClick={showModal}>
        Add Product
      </Button>
      <CustomTable
        data={data}
        columns={columns}
        clickEdit={editShowModal}
        loading={loadingProduct}
        clickDelete={handleDeleteSubmit}
      />

      {/* modal add */}
      <AddModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        handleSubmit={handleSubmit}
        fields={fields}
        dataKategori={kategori}
        loading={loadingPost}
      />

      <EditModal
        visible={isEditModalVisible}
        setVisible={setIsEditModalVisible}
        handleSubmit={handleEditSubmit}
        fields={fields}
        data={editData}
        dataKategori={kategori}
        loading={loadingPost}
      />
    </div>
  );
}

const AddModal = ({
  visible,
  setVisible,
  handleSubmit,
  dataKategori,
  fields,
  loading,
}) => {
  const arrKategori = dataKategori.data;
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
          fields: fields({ arrKategori }),
          handleSubmit,
          title: 'Add Product',
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
  dataKategori,
  loading,
}) => {
  const arrKategori = dataKategori.data;
  const initVal = {
    id: data && data.id,
    name: data && data.name,
    description: data && data.description,
    kategori: data && data.categoryId,
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
          fields: fields({ arrKategori }),
          handleSubmit,
          title: 'Edit Product',
          initialValues: initVal,
          loading,
        }}
      />
    </Modal>
  );
};

export default ProductAdmin;
