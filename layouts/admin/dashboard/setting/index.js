import React, { useState, useEffect } from 'react';
import { notification } from 'antd';
import CustomForm from '../../../../components/CustomFormLayout';

import { fieldsProfile, fieldsSosmed } from './utils/fields';

import { myAxios } from '../../../../utils/axios';
import { admin } from '../../../../utils/api';
import useAsync from '../../../../utils/libs/useAsync';

function Setting() {
  const [initProfileValue, setInitProfileValue] = useState(null);
  const [initSosmedValues, setInitSosmedValues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadSosmed, setLoadSosmed] = useState(false);
  const [sosmed, loadingListSosmed, error, reValidate] = useAsync(
    admin.getListMedia,
    'GET'
  );

  const profileUpdate = async (values) => {
    setLoading(true);
    try {
      const data = {
        password: values.password,
      };
      const result = await myAxios.put(admin.gantiPassword, data);
      if (result.status === 200) {
        notification.success({
          message: 'Berhasil Mengganti Password.',
          duration: 1.5,
          onClick: () => {},
        });
        setLoading(false);
      }
    } catch (err) {
      notification.error({
        message: 'Gagal Mengganti Password.',
        duration: 1.5,
        onClick: () => {},
      });
      setLoading(false);
    }
  };
  const sosmedUpdate = async (values) => {
    setLoadSosmed(true);
    try {
      const result = await myAxios.put(
        `${admin.editSocialMedia}/${values?.id}`,
        values
      );
      if (result.status === 200) {
        notification.success({
          message: 'Berhasil Mengganti Social Media',
          duration: 1.5,
          onClick: () => {},
        });
        setLoadSosmed(false);
        reValidate();
      }
    } catch (err) {
      notification.error({
        message: 'Gagal Mengganti Social Media',
        duration: 1.5,
        onClick: () => {},
      });
      setLoadSosmed(false);
    }
  };

  useEffect(() => {
    let initSosmedValue = {};
    const initProfileVal = {};
    if (sosmed && !loading) {
      const email = atob(window.sessionStorage.getItem('user'));
      sosmed?.data?.forEach((each) => {
        initSosmedValue = each;
      });
      initProfileVal.email = email;
      setInitSosmedValues(initSosmedValue);
      setInitProfileValue(initProfileVal);
    }
  }, [loadingListSosmed]);

  return (
    <div style={{ padding: '32px' }}>
      <div style={{ padding: '32px 0' }}>
        <CustomForm
          {...{
            fields: fieldsProfile,
            handleSubmit: profileUpdate,
            title: 'Profile Data',
            initialValues: initProfileValue,
            loading,
          }}
        />
      </div>
      <div style={{ padding: '16px 0' }}>
        <CustomForm
          {...{
            fields: fieldsSosmed,
            handleSubmit: sosmedUpdate,
            title: 'Social Media',
            initialValues: initSosmedValues,
            loading: loadSosmed,
          }}
        />
      </div>
    </div>
  );
}

export default Setting;
