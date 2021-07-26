import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import styles from './landingPage.module.scss';
import { Row, Col } from 'antd';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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

function ProductSection() {
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
    <div id="Product" className={isMobile ? styles.sectionSm : styles.section}>
      <Row justify="space-between" align="middle">
        <Col>
          <Slide left>
            <h3>Best Product</h3>
          </Slide>
        </Col>
        <Col>
          <Slide right>
            <span>
              <a>See All</a>
            </span>
          </Slide>
        </Col>
      </Row>

      <Slide top>
        <Banner
          data={{ title: 'Daybed Couch Patio Furniture', imgSrc: Sofa }}
          responsiveMobile={isMobile}
        />
      </Slide>

      {/* carousel */}
      <CarouselProduct data={data} />

      {/* status info */}
      <StatusProductInfo statusResponsive={isMobile} />
    </div>
  );
}

const CarouselProduct = (props) => {
  console.log(props.data);
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
          {/* 
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div>
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div>
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div>
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div>
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div>
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div>
          <div className={styles.carouselProduct}>
            <Image src={Sofa} alt="bangku" width={280} height={140} />
            <p>Chair</p>
          </div> */}
          {props.data.map((each) => (
            <ProductList data={each} />
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
