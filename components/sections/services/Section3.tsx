import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*ai-solutions-services section 3*/}
            <section className="ai-solutions-services-section-3 position-relative overflow-hidden pt-120">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-3 order-lg-1 mt-lg-0 mt-8 d-none d-lg-block">
                            <img className="wow img-custom-anim-top" src="assets/imgs/pages/ai-solutions/page-services/img-2.png" alt="AstraX" />
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 ">
                            <div className="d-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Hvordan det fungerer</span>
                            </div>
                            <h2 className="text-dark mt-3 pb-5 text-anime-style-3">Måter vi kan hjelpe</h2>
                            <div className="px-3 border-start border-primary border-5 mb-5">
                                <h6 className="text-dark my-3 text-anime-style-3">01. Definer dine behov</h6>
                                <p className="wow img-custom-anim-top fw-bold">
                                    Tilpass din AI-løsning: <span className="fw-regular">Start med å fortelle oss dine mål. Enten det er automatisering av oppgaver, prediksjon av trender eller forbedring av kundeopplevelser, tilpasser vi vår AI for å møte dine behov.</span>
                                </p>
                            </div>
                            <div className="px-3 border-start border-primary border-5 mb-5">
                                <h6 className="text-dark my-3 text-anime-style-3">02. Integrer dine data</h6>
                                <p className="wow img-custom-anim-top fw-bold">
                                    Koble til, last opp og tren: <span className="fw-regular">Last opp data sikkert via dra-og-slipp, API eller direkte skyintegrering. Vår plattform rengjør, analyserer og trener AI-modeller i sanntid.</span>
                                </p>
                            </div>
                            <div className="px-3 border-start border-primary border-5 mb-5">
                                <h6 className="text-dark my-3 text-anime-style-3">03. Distribuer og skaler</h6>
                                <p className="wow img-custom-anim-top fw-bold">
                                    Start din AI hvor som helst: <span className="fw-regular">Aktiver AI-løsningen din umiddelbart. Integrer den i dine applikasjoner, arbeidsflyter eller kundekanaler med ett klikk. AI lærer og forbedres mens den samhandler med nye data.</span>
                                </p>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                <Link href="/services-detail" className="btn btn-linear hover-up">
                                    Les mer
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </svg>
                                </Link>
                                <Link href="#" className="btn btn-outline-secondary">
                                    Hvorfor velge oss?
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
