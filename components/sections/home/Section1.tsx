"use client";
import Link from "next/link";
import RotatingLogo from "@/components/elements/RotatingLogo";

export default function Section1() {
    return (
        <>
            {/* Modern AI Hero Section */}
            <section className="modern-ai-hero position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <span className="hero-badge">
                                        <i className="bi bi-robot me-2"></i>
                                        Fremtidens AI-teknologi
                                    </span>
                                </div>
                                <h1 className="hero-title mb-4">
                                    Revolusjonerer forretninger med{" "}
                                    <span className="text-gradient d-inline-flex align-items-center">
                                        intelligent AI
                                        {/* <RotatingLogo /> */}
                                    </span>
                                </h1>
                                <p className="hero-description mb-5">
                                    Vi skaper skreddersydde AI-løsninger som transformerer hvordan bedrifter opererer. 
                                    Fra automatisering til dataanalyse - vi gjør kunstig intelligens tilgjengelig, 
                                    praktisk og lønnsom for din virksomhet.
                                </p>
                                
                                {/* Feature Pills */}
                                <div className="feature-pills mb-5">
                                    <div className="feature-pill">
                                        <i className="bi bi-lightning-charge-fill text-warning"></i>
                                        <span>24/7 Automatisering</span>
                                    </div>
                                    <div className="feature-pill">
                                        <i className="bi bi-graph-up-arrow text-success"></i>
                                        <span>Dataanalyse</span>
                                    </div>
                                    <div className="feature-pill">
                                        <i className="bi bi-robot text-primary"></i>
                                        <span>AI Agents</span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="hero-cta d-flex flex-wrap gap-3">
                                    <Link href="/services" className="btn btn-primary btn-lg hover-up">
                                        <i className="bi bi-play-circle me-2"></i>
                                        Start din AI-reise
                                    </Link>
                                    <Link href="/contact" className="btn btn-outline-primary btn-lg hover-up">
                                        <i className="bi bi-calendar-check me-2"></i>
                                        Book gratis konsultasjon
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 mt-lg-0 mt-8">
                            <div className="hero-visual position-relative">
                                {/* Central AI Brain */}
                                <div className="ai-brain-container">
                                    <div className="ai-brain">
                                        <div className="brain-core">
                                            <i className="bi bi-cpu-fill text-white fs-1"></i>
                                            <div className="brain-pulse"></div>
                                        </div>
                                        <div className="brain-particles">
                                            <div className="particle particle-1"></div>
                                            <div className="particle particle-2"></div>
                                            <div className="particle particle-3"></div>
                                            <div className="particle particle-4"></div>
                                            <div className="particle particle-5"></div>
                                            <div className="particle particle-6"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Orbits */}
                                <div className="service-orbits">
                                    <div className="orbit orbit-1">
                                        <div className="service-node node-ai">
                                            <i className="bi bi-robot"></i>
                                            <span className="node-label">AI-rådgivning</span>
                                        </div>
                                    </div>
                                    
                                    <div className="orbit orbit-2">
                                        <div className="service-node node-data">
                                            <i className="bi bi-graph-up"></i>
                                            <span className="node-label">Dataanalyse</span>
                                        </div>
                                    </div>
                                    
                                    <div className="orbit orbit-3">
                                        <div className="service-node node-agents">
                                            <i className="bi bi-gear-wide-connected"></i>
                                            <span className="node-label">AI Agents</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Stats */}
                                <div className="floating-stats">
                                    <div className="stat-card stat-1">
                                        <div className="stat-icon">
                                            <i className="bi bi-speedometer2 text-success"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="stat-number">300%</div>
                                            <div className="stat-label">Effektivitet</div>
                                        </div>
                                    </div>
                                    
                                    <div className="stat-card stat-2">
                                        <div className="stat-icon">
                                            <i className="bi bi-shield-check text-primary"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="stat-number">99.9%</div>
                                            <div className="stat-label">Oppetid</div>
                                        </div>
                                    </div>
                                    
                                    <div className="stat-card stat-3">
                                        <div className="stat-icon">
                                            <i className="bi bi-people-fill text-warning"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="stat-number">500+</div>
                                            <div className="stat-label">Kunder</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="hero-bg-elements">
                    <div className="bg-grid"></div>
                    <div className="bg-gradients">
                        <div className="gradient-orb orb-1"></div>
                        <div className="gradient-orb orb-2"></div>
                        <div className="gradient-orb orb-3"></div>
                    </div>
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .modern-ai-hero {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
                    background-size: 200% 200%;
                    animation: gradientShift 8s ease-in-out infinite;
                }
                
                .hero-content {
                    position: relative;
                    z-index: 2;
                }
                
                .hero-badge {
                    background: rgba(255, 255, 255, 0.15);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 600;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    display: inline-flex;
                    align-items: center;
                    animation: floatBadge 3s ease-in-out infinite;
                }
                
                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: white;
                    margin-bottom: 1.5rem;
                }
                
                .text-gradient {
                    background: linear-gradient(45deg, #fff, #a8edea, #fed6e3);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: textShimmer 3s ease-in-out infinite;
                }
                
                .hero-description {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.6;
                }
                
                .feature-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .feature-pill {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 10px 16px;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .feature-pill:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }
                
                .hero-visual {
                    position: relative;
                    height: 600px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .ai-brain-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                }
                
                .ai-brain {
                    position: relative;
                    width: 120px;
                    height: 120px;
                }
                
                .brain-core {
                    width: 120px;
                    height: 120px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    box-shadow: 0 0 50px rgba(102, 126, 234, 0.5);
                    animation: brainFloat 4s ease-in-out infinite;
                }
                
                .brain-pulse {
                    position: absolute;
                    width: 140px;
                    height: 140px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    top: -10px;
                    left: -10px;
                    animation: pulse 2s infinite;
                }
                
                .brain-particles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .particle {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: white;
                    border-radius: 50%;
                    animation: particleFloat 3s ease-in-out infinite;
                }
                
                .particle-1 { top: 20%; left: -10px; animation-delay: 0s; }
                .particle-2 { top: 50%; right: -10px; animation-delay: 0.5s; }
                .particle-3 { bottom: 20%; left: 20px; animation-delay: 1s; }
                .particle-4 { top: 10%; right: 20px; animation-delay: 1.5s; }
                .particle-5 { bottom: 10%; right: -5px; animation-delay: 2s; }
                .particle-6 { top: 60%; left: -5px; animation-delay: 2.5s; }
                
                .service-orbits {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 400px;
                    height: 400px;
                }
                
                .orbit {
                    position: absolute;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    animation: orbitRotate 20s linear infinite;
                }
                
                .orbit-1 {
                    width: 200px;
                    height: 200px;
                    top: 100px;
                    left: 100px;
                    animation-duration: 15s;
                }
                
                .orbit-2 {
                    width: 280px;
                    height: 280px;
                    top: 60px;
                    left: 60px;
                    animation-duration: 20s;
                    animation-direction: reverse;
                }
                
                .orbit-3 {
                    width: 360px;
                    height: 360px;
                    top: 20px;
                    left: 20px;
                    animation-duration: 25s;
                }
                
                .service-node {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: #667eea;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .service-node:hover {
                    transform: scale(1.1);
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
                }
                
                .node-label {
                    position: absolute;
                    bottom: -25px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(255, 255, 255, 0.9);
                    color: #333;
                    padding: 4px 8px;
                    border-radius: 10px;
                    font-size: 10px;
                    font-weight: 600;
                    white-space: nowrap;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .service-node:hover .node-label {
                    opacity: 1;
                }
                
                .node-ai { top: -30px; left: 50%; transform: translateX(-50%); }
                .node-data { top: 50%; right: -30px; transform: translateY(-50%); }
                .node-agents { bottom: -30px; left: 50%; transform: translateX(-50%); }
                
                .floating-stats {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .stat-card {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 15px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    animation: statFloat 4s ease-in-out infinite;
                    min-width: 120px;
                }
                
                .stat-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    background: rgba(102, 126, 234, 0.1);
                }
                
                .stat-number {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #333;
                }
                
                .stat-label {
                    font-size: 0.85rem;
                    color: #666;
                }
                
                .stat-1 {
                    top: 10%;
                    right: 5%;
                    animation-delay: 0s;
                }
                
                .stat-2 {
                    top: 50%;
                    left: -5%;
                    animation-delay: 1.5s;
                }
                
                .stat-3 {
                    bottom: 15%;
                    right: 10%;
                    animation-delay: 3s;
                }
                
                .hero-bg-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 0;
                }
                
                .bg-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: gridMove 20s linear infinite;
                }
                
                .gradient-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(40px);
                    animation: orbFloat 8s ease-in-out infinite;
                }
                
                .orb-1 {
                    width: 200px;
                    height: 200px;
                    background: rgba(168, 237, 234, 0.3);
                    top: 10%;
                    right: 10%;
                    animation-delay: 0s;
                }
                
                .orb-2 {
                    width: 150px;
                    height: 150px;
                    background: rgba(254, 214, 227, 0.3);
                    bottom: 20%;
                    left: 15%;
                    animation-delay: 2s;
                }
                
                .orb-3 {
                    width: 180px;
                    height: 180px;
                    background: rgba(102, 126, 234, 0.2);
                    top: 50%;
                    right: 30%;
                    animation-delay: 4s;
                }
                
                .floating-shapes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .shape {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.1);
                    animation: shapeFloat 10s ease-in-out infinite;
                }
                
                .shape-1 {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .shape-2 {
                    width: 15px;
                    height: 15px;
                    transform: rotate(45deg);
                    top: 60%;
                    right: 20%;
                    animation-delay: 2s;
                }
                
                .shape-3 {
                    width: 25px;
                    height: 25px;
                    border-radius: 30%;
                    bottom: 30%;
                    left: 20%;
                    animation-delay: 4s;
                }
                
                .shape-4 {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    top: 30%;
                    right: 40%;
                    animation-delay: 6s;
                }
                
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes floatBadge {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
                
                @keyframes textShimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes brainFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(1.2); opacity: 0; }
                }
                
                @keyframes particleFloat {
                    0%, 100% { 
                        transform: translateY(0px); 
                        opacity: 0.3; 
                    }
                    50% { 
                        transform: translateY(-20px); 
                        opacity: 1; 
                    }
                }
                
                @keyframes orbitRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes statFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                
                @keyframes orbFloat {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-30px) scale(1.1); }
                }
                
                @keyframes shapeFloat {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translateY(-30px) rotate(180deg);
                        opacity: 0.8;
                    }
                }
                
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    
                    .hero-visual {
                        height: 400px;
                    }
                    
                    .ai-brain {
                        width: 80px;
                        height: 80px;
                    }
                    
                    .brain-core {
                        width: 80px;
                        height: 80px;
                    }
                    
                    .service-orbits {
                        width: 250px;
                        height: 250px;
                    }
                    
                    .orbit-1 {
                        width: 150px;
                        height: 150px;
                        top: 50px;
                        left: 50px;
                    }
                    
                    .orbit-2 {
                        width: 200px;
                        height: 200px;
                        top: 25px;
                        left: 25px;
                    }
                    
                    .orbit-3 {
                        width: 250px;
                        height: 250px;
                        top: 0;
                        left: 0;
                    }
                    
                    .service-node {
                        width: 40px;
                        height: 40px;
                        font-size: 1rem;
                    }
                    
                    .stat-card {
                        padding: 10px;
                        min-width: 100px;
                    }
                    
                    .stat-number {
                        font-size: 1rem;
                    }
                    
                    .feature-pills {
                        justify-content: center;
                    }
                    
                    .hero-cta {
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
}
