"use client";

export default function Section2() {
    return (
        <>
            {/* Dataanalyse Services Section */}
            <section id="services" className="dataanalyse-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-8">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Data Science Tjenester</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Komplette dataløsninger for 
                                <span className="text-linear"> intelligente bedrifter</span>
                            </h2>
                            <p className="text-muted fs-5">
                                Vi leverer skreddersydde data science-løsninger som transformerer rå data til verdifulle forretningsinnsikter
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="data-service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-bar-chart-fill text-primary fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Prediktiv Analyse</h5>
                                <p className="text-muted mb-4">
                                    Bruk maskinlæring og statistiske modeller for å forutsi fremtidige trender, 
                                    kundeadferd og markedsutvikling. Ta proaktive beslutninger basert på dataforutsigelser.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Tidsserieanalyse og prognoser</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Kundesegmentering og churn-predikering</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Risikoanalyse og scenariomodellering</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="data-service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-graph-up text-success fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Business Intelligence</h5>
                                <p className="text-muted mb-4">
                                    Transformer komplekse datasett til tydelige, handlingsrettede rapporter og dashboards. 
                                    Få sanntidsinnsikt i din virksomhets ytelse og KPI-er.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Interaktive dashboards og rapporter</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>KPI-overvåking og ytelsesmålinger</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Selvbetjente analyseløsninger</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-graph-up"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="data-service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-hdd-stack text-warning fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Big Data Engineering</h5>
                                <p className="text-muted mb-4">
                                    Bygg robuste datainfrastrukturer som håndterer store volumer av strukturerte og 
                                    ustrukturerte data. Optimaliser dataflow og prosessering.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Data lakes og data warehouses</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>ETL/ELT-pipelines og dataintegrasjon</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Cloud-baserte dataløsninger</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-hdd-stack"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="data-service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-cpu text-info fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Machine Learning Modeller</h5>
                                <p className="text-muted mb-4">
                                    Utvikle og implementere tilpassede ML-modeller som lærer fra dine data. 
                                    Automatiser beslutningsprosesser og forbedre nøyaktigheten kontinuerlig.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Supervised og unsupervised learning</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Deep learning og neural networks</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>MLOps og modellvedlikehold</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-cpu"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800">
                            <div className="data-service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-eye text-danger fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Computer Vision</h5>
                                <p className="text-muted mb-4">
                                    Analyser bilder og videoer automatisk for å identifisere objekter, mønstre og anomalier. 
                                    Implementer bildegjenkjenning og visuell kvalitetskontroll.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Objektdeteksjon og klassifisering</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>OCR og dokumentanalyse</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Ansiktsgjenkjenning og biometri</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-eye"></i>
                                </div>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="1000">
                            <div className="data-service-card h-100 p-5 bg-white rounded-4 shadow-sm hover-up position-relative overflow-hidden">
                                <div className="service-icon mb-4">
                                    <div className="icon-wrapper">
                                        <i className="bi bi-shield-check text-purple fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Data Governance</h5>
                                <p className="text-muted mb-4">
                                    Sikre datakvalitet, compliance og sikkerhet gjennom hele datalivssyklusen. 
                                    Etabler retningslinjer for dataforvaltning og personvern.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Datakvalitetsstyring og validering</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>GDPR-compliance og personvern</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2 text-success me-2"></i>
                                        <span>Master data management</span>
                                    </li>
                                </ul>
                                <div className="service-bg-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .dataanalyse-section-2 {
                    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .data-service-card {
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .data-service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
                }
                
                .service-icon .icon-wrapper {
                    width: 80px;
                    height: 80px;
                    background: rgba(30, 60, 114, 0.1);
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
                
                .data-service-card:hover .service-icon .icon-wrapper::before {
                    left: 100%;
                }
                
                .service-bg-icon {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    font-size: 120px;
                    color: rgba(30, 60, 114, 0.05);
                    z-index: 0;
                }
                
                .data-service-card h5,
                .data-service-card p,
                .data-service-card ul {
                    position: relative;
                    z-index: 1;
                }
                
                .text-purple {
                    color: #6f42c1 !important;
                }
                
                @media (max-width: 768px) {
                    .data-service-card {
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
        </>
    );
}
