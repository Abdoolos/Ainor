import Link from "next/link";

export default function Section1({ title, display, ds_btn }: any) {
    return (
        <>
            {/*ai-solutions-services section 1*/}
            <section className="ai-solutions-services-section-1 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative z-1">
                    <div className="row align-items-end mb-8">
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Våre tjenester</span>
                            </div>
                            <h2 className="text-dark my-3 text-anime-style-3">Fra visjon til virkelighet: Kunstig intelligens som driver din digitale transformasjon til nye høyder</h2>
                        </div>
                        <div className={`col-lg-4 ms-lg-auto text-lg-end ${display}`}>
                            <Link href="#" className="btn btn-dark mt-3 hover-up">
                                <span>Oppdag mer</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_914_180)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row align-items-center g-4">
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={0}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-1.svg" alt="Ainorab" />
                                <Link href="/ai-radgivning">
                                    <h6 className="mt-4 mb-3">AI-rådgivning</h6>
                                </Link>
                                <p className="mb-4">Vi samarbeider tett med deg for å forstå dine utfordringer og utvikle en plan for å utnytte AI til å drive innovasjon, forbedre effektiviteten og få konkurransefortrinn i din bransje.</p>
                                <Link href="/ai-radgivning" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={200}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-2.svg" alt="Ainorab" />
                                <Link href="/dataanalyse">
                                    <h6 className="mt-4 mb-3">Dataanalyse</h6>
                                </Link>
                                <p className="mb-4">Våre dataanalyseløsninger hjelper bedrifter med å avdekke skjulte mønstre, optimalisere drift og ta datadrevne beslutninger som forbedrer ytelsen og fremmer vekst.</p>
                                <Link href="/dataanalyse" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={400}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-1.svg" alt="Ainorab" />
                                <Link href="/ai-agents">
                                    <h6 className="mt-4 mb-3">AI Agents</h6>
                                </Link>
                                <p className="mb-4">Intelligente AI-agenter som automatiserer komplekse oppgaver, forbedrer kundeservice og optimaliserer forretningsprosesser på tvers av alle bransjer og bruksområder.</p>
                                <Link href="/ai-agents" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={600}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-1.svg" alt="Ainorab" />
                                <Link href="/services-details">
                                    <h6 className="mt-4 mb-3">Naturlig Språkbehandling</h6>
                                </Link>
                                <p className="mb-4">Våre NLP-løsninger forbedrer kundeinteraksjoner gjennom chatbots, følelsesanalyse og talegjenkjenning, og gir dypere innsikt i brukeratferd og forbedrer engasjement.</p>
                                <Link href="/services-details" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={800}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-1.svg" alt="Ainorab" />
                                <Link href="/services-details">
                                    <h6 className="mt-4 mb-3">Prosessautomatisering</h6>
                                </Link>
                                <p className="mb-4">Våre AI-drevne automatiseringsløsninger effektiviserer arbeidsflyten ved å erstatte manuelle oppgaver med intelligente systemer. Ved å automatisere gjentakende prosesser reduserer vi driftskostnadene.</p>
                                <Link href="/services-details" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={1000}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-1.svg" alt="Ainorab" />
                                <Link href="/services-details">
                                    <h6 className="mt-4 mb-3">Brukergrensesnittdesign</h6>
                                </Link>
                                <p className="mb-4">Vi skaper visuelt imponerende og intuitive brukergrensesnitt som forbedrer brukerengasjement og merkevareidentitet, samtidig som vi sikrer konsistens på tvers av alle digitale kontaktpunkter.</p>
                                <Link href="/services-details" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={1200}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-2.svg" alt="Ainorab" />
                                <Link href="/services-details">
                                    <h6 className="mt-4 mb-3">Brukeropplevelsesdesign</h6>
                                </Link>
                                <p className="mb-4">Vi designer sømløse brukeropplevelser gjennom forskning, trådmodeller og prototyping for å skape produkter som begeistrer brukere og møter forretningsmål.</p>
                                <Link href="/services-details" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-stretch" data-aos="fade-up" data-aos-delay={1400}>
                            <div className="p-5 bg-secondary-2 card-services hover-up h-100">
                                <img src="assets/imgs/pages/ai-solutions/icons/icon-1.svg" alt="Ainorab" />
                                <Link href="/services-details">
                                    <h6 className="mt-4 mb-3">Robotløsninger</h6>
                                </Link>
                                <p className="mb-4">Våre robotløsninger gir forbedret nøyaktighet, hastighet og fleksibilitet, og lar bedrifter skalere driften mens de minimerer menneskelige feil og maksimerer produktiviteten.</p>
                                <Link href="/services-details" className="text-decoration-underline text-uppercase fs-7 fw-semibold">
                                    Les mer
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`text-center mt-8 ${ds_btn}`}>
                        <Link href="#" className="btn btn-linear hover-up">
                            Omfavn fremtiden
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
