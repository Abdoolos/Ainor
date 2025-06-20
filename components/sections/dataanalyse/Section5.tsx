"use client";
import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/* Data FAQ & Contact Section */}
            <section className="dataanalyse-section-5 position-relative overflow-hidden pt-120 pb-120 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* FAQ Section */}
                            <div className="data-faq-section">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <span className="small-line bg-white" />
                                    <span className="btn-text text-white">Data FAQ</span>
                                </div>
                                <h2 className="text-white mb-5 text-anime-style-3">
                                    Spørsmål om 
                                    <span className="text-linear"> dataanalyse</span>
                                </h2>

                                <div className="accordion accordion-flush" id="dataFaqAccordion">
                                    {/* FAQ 1 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#dataFaq1">
                                                <i className="bi bi-database me-3 text-primary"></i>
                                                Hvilke datakilder kan dere integrere?
                                            </button>
                                        </h2>
                                        <div id="dataFaq1" className="accordion-collapse collapse" data-bs-parent="#dataFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Vi integrerer alle typer datakilder: databaser (SQL/NoSQL), 
                                                API-er, filer (CSV, JSON, XML), cloud-tjenester, IoT-sensorer, 
                                                og sanntidsstrømmer. Våre løsninger støtter både strukturerte 
                                                og ustrukturerte data.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#dataFaq2">
                                                <i className="bi bi-clock me-3 text-primary"></i>
                                                Hvor lang tid tar en dataanalyseprosjekt?
                                            </button>
                                        </h2>
                                        <div id="dataFaq2" className="accordion-collapse collapse" data-bs-parent="#dataFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Tidsrammen varierer fra 2-4 uker for enkle analyser til 3-6 måneder 
                                                for omfattende data science-prosjekter. Vi gir deg en detaljert 
                                                tidsplan etter å ha vurdert datakompleksiteten og prosjektomfanget.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#dataFaq3">
                                                <i className="bi bi-shield-lock me-3 text-primary"></i>
                                                Hvordan sikrer dere datasikkerhet?
                                            </button>
                                        </h2>
                                        <div id="dataFaq3" className="accordion-collapse collapse" data-bs-parent="#dataFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Vi følger strenge sikkerhetsprotokoller inkludert kryptering, 
                                                tilgangskontroll, GDPR-compliance og ISO 27001-standarder. 
                                                All databehandling skjer i sikre miljøer med full logging og overvåking.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 4 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#dataFaq4">
                                                <i className="bi bi-graph-up me-3 text-primary"></i>
                                                Hvilket ROI kan vi forvente?
                                            </button>
                                        </h2>
                                        <div id="dataFaq4" className="accordion-collapse collapse" data-bs-parent="#dataFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Våre kunder oppnår typisk 200-500% ROI innen 12-18 måneder 
                                                gjennom forbedret effektivitet, bedre beslutninger og nye 
                                                inntektsstrømmer. Vi etablerer KPI-er for å måle verdiskapningen.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {/* Contact Form */}
                            <div className="data-contact-section">
                                <div className="data-contact-card bg-white rounded-4 p-5 shadow-lg">
                                    <div className="text-center mb-4">
                                        <div className="contact-icon mb-3">
                                            <i className="bi bi-database-gear text-primary fs-1"></i>
                                        </div>
                                        <h3 className="text-dark mb-2">Start din datareise</h3>
                                        <p className="text-muted">
                                            Få en gratis datavurdering og se potensialet i dine data
                                        </p>
                                    </div>

                                    <form className="data-contact-form">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="dataFirstName" placeholder="Fornavn" required />
                                                    <label htmlFor="dataFirstName">Fornavn *</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="dataLastName" placeholder="Etternavn" required />
                                                    <label htmlFor="dataLastName">Etternavn *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="dataEmail" placeholder="E-post" required />
                                                    <label htmlFor="dataEmail">E-post *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="dataCompany" placeholder="Bedrift" />
                                                    <label htmlFor="dataCompany">Bedrift</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <select className="form-select" id="dataService" required>
                                                        <option value="">Velg datatjeneste</option>
                                                        <option value="predictive">Prediktiv analyse</option>
                                                        <option value="bi">Business Intelligence</option>
                                                        <option value="bigdata">Big Data Engineering</option>
                                                        <option value="ml">Machine Learning</option>
                                                        <option value="vision">Computer Vision</option>
                                                        <option value="governance">Data Governance</option>
                                                        <option value="consultation">Gratis datavurdering</option>
                                                    </select>
                                                    <label htmlFor="dataService">Datatjeneste av interesse *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" id="dataMessage" placeholder="Beskriv dine data" style={{height: '120px'}} required></textarea>
                                                    <label htmlFor="dataMessage">Beskriv dine datautfordringer og mål *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="dataPrivacy" required />
                                                    <label className="form-check-label text-muted small" htmlFor="dataPrivacy">
                                                        Jeg godtar <Link href="#" className="text-primary">personvernreglene</Link> og samtykker til databehandling.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary btn-lg w-100 hover-up">
                                                    <i className="bi bi-send me-2"></i>
                                                    Send dataforespørsel
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Contact Info */}
                                    <div className="data-contact-info mt-5 pt-4 border-top">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="contact-info-icon">
                                                        <i className="bi bi-telephone text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Data-eksperter</h6>
                                                        <p className="text-muted mb-0">+47 123 45 678</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="contact-info-icon">
                                                        <i className="bi bi-envelope text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Data-team</h6>
                                                        <p className="text-muted mb-0">data@ainorab.no</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="row mt-8">
                        <div className="col-12 text-center">
                            <div className="data-bottom-cta">
                                <h3 className="text-white mb-3">Lås opp verdien i dine data i dag</h3>
                                <p className="text-white-50 mb-4 fs-5">
                                    Book en gratis 45-minutters datakonsultasjon med våre eksperter
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="btn btn-linear btn-lg">
                                        <i className="bi bi-calendar-check me-2"></i>
                                        Book gratis datakonsultasjon
                                    </Link>
                                    <Link href="/services" className="btn btn-outline-light btn-lg">
                                        <i className="bi bi-arrow-left me-2"></i>
                                        Se alle datatjenester
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
                    <div className="data-bg-animation">
                        <div className="data-stream stream-1"></div>
                        <div className="data-stream stream-2"></div>
                        <div className="data-stream stream-3"></div>
                        <div className="data-stream stream-4"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .accordion-button {
                    box-shadow: none !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    transition: all 0.3s ease;
                }
                
                .accordion-button:hover {
                    background-color: rgba(255, 255, 255, 0.05) !important;
                    border-color: rgba(30, 60, 114, 0.3) !important;
                }
                
                .accordion-button:not(.collapsed) {
                    background-color: rgba(30, 60, 114, 0.1) !important;
                    border-color: #1e3c72 !important;
                    color: white !important;
                }
                
                .data-contact-card {
                    position: relative;
                    overflow: hidden;
                }
                
                .data-contact-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #1e3c72, #2a5298);
                }
                
                .contact-icon {
                    width: 80px;
                    height: 80px;
                    background: rgba(30, 60, 114, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                }
                
                .form-floating > .form-control:focus,
                .form-floating > .form-select:focus {
                    border-color: #1e3c72;
                    box-shadow: 0 0 0 0.25rem rgba(30, 60, 114, 0.25);
                }
                
                .contact-info-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(30, 60, 114, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }
                
                .data-bottom-cta {
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .data-bg-animation {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .data-stream {
                    position: absolute;
                    background: linear-gradient(135deg, #1e3c72, #2a5298);
                    border-radius: 50%;
                    animation: dataFlow 10s ease-in-out infinite;
                }
                
                .stream-1 {
                    width: 80px;
                    height: 80px;
                    top: 10%;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .stream-2 {
                    width: 60px;
                    height: 60px;
                    top: 30%;
                    right: 15%;
                    animation-delay: 2s;
                }
                
                .stream-3 {
                    width: 100px;
                    height: 100px;
                    bottom: 20%;
                    left: 20%;
                    animation-delay: 4s;
                }
                
                .stream-4 {
                    width: 70px;
                    height: 70px;
                    bottom: 40%;
                    right: 25%;
                    animation-delay: 6s;
                }
                
                @keyframes dataFlow {
                    0%, 100% { 
                        transform: translateY(0px) scale(1);
                        opacity: 0.3;
                    }
                    25% { 
                        transform: translateY(-30px) scale(1.1);
                        opacity: 0.6;
                    }
                    50% { 
                        transform: translateY(-15px) scale(0.9);
                        opacity: 0.4;
                    }
                    75% { 
                        transform: translateY(-40px) scale(1.2);
                        opacity: 0.7;
                    }
                }
                
                @media (max-width: 768px) {
                    .data-contact-card {
                        margin-top: 3rem;
                    }
                    
                    .data-bottom-cta {
                        padding: 2rem 1rem;
                    }
                    
                    .data-stream {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
