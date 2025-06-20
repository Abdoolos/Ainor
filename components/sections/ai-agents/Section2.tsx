"use client";

export default function Section2() {
    return (
        <>
            {/* AI Agents Types Section */}
            <section id="agents" className="ai-agents-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line" />
                                <span className="btn-text text-primary">AI Agent Typer</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Skreddersydde AI-agenter for 
                                <span className="text-linear"> alle bransjer</span>
                            </h2>
                            <p className="text-muted fs-5">
                                Fra kundeservice til markedsføring - våre AI-agenter transformerer hvordan bedrifter opererer
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {/* E-commerce Agent */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="agent-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="agent-icon mb-4">
                                    <div className="icon-wrapper bg-ecommerce">
                                        <i className="bi bi-cart-fill text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">E-commerce Assistant</h5>
                                <p className="text-muted mb-4">
                                    Intelligent shopping-assistent som hjelper kunder med produktvalg, 
                                    administrerer bestillinger og gir personaliserte anbefalinger 24/7.
                                </p>
                                <div className="agent-features mb-4">
                                    <h6 className="text-primary mb-3">🎯 Hovedfunksjoner:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Produktanbefalinger</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Bestillingsadministrasjon</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Lagerintegrasjon</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Kundesupportchat</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agent-benefits">
                                    <div className="benefit-tag">
                                        <span className="text-success fw-bold">+42% konvertering</span>
                                    </div>
                                </div>
                                <div className="agent-bg-icon">
                                    <i className="bi bi-cart-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Marketing & Advertising Agent */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="agent-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="agent-icon mb-4">
                                    <div className="icon-wrapper bg-marketing">
                                        <i className="bi bi-megaphone-fill text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Marketing & Annonse Agent</h5>
                                <p className="text-muted mb-4">
                                    Automatiserer markedsføringskampanjer, optimaliserer annonsebudsjetter 
                                    og personaliserer innhold basert på kundedata og markedstrender.
                                </p>
                                <div className="agent-features mb-4">
                                    <h6 className="text-primary mb-3">🎯 Hovedfunksjoner:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Kampanjeoptimalisering</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Innholdsgenerering</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Målgruppeanalyse</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>ROI-sporing</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agent-benefits">
                                    <div className="benefit-tag">
                                        <span className="text-success fw-bold">-35% annonsekostad</span>
                                    </div>
                                </div>
                                <div className="agent-bg-icon">
                                    <i className="bi bi-megaphone-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Healthcare Agent */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="agent-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="agent-icon mb-4">
                                    <div className="icon-wrapper bg-healthcare">
                                        <i className="bi bi-heart-pulse-fill text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Helseklinikk Assistent</h5>
                                <p className="text-muted mb-4">
                                    Hjelper pasienter med timebestilling, symptomvurdering, medisinpåminnelser 
                                    og gir helseråd basert på medisinske retningslinjer.
                                </p>
                                <div className="agent-features mb-4">
                                    <h6 className="text-primary mb-3">🎯 Hovedfunksjoner:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Timebestilling</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Symptomvurdering</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Medisinpåminnelser</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Helseoppfølging</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agent-benefits">
                                    <div className="benefit-tag">
                                        <span className="text-success fw-bold">-60% ventetid</span>
                                    </div>
                                </div>
                                <div className="agent-bg-icon">
                                    <i className="bi bi-heart-pulse-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Finance Agent */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="agent-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="agent-icon mb-4">
                                    <div className="icon-wrapper bg-finance">
                                        <i className="bi bi-bank2 text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Finansrådgiver Agent</h5>
                                <p className="text-muted mb-4">
                                    Automatiserer finansielle oppgaver, analyserer investeringsmuligheter, 
                                    gir budsjettråd og overvåker økonomiske målsettinger for bedrifter.
                                </p>
                                <div className="agent-features mb-4">
                                    <h6 className="text-primary mb-3">🎯 Hovedfunksjoner:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Investeringsanalyse</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Risikovurdering</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Budsjettoptimalisering</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Compliance-overvåking</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agent-benefits">
                                    <div className="benefit-tag">
                                        <span className="text-success fw-bold">+28% ROI</span>
                                    </div>
                                </div>
                                <div className="agent-bg-icon">
                                    <i className="bi bi-bank2"></i>
                                </div>
                            </div>
                        </div>

                        {/* HR Agent */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800">
                            <div className="agent-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="agent-icon mb-4">
                                    <div className="icon-wrapper bg-hr">
                                        <i className="bi bi-people-fill text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">HR & Rekruttering Agent</h5>
                                <p className="text-muted mb-4">
                                    Automatiserer rekrutteringsprosesser, screener kandidater, 
                                    administrerer ansattdata og gir innsikt i organisasjonsutvikling.
                                </p>
                                <div className="agent-features mb-4">
                                    <h6 className="text-primary mb-3">🎯 Hovedfunksjoner:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>CV-screening</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Intervjuplanlegging</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Onboarding-støtte</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Ytelsesoppfølging</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agent-benefits">
                                    <div className="benefit-tag">
                                        <span className="text-success fw-bold">-50% rekrutteringstid</span>
                                    </div>
                                </div>
                                <div className="agent-bg-icon">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Customer Service Agent */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="1000">
                            <div className="agent-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="agent-icon mb-4">
                                    <div className="icon-wrapper bg-support">
                                        <i className="bi bi-headset text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Kundeservice Agent</h5>
                                <p className="text-muted mb-4">
                                    Håndterer kundehenvendelser intelligently, løser problemer automatisk 
                                    og eskalerer komplekse saker til mennesker når nødvendig.
                                </p>
                                <div className="agent-features mb-4">
                                    <h6 className="text-primary mb-3">🎯 Hovedfunksjoner:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Automatisk problemløsning</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Flerspråklig støtte</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Intelligent eskalering</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2 text-success me-2"></i>
                                            <span>Sentimentanalyse</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agent-benefits">
                                    <div className="benefit-tag">
                                        <span className="text-success fw-bold">+85% kundetilfredshet</span>
                                    </div>
                                </div>
                                <div className="agent-bg-icon">
                                    <i className="bi bi-headset"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .ai-agents-section-2 {
                    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .agent-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .agent-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
                }
                
                .agent-icon .icon-wrapper {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .bg-ecommerce {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .bg-marketing {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                }
                
                .bg-healthcare {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                }
                
                .bg-finance {
                    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                }
                
                .bg-hr {
                    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                }
                
                .bg-support {
                    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
                }
                
                .agent-icon .icon-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.5s;
                }
                
                .agent-card:hover .agent-icon .icon-wrapper::before {
                    left: 100%;
                }
                
                .agent-bg-icon {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    font-size: 120px;
                    color: rgba(45, 27, 105, 0.05);
                    z-index: 0;
                }
                
                .agent-card h5,
                .agent-card p,
                .agent-card ul,
                .agent-features {
                    position: relative;
                    z-index: 1;
                }
                
                .agent-features h6 {
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                }
                
                .benefit-tag {
                    background: rgba(40, 167, 69, 0.1);
                    padding: 8px 16px;
                    border-radius: 20px;
                    display: inline-block;
                    border: 1px solid rgba(40, 167, 69, 0.2);
                }
                
                .agent-benefits {
                    margin-top: auto;
                    position: relative;
                    z-index: 1;
                }
                
                @media (max-width: 768px) {
                    .agent-card {
                        margin-bottom: 2rem;
                    }
                    
                    .agent-icon .icon-wrapper {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .agent-bg-icon {
                        font-size: 80px;
                    }
                }
            `}</style>
        </>
    );
}
