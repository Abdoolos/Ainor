export default function Section3() {
    return (
        <>
            <section id="features" className="ai-solutions-emotion-features pt-120 pb-90 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                                <span className="small-line"></span>
                                <span className="btn-text">Advanced Features</span>
                                <span className="small-line"></span>
                            </div>
                            <h2 className="display-4 mb-4" data-aos="fade-up">
                                Comprehensive Emotion Analysis Tools
                            </h2>
                            <p className="fs-5 text-muted" data-aos="fade-up" data-aos-delay="100">
                                Built and developed by our team, combining accuracy, usability, and ethical data handling
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="feature-showcase mb-5">
                                <img 
                                    src="/assets/imgs/pages/ai-solutions/page-about/img-2.png" 
                                    alt="Emotion Analysis Interface" 
                                    className="img-fluid rounded-3 shadow-lg mb-4"
                                />
                                <h4 className="mb-3">Modern User Interface</h4>
                                <p className="text-muted">
                                    Intuitive design with multiple analytical tools including emotion timelines, 
                                    trigger extraction, session histories, and AI-driven suggestions.
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="feature-showcase mb-5">
                                <img 
                                    src="/assets/imgs/pages/ai-solutions/page-about/img-3.png" 
                                    alt="Psychological Reports" 
                                    className="img-fluid rounded-3 shadow-lg mb-4"
                                />
                                <h4 className="mb-3">Detailed Psychological Reports</h4>
                                <p className="text-muted">
                                    Unlike simple sentiment analysis, Ainorab delivers comprehensive psychological insights,
                                    identifying triggers, patterns, and offering personalized recommendations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="row mt-8">
                        <div className="col-lg-12">
                            <div className="tech-specs bg-light rounded-4 p-5" data-aos="fade-up">
                                <h3 className="mb-4 text-center">Technical Specifications</h3>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="spec-item text-center">
                                            <div className="spec-icon mb-3">
                                                <i className="ri-cpu-line fs-1 text-primary"></i>
                                            </div>
                                            <h6>AI Model</h6>
                                            <p className="text-muted small">State-of-the-art language models with 95% accuracy</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="spec-item text-center">
                                            <div className="spec-icon mb-3">
                                                <i className="ri-emotion-line fs-1 text-success"></i>
                                            </div>
                                            <h6>Emotions Detected</h6>
                                            <p className="text-muted small">27+ complex human emotions and psychological states</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="spec-item text-center">
                                            <div className="spec-icon mb-3">
                                                <i className="ri-time-line fs-1 text-info"></i>
                                            </div>
                                            <h6>Processing Speed</h6>
                                            <p className="text-muted small">Real-time analysis with sub-second response times</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="spec-item text-center">
                                            <div className="spec-icon mb-3">
                                                <i className="ri-global-line fs-1 text-warning"></i>
                                            </div>
                                            <h6>Languages</h6>
                                            <p className="text-muted small">Multi-language support including English, Norwegian, and more</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div className="row mt-8">
                        <div className="col-lg-12">
                            <h3 className="text-center mb-5" data-aos="fade-up">Perfect for</h3>
                            <div className="row">
                                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="use-case-card bg-primary text-white rounded-4 p-4 h-100">
                                        <div className="use-case-icon mb-3">
                                            <i className="ri-user-heart-line fs-1"></i>
                                        </div>
                                        <h5 className="mb-3">Individuals</h5>
                                        <p>Personal emotional health tracking, self-awareness improvement, and mental well-being monitoring.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="use-case-card bg-success text-white rounded-4 p-4 h-100">
                                        <div className="use-case-icon mb-3">
                                            <i className="ri-mental-health-line fs-1"></i>
                                        </div>
                                        <h5 className="mb-3">Therapists</h5>
                                        <p>Enhanced therapy sessions with detailed emotional analysis and pattern recognition for better patient outcomes.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="use-case-card bg-info text-white rounded-4 p-4 h-100">
                                        <div className="use-case-icon mb-3">
                                            <i className="ri-building-line fs-1"></i>
                                        </div>
                                        <h5 className="mb-3">Organizations</h5>
                                        <p>Employee wellness programs, customer feedback analysis, and workplace emotional intelligence insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-8">
                        <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
                            <div className="cta-section bg-gradient-primary rounded-4 p-5 text-white">
                                <h3 className="mb-3">Ready to Get Started?</h3>
                                <p className="mb-4">Experience the future of emotion analysis with our advanced AI-powered agent.</p>
                                <div className="d-flex flex-wrap gap-3 justify-content-center">
                                    <a href="#demo" className="btn btn-white">
                                        <span>Try Demo Now</span>
                                        <i className="ri-arrow-up-line ms-2"></i>
                                    </a>
                                    <a href="/contact" className="btn btn-outline-light">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
