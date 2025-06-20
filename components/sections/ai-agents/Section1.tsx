"use client";
import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/* AI Agents Hero Section */}
            <section className="ai-agents-section-1 position-relative overflow-hidden pt-120 pb-120 bg-gradient-agents">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <span className="small-line bg-white" />
                                <span className="btn-text text-white">Intelligente AI Agents</span>
                            </div>
                            <h1 className="text-white mb-4 text-anime-style-3">
                                Revolusjonerer forretningsprosesser med 
                                <span className="text-linear"> autonome AI-agenter</span>
                            </h1>
                            <p className="text-white-50 mb-5 fs-5">
                                Våre AI-agenter arbeider 24/7 for å automatisere komplekse oppgaver, 
                                forbedre kundeservice og optimalisere forretningsprosesser. 
                                De lærer kontinuerlig og tilpasser seg dine behov.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-5">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">24/7 Automatisering</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Intelligent beslutninger</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span className="text-white">Selvlærende systemer</span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <Link href="/contact" className="btn btn-linear hover-up">
                                    Start med AI Agents
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </svg>
                                </Link>
                                <Link href="#agents" className="btn btn-outline-light">
                                    Se agent-typer
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M8 1L8 15M1 8L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-8">
                            <div className="position-relative">
                                <div className="agents-visualization">
                                    <div className="central-hub">
                                        <div className="hub-core">
                                            <i className="bi bi-robot text-white fs-1"></i>
                                            <div className="hub-pulse"></div>
                                        </div>
                                        <div className="hub-label">AI Control Center</div>
                                    </div>
                                    
                                    {/* Agent Nodes */}
                                    <div className="agent-nodes">
                                        <div className="agent-node node-1" data-agent="Customer Service">
                                            <div className="node-icon">
                                                <i className="bi bi-headset"></i>
                                            </div>
                                            <div className="node-connection"></div>
                                        </div>
                                        
                                        <div className="agent-node node-2" data-agent="Sales Assistant">
                                            <div className="node-icon">
                                                <i className="bi bi-cart"></i>
                                            </div>
                                            <div className="node-connection"></div>
                                        </div>
                                        
                                        <div className="agent-node node-3" data-agent="Data Analyst">
                                            <div className="node-icon">
                                                <i className="bi bi-graph-up"></i>
                                            </div>
                                            <div className="node-connection"></div>
                                        </div>
                                        
                                        <div className="agent-node node-4" data-agent="Marketing Expert">
                                            <div className="node-icon">
                                                <i className="bi bi-megaphone"></i>
                                            </div>
                                            <div className="node-connection"></div>
                                        </div>
                                        
                                        <div className="agent-node node-5" data-agent="HR Assistant">
                                            <div className="node-icon">
                                                <i className="bi bi-people"></i>
                                            </div>
                                            <div className="node-connection"></div>
                                        </div>
                                        
                                        <div className="agent-node node-6" data-agent="Finance Bot">
                                            <div className="node-icon">
                                                <i className="bi bi-currency-dollar"></i>
                                            </div>
                                            <div className="node-connection"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Floating Benefits */}
                                    <div className="floating-benefits">
                                        <div className="benefit-card benefit-1">
                                            <i className="bi bi-clock text-primary"></i>
                                            <div>
                                                <div className="benefit-value">24/7</div>
                                                <div className="benefit-label">Tilgjengelighet</div>
                                            </div>
                                        </div>
                                        
                                        <div className="benefit-card benefit-2">
                                            <i className="bi bi-lightning text-warning"></i>
                                            <div>
                                                <div className="benefit-value">10x</div>
                                                <div className="benefit-label">Raskere</div>
                                            </div>
                                        </div>
                                        
                                        <div className="benefit-card benefit-3">
                                            <i className="bi bi-shield-check text-success"></i>
                                            <div>
                                                <div className="benefit-value">99.9%</div>
                                                <div className="benefit-label">Nøyaktighet</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
                    <div className="agents-bg">
                        <div className="bg-circuit bg-circuit-1"></div>
                        <div className="bg-circuit bg-circuit-2"></div>
                        <div className="bg-circuit bg-circuit-3"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .bg-gradient-agents {
                    background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
                }
                
                .agents-visualization {
                    position: relative;
                    width: 100%;
                    max-width: 500px;
                    height: 500px;
                    margin: 0 auto;
                }
                
                .central-hub {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }
                
                .hub-core {
                    width: 100px;
                    height: 100px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                }
                
                .hub-pulse {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    animation: pulse 2s infinite;
                }
                
                .hub-label {
                    color: white;
                    font-size: 12px;
                    font-weight: 600;
                    margin-top: 10px;
                    text-align: center;
                }
                
                .agent-nodes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .agent-node {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    animation: orbit 20s linear infinite;
                }
                
                .node-icon {
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: #2d1b69;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                
                .agent-node:hover .node-icon {
                    transform: scale(1.1);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }
                
                .node-connection {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 2px;
                    height: 120px;
                    background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
                    transform-origin: top;
                    animation: connectionPulse 3s ease-in-out infinite;
                }
                
                .node-1 {
                    top: 5%;
                    left: 50%;
                    transform: translateX(-50%);
                    animation-delay: 0s;
                }
                
                .node-2 {
                    top: 25%;
                    right: 5%;
                    animation-delay: 3.33s;
                }
                
                .node-3 {
                    bottom: 25%;
                    right: 5%;
                    animation-delay: 6.66s;
                }
                
                .node-4 {
                    bottom: 5%;
                    left: 50%;
                    transform: translateX(-50%);
                    animation-delay: 10s;
                }
                
                .node-5 {
                    bottom: 25%;
                    left: 5%;
                    animation-delay: 13.33s;
                }
                
                .node-6 {
                    top: 25%;
                    left: 5%;
                    animation-delay: 16.66s;
                }
                
                .floating-benefits {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .benefit-card {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 12px 16px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    font-weight: 600;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    animation: floatBenefit 6s ease-in-out infinite;
                    min-width: 120px;
                }
                
                .benefit-value {
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                }
                
                .benefit-label {
                    font-size: 12px;
                    color: #666;
                }
                
                .benefit-1 {
                    top: 10%;
                    right: -10%;
                    animation-delay: 0s;
                }
                
                .benefit-2 {
                    bottom: 40%;
                    left: -15%;
                    animation-delay: 2s;
                }
                
                .benefit-3 {
                    bottom: 10%;
                    right: 10%;
                    animation-delay: 4s;
                }
                
                .agents-bg {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .bg-circuit {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border: 2px solid currentColor;
                    border-radius: 10px;
                    color: rgba(255, 255, 255, 0.1);
                    animation: circuitFlow 8s ease-in-out infinite;
                }
                
                .bg-circuit-1 {
                    top: 10%;
                    left: 10%;
                    animation-delay: 0s;
                }
                
                .bg-circuit-2 {
                    top: 60%;
                    right: 20%;
                    animation-delay: 2.5s;
                }
                
                .bg-circuit-3 {
                    bottom: 20%;
                    left: 30%;
                    animation-delay: 5s;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
                }
                
                @keyframes connectionPulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }
                
                @keyframes floatBenefit {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes circuitFlow {
                    0%, 100% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: scale(1.2) rotate(180deg);
                        opacity: 0.6;
                    }
                }
                
                @media (max-width: 768px) {
                    .agents-visualization {
                        max-width: 350px;
                        height: 350px;
                    }
                    
                    .agent-node {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .node-icon {
                        width: 50px;
                        height: 50px;
                        font-size: 1.2rem;
                    }
                    
                    .benefit-card {
                        font-size: 12px;
                        padding: 8px 12px;
                        min-width: 100px;
                    }
                    
                    .benefit-value {
                        font-size: 14px;
                    }
                    
                    .benefit-label {
                        font-size: 10px;
                    }
                    
                    .bg-circuit {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
