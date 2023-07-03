import React, { useState, lazy, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';
import imagen_1 from '../../assets/img/imagen_1.webp';
import imagen_2 from '../../assets/img/imagen_2.webp';
import imagen_3 from '../../assets/img/imagen_3.webp';
import imagen_4 from '../../assets/img/imagen_4.webp';
import imagen_5 from '../../assets/img/imagen_5.webp';
import imagen_6 from '../../assets/img/imagen_6.webp';
import imagen_7 from '../../assets/img/imagen_7.webp';
import { Link } from 'react-router-dom';
const Btn_Link = lazy(() => import('../Btn_Link'))

Modal.setAppElement('#app');

const Galeria_perros = () => {
    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
        imagen_5,
        imagen_6,
        imagen_7,
        imagen_1,
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        fade: true,
        lazyLoad: true,
    };
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            borderRadius: '8px',
            padding: '0',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0.5)',
            maxWidth: '100%',
            maxHeight: '90%',
            width: '50%',
            height: 'auto',
            backgroundColor: 'transparent'
        }
    };
    const botonInfo = {
        location: '/adopcion',
        text: 'Galeria y adopciones'
    }


    const containerRef = useRef(null);
    const itemsRef = useRef(null);
    const itemWidthRef = useRef(0);
    let currentPosition = 0;
  
    useEffect(() => {
      const container = containerRef.current;
      const items = itemsRef.current;
      itemWidthRef.current = items.children[0].offsetWidth;
  
      const moveCarousel = () => {
        currentPosition -= itemWidthRef.current;
        container.style.transform = `translateX(${currentPosition}px)`;
  
        if (currentPosition <= -(itemWidthRef.current * (items.children.length - 1))) {
          currentPosition = 0;
          container.style.transform = `translateX(${currentPosition}px)`;
        }
      };
  
      const intervalId = setInterval(moveCarousel, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return (
        <div className="w-full h-full bg-primary">

    <div className="carousel rounded-box">
      <div ref={containerRef} className="carousel-container">
        <div ref={itemsRef} className="carousel-item">
                    {images.map((image, index) => (
                        <div key={index} className="animate-slide-out p-3 cursor-zoom-in" onClick={() => openModal(index)}>
                            <LazyLoadImage effect="blur" className="h-[50px] w-full md:h-[250px] md:w-[250px]  bg-cover " src={image} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={customStyles}
            // className={''}
            >

                <div className='flex flex-col w-full items-center justify-center  overflow-hidden   '>
                    <div className='flex items-center  w-1/2 justify-end text-white'>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <div className='w-1/2 h-full '>
                        <Slider {...settings} initialSlide={selectedImageIndex}>
                            {images.map((image, index) => (

                                <LazyLoadImage effect="blur" key={index} className="" src={image} alt={`Imagen ${index + 1}`} />

                            ))}
                        </Slider>
                    </div>
                </div>
            </Modal>
            <Btn_Link {...botonInfo} />
        </div>
    );
};

export default Galeria_perros;

