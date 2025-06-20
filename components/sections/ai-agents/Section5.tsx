"use client";
import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/* AI Agents FAQ & Contact Section */}
            <section className="ai-agents-section-5 position-relative overflow-hidden pt-120 pb-120 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* FAQ Section */}
                            <div className="agent-faq-section">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <span className="small-line bg-white" />
                                    <span className="btn-text text-white">Agent FAQ</span>
                                </div>
                                <h2 className="text-white mb-5 text-anime-style-3">
                                    Spørsmål om 
                                    <span className="text-linear"> AI-agenter</span>
                                </h2>

                                <div className="accordion accordion-flush" id="agentFaqAccordion">
                                    {/* FAQ 1 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#agentFaq1">
                                                <i className="bi bi-robot me-3 text-primary"></i>
                                                Hva er forskjellen på AI-agenter og chatbots?
                                            </button>
                                        </h2>
                                        <div id="agentFaq1" className="accordion-collapse collapse" data-bs-parent="#agentFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                AI-agenter er langt mer avanserte enn tradisjonelle chatbots. 
                                                De kan håndtere komplekse oppgaver, ta beslutninger autonomt, 
                                                integrere med multiple systemer og lærer kontinuerlig fra interaksjoner. 
                                                Chatbots følger vanligvis forhåndsprogrammerte regler.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#agentFaq2">
                                                <i className="bi bi-gear me-3 text-primary"></i>
                                                Hvor lang tid tar det å implementere en AI-agent?
                                            </button>
                                        </h2>
                                        <div id="agentFaq2" className="accordion-collapse collapse" data-bs-parent="#agentFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Implementeringstiden varierer fra 2-4 uker for enkle agenter 
                                                til 8-12 uker for komplekse, skreddersydde løsninger. 
                                                Vi starter med en MVP (Minimum Viable Product) og bygger 
                                                gradvis ut funksjonaliteten basert på dine behov.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#agentFaq3">
                                                <i className="bi bi-shield-check me-3 text-primary"></i>
                                                Er AI-agenter sikre å bruke i virksomheten?
                                            </button>
                                        </h2>
                                        <div id="agentFaq3" className="accordion-collapse collapse" data-bs-parent="#agentFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Ja, våre AI-agenter er bygget med sikkerhet som prioritet. 
                                                Vi implementerer kryptering, tilgangskontroll, audit-logging 
                                                og følger GDPR-krav. Agentene kan også konfigureres til å 
                                                eskalere sensitive saker til mennesker.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 4 */}
                                    <div className="accordion-item bg-transparent border-0 mb-3">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed bg-dark text-white border-0 rounded-3 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#agentFaq4">
                                                <i className="bi bi-arrow-repeat me-3 text-primary"></i>
                                                Kan AI-agenter lærer og forbedres over tid?
                                            </button>
                                        </h2>
                                        <div id="agentFaq4" className="accordion-collapse collapse" data-bs-parent="#agentFaqAccordion">
                                            <div className="accordion-body text-white-50 px-4 pb-4">
                                                Absolutt! Våre AI-agenter bruker maskinlæring for å 
                                                kontinuerlig forbedre sine responser og beslutninger. 
                                                De analyserer interaksjonsdata, bruker feedback og 
                                                tilpasser seg endringer i forretningsprosesser.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {/* Contact Form */}
                            <div className="agent-contact-section">
                                <div className="agent-contact-card bg-white rounded-4 p-5 shadow-lg">
                                    <div className="text-center mb-4">
                                        <div className="contact-icon mb-3">
                                            <i className="bi bi-robot text-primary fs-1"></i>
                                        </div>
                                        <h3 className="text-dark mb-2">Bygg din AI-agent</h3>
                                        <p className="text-muted">
                                            Få en gratis konsultasjon og prototype av din egen AI-agent
                                        </p>
                                    </div>

                                    <form className="agent-contact-form">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="agentFirstName" placeholder="Fornavn" required />
                                                    <label htmlFor="agentFirstName">Fornavn *</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="agentLastName" placeholder="Etternavn" required />
                                                    <label htmlFor="agentLastName">Etternavn *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="agentEmail" placeholder="E-post" required />
                                                    <label htmlFor="agentEmail">E-post *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="agentCompany" placeholder="Bedrift" />
                                                    <label htmlFor="agentCompany">Bedrift</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <select className="form-select" id="agentType" required>
                                                        <option value="">Velg agent-type</option>
                                                        <option value="ecommerce">E-commerce Assistant</option>
                                                        <option value="marketing">Marketing & Annonse Agent</option>
                                                        <option value="healthcare">Helseklinikk Assistent</option>
                                                        <option value="finance">Finansrådgiver Agent</option>
                                                        <option value="hr">HR & Rekruttering Agent</option>
                                                        <option value="support">Kundeservice Agent</option>
                                                        <option value="custom">Tilpasset agent</option>
                                                    </select>
                                                    <label htmlFor="agentType">Type AI-agent *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" id="agentMessage" placeholder="Beskriv dine behov" style={{height: '120px'}} required></textarea>
                                                    <label htmlFor="agentMessage">Beskriv hvilke oppgaver agenten skal løse *</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="agentPrivacy" required />
                                                    <label className="form-check-label text-muted small" htmlFor="agentPrivacy">
                                                        Jeg godtar <Link href="#" className="text-primary">personvernreglene</Link> og samtykker til at mine opplysninger behandles.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary btn-lg w-100 hover-up">
                                                    <i className="bi bi-send me-2"></i>
                                                    Start med AI Agent
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Contact Info */}
                                    <div className="agent-contact-info mt-5 pt-4 border-top">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="contact-info-icon">
                                                        <i className="bi bi-telephone text-primary"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Agent-eksperter</h6>
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
                                                        <h6 className="mb-1">Agent-team</h6>
                                                        <p className="text-muted mb-0">agents@ainorab.no</p>
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
                            <div className="agent-bottom-cta">
                                <h3 className="text-white mb-3">Se din AI-agent i aksjon</h3>
                                <p className="text-white-50 mb-4 fs-5">
                                    Book en live demo og opplev kraften av intelligente AI-agenter
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="btn btn-linear btn-lg">
                                        <i className="bi bi-play-circle me-2"></i>
                                        Book live demo
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
                    <div className="agent-constellation">
                        <div className="constellation-node node-1"></div>
                        <div className="constellation-node node-2"></div>
                        <div className="constellation-node node-3"></div>
                        <div className="constellation-node node-4"></div>
                        <div className="constellation-node node-5"></div>
                        <div className="constellation-line line-1"></div>
                        <div className="constellation-line line-2"></div>
                        <div className="constellation-line line-3"></div>
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
                    border-color: rgba(45, 27, 105, 0.3) !important;
                }
                
                .accordion-button:not(.collapsed) {
                    background-color: rgba(45, 27, 105, 0.1) !important;
                    border-color: #2d1b69 !important;
                    color: white !important;
                }
                
                .agent-contact-card {
                    position: relative;
                    overflow: hidden;
                }
                
                .agent-contact-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #2d1b69, #11998e);
                }
                
                .contact-icon {
                    width: 80px;
                    height: 80px;
                    background: rgba(45, 27, 105, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                }
                
                .form-floating > .form-control:focus,
                .form-floating > .form-select:focus {
                    border-color: #2d1b69;
                    box-shadow: 0 0 0 0.25rem rgba(45, 27, 105, 0.25);
                }
                
                .contact-info-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(45, 27, 105, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }
                
                .agent-bottom-cta {
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .agent-constellation {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .constellation-node {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #2d1b69, #11998e);
                    border-radius: 50%;
                    animation: nodeGlow 8s ease-in-out infinite;
                }
                
                .node-1 {
                    top: 15%;
                    left: 15%;
                    animation-delay: 0s;
                }
                
                .node-2 {
                    top: 25%;
                    right: 20%;
                    animation-delay: 1.5s;
                }
                
                .node-3 {
                    bottom: 30%;
                    left: 25%;
                    animation-delay: 3s;
                }
                
                .node-4 {
                    bottom: 20%;
                    right: 15%;
                    animation-delay: 4.5s;
                }
                
                .node-5 {
                    top: 50%;
                    left: 50%;
                    animation-delay: 6s;
                }
                
                .constellation-line {
                    position: absolute;
                    height: 1px;
                    background: linear-gradient(90deg, #2d1b69, #11998e);
                    animation: lineFlicker 6s ease-in-out infinite;
                }
                
                .line-1 {
                    top: 20%;
                    left: 20%;
                    width: 150px;
                    transform: rotate(35deg);
                    animation-delay: 0s;
                }
                
                .line-2 {
                    top: 55%;
                    left: 30%;
                    width: 120px;
                    transform: rotate(-25deg);
                    animation-delay: 2s;
                }
                
                .line-3 {
                    bottom: 25%;
                    right: 20%;
                    width: 100px;
                    transform: rotate(45deg);
                    animation-delay: 4s;
                }
                
                @keyframes nodeGlow {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 0.3;
                        box-shadow: 0 0 10px rgba(45, 27, 105, 0.3);
                    }
                    50% { 
                        transform: scale(1.2);
                        opacity: 0.8;
                        box-shadow: 0 0 20px rgba(17, 153, 142, 0.6);
                    }
                }
                
                @keyframes lineFlicker {
                    0%, 100% { 
                        opacity: 0.2;
                    }
                    50% { 
                        opacity: 0.7;
                    }
                }
                
                @media (max-width: 768px) {
                    .agent-contact-card {
                        margin-top: 3rem;
                    }
                    
                    .agent-bottom-cta {
                        padding: 2rem 1rem;
                    }
                    
                    .constellation-node,
                    .constellation-line {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
