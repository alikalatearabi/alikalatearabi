import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';
import { A11y ,Autoplay} from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import image1 from '../image/slider1.png'
import image2 from '../image/slider2.png'
import image3 from '../image/slider3.png'
import bazarLogo from '../image/bazaar.png'
import myketLogo from '../image/myket.png'

import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import { FaCloudDownloadAlt } from 'react-icons/fa'


const images = [
    {
        original: image1,
    },
    {
        original: image2,
    },
    {
        original: image3,
    }
];




class HomePage extends Component {
    render() {
        return (
            <>
                <div className='homepage-top-wrapper'>
                <a href="/"><img src={require('../image/mainImage.gif')} alt="mainImage" className='main-image' /></a>
                    <div className='homapage-text'>
                        <h1>انتخاب آگاهانه</h1>
                        <h1>زندگی سالم تر</h1>
                        <p>سالمینا دستیار خرید شماست تا برای سلامتی خود، آگاهانه انتخاب کنید</p>
                        <div className='download-button-container'>
                            <div className="download-button-wrapper">
                                <a href="https://cafebazaar.ir/app/com.smartx.saleminaa"><img src={bazarLogo} alt="bazaarLogo" /></a>
                            </div>
                            <div className="download-button-wrapper">
                                <a href="https://myket.ir/app/com.smartx.saleminaa"><img src={myketLogo} alt="bazaarLogo" /></a>
                            </div>
                            <div className="download-button-wrapper">
                                <FaCloudDownloadAlt />
                                <a href={require("../saleminaa.apk")}><p>دانلود مستقیم</p></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='homepage-main-wrapper'>
                    <div className="main-left">
                        <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} autoPlay={true} slideDuration={300} />
                    </div>
                    <div className="main-right">
                        <h1>در سه مرحله، سلامت محصولات غذایی را بررسی کنید: </h1>
                        <div className='main-right-list'>
                            <p>1</p>
                            <h5>بارکد محصول غذایی را اسکن کنید. </h5>
                        </div>
                        <div className='main-right-list'>
                            <p>2</p>
                            <h5>مواد تشکیل‌دهنده و رتبه آن را مشاهده کنید. </h5>
                        </div>
                        <div className='main-right-list'>
                            <p>3</p>
                            <h5>جایگزین‌های سالم‌تر را شناسایی کنید.</h5>
                        </div>
                    </div>
                </div>

                <div className="homepage-reminder-wrapper">
                    <h1 className="reminder-title">یادآوری ترجیحات یا محدودیت‌های خود را به سالمینا بسپارید</h1>
                    <div className='reminder-icon-wrapper'>
                        <div className="reminder-icon">
                            <img src={require("../image/icon/namak.png")} alt="saltIcon" />
                            <p>نمک</p>
                        </div>
                        <div className="reminder-icon">
                            <img src={require("../image/icon/fat.png")} alt="saltIcon" />
                            <p>چربی</p>
                        </div>
                        <div className="reminder-icon">
                            <img src={require("../image/icon/sugar.png")} alt="saltIcon" />
                            <p>قند</p>
                        </div>
                    </div>
                </div>

                <div className="homepage-customer-wrapper">
                    <h1>کاربران چه می‌گویند </h1>
                    <div className="homepage-customer">
                        <Swiper
                            // install Swiper modules
                            modules={[A11y,Autoplay]}
                            spaceBetween={25}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false
                            }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <FaQuoteRight />
                                <FaQuoteLeft />
                                <h4>برنامه واقعا مفیدیه</h4>
                                <p>پریسا</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FaQuoteRight />
                                <FaQuoteLeft />
                                <h4>چقدر جای این app توی زندگی مون خالی بود واقعا هیجان زده شدم</h4>
                                <p>آرزو</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FaQuoteRight />
                                <FaQuoteLeft />
                                <h4>چقدر خوبه که محصولات رو با هم مقایسه می کنه  من همیشه با این مسئله درگیر بودم که نمیتونستم تو فروشگاه بین چندتا محصول انتخاب کنم</h4>
                                <p>فریده</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FaQuoteRight />
                                <FaQuoteLeft />
                                <h4>برنامه بسیار کاربردی و مفیدی است</h4>
                                <p>Mohaqeq</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;