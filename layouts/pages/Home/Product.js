import React from 'react';
// import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../../../utils/libs/useWindowSize';
import Slider from 'react-slick';
import styles from './landingPage.module.scss';
import { Row, Col } from 'antd';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

// images (svg)
import Sofa from '../../../public/images/sofa.svg';

// component
import Banner from '../../../components/Product/Banner';
import ProductStatus from '../../../components/Product/ProductStatus';
import ProductList from '../../../components/Product/ProductList';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} color="#000" size="2x" />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} color="#000" size="2x" />
    </div>
  );
}

function ProductSection({ dataProducts }) {
  const data = dataProducts;
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(false);

  const size = useWindowSize();

  React.useEffect(() => {
    if (size < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return (
    <div id="Product" className={isMobile ? styles.sectionSm : styles.section}>
      <Row justify="space-between" align="middle">
        <Col>
          <Slide left>
            <h3 className={styles.productTitle}>Best Product</h3>
          </Slide>
        </Col>
        <Col>
          <Slide right>
            <span>
              <a onClick={() => router.push('/all-products')}>See All</a>
            </span>
          </Slide>
        </Col>
      </Row>

      <Slide top>
        <Banner
          data={{ title: 'Daybed Couch Patio Furniture', imgSrc: Sofa }}
          responsiveMobile={isMobile}
          isLanding={true}
        />
      </Slide>

      {/* carousel */}
      <CarouselProduct responsiveMobile={isMobile} data={data} />

      {/* status info */}
      <StatusProductInfo statusResponsive={isMobile} />
    </div>
  );
}

const CarouselProduct = (props) => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: props.data.length > 3 ? 4 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    focusOnSelect: true,
    lazyLoad: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.data.length > 2 ? 3 : 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: props.data.length > 1 ? 2 : 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Zoom>
      <div className={styles.products}>
        <Slider {...settings}>
          {props.data.map((each, idx) => (
            <ProductList
              responsiveMobile={props.responsiveMobile}
              data={each}
              key={idx}
              isLanding={true}
            />
          ))}
          {/* <ProductList data={props.data} /> */}
        </Slider>
      </div>
    </Zoom>
  );
};

const StatusProductInfo = ({ statusResponsive }) => (
  <Slide left>
    <ProductStatus statusResponsive={statusResponsive} />
  </Slide>
);

export default ProductSection;
