"use client";
import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/* AI-rådgivning Hero Section */}
            <section className="ai-solutions-services-section-1 position-relative overflow-hidden pt-120 pb-120 bg-gradient-primary">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <span className="small-line bg-white" />
                                <span className="btn-text text-white">AI-rådgivning</span>
                            </div>
                            <h1 className="text-white mb-4 text-anime-style-3">
                                Transformer din virksomhet med 
                                <span className="text-linear"> strategisk AI-rådgivning</span>
                            </h1>
                            <p className="text-white-50 mb-5 fs-5">
                                Vi samarbeider tett med deg for å forstå dine utfordringer og utvikle en skreddersydd AI-strategi 
                                som driver innovasjon, forbedrer effektiviteten og gir deg konkurransefortrinn i din bransje.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-5">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Strategisk planlegging</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Skreddersydde løsninger</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Ekspertise og erfaring</span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <Link href="/contact" className="btn btn-linear hover-up">
                                    Start din AI-reise
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </svg>
                                </Link>
                                <Link href="#services" className="btn btn-outline-light">
                                    Utforsk tjenester
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M8 1L8 15M1 8L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-8">
                            <div className="position-relative">
                                <div className="ai-brain-animation">
                                    <div className="brain-core">
                                        <i className="bi bi-cpu-fill text-primary fs-1"></i>
                                    </div>
                                    <div className="neural-network">
                                        <div className="node node-1"></div>
                                        <div className="node node-2"></div>
                                        <div className="node node-3"></div>
                                        <div className="node node-4"></div>
                                        <div className="connection connection-1"></div>
                                        <div className="connection connection-2"></div>
                                        <div className="connection connection-3"></div>
                                    </div>
                                </div>
                                <div className="floating-cards">
                                    <div className="floating-card card-1">
                                        <i className="bi bi-graph-up text-success"></i>
                                        <span>+150% Effektivitet</span>
                                    </div>
                                    <div className="floating-card card-2">
                                        <i className="bi bi-lightbulb text-warning"></i>
                                        <span>Innovasjon</span>
                                    </div>
                                    <div className="floating-card card-3">
                                        <i className="bi bi-shield-check text-info"></i>
                                        <span>Sikkerhet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
                    <div className="bg-pattern"></div>
                </div>
            </section>

            <style jsx>{`
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .ai-brain-animation {
                    position: relative;
                    width: 300px;
                    height: 300px;
                    margin: 0 auto;
                }
                
                .brain-core {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px;
                    height: 80px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: pulse 2s infinite;
                }
                
                .neural-network .node {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: #00d4ff;
                    border-radius: 50%;
                    animation: nodeGlow 3s infinite;
                }
                
                .node-1 { top: 20%; left: 20%; animation-delay: 0s; }
                .node-2 { top: 20%; right: 20%; animation-delay: 0.5s; }
                .node-3 { bottom: 20%; left: 20%; animation-delay: 1s; }
                .node-4 { bottom: 20%; right: 20%; animation-delay: 1.5s; }
                
                .connection {
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #00d4ff, transparent);
                    animation: dataFlow 2s infinite;
                }
                
                .connection-1 {
                    top: 25%;
                    left: 25%;
                    width: 50%;
                    transform: rotate(0deg);
                }
                
                .connection-2 {
                    top: 50%;
                    left: 25%;
                    width: 50%;
                    transform: rotate(90deg);
                    animation-delay: 0.7s;
                }
                
                .connection-3 {
                    bottom: 25%;
                    left: 25%;
                    width: 50%;
                    transform: rotate(45deg);
                    animation-delay: 1.4s;
                }
                
                .floating-cards {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .floating-card {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 12px 16px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    animation: float 4s infinite ease-in-out;
                }
                
                .card-1 {
                    top: 10%;
                    right: 10%;
                    animation-delay: 0s;
                }
                
                .card-2 {
                    top: 60%;
                    left: -10%;
                    animation-delay: 1.3s;
                }
                
                .card-3 {
                    bottom: 10%;
                    right: 20%;
                    animation-delay: 2.6s;
                }
                
                .bg-pattern {
                    background-image: 
                        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
                    background-size: 50px 50px;
                    width: 100%;
                    height: 100%;
                    animation: patternMove 20s linear infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.1); }
                }
                
                @keyframes nodeGlow {
                    0%, 100% { 
                        box-shadow: 0 0 5px #00d4ff;
                        transform: scale(1);
                    }
                    50% { 
                        box-shadow: 0 0 20px #00d4ff;
                        transform: scale(1.2);
                    }
                }
                
                @keyframes dataFlow {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes patternMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                
                @media (max-width: 768px) {
                    .ai-brain-animation {
                        width: 250px;
                        height: 250px;
                    }
                    
                    .floating-card {
                        font-size: 12px;
                        padding: 8px 12px;
                    }
                }
            `}</style>
        </>
    );
}
