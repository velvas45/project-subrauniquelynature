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

function PesanAdminLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [dataView, setDataView] = useState(null);
  const [pesan, loading, error, reValidate] = useAsync(
    admin.getListPesan,
    'GET'
  );

  const data = pesan?.data;

  const viewShowModal = (data) => {
    setDataView(data);
    setIsModalVisible(true);
  };

  const handleDeleteSubmit = async ({ id }) => {
    try {
      const result = await myAxios.delete(`${admin.deletePesan}/${id}`);
      if (result.status === 200) {
        notification.success({
          message: 'Berhasil Menghapus Pesan.',
          description: `Data pesan berhasil di hapus`,
          duration: 1.5,
          onClick: () => {},
        });
        reValidate();
      }
    } catch (err) {
      notification.error({
        message: 'Gagal Menghapus Pesan.',
        description: `Data pesan tidak berhasil terhapus!`,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h3>Pesan Anda</h3>
      </div>
      <CustomTable
        data={data}
        columns={columns}
        clickEdit={viewShowModal}
        loading={loading}
        clickDelete={handleDeleteSubmit}
      />

      {/* modal view */}
      <ViewModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        fields={fields}
        loading={loadingPost}
        data={dataView}
      />
    </div>
  );
}

const ViewModal = ({ visible, setVisible, fields, loading, data }) => {
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
          title: `Pesan Dari ${data?.name}`,
          loading,
          showSubmit: false,
          initialValues: data,
        }}
      />
    </Modal>
  );
};

export default PesanAdminLayout;
