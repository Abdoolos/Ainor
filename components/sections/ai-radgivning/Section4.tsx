"use client";
import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/* AI-rådgivning Case Studies Section */}
            <section className="ai-radgivning-section-4 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Suksesshistorier</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Reelle resultater fra våre 
                                <span className="text-linear"> AI-implementeringer</span>
                            </h2>
                            <p className="text-muted fs-5">
                                Se hvordan vi har hjulpet bedrifter med å transformere sine operasjoner gjennom AI
                            </p>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="row g-4 mb-8">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-graph-up-arrow text-success fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter" data-target="150">0</span>%
                                </div>
                                <h6 className="mb-2">Økt effektivitet</h6>
                                <p className="text-muted small mb-0">Gjennomsnittlig forbedring i prosesseffektivitet</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-currency-dollar text-warning fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter" data-target="40">0</span>%
                                </div>
                                <h6 className="mb-2">Kostnadsreduksjon</h6>
                                <p className="text-muted small mb-0">Gjennomsnittlig reduksjon i driftskostnader</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-clock-history text-info fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter" data-target="75">0</span>%
                                </div>
                                <h6 className="mb-2">Tidsbesparelse</h6>
                                <p className="text-muted small mb-0">Reduksjon i manuell behandlingstid</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="stat-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="stat-icon mb-3">
                                    <i className="bi bi-people-fill text-danger fs-1"></i>
                                </div>
                                <div className="stat-number text-primary mb-2">
                                    <span className="counter" data-target="95">0</span>%
                                </div>
                                <h6 className="mb-2">Kundetilfredshet</h6>
                                <p className="text-muted small mb-0">Forbedring i kundeopplevelse</p>
                            </div>
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="row g-4">
                        {/* Case Study 1 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="case-study-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-study-header p-4 bg-gradient-primary">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-logo">
                                            <i className="bi bi-building text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Retail-kjede</h5>
                                            <span className="badge bg-white text-primary">E-handel</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        Implementering av AI-drevet kundeservice og lageroptimalisering
                                    </p>
                                </div>
                                
                                <div className="case-study-content p-4">
                                    <div className="challenge mb-4">
                                        <h6 className="text-primary mb-2">
                                            <i className="bi bi-exclamation-triangle me-2"></i>Utfordring
                                        </h6>
                                        <p className="text-muted">
                                            Høy kundeservicebelastning og ineffektiv lagerstyring førte til økte kostnader 
                                            og redusert kundetilfredshet.
                                        </p>
                                    </div>
                                    
                                    <div className="solution mb-4">
                                        <h6 className="text-success mb-2">
                                            <i className="bi bi-lightbulb me-2"></i>Løsning
                                        </h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>AI-chatbot for kundeservice</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Prediktiv analyse for lageroptimalisering</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Automatisert etterfyllingsystem</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="results">
                                        <h6 className="text-warning mb-3">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-success fw-bold">60%</div>
                                                    <div className="result-label small">Redusert responstid</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-primary fw-bold">35%</div>
                                                    <div className="result-label small">Lavere lagerkostnader</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="case-study-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-study-header p-4 bg-gradient-secondary">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-logo">
                                            <i className="bi bi-hospital text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Helseklinikk</h5>
                                            <span className="badge bg-white text-primary">Helsevesen</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        AI-assistert diagnostikk og pasientadministrasjon
                                    </p>
                                </div>
                                
                                <div className="case-study-content p-4">
                                    <div className="challenge mb-4">
                                        <h6 className="text-primary mb-2">
                                            <i className="bi bi-exclamation-triangle me-2"></i>Utfordring
                                        </h6>
                                        <p className="text-muted">
                                            Lange ventetider og ineffektiv pasientflyt påvirket kvaliteten på helsetjenestene.
                                        </p>
                                    </div>
                                    
                                    <div className="solution mb-4">
                                        <h6 className="text-success mb-2">
                                            <i className="bi bi-lightbulb me-2"></i>Løsning
                                        </h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>AI-assistert bildeanalyse</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Intelligent timeplanlegging</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Prediktiv ressursallokering</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="results">
                                        <h6 className="text-warning mb-3">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-success fw-bold">45%</div>
                                                    <div className="result-label small">Kortere ventetid</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-primary fw-bold">90%</div>
                                                    <div className="result-label small">Diagnostisk nøyaktighet</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 3 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="case-study-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-study-header p-4 bg-gradient-success">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-logo">
                                            <i className="bi bi-truck text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Logistikkselskap</h5>
                                            <span className="badge bg-white text-primary">Transport</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        Ruteoptimalisering og prediktivt vedlikehold
                                    </p>
                                </div>
                                
                                <div className="case-study-content p-4">
                                    <div className="challenge mb-4">
                                        <h6 className="text-primary mb-2">
                                            <i className="bi bi-exclamation-triangle me-2"></i>Utfordring
                                        </h6>
                                        <p className="text-muted">
                                            Høye drivstoffkostnader og uplanlagt nedetid på kjøretøy reduserte lønnsomheten.
                                        </p>
                                    </div>
                                    
                                    <div className="solution mb-4">
                                        <h6 className="text-success mb-2">
                                            <i className="bi bi-lightbulb me-2"></i>Løsning
                                        </h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>AI-drevet ruteoptimalisering</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Prediktivt vedlikeholdssystem</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Sanntids sporingsystem</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="results">
                                        <h6 className="text-warning mb-3">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-success fw-bold">30%</div>
                                                    <div className="result-label small">Lavere drivstoffkostnader</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-primary fw-bold">80%</div>
                                                    <div className="result-label small">Redusert nedetid</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 4 */}
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="case-study-card h-100 bg-white rounded-4 shadow-sm overflow-hidden">
                                <div className="case-study-header p-4 bg-gradient-warning">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="company-logo">
                                            <i className="bi bi-bank text-white fs-2"></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white mb-1">Finansinstitusjon</h5>
                                            <span className="badge bg-white text-primary">Finans</span>
                                        </div>
                                    </div>
                                    <p className="text-white-50 mb-0">
                                        Svindeldeteksjon og risikostyring
                                    </p>
                                </div>
                                
                                <div className="case-study-content p-4">
                                    <div className="challenge mb-4">
                                        <h6 className="text-primary mb-2">
                                            <i className="bi bi-exclamation-triangle me-2"></i>Utfordring
                                        </h6>
                                        <p className="text-muted">
                                            Økende svindelforsøk og behov for bedre risikostyring i sanntid.
                                        </p>
                                    </div>
                                    
                                    <div className="solution mb-4">
                                        <h6 className="text-success mb-2">
                                            <i className="bi bi-lightbulb me-2"></i>Løsning
                                        </h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>AI-basert svindeldeteksjon</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Sanntids risikovurdering</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-2">
                                                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                                                <span>Automatisert compliance-overvåking</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="results">
                                        <h6 className="text-warning mb-3">
                                            <i className="bi bi-trophy me-2"></i>Resultater
                                        </h6>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-success fw-bold">95%</div>
                                                    <div className="result-label small">Svindeldeteksjon</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="result-item text-center p-3 bg-light rounded-3">
                                                    <div className="result-number text-primary fw-bold">50%</div>
                                                    <div className="result-label small">Redusert risiko</div>
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
                            <div className="cta-box p-5 bg-gradient-primary rounded-4 text-white">
                                <h3 className="mb-3">Klar for å transformere din virksomhet?</h3>
                                <p className="mb-4 fs-5">
                                    La oss hjelpe deg med å oppnå lignende resultater gjennom strategisk AI-implementering
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="btn btn-light btn-lg">
                                        Start din AI-reise
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>
                                    <Link href="#" className="btn btn-outline-light btn-lg">
                                        Last ned case studies
                                        <i className="bi bi-download ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .ai-radgivning-section-4 {
                    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .bg-gradient-secondary {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                }
                
                .bg-gradient-success {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                }
                
                .bg-gradient-warning {
                    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
                }
                
                .stat-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
                }
                
                .stat-number {
                    font-size: 2.5rem;
                    font-weight: bold;
                }
                
                .case-study-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .case-study-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
                }
                
                .company-logo {
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .result-number {
                    font-size: 1.5rem;
                }
                
                .cta-box {
                    position: relative;
                    overflow: hidden;
                }
                
                .cta-box::before {
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
                
                .counter {
                    display: inline-block;
                    animation: countUp 2s ease-out;
                }
                
                @keyframes countUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @media (max-width: 768px) {
                    .stat-number {
                        font-size: 2rem;
                    }
                    
                    .case-study-card {
                        margin-bottom: 2rem;
                    }
                    
                    .cta-box {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </>
    );
}
