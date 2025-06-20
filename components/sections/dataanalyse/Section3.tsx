"use client";

export default function Section3() {
    return (
        <>
            {/* Data Process Section */}
            <section className="dataanalyse-section-3 position-relative overflow-hidden pt-120 pb-120 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line bg-white" />
                                <span className="btn-text text-white">Vår dataprosess</span>
                                <span className="small-line bg-white" />
                            </div>
                            <h2 className="text-white mb-4 text-anime-style-3">
                                Fra rå data til 
                                <span className="text-linear"> verdifulle innsikter</span>
                            </h2>
                            <p className="text-white-50 fs-5">
                                En strukturert tilnærming som transformerer dine data til konkurransefortrinn
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Step 1 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="data-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>01</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-collection text-primary fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Datainnsamling</h5>
                                <p className="text-white-50">
                                    Vi samler og integrerer data fra alle relevante kilder - 
                                    databaser, API-er, filer og sanntidsstrømmer.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="data-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>02</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-funnel text-success fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Databehandling</h5>
                                <p className="text-white-50">
                                    Rensing, validering og transformering av data 
                                    for å sikre høy kvalitet og konsistens.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="data-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>03</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-cpu-fill text-warning fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Analyse & Modellering</h5>
                                <p className="text-white-50">
                                    Anvendelse av statistiske metoder og maskinlæring 
                                    for å finne mønstre og bygge prediktive modeller.
                                </p>
                                <div className="step-connector"></div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="data-process-step text-center position-relative">
                                <div className="step-number">
                                    <span>04</span>
                                </div>
                                <div className="step-icon mb-4">
                                    <i className="bi bi-graph-up-arrow text-info fs-1"></i>
                                </div>
                                <h5 className="text-white mb-3">Innsikter & Rapporter</h5>
                                <p className="text-white-50">
                                    Levering av handlingsrettede innsikter gjennom 
                                    dashboards, rapporter og automatiserte varsler.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Animation */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
                    <div className="data-flow-animation">
                        <div className="flow-line flow-1"></div>
                        <div className="flow-line flow-2"></div>
                        <div className="flow-line flow-3"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .data-process-step {
                    padding: 2rem 1rem;
                }
                
                .step-number {
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: white;
                    font-size: 1.2rem;
                    box-shadow: 0 10px 30px rgba(30, 60, 114, 0.3);
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
                    background: linear-gradient(90deg, #1e3c72, transparent);
                    z-index: -1;
                }
                
                .col-lg-3:last-child .step-connector {
                    display: none;
                }
                
                .data-flow-animation {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .flow-line {
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(90deg, #1e3c72, #2a5298);
                    animation: flowAnimation 4s ease-in-out infinite;
                }
                
                .flow-1 {
                    top: 20%;
                    width: 200px;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .flow-2 {
                    top: 50%;
                    width: 150px;
                    right: 15%;
                    animation-delay: 1.5s;
                }
                
                .flow-3 {
                    bottom: 20%;
                    width: 180px;
                    left: 20%;
                    animation-delay: 3s;
                }
                
                @keyframes flowAnimation {
                    0% { 
                        opacity: 0;
                        transform: scaleX(0);
                    }
                    50% { 
                        opacity: 1;
                        transform: scaleX(1);
                    }
                    100% { 
                        opacity: 0;
                        transform: scaleX(0);
                    }
                }
                
                @media (max-width: 768px) {
                    .step-connector {
                        display: none;
                    }
                    
                    .flow-line {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
