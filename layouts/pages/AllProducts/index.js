import React from 'react';
import styles from './allProduct.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Pagination } from 'antd';

// components
import Banner from '../../../components/Product/Banner';
import ProductStatus from '../../../components/Product/ProductStatus';
import ProductList from '../../../components/Product/ProductList';

// images
import Sofa from '../../../public/images/sofa.svg';

function AllProduct() {
  const data = [
    {
      title: 'Chair',
      imgSrc: Sofa,
    },
    {
      title: 'Chair2',
      imgSrc: Sofa,
    },
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
          <span>
            <ul>
              <li>Chair</li>
              <li>Lamp</li>
              <li>Sofa</li>
              <li>Table</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>Best Product</li>
            </ul>
          </span>
        </div>

        {/* productList */}
        <div className={styles.productList}>
          {data.map((each, idx) => (
            <ProductList key={idx} data={each} />
          ))}
        </div>
        <span>
          <Pagination defaultCurrent={1} total={data.length} />
        </span>
      </section>
    </div>
  );
}

export default AllProduct;
