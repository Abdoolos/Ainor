"use client";

interface CustomLoaderProps {
    isVisible?: boolean;
    message?: string;
    size?: 'small' | 'medium' | 'large';
}

export default function CustomLoader({ 
    isVisible = true, 
    message = "Processing", 
    size = 'medium' 
}: CustomLoaderProps) {
    if (!isVisible) return null;

    const sizeClasses = {
        small: 'loader-small',
        medium: 'loader-medium', 
        large: 'loader-large'
    };

    return (
        <>
            <div className={`custom-loader-overlay ${sizeClasses[size]}`}>
                <div className="custom-data-flow-loader">
                    {/* Central AI Core */}
                    <div className="custom-ai-core">
                        <div className="custom-core-ring custom-core-ring-1"></div>
                        <div className="custom-core-ring custom-core-ring-2"></div>
                        <div className="custom-core-ring custom-core-ring-3"></div>
                        <div className="custom-core-center">
                            <i className="bi bi-cpu-fill"></i>
                        </div>
                    </div>

                    {/* Data Streams */}
                    <div className="custom-data-streams">
                        <div className="custom-stream custom-stream-1">
                            <div className="custom-data-packet custom-packet-1"></div>
                            <div className="custom-data-packet custom-packet-2"></div>
                        </div>
                        <div className="custom-stream custom-stream-2">
                            <div className="custom-data-packet custom-packet-1"></div>
                            <div className="custom-data-packet custom-packet-2"></div>
                        </div>
                        <div className="custom-stream custom-stream-3">
                            <div className="custom-data-packet custom-packet-1"></div>
                            <div className="custom-data-packet custom-packet-2"></div>
                        </div>
                        <div className="custom-stream custom-stream-4">
                            <div className="custom-data-packet custom-packet-1"></div>
                            <div className="custom-data-packet custom-packet-2"></div>
                        </div>
                    </div>

                    {/* Loading Text */}
                    <div className="custom-loading-text">
                        <span className="custom-text-processing">{message}</span>
                        <div className="custom-dots">
                            <span className="custom-dot custom-dot-1">.</span>
                            <span className="custom-dot custom-dot-2">.</span>
                            <span className="custom-dot custom-dot-3">.</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-loader-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 15, 35, 0.95);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(5px);
                }

                .custom-data-flow-loader {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .loader-small .custom-data-flow-loader { width: 200px; height: 200px; }
                .loader-medium .custom-data-flow-loader { width: 300px; height: 300px; }
                .loader-large .custom-data-flow-loader { width: 400px; height: 400px; }

                /* AI Core Styles */
                .custom-ai-core {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                }

                .loader-small .custom-ai-core { width: 60px; height: 60px; }
                .loader-medium .custom-ai-core { width: 80px; height: 80px; }
                .loader-large .custom-ai-core { width: 100px; height: 100px; }

                .custom-core-ring {
                    position: absolute;
                    border: 2px solid;
                    border-radius: 50%;
                    animation: customCoreRotate 3s linear infinite;
                }

                .loader-small .custom-core-ring-1 {
                    width: 40px; height: 40px; top: 10px; left: 10px;
                    border-color: #667eea transparent #667eea transparent;
                    animation-duration: 2s;
                }

                .loader-medium .custom-core-ring-1 {
                    width: 50px; height: 50px; top: 15px; left: 15px;
                    border-color: #667eea transparent #667eea transparent;
                    animation-duration: 2s;
                }

                .loader-large .custom-core-ring-1 {
                    width: 60px; height: 60px; top: 20px; left: 20px;
                    border-color: #667eea transparent #667eea transparent;
                    animation-duration: 2s;
                }

                .loader-small .custom-core-ring-2 {
                    width: 50px; height: 50px; top: 5px; left: 5px;
                    border-color: transparent #764ba2 transparent #764ba2;
                    animation-duration: 3s; animation-direction: reverse;
                }

                .loader-medium .custom-core-ring-2 {
                    width: 65px; height: 65px; top: 7.5px; left: 7.5px;
                    border-color: transparent #764ba2 transparent #764ba2;
                    animation-duration: 3s; animation-direction: reverse;
                }

                .loader-large .custom-core-ring-2 {
                    width: 80px; height: 80px; top: 10px; left: 10px;
                    border-color: transparent #764ba2 transparent #764ba2;
                    animation-duration: 3s; animation-direction: reverse;
                }

                .loader-small .custom-core-ring-3 {
                    width: 60px; height: 60px; top: 0; left: 0;
                    border-color: #a8edea transparent #a8edea transparent;
                    animation-duration: 4s;
                }

                .loader-medium .custom-core-ring-3 {
                    width: 80px; height: 80px; top: 0; left: 0;
                    border-color: #a8edea transparent #a8edea transparent;
                    animation-duration: 4s;
                }

                .loader-large .custom-core-ring-3 {
                    width: 100px; height: 100px; top: 0; left: 0;
                    border-color: #a8edea transparent #a8edea transparent;
                    animation-duration: 4s;
                }

                .custom-core-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    animation: customCorePulse 2s ease-in-out infinite;
                }

                .loader-small .custom-core-center { width: 25px; height: 25px; font-size: 0.8rem; }
                .loader-medium .custom-core-center { width: 30px; height: 30px; font-size: 1rem; }
                .loader-large .custom-core-center { width: 40px; height: 40px; font-size: 1.2rem; }

                /* Data Streams */
                .custom-data-streams {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .custom-stream {
                    position: absolute;
                    background: linear-gradient(90deg, transparent, #667eea, transparent);
                    opacity: 0.7;
                }

                .custom-stream-1 {
                    height: 2px;
                    top: 25%;
                    left: -50%;
                    animation: customStreamFlow 4s linear infinite;
                }

                .custom-stream-2 {
                    width: 2px;
                    top: -50%;
                    left: 50%;
                    animation: customStreamFlow 4s linear infinite 1s;
                    background: linear-gradient(180deg, transparent, #764ba2, transparent);
                }

                .custom-stream-3 {
                    height: 2px;
                    bottom: 25%;
                    right: -50%;
                    animation: customStreamFlow 4s linear infinite 2s;
                    background: linear-gradient(90deg, transparent, #a8edea, transparent);
                }

                .custom-stream-4 {
                    width: 2px;
                    bottom: -50%;
                    right: 50%;
                    animation: customStreamFlow 4s linear infinite 3s;
                    background: linear-gradient(180deg, transparent, #fed6e3, transparent);
                }

                .loader-small .custom-stream-1,
                .loader-small .custom-stream-3 { width: 120px; }
                .loader-small .custom-stream-2,
                .loader-small .custom-stream-4 { height: 120px; }

                .loader-medium .custom-stream-1,
                .loader-medium .custom-stream-3 { width: 150px; }
                .loader-medium .custom-stream-2,
                .loader-medium .custom-stream-4 { height: 150px; }

                .loader-large .custom-stream-1,
                .loader-large .custom-stream-3 { width: 200px; }
                .loader-large .custom-stream-2,
                .loader-large .custom-stream-4 { height: 200px; }

                .custom-data-packet {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 8px currentColor;
                }

                .custom-stream-1 .custom-data-packet {
                    top: -2px;
                    animation: customPacketMoveHorizontal 2s linear infinite;
                }

                .custom-stream-2 .custom-data-packet {
                    left: -2px;
                    animation: customPacketMoveVertical 2s linear infinite;
                }

                .custom-stream-3 .custom-data-packet {
                    top: -2px;
                    animation: customPacketMoveHorizontalReverse 2s linear infinite;
                }

                .custom-stream-4 .custom-data-packet {
                    left: -2px;
                    animation: customPacketMoveVerticalReverse 2s linear infinite;
                }

                .custom-packet-1 { animation-delay: 0s; color: #667eea; }
                .custom-packet-2 { animation-delay: 1s; color: #764ba2; }

                /* Loading Text */
                .custom-loading-text {
                    position: absolute;
                    bottom: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    color: #667eea;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .loader-small .custom-loading-text { font-size: 0.9rem; bottom: -50px; }
                .loader-medium .custom-loading-text { font-size: 1rem; bottom: -55px; }
                .loader-large .custom-loading-text { font-size: 1.1rem; bottom: -60px; }

                .custom-text-processing {
                    margin-right: 5px;
                }

                .custom-dots {
                    display: flex;
                }

                .custom-dot {
                    animation: customDotBounce 1.5s ease-in-out infinite;
                    color: #764ba2;
                }

                .custom-dot-1 { animation-delay: 0s; }
                .custom-dot-2 { animation-delay: 0.3s; }
                .custom-dot-3 { animation-delay: 0.6s; }

                /* Animations */
                @keyframes customCoreRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes customCorePulse {
                    0%, 100% { 
                        transform: translate(-50%, -50%) scale(1);
                        box-shadow: 0 0 15px rgba(102, 126, 234, 0.5);
                    }
                    50% { 
                        transform: translate(-50%, -50%) scale(1.1);
                        box-shadow: 0 0 25px rgba(102, 126, 234, 0.8);
                    }
                }

                @keyframes customStreamFlow {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }

                @keyframes customPacketMoveHorizontal {
                    0% { left: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 120px; opacity: 0; }
                }

                @keyframes customPacketMoveVertical {
                    0% { top: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 120px; opacity: 0; }
                }

                @keyframes customPacketMoveHorizontalReverse {
                    0% { right: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { right: 120px; opacity: 0; }
                }

                @keyframes customPacketMoveVerticalReverse {
                    0% { bottom: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { bottom: 120px; opacity: 0; }
                }

                @keyframes customDotBounce {
                    0%, 100% { opacity: 0.3; transform: translateY(0px); }
                    50% { opacity: 1; transform: translateY(-2px); }
                }

                /* Responsive adjustments for packets */
                .loader-medium .custom-stream-1 .custom-data-packet,
                .loader-medium .custom-stream-3 .custom-data-packet {
                    animation-name: customPacketMoveHorizontalMedium;
                }

                .loader-medium .custom-stream-2 .custom-data-packet,
                .loader-medium .custom-stream-4 .custom-data-packet {
                    animation-name: customPacketMoveVerticalMedium;
                }

                .loader-large .custom-stream-1 .custom-data-packet,
                .loader-large .custom-stream-3 .custom-data-packet {
                    animation-name: customPacketMoveHorizontalLarge;
                }

                .loader-large .custom-stream-2 .custom-data-packet,
                .loader-large .custom-stream-4 .custom-data-packet {
                    animation-name: customPacketMoveVerticalLarge;
                }

                @keyframes customPacketMoveHorizontalMedium {
                    0% { left: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 150px; opacity: 0; }
                }

                @keyframes customPacketMoveVerticalMedium {
                    0% { top: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 150px; opacity: 0; }
                }

                @keyframes customPacketMoveHorizontalLarge {
                    0% { left: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 200px; opacity: 0; }
                }

                @keyframes customPacketMoveVerticalLarge {
                    0% { top: 0px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 200px; opacity: 0; }
                }
            `}</style>
        </>
    );
}
