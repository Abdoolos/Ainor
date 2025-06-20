"use client";

export default function Section3() {
    return (
        <>
            {/*ai-solutions home section 3*/}
            <section className="ai-solutions-home-section-3 position-relative overflow-hidden pb-120 pt-120 bg-dark">
                {/* Animated Background Elements replacing the image */}
                <div className="position-absolute top-0 end-0 z-0 m-8" data-aos="zoom-in">
                    <div className="animated-decor-container">
                        <div className="floating-orbs">
                            <div className="orb orb-1"></div>
                            <div className="orb orb-2"></div>
                            <div className="orb orb-3"></div>
                            <div className="orb orb-4"></div>
                        </div>
                        <div className="geometric-shapes">
                            <div className="shape triangle-1"></div>
                            <div className="shape hexagon-1"></div>
                            <div className="shape circle-1"></div>
                            <div className="shape diamond-1"></div>
                        </div>
                        <div className="connection-lines">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </div>
                </div>
                
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center gap-3 justify-content-center">
                            <span className="small-line" />
                            <span className="btn-text text-primary">hvorfor velge oss</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-white my-3 text-anime-style-3">
                            Innovative Løsninger innen AI <br />
                            og Digital Design
                        </h2>
                    </div>
                    <div className="row g-md-5 g-3 mt-80">
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={0}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-1.svg" alt="AstraX" />
                                    <h6 className="mt-5 mb-3 text-white">Data Science Agent</h6>
                                    <p className="text-white">Avansert dataanalyse og maskinlæringsmodeller for prediksjon og beslutningstaking i sanntid.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={200}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-2.svg" alt="DataForge" />
                                <h6 className="mt-5 mb-3 text-white">Smart Chatbot</h6>
                                <p className="text-white">Intelligente chatbots med naturlig språkforståelse for kundeservice og automatisert support.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={400}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-3.svg" alt="MarketMind" />
                                <h6 className="mt-5 mb-3 text-white">Marketing Agent</h6>
                                <p className="text-white">AI-drevet markedsføringsautomatisering for målrettet innhold og kampanjeoptimalisering.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={600}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-4.svg" alt="SEOmaster" />
                                <h6 className="mt-5 mb-3 text-white">SEO Optimizer</h6>
                                <p className="text-white">Avanserte SEO-verktøy for bedre rangering og synlighet i søkemotorer.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={0}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-5.svg" alt="AICore" />
                                <h6 className="mt-5 mb-3 text-white">AI Analytics Hub</h6>
                                <p className="text-white">Omfattende analyseplattform for innsikt i kundeadferd og forretningsdata.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={200}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-6.svg" alt="PixelPerfect" />
                                <h6 className="mt-5 mb-3 text-white">UI Design Studio</h6>
                                <p className="text-white">Moderne og responsive brukergrensesnitt med fokus på visuell harmoni og brukervennlighet.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={400}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-7.svg" alt="UXFlow" />
                                <h6 className="mt-5 mb-3 text-white">UX Design Lab</h6>
                                <p className="text-white">Brukersentrert design og testing for optimal brukeropplevelse og konvertering.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="icon-flip" data-aos="fade-up" data-aos-delay={600}>
                                <img src="assets/imgs/pages/ai-solutions/page-home/home-section-3/icon-8.svg" alt="GameAI" />
                                <h6 className="mt-5 mb-3 text-white">Spillutvikling AI</h6>
                                <p className="text-white">Innovative AI-løsninger for spillmekanikk, NPC-adferd og dynamisk innholdsgenerering.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .animated-decor-container {
                        position: relative;
                        width: 400px;
                        height: 400px;
                    }
                    
                    .floating-orbs {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    
                    .orb {
                        position: absolute;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        animation: gentleFloat 6s ease-in-out infinite;
                        opacity: 0.7;
                        filter: blur(1px);
                    }
                    
                    .orb-1 {
                        width: 60px;
                        height: 60px;
                        top: 20%;
                        left: 10%;
                        animation-delay: 0s;
                    }
                    
                    .orb-2 {
                        width: 40px;
                        height: 40px;
                        top: 60%;
                        right: 20%;
                        animation-delay: 2s;
                        background: linear-gradient(135deg, #a8edea, #fed6e3);
                    }
                    
                    .orb-3 {
                        width: 80px;
                        height: 80px;
                        bottom: 20%;
                        left: 30%;
                        animation-delay: 4s;
                        background: linear-gradient(135deg, #ffecd2, #fcb69f);
                    }
                    
                    .orb-4 {
                        width: 50px;
                        height: 50px;
                        top: 10%;
                        right: 10%;
                        animation-delay: 1s;
                        background: linear-gradient(135deg, #a8caba, #5d4e75);
                    }
                    
                    .geometric-shapes {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    
                    .shape {
                        position: absolute;
                        animation: rotateShape 12s linear infinite;
                        opacity: 0.4;
                    }
                    
                    .triangle-1 {
                        width: 0;
                        height: 0;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        border-bottom: 26px solid #667eea;
                        top: 40%;
                        left: 60%;
                        animation-delay: 0s;
                    }
                    
                    .hexagon-1 {
                        width: 30px;
                        height: 30px;
                        background: #764ba2;
                        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                        top: 70%;
                        right: 30%;
                        animation-delay: 3s;
                    }
                    
                    .circle-1 {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: rgba(168, 237, 234, 0.8);
                        top: 30%;
                        right: 40%;
                        animation-delay: 6s;
                    }
                    
                    .diamond-1 {
                        width: 25px;
                        height: 25px;
                        background: #a8edea;
                        transform: rotate(45deg);
                        bottom: 40%;
                        right: 10%;
                        animation-delay: 9s;
                    }
                    
                    .connection-lines {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    
                    .line {
                        position: absolute;
                        background: linear-gradient(90deg, rgba(102, 126, 234, 0.3), transparent);
                        height: 1px;
                        animation: lineGlow 8s ease-in-out infinite;
                    }
                    
                    .line-1 {
                        width: 120px;
                        top: 25%;
                        left: 20%;
                        transform: rotate(30deg);
                        animation-delay: 0s;
                    }
                    
                    .line-2 {
                        width: 100px;
                        top: 60%;
                        right: 25%;
                        transform: rotate(-45deg);
                        animation-delay: 2.5s;
                    }
                    
                    .line-3 {
                        width: 80px;
                        bottom: 30%;
                        left: 40%;
                        transform: rotate(60deg);
                        animation-delay: 5s;
                    }
                    
                    @keyframes gentleFloat {
                        0%, 100% {
                            transform: translateY(0px) scale(1);
                            opacity: 0.7;
                        }
                        50% {
                            transform: translateY(-20px) scale(1.05);
                            opacity: 0.9;
                        }
                    }
                    
                    @keyframes rotateShape {
                        0% {
                            transform: rotate(0deg) scale(1);
                            opacity: 0.4;
                        }
                        50% {
                            transform: rotate(180deg) scale(1.1);
                            opacity: 0.6;
                        }
                        100% {
                            transform: rotate(360deg) scale(1);
                            opacity: 0.4;
                        }
                    }
                    
                    @keyframes lineGlow {
                        0%, 100% {
                            opacity: 0.3;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.8;
                            transform: scale(1.2);
                        }
                    }
                    
                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .animated-decor-container {
                            width: 250px;
                            height: 250px;
                        }
                        
                        .orb-1 { width: 40px; height: 40px; }
                        .orb-2 { width: 30px; height: 30px; }
                        .orb-3 { width: 50px; height: 50px; }
                        .orb-4 { width: 35px; height: 35px; }
                        
                        .triangle-1 {
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-bottom: 17px solid #667eea;
                        }
                        
                        .hexagon-1 { width: 20px; height: 20px; }
                        .circle-1 { width: 15px; height: 15px; }
                        .diamond-1 { width: 18px; height: 18px; }
                        
                        .line-1 { width: 80px; }
                        .line-2 { width: 70px; }
                        .line-3 { width: 60px; }
                    }
                `}</style>
            </section>
        </>
    );
}
