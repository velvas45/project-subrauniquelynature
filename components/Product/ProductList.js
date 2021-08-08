import React from 'react';
import Image from 'next/image';
import styles from './product.module.scss';
import CustomModal from '../Modal';

function ProductList({ data, isLanding = false }) {
  const { name, photoOne, Category } = data;
  const [visible, setVisible] = React.useState(false);
  const myLoader = ({ src }) => {
    return `${process.env.baseImageUrl}/${photoOne}`;
  };
  return (
    <>
      <div className={styles.productList} onClick={() => setVisible(!visible)}>
        {!isLanding && <p className={styles.titleProduct}>{Category?.name}</p>}
        <div style={{ padding: '2rem 2rem 0' }}>
          <Image
            loader={myLoader}
            src={`${process.env.baseImageUrl}/${photoOne}`}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <p className={styles.nameProduct}>{name}</p>
      </div>
      <CustomModal visible={visible} setVisible={setVisible} data={data} />
    </>
  );
}

export default ProductList;
