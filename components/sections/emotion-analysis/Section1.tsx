import Breadcrumb from "@/components/layout/Breadcrumb";

export default function Section1() {
    return (
        <>
            <Breadcrumb breadcrumbTitle="Emotion Analysis Agent" currentPath="Emotion Analysis" />
            
            <section className="ai-solutions-page-header pt-120 pb-90 position-relative bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center text-lg-start">
                                <h1 className="display-3 text-white mb-4" data-aos="fade-up">
                                    Ainorab – Advanced Emotion Analysis Agent
                                </h1>
                                <p className="text-light fs-5 mb-4" data-aos="fade-up" data-aos-delay="100">
                                    AI-powered comprehensive emotion analysis and psychological insight tool
                                </p>
                                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-delay="200">
                                    <a href="#demo" className="btn btn-white">
                                        <span>Try Demo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a href="#features" className="btn btn-outline-light">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                                <img 
                                    src="/assets/imgs/pages/ai-solutions/Tjeneste Detaljer/Emot2.png" 
                                    alt="Emotion Analysis Demo" 
                                    className="img-fluid rounded-3 shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
                    <div className="d-flex justify-content-around align-items-center h-100">
                        <div className="floating-icon" style={{animationDelay: '0s'}}>
                            <i className="ri-emotion-happy-line fs-1 text-white opacity-50"></i>
                        </div>
                        <div className="floating-icon" style={{animationDelay: '1s'}}>
                            <i className="ri-emotion-sad-line fs-1 text-white opacity-50"></i>
                        </div>
                        <div className="floating-icon" style={{animationDelay: '2s'}}>
                            <i className="ri-brain-line fs-1 text-white opacity-50"></i>
                        </div>
                        <div className="floating-icon" style={{animationDelay: '3s'}}>
                            <i className="ri-heart-pulse-line fs-1 text-white opacity-50"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
