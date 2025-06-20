"use client";
import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/* Dataanalyse Hero Section */}
            <section className="dataanalyse-section-1 position-relative overflow-hidden pt-120 pb-120 bg-gradient-data">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <span className="small-line bg-white" />
                                <span className="btn-text text-white">Dataanalyse & Data Science</span>
                            </div>
                            <h1 className="text-white mb-4 text-anime-style-3">
                                Lås opp verdien i dine data med 
                                <span className="text-linear"> intelligent dataanalyse</span>
                            </h1>
                            <p className="text-white-50 mb-5 fs-5">
                                Vi transformerer rå data til handlingsrettede innsikter som driver forretningsvekst. 
                                Våre data science-løsninger hjelper bedrifter med å ta datadrevne beslutninger 
                                som gir konkurransefortrinn.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-5">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Prediktiv analyse</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Big Data-løsninger</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Business Intelligence</span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <Link href="/contact" className="btn btn-linear hover-up">
                                    Start dataanalyse
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
                                <div className="data-visualization">
                                    <div className="chart-container">
                                        <div className="chart-background">
                                            <svg viewBox="0 0 400 300" className="w-100">
                                                {/* Background Grid */}
                                                <defs>
                                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" fill="url(#grid)" />
                                                
                                                {/* Animated Chart Lines */}
                                                <path d="M50 250 Q100 200 150 180 T250 150 T350 100" 
                                                      fill="none" 
                                                      stroke="#00d4ff" 
                                                      strokeWidth="3" 
                                                      className="chart-line-1" />
                                                
                                                <path d="M50 220 Q100 180 150 160 T250 130 T350 80" 
                                                      fill="none" 
                                                      stroke="#667eea" 
                                                      strokeWidth="3" 
                                                      className="chart-line-2" />
                                                
                                                <path d="M50 200 Q100 160 150 140 T250 110 T350 60" 
                                                      fill="none" 
                                                      stroke="#764ba2" 
                                                      strokeWidth="3" 
                                                      className="chart-line-3" />
                                                
                                                {/* Data Points */}
                                                <circle cx="150" cy="180" r="4" fill="#00d4ff" className="data-point">
                                                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                                                </circle>
                                                <circle cx="250" cy="150" r="4" fill="#667eea" className="data-point">
                                                    <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                                                </circle>
                                                <circle cx="350" cy="100" r="4" fill="#764ba2" className="data-point">
                                                    <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite"/>
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Floating Data Insights */}
                                    <div className="floating-insights">
                                        <div className="insight-card card-1">
                                            <i className="bi bi-graph-up text-success"></i>
                                            <div>
                                                <div className="insight-value">+85%</div>
                                                <div className="insight-label">Innsikt</div>
                                            </div>
                                        </div>
                                        
                                        <div className="insight-card card-2">
                                            <i className="bi bi-pie-chart text-warning"></i>
                                            <div>
                                                <div className="insight-value">72%</div>
                                                <div className="insight-label">Nøyaktighet</div>
                                            </div>
                                        </div>
                                        
                                        <div className="insight-card card-3">
                                            <i className="bi bi-bar-chart text-info"></i>
                                            <div>
                                                <div className="insight-value">2.4M</div>
                                                <div className="insight-label">Datapunkter</div>
                                            </div>
                                        </div>
                                        
                                        <div className="insight-card card-4">
                                            <i className="bi bi-speedometer2 text-danger"></i>
                                            <div>
                                                <div className="insight-value">Real-time</div>
                                                <div className="insight-label">Analyse</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
                    <div className="data-particles">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                        <div className="particle particle-4"></div>
                        <div className="particle particle-5"></div>
                        <div className="particle particle-6"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .bg-gradient-data {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                }
                
                .data-visualization {
                    position: relative;
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                }
                
                .chart-container {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    padding: 2rem;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .chart-line-1 {
                    stroke-dasharray: 500;
                    stroke-dashoffset: 500;
                    animation: drawLine 3s ease-in-out infinite;
                }
                
                .chart-line-2 {
                    stroke-dasharray: 500;
                    stroke-dashoffset: 500;
                    animation: drawLine 3s ease-in-out infinite;
                    animation-delay: 0.5s;
                }
                
                .chart-line-3 {
                    stroke-dasharray: 500;
                    stroke-dashoffset: 500;
                    animation: drawLine 3s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .floating-insights {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .insight-card {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 12px 16px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    font-weight: 600;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    animation: floatInsight 4s ease-in-out infinite;
                    min-width: 120px;
                }
                
                .insight-value {
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                }
                
                .insight-label {
                    font-size: 12px;
                    color: #666;
                }
                
                .card-1 {
                    top: 10%;
                    right: 5%;
                    animation-delay: 0s;
                }
                
                .card-2 {
                    top: 35%;
                    left: -5%;
                    animation-delay: 1s;
                }
                
                .card-3 {
                    bottom: 35%;
                    right: 0%;
                    animation-delay: 2s;
                }
                
                .card-4 {
                    bottom: 10%;
                    left: 10%;
                    animation-delay: 1.5s;
                }
                
                .data-particles {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .particle {
                    position: absolute;
                    background: linear-gradient(135deg, #00d4ff, #667eea);
                    border-radius: 50%;
                    animation: floatParticle 8s ease-in-out infinite;
                }
                
                .particle-1 {
                    width: 8px;
                    height: 8px;
                    top: 15%;
                    left: 15%;
                    animation-delay: 0s;
                }
                
                .particle-2 {
                    width: 12px;
                    height: 12px;
                    top: 25%;
                    right: 20%;
                    animation-delay: 1s;
                }
                
                .particle-3 {
                    width: 6px;
                    height: 6px;
                    top: 60%;
                    left: 10%;
                    animation-delay: 2s;
                }
                
                .particle-4 {
                    width: 10px;
                    height: 10px;
                    bottom: 30%;
                    right: 15%;
                    animation-delay: 3s;
                }
                
                .particle-5 {
                    width: 14px;
                    height: 14px;
                    bottom: 15%;
                    left: 20%;
                    animation-delay: 4s;
                }
                
                .particle-6 {
                    width: 8px;
                    height: 8px;
                    top: 45%;
                    right: 35%;
                    animation-delay: 2.5s;
                }
                
                @keyframes drawLine {
                    0% { stroke-dashoffset: 500; }
                    50% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 500; }
                }
                
                @keyframes floatInsight {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }
                
                @keyframes floatParticle {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.3;
                    }
                    25% { 
                        transform: translateY(-20px) rotate(90deg);
                        opacity: 0.7;
                    }
                    50% { 
                        transform: translateY(-10px) rotate(180deg);
                        opacity: 0.5;
                    }
                    75% { 
                        transform: translateY(-30px) rotate(270deg);
                        opacity: 0.8;
                    }
                }
                
                @media (max-width: 768px) {
                    .data-visualization {
                        max-width: 350px;
                    }
                    
                    .insight-card {
                        font-size: 12px;
                        padding: 8px 12px;
                        min-width: 100px;
                    }
                    
                    .insight-value {
                        font-size: 14px;
                    }
                    
                    .insight-label {
                        font-size: 10px;
                    }
                    
                    .particle {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
