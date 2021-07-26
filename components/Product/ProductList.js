import React from 'react';
import Image from 'next/image';
import styles from './product.module.scss';
import CustomModal from '../Modal';

function ProductList({ data: { title, imgSrc } }) {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <div className={styles.productList} onClick={() => setVisible(!visible)}>
        <Image src={imgSrc} alt="bangku" width={280} height={140} />
        <p>{title}</p>
      </div>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        data={{ title, description: 'lorem ipsum dolorent ' }}
      />
    </>
  );
}

export default ProductList;
