"use client";

export default function Section3() {
    return (
        <>
            {/* AI Agents Implementation Process */}
            <section className="ai-agents-section-3 position-relative overflow-hidden pt-120 pb-120 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line bg-white" />
                                <span className="btn-text text-white">Implementeringsprosess</span>
                                <span className="small-line bg-white" />
                            </div>
                            <h2 className="text-white mb-4 text-anime-style-3">
                                Fra konsept til 
                                <span className="text-linear"> aktive AI-agenter</span>
                            </h2>
                            <p className="text-white-50 fs-5">
                                En sømløs prosess som tar dine AI-agenter fra idé til full produksjon
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Step 1 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="agent-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>01</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-search text-primary fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Behovsanalyse</h5>
                                <p className="text-white-50">
                                    Vi analyserer dine forretningsprosesser og identifiserer 
                                    hvor AI-agenter kan gi størst verdi og effektivitet.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="agent-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>02</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-robot text-success fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Agent Design</h5>
                                <p className="text-white-50">
                                    Vi designer og utvikler skreddersydde AI-agenter 
                                    tilpasset dine spesifikke behov og arbeidsflyter.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="agent-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>03</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-gear-wide-connected text-warning fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Integrering</h5>
                                <p className="text-white-50">
                                    Sømløs integrasjon med eksisterende systemer og 
                                    sikker deployment i ditt miljø.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="agent-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>04</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-arrow-repeat text-info fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Optimalisering</h5>
                                <p className="text-white-50">
                                    Kontinuerlig læring og forbedring av agentenes 
                                    ytelse basert på data og feedback.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="row mt-8">
                        <div className="col-lg-10 mx-auto">
                            <div className="agent-benefits-grid">
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="0">
                                    <div className="benefit-icon">
                                        <i className="bi bi-clock text-primary"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">24/7 Drift</h6>
                                        <p className="text-white-50">Aldri nedetid eller pauser</p>
                                    </div>
                                </div>
                                
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="benefit-icon">
                                        <i className="bi bi-lightning text-warning"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Instant respons</h6>
                                        <p className="text-white-50">Øyeblikkelig håndtering</p>
                                    </div>
                                </div>
                                
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="400">
                                    <div className="benefit-icon">
                                        <i className="bi bi-shield-check text-success"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Konsistent kvalitet</h6>
                                        <p className="text-white-50">Samme høye standard hver gang</p>
                                    </div>
                                </div>
                                
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="600">
                                    <div className="benefit-icon">
                                        <i className="bi bi-graph-up text-info"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Skalbar løsning</h6>
                                        <p className="text-white-50">Vokser med dine behov</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Animation */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
                    <div className="agent-network">
                        <div className="network-node node-1"></div>
                        <div className="network-node node-2"></div>
                        <div className="network-node node-3"></div>
                        <div className="network-node node-4"></div>
                        <div className="network-connection connection-1"></div>
                        <div className="network-connection connection-2"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .agent-process-step {
                    padding: 2rem 1rem;
                }
                
                .step-number {
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: white;
                    font-size: 1.2rem;
                    box-shadow: 0 10px 30px rgba(45, 27, 105, 0.3);
                }
                
                .step-icon {
                    margin-top: 3rem;
                }
                
                .step-connector {
                    position: absolute;
                    top: 20px;
                    right: -50%;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, #2d1b69, transparent);
                    z-index: -1;
                }
                
                .col-lg-3:last-child .step-connector {
                    display: none;
                }
                
                .agent-benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }
                
                .benefit-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .benefit-item:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateY(-5px);
                }
                
                .benefit-icon {
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    flex-shrink: 0;
                }
                
                .benefit-content h6 {
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                }
                
                .benefit-content p {
                    margin: 0;
                    font-size: 0.9rem;
                }
                
                .agent-network {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .network-node {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #2d1b69, #11998e);
                    border-radius: 50%;
                    animation: nodeFloat 6s ease-in-out infinite;
                }
                
                .node-1 {
                    top: 15%;
                    left: 15%;
                    animation-delay: 0s;
                }
                
                .node-2 {
                    top: 20%;
                    right: 20%;
                    animation-delay: 1.5s;
                }
                
                .node-3 {
                    bottom: 25%;
                    left: 20%;
                    animation-delay: 3s;
                }
                
                .node-4 {
                    bottom: 20%;
                    right: 15%;
                    animation-delay: 4.5s;
                }
                
                .network-connection {
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(90deg, #2d1b69, #11998e);
                    animation: connectionPulse 4s ease-in-out infinite;
                }
                
                .connection-1 {
                    top: 20%;
                    left: 20%;
                    width: 200px;
                    animation-delay: 0s;
                }
                
                .connection-2 {
                    bottom: 25%;
                    right: 20%;
                    width: 150px;
                    animation-delay: 2s;
                }
                
                @keyframes nodeFloat {
                    0%, 100% { 
                        transform: translateY(0px);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translateY(-20px);
                        opacity: 0.7;
                    }
                }
                
                @keyframes connectionPulse {
                    0%, 100% { 
                        opacity: 0.2;
                        transform: scaleX(1);
                    }
                    50% { 
                        opacity: 0.6;
                        transform: scaleX(1.2);
                    }
                }
                
                @media (max-width: 768px) {
                    .step-connector {
                        display: none;
                    }
                    
                    .agent-benefits-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .benefit-item {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .network-node,
                    .network-connection {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
