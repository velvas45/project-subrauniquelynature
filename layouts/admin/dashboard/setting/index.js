import React from 'react';
import CustomForm from '../../../../components/CustomFormLayout';

import fields from './utils/fields';

function Setting() {
  const handleSubmit = (value) => console.log(value);

  return (
    <div style={{ padding: '32px' }}>
      <CustomForm
        {...{
          fields: fields,
          handleSubmit,
          title: 'Profile Data',
        }}
      />
    </div>
  );
}

export default Setting;
