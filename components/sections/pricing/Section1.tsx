import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*ai-solutions-pricing section 1*/}
            <section className="ai-solutions-pricing-section-1 position-relative overflow-hidden pt-120 border-top">
                <div className="container position-relative z-1">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6 mt-lg-0 mt-8 wow img-custom-anim-left">
                            <div className="position-relative d-inline-block">
                                <img className="rounded-4" src="assets/imgs/pages/ai-solutions/page-services-details/img-4.png" alt="AstraX" />
                                <img className="position-absolute top-0 start-0 p-5 alltuchtopdown" src="assets/imgs/pages/ai-solutions/page-home/home-section-4/img-2.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h5 className="text-dark mt-3 text-anime-style-2">Kreative AI-løsninger</h5>
                            <p className="mb-6 wow img-custom-anim-top">
                                Våre kreative AI-løsninger er designet for å transformere din bedrifts kreative prosesser. Vi kombinerer kunstig intelligens med menneskelig kreativitet for å levere unike og innovative resultater.
                            </p>
                            <div className="feature-list">
                                <div className="mb-4" data-aos="fade-up" data-aos-delay={0}>
                                    <h6 className="fs-20 mb-3">AI-drevet Innholdsgenerering</h6>
                                    <p className="px-3 fs-6">Automatisk generering av tekst, bilder og videoer tilpasset din merkevare og målgruppe.</p>
                                </div>
                                <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
                                    <h6 className="fs-20 mb-3">Personalisert Brukeropplevelse</h6>
                                    <p className="px-3 fs-6">Dynamisk tilpasning av innhold basert på brukerpreferanser og atferdsmønstre.</p>
                                </div>
                                <div className="mb-4" data-aos="fade-up" data-aos-delay={400}>
                                    <h6 className="fs-20 mb-3">Kreativ Prosessautomatisering</h6>
                                    <p className="px-3 fs-6">Effektivisering av kreative arbeidsflyter gjennom intelligent automatisering.</p>
                                </div>
                                <div className="mb-4" data-aos="fade-up" data-aos-delay={600}>
                                    <h6 className="fs-20 mb-3">Prediktiv Designanalyse</h6>
                                    <p className="px-3 fs-6">Bruk av AI for å forutsi designtrender og optimalisere kreative beslutninger.</p>
                                </div>
                                <div className="mt-5">
                                    <Link href="/contact" className="btn btn-primary">
                                        Kontakt Oss
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
