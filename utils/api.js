// Auth Admin
import { myAxios } from './axios';

export const admin = {
  login: (data) => myAxios.post('/admin/login', data),
  getListKategori: '/category/get-list',
  editKategori: 'category/update',
  deleteKategori: 'category/destroy',
  createKategori: 'category/create',
  getListProduct: '/product/admin/get',
  editProduct: 'product/update',
  deleteProduct: 'product/destroy',
  createProduct: 'product/create',
  getListMedia: '/media/get',
  editSocialMedia: '/media/edit',
  getListPesan: '/contact/get-list',
  viewPesan: '/contact/detail',
  deletePesan: '/contact/destroy',
  gantiPassword: '/admin/update/profile',
};

export const client = {
  homeProduct: () => myAxios.get('/get-product'),
  //   allProduct: () => myAxios.get(''),
  createMessage: '/contact/create',
  getMediaSosial: '/media/get',
  getProducts: '/product/get-list',
  slickProduct: '/landing',
  selectProduct: '/product/filter/category',
  getCountry: '/country/get-list',
};
