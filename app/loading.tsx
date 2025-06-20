"use client";

export default function Loading() {
    return (
        <>
            <div id="preloader">
                <div id="loader" className="loader">
                    <div className="data-flow-loader">
                        {/* Central AI Core */}
                        <div className="ai-core">
                            <div className="core-ring core-ring-1"></div>
                            <div className="core-ring core-ring-2"></div>
                            <div className="core-ring core-ring-3"></div>
                            <div className="core-center">
                                <i className="bi bi-cpu-fill"></i>
                            </div>
                        </div>

                        {/* Data Streams */}
                        <div className="data-streams">
                            <div className="stream stream-1">
                                <div className="data-packet packet-1"></div>
                                <div className="data-packet packet-2"></div>
                                <div className="data-packet packet-3"></div>
                            </div>
                            <div className="stream stream-2">
                                <div className="data-packet packet-1"></div>
                                <div className="data-packet packet-2"></div>
                                <div className="data-packet packet-3"></div>
                            </div>
                            <div className="stream stream-3">
                                <div className="data-packet packet-1"></div>
                                <div className="data-packet packet-2"></div>
                                <div className="data-packet packet-3"></div>
                            </div>
                            <div className="stream stream-4">
                                <div className="data-packet packet-1"></div>
                                <div className="data-packet packet-2"></div>
                                <div className="data-packet packet-3"></div>
                            </div>
                        </div>

                        {/* Connection Lines */}
                        <div className="connection-lines">
                            <div className="line line-horizontal-1"></div>
                            <div className="line line-horizontal-2"></div>
                            <div className="line line-vertical-1"></div>
                            <div className="line line-vertical-2"></div>
                            <div className="line line-diagonal-1"></div>
                            <div className="line line-diagonal-2"></div>
                        </div>

                        {/* Binary Rain Effect */}
                        <div className="binary-rain">
                            <div className="binary-column column-1">
                                <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span>
                            </div>
                            <div className="binary-column column-2">
                                <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span>
                            </div>
                            <div className="binary-column column-3">
                                <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span>
                            </div>
                            <div className="binary-column column-4">
                                <span>0</span><span>0</span><span>1</span><span>1</span><span>0</span>
                            </div>
                        </div>

                        {/* Loading Text */}
                        <div className="loading-text">
                            <span className="text-processing">Processing</span>
                            <div className="dots">
                                <span className="dot dot-1">.</span>
                                <span className="dot dot-2">.</span>
                                <span className="dot dot-3">.</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="progress-container">
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                            <div className="progress-text">
                                <span className="brand-name">AINORAB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                #preloader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .data-flow-loader {
                    position: relative;
                    width: 400px;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* AI Core Styles */
                .ai-core {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100px;
                    height: 100px;
                    z-index: 10;
                }

                .core-ring {
                    position: absolute;
                    border: 2px solid;
                    border-radius: 50%;
                    animation: coreRotate 3s linear infinite;
                }

                .core-ring-1 {
                    width: 60px;
                    height: 60px;
                    top: 20px;
                    left: 20px;
                    border-color: #667eea transparent #667eea transparent;
                    animation-duration: 2s;
                }

                .core-ring-2 {
                    width: 80px;
                    height: 80px;
                    top: 10px;
                    left: 10px;
                    border-color: transparent #764ba2 transparent #764ba2;
                    animation-duration: 3s;
                    animation-direction: reverse;
                }

                .core-ring-3 {
                    width: 100px;
                    height: 100px;
                    top: 0;
                    left: 0;
                    border-color: #a8edea transparent #a8edea transparent;
                    animation-duration: 4s;
                }

                .core-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    animation: corePulse 2s ease-in-out infinite;
                }

                /* Data Streams */
                .data-streams {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .stream {
                    position: absolute;
                    background: linear-gradient(90deg, transparent, #667eea, transparent);
                    opacity: 0.7;
                }

                .stream-1 {
                    width: 200px;
                    height: 2px;
                    top: 50px;
                    left: -100px;
                    animation: streamFlow 4s linear infinite;
                }

                .stream-2 {
                    width: 2px;
                    height: 200px;
                    top: -100px;
                    left: 50%;
                    animation: streamFlow 4s linear infinite 1s;
                    background: linear-gradient(180deg, transparent, #764ba2, transparent);
                }

                .stream-3 {
                    width: 200px;
                    height: 2px;
                    bottom: 50px;
                    right: -100px;
                    animation: streamFlow 4s linear infinite 2s;
                    background: linear-gradient(90deg, transparent, #a8edea, transparent);
                }

                .stream-4 {
                    width: 2px;
                    height: 200px;
                    bottom: -100px;
                    right: 50%;
                    animation: streamFlow 4s linear infinite 3s;
                    background: linear-gradient(180deg, transparent, #fed6e3, transparent);
                }

                .data-packet {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px currentColor;
                }

                .stream-1 .data-packet {
                    top: -3px;
                    animation: packetMoveHorizontal 2s linear infinite;
                }

                .stream-2 .data-packet {
                    left: -3px;
                    animation: packetMoveVertical 2s linear infinite;
                }

                .stream-3 .data-packet {
                    top: -3px;
                    animation: packetMoveHorizontalReverse 2s linear infinite;
                }

                .stream-4 .data-packet {
                    left: -3px;
                    animation: packetMoveVerticalReverse 2s linear infinite;
                }

                .packet-1 { animation-delay: 0s; color: #667eea; }
                .packet-2 { animation-delay: 0.7s; color: #764ba2; }
                .packet-3 { animation-delay: 1.4s; color: #a8edea; }

                /* Connection Lines */
                .connection-lines {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0.3;
                }

                .line {
                    position: absolute;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    animation: lineGlow 3s ease-in-out infinite;
                }

                .line-horizontal-1 {
                    width: 300px;
                    height: 1px;
                    top: 30%;
                    left: 50px;
                    animation-delay: 0s;
                }

                .line-horizontal-2 {
                    width: 300px;
                    height: 1px;
                    bottom: 30%;
                    right: 50px;
                    animation-delay: 1.5s;
                }

                .line-vertical-1 {
                    width: 1px;
                    height: 300px;
                    left: 30%;
                    top: 50px;
                    animation-delay: 3s;
                }

                .line-vertical-2 {
                    width: 1px;
                    height: 300px;
                    right: 30%;
                    bottom: 50px;
                    animation-delay: 4.5s;
                }

                .line-diagonal-1 {
                    width: 200px;
                    height: 1px;
                    top: 25%;
                    left: 25%;
                    transform: rotate(45deg);
                    animation-delay: 6s;
                }

                .line-diagonal-2 {
                    width: 200px;
                    height: 1px;
                    bottom: 25%;
                    right: 25%;
                    transform: rotate(-45deg);
                    animation-delay: 7.5s;
                }

                /* Binary Rain */
                .binary-rain {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0.1;
                    pointer-events: none;
                }

                .binary-column {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    color: #667eea;
                    font-family: monospace;
                    font-size: 12px;
                    animation: binaryFall 8s linear infinite;
                }

                .column-1 { left: 10%; animation-delay: 0s; }
                .column-2 { left: 30%; animation-delay: 2s; }
                .column-3 { right: 30%; animation-delay: 4s; }
                .column-4 { right: 10%; animation-delay: 6s; }

                .binary-column span {
                    margin-bottom: 10px;
                    opacity: 0;
                    animation: digitFade 1s ease-in-out infinite;
                }

                .binary-column span:nth-child(1) { animation-delay: 0s; }
                .binary-column span:nth-child(2) { animation-delay: 0.2s; }
                .binary-column span:nth-child(3) { animation-delay: 0.4s; }
                .binary-column span:nth-child(4) { animation-delay: 0.6s; }
                .binary-column span:nth-child(5) { animation-delay: 0.8s; }

                /* Loading Text */
                .loading-text {
                    position: absolute;
                    bottom: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    color: #667eea;
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                .text-processing {
                    margin-right: 5px;
                }

                .dots {
                    display: flex;
                }

                .dot {
                    animation: dotBounce 1.5s ease-in-out infinite;
                    color: #764ba2;
                }

                .dot-1 { animation-delay: 0s; }
                .dot-2 { animation-delay: 0.3s; }
                .dot-3 { animation-delay: 0.6s; }

                /* Progress Bar */
                .progress-container {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                }

                .progress-bar {
                    width: 100%;
                    height: 4px;
                    background: rgba(102, 126, 234, 0.2);
                    border-radius: 2px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    border-radius: 2px;
                    animation: progressFill 3s ease-in-out infinite;
                }

                .progress-text {
                    text-align: center;
                    color: #a8edea;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                }

                /* Animations */
                @keyframes coreRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes corePulse {
                    0%, 100% { 
                        transform: translate(-50%, -50%) scale(1);
                        box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
                    }
                    50% { 
                        transform: translate(-50%, -50%) scale(1.1);
                        box-shadow: 0 0 30px rgba(102, 126, 234, 0.8);
                    }
                }

                @keyframes streamFlow {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }

                @keyframes packetMoveHorizontal {
                    0% { left: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 200px; opacity: 0; }
                }

                @keyframes packetMoveVertical {
                    0% { top: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 200px; opacity: 0; }
                }

                @keyframes packetMoveHorizontalReverse {
                    0% { right: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { right: 200px; opacity: 0; }
                }

                @keyframes packetMoveVerticalReverse {
                    0% { bottom: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { bottom: 200px; opacity: 0; }
                }

                @keyframes lineGlow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }

                @keyframes binaryFall {
                    0% { transform: translateY(-100px); }
                    100% { transform: translateY(500px); }
                }

                @keyframes digitFade {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }

                @keyframes dotBounce {
                    0%, 100% { opacity: 0.3; transform: translateY(0px); }
                    50% { opacity: 1; transform: translateY(-3px); }
                }

                @keyframes progressFill {
                    0% { width: 0%; }
                    80% { width: 90%; }
                    100% { width: 100%; }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .data-flow-loader {
                        width: 300px;
                        height: 300px;
                    }

                    .ai-core {
                        width: 80px;
                        height: 80px;
                    }

                    .core-ring-1 {
                        width: 50px;
                        height: 50px;
                        top: 15px;
                        left: 15px;
                    }

                    .core-ring-2 {
                        width: 65px;
                        height: 65px;
                        top: 7.5px;
                        left: 7.5px;
                    }

                    .core-ring-3 {
                        width: 80px;
                        height: 80px;
                    }

                    .core-center {
                        width: 30px;
                        height: 30px;
                        font-size: 1rem;
                    }

                    .stream-1, .stream-3 { width: 150px; }
                    .stream-2, .stream-4 { height: 150px; }

                    .progress-container { width: 150px; }
                    
                    .loading-text { font-size: 1rem; }
                    
                    .binary-rain { display: none; }
                }
            `}</style>
        </>
    );
}
