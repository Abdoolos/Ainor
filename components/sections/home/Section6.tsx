import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*ai-solutions-home section 6*/}
            <section className="ai-solutions-home-section-6 position-relative overflow-hidden py-120">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-auto me-lg-auto">
                            <div className="d-flex align-items-center gap-3">
                                <span className="small-line" />
                            <span className="btn-text text-primary">AI-løsninger</span>
                            </div>
                            <h2 className="text-dark my-3 text-anime-style-3">Kraftige AI-løsninger for din bedrift</h2>
                        </div>
                        <div className="col-lg-auto align-self-end">
                            <Link href="/contact" className="btn btn-dark">
                                Kontakt Oss
                            </Link>
                        </div>
                    </div>
                    <div className="row g-lg-5 g-4 mt-3">
                        <div className="col-lg-4">
                            <div className="card-pricing card-basic rounded-4 p-md-6 p-4" data-aos="fade-up" data-aos-delay={200}>
                                <span className="text-primary btn-text">Automatisering</span>
                                <p className="fs-7 mb-5">Kraftige AI-løsninger for automatisering av forretningsprosesser</p>
                                <span className="btn-text">Funksjoner:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Arbeidsflytautomatisering</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Intelligent dokumentbehandling</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Dataanalyse og rapportering</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top pt-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">24/7 teknisk støtte</p>
                                    </li>
                                </ul>
                                <Link href="/contact" className="btn btn-outline-dark w-100 mt-6 hover-up">
                                    Kontakt Oss
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-pricing card-advanced rounded-4 p-md-6 p-4 position-relative" data-aos="fade-up" data-aos-delay={400}>
                                <span className="text-primary btn-text">Maskinlæring</span>
                                <p className="fs-7 mb-5">Avanserte maskinlæringsløsninger for intelligent dataanalyse</p>
                                <span className="btn-text">Funksjoner:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Prediktiv analyse</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Mønstergjenkjenning</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Sanntidsanalyse</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top pt-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Dedikert støtte</p>
                                    </li>
                                </ul>
                                <Link href="/contact" className="btn btn-linear hover-up w-100 mt-6">
                                    Kontakt Oss
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-pricing card-team rounded-4 p-md-6 p-4" data-aos="fade-up" data-aos-delay={600}>
                                <span className="text-primary btn-text">Kunstig Intelligens</span>
                                <p className="fs-7 mb-5">Avanserte AI-løsninger for optimalisering og beslutningsstøtte</p>
                                <span className="btn-text">Funksjoner:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Naturlig språkbehandling</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Bildegjenkjenning</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top py-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Prediktiv modellering</p>
                                    </li>
                                    <li className="border-card d-flex align-items-center gap-3 border-top pt-3">
                                        <img src="assets/imgs/template/icons/plus.svg" alt="AstraX" />
                                        <p className="fs-7 mb-0">Ekspertstøtte 24/7</p>
                                    </li>
                                </ul>
                                <Link href="/contact" className="btn btn-outline-dark w-100 mt-6 hover-up">
                                    Kontakt Oss
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
                            <div className="d-flex align-items-center gap-3" data-aos="fade-up" data-aos-delay={0}>
                                <div className="d-block">
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                        <g clipPath="url(#clip0_349_1213)">
                                            <path d="M13.9476 4.03755C13.8717 3.96164 13.7721 3.92368 13.6723 3.92368C13.5727 3.92368 13.473 3.96161 13.3971 4.03751C13.2453 4.18932 13.2453 4.43632 13.3971 4.58809C13.5489 4.73997 13.7959 4.7399 13.9476 4.58809C14.0211 4.51455 14.0616 4.41678 14.0616 4.31278C14.0617 4.20886 14.0212 4.11109 13.9476 4.03755Z" fill="#0D6EFD" />
                                            <path d="M7.50275 9.75126C7.39735 9.64586 7.29782 9.59485 7.20403 9.59794C7.11026 9.60114 7.017 9.64902 6.92429 9.74177L6.61133 10.0547L7.19928 10.6427L7.51224 10.3297C7.60495 10.237 7.65287 10.1438 7.65606 10.05C7.65923 9.95625 7.60815 9.85669 7.50275 9.75126Z" fill="#0D6EFD" />
                                            <path
                                                d="M17.9738 6.94841L17.1162 2.20497C16.9953 1.5357 16.4643 1.00473 15.7951 0.883727L11.0516 0.0261619C10.5229 -0.0694278 9.98084 0.100306 9.60112 0.480028L0.480058 9.60112C0.170507 9.91067 0 10.3222 0 10.76C0 11.1978 0.170472 11.6094 0.480058 11.9189L6.08114 17.5199C6.39069 17.8295 6.80226 18 7.24003 18C7.67779 18 8.0894 17.8295 8.39892 17.5199L17.52 8.39889C17.8997 8.01913 18.0694 7.47688 17.9738 6.94841ZM6.75185 13.5966C6.7297 13.6714 6.68495 13.7425 6.61755 13.8099C6.55005 13.8774 6.479 13.9222 6.40419 13.9442C6.32938 13.9664 6.26782 13.9532 6.21927 13.9047L4.21206 11.8975C4.16362 11.849 4.14723 11.7906 4.16305 11.7221C4.1788 11.6536 4.21625 11.5899 4.27527 11.5308L5.37215 10.434C5.42059 10.3855 5.4786 10.3697 5.54596 10.3865C5.61346 10.4034 5.67554 10.4403 5.73246 10.4972C5.79356 10.5584 5.83206 10.6231 5.84788 10.6916C5.86363 10.7602 5.84834 10.8175 5.802 10.8639L4.98328 11.6826L5.51752 12.2168L5.99483 11.7395C6.04113 11.6932 6.09647 11.6758 6.16077 11.6873C6.22504 11.6989 6.28354 11.7311 6.33616 11.7838C6.38464 11.8322 6.41519 11.8881 6.42785 11.9513C6.44044 12.0145 6.42258 12.0704 6.37413 12.1188L5.89682 12.5961L6.71234 13.4117C6.76089 13.4602 6.774 13.5218 6.75185 13.5966ZM9.4387 10.8623C9.42713 10.9835 9.38442 11.081 9.31066 11.1547C9.23687 11.2285 9.15369 11.2506 9.06094 11.2211L7.78709 10.8134L7.57848 11.022L8.34024 11.7838C8.38876 11.8323 8.40187 11.8939 8.37976 11.9687C8.35757 12.0436 8.31282 12.1147 8.24543 12.1821C8.17796 12.2495 8.10688 12.2943 8.0321 12.3164C7.95725 12.3386 7.89569 12.3254 7.84718 12.2769L5.8368 10.2665C5.79676 10.2264 5.77627 10.1775 5.77518 10.1195C5.77416 10.0616 5.79578 10.0104 5.84004 9.96619L6.49437 9.31186C7.01274 8.79348 7.49748 8.75973 7.94843 9.21068C8.27714 9.53946 8.36351 9.88086 8.2076 10.2348L9.29178 10.5478C9.31713 10.552 9.34131 10.5657 9.36448 10.5889C9.42555 10.6501 9.4503 10.7412 9.4387 10.8623ZM11.1852 9.24236L10.0599 10.3676C10.0008 10.4267 9.93714 10.464 9.86859 10.4799C9.8001 10.4957 9.74171 10.4793 9.69319 10.4308L7.68599 8.4236C7.63754 8.37516 7.62116 8.31673 7.63698 8.24824C7.65276 8.17972 7.69017 8.11602 7.7492 8.05696L8.87451 6.93168C8.92296 6.88323 8.98096 6.86741 9.04832 6.88422C9.11582 6.90109 9.17791 6.93797 9.23483 6.99493C9.29593 7.05606 9.33442 7.12086 9.35024 7.1893C9.36599 7.25786 9.3507 7.31523 9.30437 7.36157L8.45721 8.20873L8.99144 8.74296L9.46563 8.26877C9.51193 8.22248 9.5673 8.20504 9.63156 8.2166C9.69583 8.2282 9.75436 8.26037 9.80699 8.313C9.85547 8.36148 9.88602 8.41735 9.89865 8.48056C9.91123 8.54377 9.89337 8.59967 9.84493 8.64811L9.37074 9.1223L9.90807 9.65962L10.7552 8.81247C10.8015 8.76616 10.859 8.75087 10.9275 8.76662C10.996 8.78248 11.0607 8.8209 11.1219 8.88204C11.1787 8.93889 11.2157 9.00108 11.2325 9.06851C11.2495 9.13597 11.2336 9.19388 11.1852 9.24236ZM12.8889 7.53862L11.7635 8.66397C11.7045 8.72299 11.6407 8.7604 11.5722 8.77619C11.5037 8.792 11.4453 8.77566 11.3968 8.72714L9.38962 6.71993C9.34117 6.67149 9.32479 6.61306 9.34061 6.54458C9.3564 6.47606 9.3938 6.41235 9.45283 6.35329L10.5781 5.22801C10.6266 5.17957 10.6846 5.16375 10.7519 5.18055C10.8194 5.19746 10.8815 5.2343 10.9384 5.29126C10.9995 5.35239 11.038 5.41719 11.0538 5.48564C11.0696 5.55419 11.0543 5.61157 11.008 5.6579L10.1608 6.50506L10.695 7.03929L11.1692 6.56511C11.2155 6.51881 11.2709 6.50137 11.3352 6.51294C11.3994 6.52454 11.4579 6.55674 11.5106 6.60937C11.559 6.65785 11.5896 6.71371 11.6022 6.77689C11.6148 6.8401 11.597 6.896 11.5485 6.94444L11.0743 7.41863L11.6117 7.95596L12.4588 7.1088C12.5051 7.0625 12.5626 7.04724 12.6311 7.06299C12.6996 7.07881 12.7644 7.11723 12.8255 7.17837C12.8824 7.23522 12.9193 7.29744 12.9362 7.36484C12.9532 7.43223 12.9373 7.49017 12.8889 7.53862ZM14.6943 5.33461C14.4126 5.61628 14.0426 5.75711 13.6726 5.75711C13.3025 5.75711 12.9326 5.61628 12.6509 5.33457C12.0875 4.77119 12.0875 3.85453 12.6509 3.29115C13.2142 2.72777 14.1309 2.72774 14.6943 3.29115C14.9672 3.56407 15.1175 3.92692 15.1175 4.31286C15.1175 4.69881 14.9672 5.06165 14.6943 5.33461Z"
                                                fill="#0D6EFD"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-dark mb-0">Gratis konsultasjon</p>
                            </div>
                            <div className="d-flex align-items-center gap-3" data-aos="fade-up" data-aos-delay={200}>
                                <div className="d-block">
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                        <path d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM12 9.5H8.5V13H9.5V10.5H12V9.5Z" fill="#0D6EFD"/>
                                    </svg>
                                </div>
                                <p className="text-dark mb-0">Rask implementering</p>
                            </div>
                            <div className="d-flex align-items-center gap-3" data-aos="fade-up" data-aos-delay={400}>
                                <div className="d-block">
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                        <path d="M16.5 0H1.5C0.671573 0 0 0.671573 0 1.5V16.5C0 17.3284 0.671573 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.671573 17.3284 0 16.5 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" fill="#0D6EFD"/>
                                    </svg>
                                </div>
                                <p className="text-dark mb-0">Skreddersydde løsninger</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
