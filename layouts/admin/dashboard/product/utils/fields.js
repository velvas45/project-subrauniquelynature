import { Select, Upload, Button, notification, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const fields = ({ arrKategori, fileList = [] }) => {
  return fileList.length > 0
    ? [
        {
          item: {
            name: 'name',
            label: 'Nama Product',
            //   rules: [{ required: true }],
          },
        },
        {
          item: {
            name: 'kategori',
            label: 'Pilih Kategori',
            //   rules: [{ required: true }],
          },
          element: (
            <Select placeholder="Pilih jenis kategori">
              {arrKategori &&
                arrKategori.map((each) => (
                  <Option value={each.id} key={each.id}>
                    {each.name}
                  </Option>
                ))}
            </Select>
          ),
        },
        {
          item: {
            name: 'description',
            label: 'Deskripsi Product',
            //   rules: [{ required: true }],
          },
          element: <TextArea rows={4} placeholder="Deskripsi product..." />,
        },
        {
          item: {
            name: 'image',
            label: 'Upload Image Product',
            //   rules: [{ required: true }],
          },
          element: (
            <Upload
              name="image 1"
              beforeUpload={function beforeUpload(file) {
                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg';
                if (!isJpgOrPng) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image harus berektensi JPEG, PNG, atau JPG`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                const isLt2M = file.size / 1024 / 1024 < 1;
                if (!isLt2M) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image size must be less than 2MB!`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                return isJpgOrPng && isLt2M;
              }}
              maxCount={1}
              listType="picture"
              defaultFileList={[fileList[0]]}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ),
        },
        {
          item: {
            name: 'image2',
            label: 'Upload Image Product',
            //   rules: [{ required: true }],
          },
          element: (
            <Upload
              name="image2"
              maxCount={1}
              beforeUpload={function beforeUpload(file) {
                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg';
                if (!isJpgOrPng) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image harus berektensi JPEG, PNG, atau JPG`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                const isLt2M = file.size / 1024 / 1024 < 1;
                if (!isLt2M) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image size must be less than 2MB!`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                return isJpgOrPng && isLt2M;
              }}
              listType="picture"
              defaultFileList={[fileList[1]]}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ),
        },

        {
          item: {
            name: 'image3',
            label: 'Upload Image Product',
            //   rules: [{ required: true }],
          },
          element: (
            <Upload
              name="image3"
              maxCount={1}
              beforeUpload={function beforeUpload(file) {
                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg';
                if (!isJpgOrPng) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image harus berektensi JPEG, PNG, atau JPG`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                const isLt2M = file.size / 1024 / 1024 < 1;
                if (!isLt2M) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image size must be less than 2MB!`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                return isJpgOrPng && isLt2M;
              }}
              listType="picture"
              defaultFileList={[fileList[2]]}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ),
        },
        {
          item: {
            name: 'id',
          },
          element: <Input type="hidden" />,
        },
      ]
    : [
        {
          item: {
            name: 'name',
            label: 'Nama Product',
            rules: [{ required: true }],
          },
        },
        {
          item: {
            name: 'kategori',
            label: 'Pilih Kategori',
            rules: [{ required: true }],
          },
          element: (
            <Select placeholder="Pilih jenis kategori">
              {arrKategori &&
                arrKategori.map((each) => (
                  <Option value={each.id} key={each.id}>
                    {each.name}
                  </Option>
                ))}
            </Select>
          ),
        },
        {
          item: {
            name: 'description',
            label: 'Deskripsi Product',
            rules: [{ required: true }],
          },
          element: <TextArea rows={4} placeholder="Deskripsi product..." />,
        },
        {
          item: {
            name: 'image',
            label: 'Upload Image Product',
            rules: [{ required: true }],
          },
          element: (
            <Upload
              name="image 1"
              beforeUpload={function beforeUpload(file) {
                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg';
                if (!isJpgOrPng) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image harus berektensi JPEG, PNG, atau JPG`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                const isLt2M = file.size / 1024 / 1024 < 1;
                if (!isLt2M) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image size must be less than 2MB!`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                return isJpgOrPng && isLt2M;
              }}
              maxCount={1}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ),
        },
        {
          item: {
            name: 'image2',
            label: 'Upload Image Product',
            rules: [{ required: true }],
          },
          element: (
            <Upload
              name="image2"
              maxCount={1}
              beforeUpload={function beforeUpload(file) {
                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg';
                if (!isJpgOrPng) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image harus berektensi JPEG, PNG, atau JPG`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                const isLt2M = file.size / 1024 / 1024 < 1;
                if (!isLt2M) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image size must be less than 2MB!`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                return isJpgOrPng && isLt2M;
              }}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ),
        },

        {
          item: {
            name: 'image3',
            label: 'Upload Image Product',
            rules: [{ required: true }],
          },
          element: (
            <Upload
              name="image3"
              maxCount={1}
              beforeUpload={function beforeUpload(file) {
                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg';
                if (!isJpgOrPng) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image harus berektensi JPEG, PNG, atau JPG`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                const isLt2M = file.size / 1024 / 1024 < 1;
                if (!isLt2M) {
                  notification.error({
                    message: 'Gagal Upload Image.',
                    description: `Image size must be less than 2MB!`,
                    duration: 1.5,
                    onClick: () => {},
                  });
                  return Upload.LIST_IGNORE;
                }
                return isJpgOrPng && isLt2M;
              }}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ),
        },
        {
          item: {
            name: 'id',
          },
          element: <Input type="hidden" />,
        },
      ];
};

export default fields;
