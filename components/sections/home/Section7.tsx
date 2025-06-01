import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*ai-solutions home section 7*/}
            <section className="ai-solutions-home-section-7 position-relative overflow-hidden py-120 bg-dark">
                <img className="position-absolute top-0 start-0" data-aos="fade-right" data-aos-delay={400} src="assets/imgs/pages/ai-solutions/page-home/home-section-7/bg-top.png" alt="AstraX" />
                <img className="position-absolute bottom-0 end-0" data-aos="fade-left" data-aos-delay={400} src="assets/imgs/pages/ai-solutions/page-home/home-section-7/bg-bottom.png" alt="AstraX" />
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">Spørsmål og Svar</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-white mt-3 mb-8 text-anime-style-2">Finn svar på alle spørsmål</h2>
                    </div>
                    <div className="row flex-wrap align-items-end wow img-custom-anim-left">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion-2">
                                <div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-white">Hva er SEO og trenger bedriften min SEO?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="collapse1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular">SEO er avgjørende for din online synlighet. Vi tilbyr skreddersydde SEO-løsninger som hjelper din bedrift med å nå flere kunder og øke synligheten i søkemotorer.</p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-white">Hva er Googles viktigste rangeringsfaktorer?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="collapse2" className="collapse show" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular">Googles viktigste rangeringsfaktorer inkluderer innholdskvalitet, brukervennlighet, mobiloptimalisering, sidens lastetid og autoritet. Vi hjelper deg med å optimalisere for alle disse faktorene.</p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-white">Hjelper sosiale medier med å øke nettstedets rangering?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="collapse3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular">Ja, sosiale medier kan indirekte påvirke din rangering ved å øke synlighet, engasjement og trafikk til nettstedet. Vi hjelper deg med å utnytte sosiale medier effektivt.</p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-white">Hva er forskjellen mellom on-page SEO og teknisk SEO?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="collapse4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular">On-page SEO fokuserer på innhold og optimalisering av enkeltsider, mens teknisk SEO handler om nettstedets tekniske aspekter som lastetid, mobilvisning og indeksering.</p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-white">Hvordan lager jeg SEO-vennlig innhold?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="collapse5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular">For å lage SEO-vennlig innhold bør du fokusere på relevant nøkkelordbruk, kvalitetsinnhold, god struktur og informativ verdi for leserne. Vi kan guide deg gjennom hele prosessen.</p>
                                    </div>
                                </div>
                                <div className="px-0 card rounded-top-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-bottom-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-white">Hvorfor har den organiske trafikken min falt?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="collapse6" className="collapse rounded-bottom-3" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular">Nedgang i organisk trafikk kan skyldes algoritmeendringer, tekniske problemer eller økt konkurranse. Vi kan analysere årsakene og hjelpe deg med å gjenopprette og forbedre trafikken.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
