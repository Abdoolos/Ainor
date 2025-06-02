import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*ai-solutions-services-details section 1*/}
            <section className="ai-solutions-services-details-section-1 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative z-1">
                    <div className="row align-items-end mb-8">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Teknisk Fordel</span>
                            </div>
                            <h2 className="text-dark my-3 text-anime-style-3 mb-lg-0">
                                Forvandler Data til <br />
                                Handlingskraftig Intelligens
                            </h2>
                        </div>
                        <div className="col-lg-5 ms-lg-auto">
                            <p className="mb-0 wow img-custom-anim-top">
                                Utnytt kraften i maskinlæring (ML) for å automatisere arbeidsflyter, forutsi trender og låse opp skjulte innsikter fra dataene dine. Våre <span className="text-dark fw-bold">ende-til-ende ML</span>-løsninger er skreddersydd for din bransje, og sikrer presisjon, skalerbarhet og målbare resultater.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div>
                                <img data-aos="flip-left" src="assets/imgs/pages/ai-solutions/page-services-details/img-1.png" alt="AstraX" />
                                <h6 className="mt-5 mb-4 text-anime-style-2">Tilpasset ML-modellutvikling</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="text-anime-style-1">
                                            <span className="text-dark fw-bold">Skreddersydde Algoritmer:</span> Bygg modeller spesifikke for dine forretningsbehov—prediktiv analyse, NLP, datasyn eller anbefalingsmotorer.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-anime-style-1">
                                            <span className="text-dark fw-bold">Ende-til-ende Støtte:</span> Fra dataforbehandling til implementering håndterer vi hver fase av ML-livssyklusen.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img data-aos="flip-left" src="assets/imgs/pages/ai-solutions/page-services-details/img-2.png" alt="AstraX" />
                                <h6 className="mt-5 mb-4 text-anime-style-2">Ferdigbygde AI-løsninger</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="text-anime-style-1">
                                            <span className="text-dark fw-bold">Bransjespesifikke Maler:</span> Akseler implementering med klare modeller for helsevesen, detaljhandel, finans og produksjon.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-anime-style-1">
                                            <span className="text-dark fw-bold">Plug-and-Play Integrasjon:</span> API-er og no-code verktøy for å integrere ML i eksisterende systemer (f.eks. CRM, ERP).
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
