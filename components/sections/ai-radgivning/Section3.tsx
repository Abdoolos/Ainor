"use client";

export default function Section3() {
    return (
        <>
            {/* AI-rådgivning Process Section */}
            <section className="ai-radgivning-section-3 position-relative overflow-hidden pt-120 pb-120 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line bg-white" />
                                <span className="btn-text text-white">Vår arbeidsmetode</span>
                                <span className="small-line bg-white" />
                            </div>
                            <h2 className="text-white mb-4 text-anime-style-3">
                                Fra konsept til implementering - 
                                <span className="text-linear"> en strukturert tilnærming</span>
                            </h2>
                            <p className="text-white-50 fs-5">
                                Vi følger en bevist metodikk som sikrer suksess i hvert AI-prosjekt
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Step 1 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="process-step text-center position-relative">
                                <div className="step-number">
                                    <span>01</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-search text-primary fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Analyse og kartlegging</h5>
                                <p className="text-white-50">
                                    Vi starter med en grundig analyse av din nåværende situasjon, 
                                    utfordringer og muligheter for AI-implementering.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="process-step text-center position-relative">
                                <div className="step-number">
                                    <span>02</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-clipboard-data text-success fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Strategiutvikling</h5>
                                <p className="text-white-50">
                                    Basert på analysen utvikler vi en skreddersydd AI-strategi 
                                    som er tilpasset dine forretningsmål og ressurser.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="process-step text-center position-relative">
                                <div className="step-number">
                                    <span>03</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-gear-wide-connected text-warning fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Implementering</h5>
                                <p className="text-white-50">
                                    Vi implementerer AI-løsningene trinnvis, med fokus på 
                                    kvalitet, sikkerhet og minimal forstyrrelse av din drift.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="process-step text-center position-relative">
                                <div className="step-number">
                                    <span>04</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-arrow-repeat text-info fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Optimalisering</h5>
                                <p className="text-white-50">
                                    Kontinuerlig overvåking og optimalisering sikrer at 
                                    AI-løsningene presterer optimalt og leverer forventet verdi.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Visualization */}
                    <div className="row mt-8">
                        <div className="col-12">
                            <div className="timeline-container">
                                <div className="timeline-line"></div>
                                <div className="timeline-progress"></div>
                                
                                <div className="timeline-item" style={{left: '12.5%'}}>
                                    <div className="timeline-dot">
                                        <i className="bi bi-search"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h6>Uke 1-2</h6>
                                        <p>Analyse</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-item" style={{left: '37.5%'}}>
                                    <div className="timeline-dot">
                                        <i className="bi bi-clipboard-data"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h6>Uke 3-4</h6>
                                        <p>Strategi</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-item" style={{left: '62.5%'}}>
                                    <div className="timeline-dot">
                                        <i className="bi bi-gear-wide-connected"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h6>Uke 5-12</h6>
                                        <p>Implementering</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-item" style={{left: '87.5%'}}>
                                    <div className="timeline-dot">
                                        <i className="bi bi-arrow-repeat"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h6>Kontinuerlig</h6>
                                        <p>Optimalisering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="row mt-8">
                        <div className="col-lg-10 mx-auto">
                            <div className="benefits-grid">
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="0">
                                    <div className="benefit-icon">
                                        <i className="bi bi-lightning-charge text-warning"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Rask implementering</h6>
                                        <p className="text-white-50">Effektiv prosess som minimerer nedetid</p>
                                    </div>
                                </div>
                                
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="benefit-icon">
                                        <i className="bi bi-shield-check text-success"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Sikker implementering</h6>
                                        <p className="text-white-50">Fokus på sikkerhet og compliance</p>
                                    </div>
                                </div>
                                
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="400">
                                    <div className="benefit-icon">
                                        <i className="bi bi-people text-info"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Kompetanseoverføring</h6>
                                        <p className="text-white-50">Vi lærer opp ditt team underveis</p>
                                    </div>
                                </div>
                                
                                <div className="benefit-item" data-aos="fade-up" data-aos-delay="600">
                                    <div className="benefit-icon">
                                        <i className="bi bi-graph-up text-primary"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h6 className="text-white">Målbare resultater</h6>
                                        <p className="text-white-50">Tydelige KPI-er og ROI-måling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Animation */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .process-step {
                    padding: 2rem 1rem;
                }
                
                .step-number {
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: white;
                    font-size: 1.2rem;
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
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
                    background: linear-gradient(90deg, #667eea, transparent);
                    z-index: -1;
                }
                
                .col-lg-3:last-child .step-connector {
                    display: none;
                }
                
                .timeline-container {
                    position: relative;
                    height: 120px;
                    margin: 2rem 0;
                }
                
                .timeline-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
                
                .timeline-progress {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 75%;
                    height: 4px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    border-radius: 2px;
                    animation: progressGrow 3s ease-in-out infinite;
                }
                
                .timeline-item {
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                
                .timeline-dot {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
                    margin-bottom: 1rem;
                }
                
                .timeline-content {
                    text-align: center;
                    margin-top: 1rem;
                }
                
                .timeline-content h6 {
                    color: white;
                    margin-bottom: 0.5rem;
                }
                
                .timeline-content p {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                }
                
                .benefits-grid {
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
                
                .floating-shapes {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .shape {
                    position: absolute;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    animation: float 6s ease-in-out infinite;
                }
                
                .shape-1 {
                    width: 100px;
                    height: 100px;
                    top: 10%;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .shape-2 {
                    width: 60px;
                    height: 60px;
                    top: 20%;
                    right: 15%;
                    animation-delay: 1s;
                }
                
                .shape-3 {
                    width: 80px;
                    height: 80px;
                    bottom: 20%;
                    left: 20%;
                    animation-delay: 2s;
                }
                
                .shape-4 {
                    width: 120px;
                    height: 120px;
                    bottom: 10%;
                    right: 10%;
                    animation-delay: 3s;
                }
                
                @keyframes progressGrow {
                    0%, 100% { width: 75%; }
                    50% { width: 85%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-20px) rotate(120deg); }
                    66% { transform: translateY(10px) rotate(240deg); }
                }
                
                @media (max-width: 768px) {
                    .step-connector {
                        display: none;
                    }
                    
                    .timeline-container {
                        display: none;
                    }
                    
                    .benefits-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .benefit-item {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </>
    );
}
