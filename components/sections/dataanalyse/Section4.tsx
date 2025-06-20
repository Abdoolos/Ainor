"use client";
import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/* Data Case Studies Section */}
            <section className="dataanalyse-section-4 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Data Success Stories</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Målbare resultater gjennom 
                                <span className="text-linear"> intelligent dataanalyse</span>
                            </h2>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="row g-4 mb-8">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="data-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-database-fill text-primary fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">2.5B+</span>
                                </div>
                                <h6 className="mb-2">Datapunkter analysert</h6>
                                <p className="text-muted small mb-0">Omfattende dataanalyse på tvers av bransjer</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="data-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-graph-up text-success fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">89</span>%
                                </div>
                                <h6 className="mb-2">Prediksjonssnøyaktighet</h6>
                                <p className="text-muted small mb-0">Høy presisjon i våre ML-modeller</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="data-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-speedometer2 text-warning fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">65</span>%
                                </div>
                                <h6 className="mb-2">Raskere innsikter</h6>
                                <p className="text-muted small mb-0">Redusert tid fra data til beslutning</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="data-stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-currency-dollar text-info fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter">3.2</span>M
                                </div>
                                <h6 className="mb-2">Gjennomsnittlig ROI</h6>
                                <p className="text-muted small mb-0">Verdi skapt gjennom dataoptimalisering</p>
                            </div>
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="row g-4">
                        {/* Case Study 1 - E-commerce */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="data-case-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-header p-4 bg-gradient-data">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-icon">
                                            <i className="bi bi-cart text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">E-commerce Platform</h5>
                                            <span className="badge bg-white text-primary">Retail Analytics</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        Prediktiv analyse for personalisering og lageroptimalisering
                                    </p>
                                </div>
                                
                                <div className="case-content p-4">
                                    <div className="challenge mb-3">
                                        <h6 className="text-primary mb-2">
                                            <i className="bi bi-exclamation-triangle me-2"></i>Utfordring
                                        </h6>
                                        <p className="text-muted small">
                                            Lav konverteringsrate og høye lagerkostnader
                                        </p>
                                    </div>
                                    
                                    <div className="solution mb-3">
                                        <h6 className="text-success mb-2">
                                            <i className="bi bi-lightbulb me-2"></i>Løsning
                                        </h6>
                                        <p className="text-muted small">
                                            ML-baserte anbefalingssystemer og etterspørselsprognose
                                        </p>
                                    </div>
                                    
                                    <div className="results">
                                        <h6 className="text-warning mb-2">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="result-box text-center p-2 bg-light rounded">
                                                    <div className="result-value text-success fw-bold">+42%</div>
                                                    <div className="result-label small">Konvertering</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="result-box text-center p-2 bg-light rounded">
                                                    <div className="result-value text-primary fw-bold">-28%</div>
                                                    <div className="result-label small">Lagerkost</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 2 - Manufacturing */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="data-case-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-header p-4 bg-gradient-secondary">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-icon">
                                            <i className="bi bi-gear text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Produksjonsbedrift</h5>
                                            <span className="badge bg-white text-primary">IoT Analytics</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        Prediktivt vedlikehold og kvalitetskontroll
                                    </p>
                                </div>
                                
                                <div className="case-content p-4">
                                    <div className="challenge mb-3">
                                        <h6 className="text-primary mb-2">
                                            <i className="bi bi-exclamation-triangle me-2"></i>Utfordring
                                        </h6>
                                        <p className="text-muted small">
                                            Uplanlagt nedetid og kvalitetsproblemer
                                        </p>
                                    </div>
                                    
                                    <div className="solution mb-3">
                                        <h6 className="text-success mb-2">
                                            <i className="bi bi-lightbulb me-2"></i>Løsning
                                        </h6>
                                        <p className="text-muted small">
                                            IoT-sensorer og ML for anomalideteksjon
                                        </p>
                                    </div>
                                    
                                    <div className="results">
                                        <h6 className="text-warning mb-2">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="result-box text-center p-2 bg-light rounded">
                                                    <div className="result-value text-success fw-bold">-67%</div>
                                                    <div className="result-label small">Nedetid</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="result-box text-center p-2 bg-light rounded">
                                                    <div className="result-value text-primary fw-bold">+31%</div>
                                                    <div className="result-label small">Kvalitet</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-8">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="data-cta-box p-5 bg-gradient-data rounded-4 text-white">
                                <h3 className="mb-3">Klar for å utnytte dine data fullt ut?</h3>
                                <p className="mb-4 fs-5">
                                    La oss hjelpe deg med å transformere rå data til verdifulle forretningsinnsikter
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="btn btn-light btn-lg">
                                        Start dataanalyse
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                    <Link href="#" className="btn btn-outline-light btn-lg">
                                        Se mer data cases
                                        <i className="bi bi-download ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .dataanalyse-section-4 {
                    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .bg-gradient-data {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                }
                
                .bg-gradient-secondary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .data-stat-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .data-stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
                }
                
                .stat-number {
                    font-size: 2.5rem;
                    font-weight: bold;
                }
                
                .data-case-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .data-case-card:hover {
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
                    font-size: 1.2rem;
                }
                
                .data-cta-box {
                    position: relative;
                    overflow: hidden;
                }
                
                .data-cta-box::before {
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
                    
                    .data-case-card {
                        margin-bottom: 2rem;
                    }
                    
                    .data-cta-box {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </>
    );
}
