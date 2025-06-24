"use client";

import CarouselTicker from "@/components/elements/CarouselTicker";
import Link from "next/link";

const slidesContent = [
    <Link key="neura-edge" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-1.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">NeuraEdge</h5>
    </Link>,
    <Link key="aether-ai" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-2.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">AetherAI</h5>
    </Link>,
    <Link key="intellecta" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-3.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">Intellecta</h5>
    </Link>,
    <Link key="cognify-ai" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-4.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">CognifyAI</h5>
    </Link>,
    <Link key="synth-mind" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-5.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">SynthMind</h5>
    </Link>,
    <Link key="inno-aive" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-6.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">InnoAIve</h5>
    </Link>,
    <Link key="intellecta-2" href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="assets/imgs/pages/ai-solutions/icons/lg-3.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">Intellecta</h5>
    </Link>,
];

export default function Section2() {
    return (
        <>
            {/*ai-solutions-about section 2*/}
            <section className="ai-solutions-about-section-2 position-relative overflow-hidden pt-120 pb-120 bg-secondary-2">
                <div className="container position-relative z-1">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <div className="d-inline-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">Vår Visjon</span>
                            </div>
                            <h2 className="text-dark my-3 text-anime-style-3 mb-lg-0">Vi er et lidenskapelig team dedikert til digital innovasjon</h2>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <p className="pb-4 mb-0 wow img-custom-anim-top mb-0">Vi er et lidenskapelig team dedikert til digital innovasjon, og tror at hver stor idé fortjener å bli en inspirerende online opplevelse. Vår visjon er å være den ideelle teknologipartneren for våre klienter, ved å kombinere vår ekspertise innen webutvikling med intelligente AI-løsninger for å levere eksepsjonell verdi og bærekraftig vekst for hvert prosjekt. Vi er forpliktet til å støtte og forbedre din virksomhet, og tilbyr smarte løsninger som styrker din digitale tilstedeværelse og maksimerer din innflytelse.</p>
                        </div>
                    </div>
                    <div className="row mt-5 g-4">
                        <div className="col-md-5">
                            <img className="wow img-custom-anim-left" src="assets/imgs/pages/ai-solutions/page-about/img-2.png" alt="AstraX" />
                        </div>
                        <div className="col-md-7">
                            <img className="wow img-custom-anim-right" src="assets/imgs/pages/ai-solutions/page-about/img-3.png" alt="AstraX" />
                        </div>
                    </div>
                    <div className="mt-80 text-center">
                        <h6 className="text-anime-style-3">Jobbet med over 100+ klienter verden rundt</h6>
                    </div>
                </div>
                <CarouselTicker slides={slidesContent} />
            </section>
        </>
    );
}
