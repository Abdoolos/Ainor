"use client";

import { useState } from "react";

export default function Section2() {
    const [selectedEmotion, setSelectedEmotion] = useState("happy");
    
    const emotions = [
        { id: "happy", name: "Joy", color: "#FFD700", icon: "ri-emotion-happy-line" },
        { id: "sad", name: "Sadness", color: "#4A90E2", icon: "ri-emotion-sad-line" },
        { id: "angry", name: "Anger", color: "#FF6B6B", icon: "ri-emotion-angry-line" },
        { id: "surprised", name: "Surprise", color: "#9B59B6", icon: "ri-emotion-laugh-line" },
        { id: "fear", name: "Fear", color: "#E74C3C", icon: "ri-emotion-unhappy-line" },
        { id: "neutral", name: "Neutral", color: "#95A5A6", icon: "ri-emotion-normal-line" }
    ];

    return (
        <>
            <section id="demo" className="ai-solutions-emotion-demo pt-120 pb-90 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                                <span className="small-line"></span>
                                <span className="btn-text">Interactive Demo</span>
                                <span className="small-line"></span>
                            </div>
                            <h2 className="display-4 mb-4" data-aos="fade-up">
                                Experience Real-Time Emotion Detection
                            </h2>
                            <p className="fs-5 text-muted" data-aos="fade-up" data-aos-delay="100">
                                Type your text below and watch as our AI analyzes emotions in real-time
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="emotion-input-card bg-white rounded-4 p-4 shadow-lg">
                                <h4 className="mb-3">Enter Text for Analysis</h4>
                                <textarea 
                                    className="form-control mb-3" 
                                    rows={6}
                                    placeholder="Type your thoughts, feelings, or any text here... Our AI will analyze the emotional content and provide detailed insights."
                                    defaultValue="I'm feeling really excited about this new project! It's challenging but I believe we can make something amazing together."
                                />
                                <button className="btn btn-primary w-100">
                                    <i className="ri-brain-line me-2"></i>
                                    Analyze Emotions
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="emotion-results-card bg-white rounded-4 p-4 shadow-lg">
                                <h4 className="mb-4">Emotion Analysis Results</h4>
                                
                                {/* Emotion Chart */}
                                <div className="emotion-chart mb-4">
                                    {emotions.map((emotion, index) => (
                                        <div key={emotion.id} className="emotion-bar mb-3" data-aos="slide-left" data-aos-delay={index * 100}>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="d-flex align-items-center">
                                                    <i className={`${emotion.icon} me-2`} style={{color: emotion.color}}></i>
                                                    {emotion.name}
                                                </span>
                                                <span className="fw-bold">{emotion.id === 'happy' ? '78%' : emotion.id === 'surprised' ? '15%' : '7%'}</span>
                                            </div>
                                            <div className="progress" style={{height: '8px'}}>
                                                <div 
                                                    className="progress-bar" 
                                                    style={{
                                                        width: emotion.id === 'happy' ? '78%' : emotion.id === 'surprised' ? '15%' : '7%',
                                                        backgroundColor: emotion.color
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Key Insights */}
                                <div className="key-insights">
                                    <h6 className="text-primary mb-3">Key Insights:</h6>
                                    <div className="insight-item d-flex align-items-start mb-2">
                                        <i className="ri-checkbox-circle-line text-success me-2 mt-1"></i>
                                        <small>Dominant emotion: <strong>Joy</strong> (78% confidence)</small>
                                    </div>
                                    <div className="insight-item d-flex align-items-start mb-2">
                                        <i className="ri-checkbox-circle-line text-success me-2 mt-1"></i>
                                        <small>Secondary emotion: <strong>Excitement</strong> detected</small>
                                    </div>
                                    <div className="insight-item d-flex align-items-start mb-2">
                                        <i className="ri-checkbox-circle-line text-success me-2 mt-1"></i>
                                        <small>Positive sentiment with collaborative undertones</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Emotion Analysis Screenshots */}
                    <div className="row mt-8 mb-5">
                        <div className="col-lg-12 text-center mb-4">
                            <h3 className="mb-3">Live Interface Preview</h3>
                            <p className="text-muted">See our emotion analysis interface in action</p>
                        </div>
                        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="interface-preview bg-white rounded-4 p-3 shadow-sm">
                                <img 
                                    src="/assets/imgs/pages/ai-solutions/Tjeneste Detaljer/Emot1.png" 
                                    alt="Emotion Analysis Interface - Input View" 
                                    className="img-fluid rounded-3"
                                />
                                <div className="mt-3 text-center">
                                    <h6 className="mb-2">Input & Analysis Interface</h6>
                                    <small className="text-muted">Real-time text input with instant emotion detection</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="interface-preview bg-white rounded-4 p-3 shadow-sm">
                                <img 
                                    src="/assets/imgs/pages/ai-solutions/Tjeneste Detaljer/Emot2.png" 
                                    alt="Emotion Analysis Interface - Results View" 
                                    className="img-fluid rounded-3"
                                />
                                <div className="mt-3 text-center">
                                    <h6 className="mb-2">Detailed Results Dashboard</h6>
                                    <small className="text-muted">Comprehensive emotion insights and psychological reports</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="row mt-8">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="feature-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="feature-icon mb-3">
                                    <i className="ri-time-line fs-1 text-primary"></i>
                                </div>
                                <h5 className="mb-3">Real-Time Analysis</h5>
                                <p className="text-muted">Get instant emotion detection with 95% accuracy using advanced NLP models.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="feature-icon mb-3">
                                    <i className="ri-line-chart-line fs-1 text-success"></i>
                                </div>
                                <h5 className="mb-3">Emotion Timeline</h5>
                                <p className="text-muted">Track emotional patterns over time with detailed historical analysis.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="feature-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                                <div className="feature-icon mb-3">
                                    <i className="ri-shield-check-line fs-1 text-info"></i>
                                </div>
                                <h5 className="mb-3">Privacy First</h5>
                                <p className="text-muted">Your data is processed securely with end-to-end encryption and ethical handling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
