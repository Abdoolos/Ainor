"use client";
import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/* AI Agents Success Stories */}
            <section className="ai-agents-section-4 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Agent Suksesshistorier</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Transformative resultater med 
                                <span className="text-linear"> intelligente AI-agenter</span>
                            </h2>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="row g-4 mb-8">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="agent-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-robot text-primary fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">500+</span>
                                </div>
                                <h6 className="mb-2">Aktive AI-agenter</h6>
                                <p className="text-muted small mb-0">Implementert på tvers av bransjer</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="agent-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-lightning text-warning fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">85</span>%
                                </div>
                                <h6 className="mb-2">Redusert responstid</h6>
                                <p className="text-muted small mb-0">Gjennomsnittlig forbedring</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="agent-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-currency-dollar text-success fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">60</span>%
                                </div>
                                <h6 className="mb-2">Kostnadsbesparelse</h6>
                                <p className="text-muted small mb-0">Gjennomsnittlig reduksjon</p>
                            </div>
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="row g-4">
                        {/* E-commerce Case */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="agent-case-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-header p-4 bg-gradient-ecommerce">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-icon">
                                            <i className="bi bi-cart text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Online Handelshus</h5>
                                            <span className="badge bg-white text-primary">E-commerce</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        AI Shopping Assistant for personalisert kundeopplevelse
                                    </p>
                                </div>
                                
                                <div className="case-content p-4">
                                    <div className="results mb-4">
                                        <h6 className="text-primary mb-3">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-3">
                                            <div className="col-4">
                                                <div className="result-box text-center p-3 bg-light rounded">
                                                    <div className="result-value text-success fw-bold">+55%</div>
                                                    <div className="result-label small">Salg</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="result-box text-center p-3 bg-light rounded">
                                                    <div className="result-value text-primary fw-bold">-40%</div>
                                                    <div className="result-label small">Support-tid</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="result-box text-center p-3 bg-light rounded">
                                                    <div className="result-value text-warning fw-bold">92%</div>
                                                    <div className="result-label small">Tilfredshet</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="agent-features">
                                        <p className="text-muted small">
                                            "AI-agenten håndterer 80% av kundehenvendelser automatisk og 
                                            gir personaliserte produktanbefalinger basert på kundehistorikk."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Healthcare Case */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="agent-case-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-header p-4 bg-gradient-healthcare">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-icon">
                                            <i className="bi bi-heart-pulse text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Medisinsk Senter</h5>
                                            <span className="badge bg-white text-primary">Helsevesen</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        Pasient Assistant for timebestilling og helseoppfølging
                                    </p>
                                </div>
                                
                                <div className="case-content p-4">
                                    <div className="results mb-4">
                                        <h6 className="text-primary mb-3">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-3">
                                            <div className="col-4">
                                                <div className="result-box text-center p-3 bg-light rounded">
                                                    <div className="result-value text-success fw-bold">-70%</div>
                                                    <div className="result-label small">Ventetid</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="result-box text-center p-3 bg-light rounded">
                                                    <div className="result-value text-primary fw-bold">+45%</div>
                                                    <div className="result-label small">Effektivitet</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="result-box text-center p-3 bg-light rounded">
                                                    <div className="result-value text-warning fw-bold">96%</div>
                                                    <div className="result-label small">Nøyaktighet</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="agent-features">
                                        <p className="text-muted small">
                                            "Pasient-agenten administrerer timebestillinger, sender påminnelser 
                                            og gir initial symptomvurdering 24/7."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-8">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="agent-cta-box p-5 bg-gradient-agents rounded-4 text-white">
                                <h3 className="mb-3">Klar for din egen AI-agent?</h3>
                                <p className="mb-4 fs-5">
                                    La oss bygge intelligente agenter som transformerer din virksomhet
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="btn btn-light btn-lg">
                                        Start med AI Agents
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                    <Link href="#" className="btn btn-outline-light btn-lg">
                                        Se alle agent-typer
                                        <i className="bi bi-robot ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .ai-agents-section-4 {
                    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .bg-gradient-agents {
                    background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
                }
                
                .bg-gradient-ecommerce {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .bg-gradient-healthcare {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                }
                
                .agent-stat-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .agent-stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
                }
                
                .stat-number {
                    font-size: 2.5rem;
                    font-weight: bold;
                }
                
                .agent-case-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .agent-case-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
                }
                
                .company-icon {
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .result-value {
                    font-size: 1.1rem;
                }
                
                .agent-cta-box {
                    position: relative;
                    overflow: hidden;
                }
                
                .agent-cta-box::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    animation: shimmer 3s infinite;
                }
                
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
                
                @media (max-width: 768px) {
                    .stat-number {
                        font-size: 2rem;
                    }
                    
                    .agent-case-card {
                        margin-bottom: 2rem;
                    }
                    
                    .agent-cta-box {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </>
    );
}
