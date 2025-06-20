"use client";
import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/* AI-rådgivning FAQ & Contact Section */}
            <section className="ai-radgivning-section-5 position-relative overflow-hidden pt-120 pb-120 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* FAQ Section */}
                            <div className="faq-section">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <span className="small-line bg-white" />
                                    <span className="btn-text text-white">Ofte stilte spørsmål</span>
                                </div>
                                <h2 className="text-white mb-5 text-anime-style-3">
                                    Svar på dine spørsmål om 
                                    <span className="text-linear"> AI-rådgivning</span>
                                </h2>

                                <div className="accordion accordion-flush" id="faqAccordion">
                                    {/* FAQ 1 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                                <i className="bi bi-question-circle me-3 text-primary"></i>
                                                Hvor lang tid tar det å implementere AI-løsninger?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Implementeringstiden varierer avhengig av kompleksiteten til prosjektet. 
                                                Enkle løsninger kan implementeres på 4-8 uker, mens mer omfattende 
                                                transformasjoner kan ta 3-6 måneder. Vi gir deg en detaljert tidsplan 
                                                etter den første analysen.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                                <i className="bi bi-currency-dollar me-3 text-primary"></i>
                                                Hva koster AI-rådgivning og implementering?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Kostnadene avhenger av prosjektets omfang og kompleksitet. Vi tilbyr 
                                                fleksible prismodeller inkludert fast pris, timebasert fakturering, 
                                                og resultatbasert betaling. Kontakt oss for et skreddersydd tilbud 
                                                basert på dine spesifikke behov.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                                <i className="bi bi-shield-check me-3 text-primary"></i>
                                                Hvordan sikrer dere datasikkerhet og personvern?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Vi følger strenge sikkerhetsstandarder og er GDPR-kompatible. 
                                                All data krypteres både under transport og lagring. Vi gjennomfører 
                                                regelmessige sikkerhetsaudits og har implementert omfattende 
                                                tilgangskontroller for å beskytte dine data.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 4 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                                <i className="bi bi-people me-3 text-primary"></i>
                                                Trenger vi teknisk ekspertise internt?
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Nei, du trenger ikke omfattende teknisk ekspertise på forhånd. 
                                                Vi håndterer den tekniske implementeringen og tilbyr opplæring 
                                                til ditt team. Vårt mål er å bygge intern kompetanse slik at 
                                                dere kan drifte løsningene selv over tid.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 5 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                                                <i className="bi bi-graph-up me-3 text-primary"></i>
                                                Hvordan måler vi suksess og ROI?
                                            </button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Vi etablerer klare KPI-er og måleparametere før implementering. 
                                                Dette inkluderer effektivitetsforbedringer, kostnadsbesparelser, 
                                                og kvalitetsmålinger. Vi leverer regelmessige rapporter som viser 
                                                fremgang og ROI i sanntid.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {/* Contact Form */}
                            <div className="contact-form-section">
                                <div className="contact-form-card bg-white rounded-4 p-5 shadow-lg">
                                    <div className="text-center mb-4">
                                        <div className="contact-icon mb-3">
                                            <i className="bi bi-headset text-primary fs-1"></i>
                                        </div>
                                        <h3 className="text-dark mb-2">Klar for å starte?</h3>
                                        <p className="text-muted">
                                            Få en gratis konsultasjon og se hvordan AI kan transformere din virksomhet
                                        </p>
                                    </div>

                                    <form className="contact-form">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="firstName" placeholder="Fornavn" required />
                                                    <label htmlFor="firstName">Fornavn *</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="lastName" placeholder="Etternavn" required />
                                                    <label htmlFor="lastName">Etternavn *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="E-post" required />
                                                    <label htmlFor="email">E-post *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="tel" className="form-control" id="phone" placeholder="Telefon" />
                                                    <label htmlFor="phone">Telefon</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="company" placeholder="Bedrift" />
                                                    <label htmlFor="company">Bedrift</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <select className="form-select" id="service" required>
                                                        <option value="">Velg tjeneste</option>
                                                        <option value="ai-strategy">AI-strategi og planlegging</option>
                                                        <option value="implementation">Teknisk implementering</option>
                                                        <option value="optimization">Optimalisering og skalering</option>
                                                        <option value="training">Opplæring og kompetansebygging</option>
                                                        <option value="security">AI-sikkerhet og etikk</option>
                                                        <option value="support">Kontinuerlig support</option>
                                                        <option value="consultation">Gratis konsultasjon</option>
                                                    </select>
                                                    <label htmlFor="service">Tjeneste av interesse *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" id="message" placeholder="Beskrivelse" style={{height: '120px'}} required></textarea>
                                                    <label htmlFor="message">Beskriv dine utfordringer og mål *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="privacy" required />
                                                    <label className="form-check-label text-muted small" htmlFor="privacy">
                                                        Jeg godtar <Link href="#" className="text-primary">personvernreglene</Link> og samtykker til at mine opplysninger behandles for å kunne kontakte meg.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary btn-lg w-100 hover-up">
                                                    <i className="bi bi-send me-2"></i>
                                                    Send forespørsel
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Contact Info */}
                                    <div className="contact-info mt-5 pt-4 border-top">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="contact-info-icon">
                                                        <i className="bi bi-telephone text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Ring oss</h6>
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
                                                        <h6 className="mb-1">Send e-post</h6>
                                                        <p className="text-muted mb-0">ai@ainorab.no</p>
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
                            <div className="bottom-cta">
                                <h3 className="text-white mb-3">Ikke sikker på hvor du skal starte?</h3>
                                <p className="text-white-50 mb-4 fs-5">
                                    Book en gratis 30-minutters konsultasjon med våre AI-eksperter
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="btn btn-linear btn-lg">
                                        <i className="bi bi-calendar-check me-2"></i>
                                        Book gratis konsultasjon
                                    </Link>
                                    <Link href="/services" className="btn btn-outline-light btn-lg">
                                        <i className="bi bi-arrow-left me-2"></i>
                                        Se alle tjenester
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
                    <div className="animated-bg">
                        <div className="floating-element element-1"></div>
                        <div className="floating-element element-2"></div>
                        <div className="floating-element element-3"></div>
                        <div className="floating-element element-4"></div>
                        <div className="floating-element element-5"></div>
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
                    border-color: rgba(102, 126, 234, 0.3) !important;
                }
                
                .accordion-button:not(.collapsed) {
                    background-color: rgba(102, 126, 234, 0.1) !important;
                    border-color: #667eea !important;
                    color: white !important;
                }
                
                .contact-form-card {
                    position: relative;
                    overflow: hidden;
                }
                
                .contact-form-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                }
                
                .contact-icon {
                    width: 80px;
                    height: 80px;
                    background: rgba(102, 126, 234, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                }
                
                .form-floating > .form-control:focus,
                .form-floating > .form-select:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
                }
                
                .form-floating > label {
                    color: #6c757d;
                }
                
                .contact-info-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(102, 126, 234, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }
                
                .bottom-cta {
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .animated-bg {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .floating-element {
                    position: absolute;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 50%;
                    animation: floatAnimation 8s ease-in-out infinite;
                }
                
                .element-1 {
                    width: 60px;
                    height: 60px;
                    top: 10%;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .element-2 {
                    width: 40px;
                    height: 40px;
                    top: 20%;
                    right: 20%;
                    animation-delay: 1s;
                }
                
                .element-3 {
                    width: 80px;
                    height: 80px;
                    bottom: 30%;
                    left: 15%;
                    animation-delay: 2s;
                }
                
                .element-4 {
                    width: 50px;
                    height: 50px;
                    bottom: 20%;
                    right: 10%;
                    animation-delay: 3s;
                }
                
                .element-5 {
                    width: 70px;
                    height: 70px;
                    top: 50%;
                    left: 50%;
                    animation-delay: 4s;
                }
                
                @keyframes floatAnimation {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.3;
                    }
                    25% { 
                        transform: translateY(-20px) rotate(90deg);
                        opacity: 0.6;
                    }
                    50% { 
                        transform: translateY(-10px) rotate(180deg);
                        opacity: 0.4;
                    }
                    75% { 
                        transform: translateY(-30px) rotate(270deg);
                        opacity: 0.7;
                    }
                }
                
                @media (max-width: 768px) {
                    .contact-form-card {
                        margin-top: 3rem;
                    }
                    
                    .bottom-cta {
                        padding: 2rem 1rem;
                    }
                    
                    .floating-element {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
