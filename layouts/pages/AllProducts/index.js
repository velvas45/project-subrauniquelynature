import React, { useState, useRef } from 'react';
import styles from './allProduct.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Pagination, Spin, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

// components
import Banner from '../../../components/Product/Banner';
import ProductStatus from '../../../components/Product/ProductStatus';
import ProductList from '../../../components/Product/ProductList';

// images
import Sofa from '../../../public/images/sofa.svg';

// api
import { clientAxios } from '../../../utils/axios';
import { client, admin } from '../../../utils/api';
import useAsync from '../../../utils/libs/useAsync';

function AllProduct({ dataProduct }) {
  const inputSearch = useRef(null);
  const [dataState, setDataState] = useState(dataProduct.data?.rows);
  const [loadingData, setLoadingData] = useState(false);
  const [kategoriList, loadingKategoriList] = useAsync(
    admin.getListKategori,
    'GET'
  );
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handlePagenation = async (pageNumber) => {
    setLoadingData(true);
    try {
      const res = await clientAxios.get(
        `${client.getProducts}?page=${pageNumber - 1}`
      );

      if (res.status === 200) {
        setLoadingData(false);
        const data = res.data.response.data.rows;
        setDataState(data);
      }
    } catch (err) {
      setLoadingData(false);
      console.log(err);
    }
  };

  const handlerSearch = async () => {
    setLoadingData(true);
    const value = inputSearch.current.value;
    try {
      const res = await clientAxios.get(`${client.getProducts}?name=${value}`);

      if (res.status === 200) {
        setLoadingData(false);
        const data = res.data.response.data.rows;
        setDataState(data);
      }
    } catch (err) {
      setLoadingData(false);
      console.log(err);
    }
  };

  const handlerSelect = async (e) => {
    setLoadingData(true);
    const value = inputSearch.current.value;
    const data = {
      categoryId: parseInt(e.target.value),
    };
    if (e.target.value !== '-') {
      try {
        const res = await clientAxios.post(`${client.selectProduct}`, data);
        if (res.status === 200) {
          setLoadingData(false);
          const data = res.data.response.data.rows;
          setDataState(data);
        }
      } catch (err) {
        setLoadingData(false);
        console.log(err);
      }
    } else {
      setLoadingData(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3>Our Product</h3>

      <Banner
        data={{ title: 'Daybed Couch Patio Furniture', imgSrc: Sofa }}
        responsiveMobile={isMobile}
      />

      <section className={styles.statusContainer}>
        <ProductStatus statusResponsive={isMobile} />
      </section>

      <section>
        <div
          className={isMobile ? styles.productFilterSm : styles.productFilter}
        >
          <span
            style={{ flexBasis: '90%', display: 'flex', alignItems: 'center' }}
          >
            <input style={{ width: '100%' }} ref={inputSearch} />
            <SearchOutlined
              style={{ fontSize: '20px' }}
              onClick={handlerSearch}
            />
          </span>
          <span style={{ flexBasis: '10%' }}>
            <select name="cars" id="cars" onClick={handlerSelect}>
              <option value="-">Category</option>
              {kategoriList &&
                kategoriList?.data?.map((each) => (
                  <option value={each.id} key={each.id}>
                    {each.name}
                  </option>
                ))}
            </select>
          </span>
        </div>

        {/* productList */}
        <div className={isMobile ? styles.productListSm : styles.productList}>
          {loadingData ? (
            <Spin />
          ) : dataState.length > 0 ? (
            dataState.map((each, idx) => <ProductList key={idx} data={each} />)
          ) : (
            <p>Product Not Found</p>
          )}
        </div>
        <span>
          <Pagination
            defaultCurrent={dataProduct.currentPage}
            pageSizeOptions={[10]}
            total={dataProduct.totalItems}
            pageSize={10}
            onChange={handlePagenation}
          />
        </span>
      </section>
    </div>
  );
}

export default AllProduct;
