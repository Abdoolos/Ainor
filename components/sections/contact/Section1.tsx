import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*ai-solutions-blog-details section 1*/}
            <section className="ai-solutions-blog-details-section-1 position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="card-contact card rounded-4 position-relative h-100" data-aos="fade-right" data-aos-delay={0}>
                                <Link href="#" className="card-contact-img position-relative d-block zoom-img rounded-3 rounded-bottom-0 overflow-hidden">
                                    <img className="w-100" src="assets/imgs/pages/ai-solutions/page-contact/img-2.png" alt="AINorAb Oslo Office" />
                                </Link>
                                <div className="card-contact-body p-4 d-flex flex-column">
                                    <div className="card-contact-info mt-2 mb-auto">
                                        <Link href="#">
                                            <h6>Oslo</h6>
                                        </Link>
                                        <p className="mb-0">Storgata 1, 0155 Oslo</p>
                                        <p className="mb-0">Oslo</p>
                                        <p className="mb-0">Norway</p>
                                    </div>
                                    <div className="d-flex flex-column mt-3 gap-2 mb-4">
                                        <Link href="#" className="fs-7">
                                            <i className="ri-mail-open-line text-primary" />
                                            <span className="@@color-text"> &nbsp; ah2xx@hotmail.com </span>
                                        </Link>
                                        <Link href="telto:004799858236" className="fs-7 d-flex align-items-center gap-2 phone-link">
                                            <i className="ri-phone-line text-primary fs-5" />
                                            <span className="@@color-text fw-medium"> 004799858236 </span>
                                        </Link>
                                    </div>
                                    <Link href="https://goo.gl/maps/8Z9Z9Z9Z9Z9Z9Z9Z9" className="text-decoration-underline text-uppercase">
                                        Vis på Google Maps
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="coming-soon-text text-center text-lg-start" data-aos="fade-left" data-aos-delay={200}>
                                <h2 className="display-4 fw-bold mb-4">Coming soon to Stockholm!</h2>
                                <p className="lead text-muted">We're expanding our presence in the Nordic region.</p>
                                <div className="coming-soon-icon">
                                    <i className="ri-map-pin-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid wow img-custom-anim-top pt-90">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.1235455766576!2d10.7507945!3d59.913327999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61b1e30b5b%3A0x5f6a146f341e3c89!2sStorgata%201%2C%200155%20Oslo!5e0!3m2!1sen!2sno!4v1624461234567!5m2!1sen!2sno" 
                            width={600} 
                            height={450} 
                            style={{ border: 0 }} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>
        </>
    );
}
