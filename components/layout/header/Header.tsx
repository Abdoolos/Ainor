import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu }: any) {
    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg navbar-dark z-5 ${scroll ? "navbar-stick top-0 position-fixed" : ""}`}>
                    <div className="container mt-3 mb-3">
                        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
                            <img 
                                src="/assets/imgs/template/favicon.png" 
                                alt="AINorAb Logo" 
                                width={40} 
                                height={40} 
                                className="rounded"
                                style={{objectFit: 'contain'}}
                            />
                            <h5 className="mb-0 text-white">AINorAb</h5>
                        </Link>
                        <div className="d-none d-lg-flex">
                            <MainMenu />
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="burger-icon burger-icon-white border rounded-3 top-0 end-0" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </nav>
                {/* offCanvas-menu */}
                <div className="offCanvas__info">
                    <div className="offCanvas__close-icon menu-close">
                        <button className="btn-close" aria-label="Close">
                            <i className="ri-close-line" />
                        </button>
                    </div>
                    <div className="offCanvas__logo mb-30">
                        <Link className="d-flex align-items-center gap-2" href="/">
                            <img 
                                src="/assets/imgs/template/favicon.png" 
                                alt="AINorAb Logo" 
                                width={40} 
                                height={40} 
                                className="rounded"
                                style={{objectFit: 'contain'}}
                            />
                            <h5 className="mb-0 text-dark">AINorAb</h5>
                        </Link>
                    </div>
                    <div className="offCanvas__side-info mb-30">
                        <div className="contact-list mb-30">
                            <h4>Kontoradresse</h4>
                            <p>
                                123/A, Miranda City Likaoli <br />
                                Prikano, Dope
                            </p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Telefonnummer</h4>
                            <p>+0989 7876 9865 9</p>
                            <p>+(090) 8765 86543 85</p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>E-postadresse</h4>
                            <p>info@example.com</p>
                            <p>example.mail@hum.com</p>
                        </div>
                    </div>
                    <div className="offCanvas__social-icon mt-30">
                        <Link href="/javascript:void(0)">
                            <i className="bi bi-facebook" />
                        </Link>
                        <Link href="/javascript:void(0)">
                            <i className="bi bi-twitter-x" />
                        </Link>
                        <Link href="/javascript:void(0)">
                            <i className="bi bi-linkedin" />
                        </Link>
                        <Link href="/javascript:void(0)">
                            <i className="bi bi-behance" />
                        </Link>
                    </div>
                </div>
                <div className="offCanvas__overly" />
                {/* Offcanvas search */}
                <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop">
                    <div className="offcanvas-header">
                        <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-8 mx-auto">
                                    <h3 className="mb-4">Hva leter du etter?</h3>
                                    <form className="input-group mb-3" data-aos="zoom-in">
                                        <input type="text" className="form-control" placeholder="Skriv inn søkeord" aria-label="Skriv inn søkeord" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary rounded-end-2" type="submit" aria-label="search" id="button-addon2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Offcanvas search */}
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    );
}
