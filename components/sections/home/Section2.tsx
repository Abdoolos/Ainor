"use client";
import Link from "next/link";

export default function Section2() {
    return (
        <section className="ai-solutions-home-section-2 position-relative overflow-hidden pt-120 pb-120 bg-secondary-2">
            <div className="container position-relative z-1">
                <div className="row align-items-end">
                    <div className="col-lg-7">
                        <div className="d-inline-flex align-items-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">Vår Teknologi</span>
                        </div>
                        <h2 className="text-dark my-3 text-anime-style-3 mb-lg-0">Naviger mot suksess med vår AI-ekspertise i den digitale verden</h2>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <p className="pb-4 mb-0 wow img-custom-anim-top">Vi utvikler innovative AI-løsninger som former fremtidens digitale landskap og driver din virksomhet fremover.</p>
                    </div>
                </div>
                <div className="row mt-5 g-4">
                    <div className="col-md-5">
                        <div className="position-relative">
                            <img className="wow img-custom-anim-left rounded-4" src="assets/imgs/pages/ai-solutions/page-home/home-section-2/img-1.png" alt="AI Solutions" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex align-items-start text-start mb-5 ms-md-0 ms-5" data-aos="fade-left" data-aos-delay={200}>
                            <div className="position-relative d-block">
                                <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_349_1943)">
                                        <path d="M4.6875 13.4775V15.9758L6.5609 14.7267L4.6875 13.4775Z" fill="#794AFF" />
                                        <path d="M0 9.45312V20H10.5469V9.45312H0ZM3.51562 18.1649V11.2882L8.67348 14.7266L3.51562 18.1649Z" fill="#794AFF" />
                                        <path d="M11.7969 7.10938V20H20V7.10938H11.7969ZM17.6562 17.6562H14.1406V16.4844H17.6562V17.6562ZM17.6562 15.3125H14.1406V14.1406H17.6562V15.3125ZM17.6562 12.9688H14.1406V11.7969H17.6562V12.9688ZM17.6562 10.625H14.1406V9.45312H17.6562V10.625Z" fill="#794AFF" />
                                        <path d="M2.93141 3.27473L4.10156 4.44488L6.44531 2.10113L10.5469 6.2027V0H0V6.18352L2.93141 3.27473Z" fill="#794AFF" />
                                        <path d="M6.44531 3.75781L4.10156 6.10156L2.92797 4.92797L0 7.83371V8.2027H10.5469V7.85938L6.44531 3.75781Z" fill="#794AFF" />
                                        <path d="M20 5.85938H11.7969V0H20V5.85938Z" fill="#794AFF" />
                                    </g>
                                </svg>
                                <span className="icon-shape icon-50 rounded-circle bg-primary opacity-10" />
                            </div>
                            <div className="ms-3">
                                <h3 className="mb-0">06</h3>
                                <p className="mb-0">
                                    Linjer laget <span className="text-primary">/per sek</span>
                                 </p>
                            </div>
                        </div>
                        <img data-aos="fade-up" data-aos-delay={400} className="rounded-4" src="assets/imgs/pages/ai-solutions/page-home/home-section-2/img-2.png" alt="AstraX" />
                    </div>
                </div>
                <div className="mt-80 text-center">
                    <h6 className="text-anime-style-3">Skreddersydde løsninger for din bedrift</h6>
                </div>
            </div>
        </section>
    );
}
