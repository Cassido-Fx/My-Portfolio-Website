import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageSlider.css';

const ImageSlider = () => {
    const images = [
        { src: 'certificates/cert1.png', name: 'IBM Software Engineering' },
        { src: 'certificates/cert2.png', name: 'IBM Devs with Boostrap' },
        { src: 'certificates/cert3.png', name: 'IBM Designing UI/UX' },
        { src: 'certificates/cert4.png', name: 'IBM Cloud Native, DevOps, Agile, and NoSQL' },
        { src: 'certificates/cert5.png', name: 'IBM Intermediate Web and Front-End Developement' },
        { src: 'certificates/cert6.png', name: 'IBM Intro to HTML, CSS, & JavaScript' },
        { src: 'certificates/cert7.png', name: 'IBM Developing Apps with React' },
        { src: 'certificates/cert8.png', name: 'IBM Front-End and Web Development' },
        { src: 'certificates/cert9.png', name: 'IBM Software Git & GitHub' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={process.env.PUBLIC_URL + '/' + image.src} alt={image.name} />
                        <p>{image.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
