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
                                <a href="/assets/flow-diagram.html" target="_blank" rel="noopener noreferrer" className="d-inline-block hover-scale">
                                    <img data-aos="flip-left" src="assets/imgs/pages/ai-solutions/Tjeneste Detaljer/a3.png" alt="NorAb Data Agents" style={{ transition: "transform 0.3s ease" }} />
                                </a>
                                <a href="/assets/flow-diagram.html" target="_blank" rel="noopener noreferrer" className="d-block mt-5 mb-4 text-decoration-none">
                                    <h6 className="text-anime-style-2">Launching "NorAb Data Agents"</h6>
                                </a>
                                <div className="text-anime-style-1">
                                    <p> My do-it-all analytics companion built entirely from open-source AI agents!</p>
                                    <p>Over the past few months I went from spreadsheet chaos to an autonomous pipeline that discovers, cleans, models and visualises our data with almost no manual touch-points. Here's the journey in a nutshell:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="mb-2">
                                                <span className="text-dark fw-bold">Initial Analysis:</span> Mapped the problem → interviewed stakeholders and listed the 42 metrics that really matter.
                                            </p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="mb-2">
                                                <span className="text-dark fw-bold">AI Integration:</span> Chained specialized agents for autonomous tasks, planning, orchestration, and collaboration.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0">
                                                <span className="text-dark fw-bold">Impact:</span> Reports that used to take two days now refresh in 10 minutes, saving ≈ €35k/yr.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <Link href="/emotion-analysis" className="d-inline-block hover-scale">
                                    <img data-aos="flip-left" src="assets/imgs/pages/ai-solutions/Tjeneste Detaljer/Emot2.png" alt="Ainorab Emotion Analysis" style={{ transition: "transform 0.3s ease" }} />
                                </Link>
                                <Link href="/emotion-analysis" className="d-block mt-5 mb-4 text-decoration-none">
                                    <h6 className="text-anime-style-2">Ainorab – Advanced Emotion Analysis Agent</h6>
                                </Link>
                                <div className="text-anime-style-1">
                                    <p>Ainorab is an innovative AI-powered agent designed for comprehensive emotion analysis and psychological insight. Built and developed by our team, this tool utilizes state-of-the-art language models to detect, track, and interpret complex human emotions from text inputs.</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="mb-2">
                                                <span className="text-dark fw-bold">Advanced Analysis:</span> Unlike simple sentiment analysis, Ainorab delivers detailed psychological reports and identifies triggers and patterns.
                                            </p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="mb-2">
                                                <span className="text-dark fw-bold">Modern Interface:</span> User-friendly interface with emotion timelines, trigger extraction, session histories, and AI-driven suggestions.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0">
                                                <span className="text-dark fw-bold">Ethical & Secure:</span> Combines accuracy, usability, and ethical data handling for individuals, therapists, and organizations.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
