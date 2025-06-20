"use client";

export default function Section2() {
    return (
        <>
            {/* AI-rådgivning Services Section */}
            <section id="services" className="ai-radgivning-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Våre AI-rådgivningstjenester</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Omfattende AI-løsninger tilpasset 
                                <span className="text-linear"> din virksomhet</span>
                            </h2>
                            <p className="text-muted fs-5">
                                Fra strategisk planlegging til implementering - vi guider deg gjennom hele AI-transformasjonen
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-lightbulb-fill text-warning fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">AI-strategi og planlegging</h5>
                                <p className="text-muted mb-4">
                                    Vi utvikler en omfattende AI-strategi som er tilpasset dine forretningsmål og utfordringer. 
                                    Vår tilnærming sikrer at AI-implementeringen gir maksimal verdi.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Forretningsanalyse og behovsidentifikasjon</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>ROI-beregning og kostnadsanalyse</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Implementeringsveikart</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-lightbulb-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-gear-fill text-primary fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Teknisk implementering</h5>
                                <p className="text-muted mb-4">
                                    Vårt ekspertteam håndterer den tekniske implementeringen av AI-løsninger, 
                                    fra dataintegrasjon til modelltrening og deployment.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Dataintegrasjon og -forberedelse</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>AI-modellutvikling og -trening</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Systemintegrasjon og deployment</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-gear-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-graph-up-arrow text-success fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Optimalisering og skalering</h5>
                                <p className="text-muted mb-4">
                                    Vi sikrer at dine AI-løsninger presterer optimalt og kan skaleres etter behov. 
                                    Kontinuerlig overvåking og forbedring er nøkkelen til suksess.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Ytelsesovervåking og -analyse</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Modelloptimalisering</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Skaleringsstrategier</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-people-fill text-info fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Opplæring og kompetansebygging</h5>
                                <p className="text-muted mb-4">
                                    Vi bygger intern kompetanse i din organisasjon gjennom skreddersydde opplæringsprogrammer 
                                    og workshops om AI og maskinlæring.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>AI-workshops og seminarer</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Teknisk opplæring for utviklere</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Lederopplæring i AI-strategi</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800">
                            <div className="service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-shield-check text-danger fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">AI-sikkerhet og etikk</h5>
                                <p className="text-muted mb-4">
                                    Vi sikrer at dine AI-løsninger følger beste praksis for sikkerhet, personvern 
                                    og etiske retningslinjer for ansvarlig AI-bruk.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Sikkerhetsaudit og risikovurdering</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>GDPR-compliance og personvern</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Etiske AI-retningslinjer</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="1000">
                            <div className="service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-headset text-purple fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Kontinuerlig support</h5>
                                <p className="text-muted mb-4">
                                    Vårt supportteam er tilgjengelig for å hjelpe deg med vedlikehold, 
                                    feilsøking og videreutvikling av dine AI-løsninger.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>24/7 teknisk support</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Regelmessige systemoppdateringer</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Proaktiv vedlikehold</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-headset"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .ai-radgivning-section-2 {
                    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .service-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
                }
                
                .service-icon .icon-wrapper {
                    width: 80px;
                    height: 80px;
                    background: rgba(102, 126, 234, 0.1);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .service-icon .icon-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.5s;
                }
                
                .service-card:hover .service-icon .icon-wrapper::before {
                    left: 100%;
                }
                
                .service-bg-icon {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    font-size: 120px;
                    color: rgba(102, 126, 234, 0.05);
                    z-index: 0;
                }
                
                .service-card h5,
                .service-card p,
                .service-card ul {
                    position: relative;
                    z-index: 1;
                }
                
                .text-purple {
                    color: #6f42c1 !important;
                }
                
                @media (max-width: 768px) {
                    .service-card {
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
        </>
    );
}
