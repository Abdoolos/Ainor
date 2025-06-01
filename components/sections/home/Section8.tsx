"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        575: { slidesPerView: 1, spaceBetween: 30 },
        767: { slidesPerView: 1, spaceBetween: 30 },
        991: { slidesPerView: 2, spaceBetween: 30 },
        1199: { slidesPerView: 2, spaceBetween: 30 },
        1350: { slidesPerView: 2, spaceBetween: 30 },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section8() {
    return (
        <>
            <SwiperPadding />
            <section className="ai-solutions-home-section-8 position-relative overflow-hidden py-120">
                <div className="container position-relative z-1">
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-6 swipper-root">
                            <div className="d-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Tilbakemeldinger</span>
                            </div>
                            <h2 className="text-dark mt-3 mb-0 text-anime-style-2">Fornøyde kunder sier om oss</h2>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ms-lg-auto text-center mt-3 mt-lg-0">
                            <div className="position-relative mx-auto">
                                <div className="d-inline-flex border h-100 d-flex align-items-center gap-1 rounded-pill mx-auto bg-white position-relative z-1">
                                    <div className="swiper-button-prev mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1382)">
                                                <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="swiper-pagination position-relative top-0 bottom-0 mb-1" />
                                    <div className="swiper-button-next mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1381)">
                                                <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <span className="border-top position-absolute top-50 start-50 translate-middle w-100 z-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-80">
                    <div className="col-12 position-relative">
                        <div className="box-swiper-padding">
                            <Swiper {...swiperOptions} className="swiper slider-2">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="card-testimonial mb-lg-0 mb-5 border p-5 rounded-4" data-aos="fade-up" data-aos-delay={0}>
                                            <div className="d-flex gap-2">
                                                {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill text-primary" />)}
                                            </div>
                                            <h6 className="mb-0 mt-4 fw-medium">"AstraX har revolusjonert måten vi håndterer kundedata på. Deres AI-løsninger har økt vår effektivitet med over 40% det siste året."</h6>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Lars Andersen</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Teknisk Direktør, Nordic Tech AS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial mb-lg-0 mb-5 border p-5 rounded-4" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="d-flex gap-2">
                                                {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill text-primary" />)}
                                            </div>
                                            <h6 className="mb-0 mt-4 fw-medium">"Vi har sett en betydelig forbedring i vår digitale tilstedeværelse siden vi begynte å samarbeide med AstraX. Deres kreative løsninger er eksepsjonelle."</h6>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-2.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Maria Solberg</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Markedssjef, Digital Vekst Norge</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial mb-lg-0 mb-5 border p-5 rounded-4" data-aos="fade-up" data-aos-delay={400}>
                                            <div className="d-flex gap-2">
                                                {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill text-primary" />)}
                                            </div>
                                            <h6 className="mb-0 mt-4 fw-medium">"Den personlige oppfølgingen og skreddersydde løsningene fra AstraX har vært avgjørende for vår suksess i det digitale markedet."</h6>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/ai-solutions/page-home/home-section-8/avatar-3.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Erik Haugen</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Daglig Leder, Innovasjon Vest</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
