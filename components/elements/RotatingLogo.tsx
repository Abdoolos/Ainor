export default function RotatingLogo() {
    return (
        <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="ribbonRotate"
        >
            <defs>
                <path
                    id="circle"
                    d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                />
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                </linearGradient>
            </defs>
            {/* Background circle */}
            <circle
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
            />
            {/* Main text */}
            <text
                fill="url(#textGradient)"
                fontSize="18"
                letterSpacing="3"
                fontWeight="600"
                className="text-uppercase"
            >
                <textPath href="#circle" startOffset="0%">
                    Abdullah Alawiss • Innovativ Design • Digital Utvikling •
                </textPath>
            </text>
        </svg>
    );
}
