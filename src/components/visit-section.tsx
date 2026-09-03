import { businessConfig } from "@/config/business";

export default function VisitSection() {
  return (
    <section 
      id="visit"
      className="scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg py-16 bg-surface-container-low rounded-2xl border border-outline-variant/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 items-center">
        <div>
          <h2 className="font-headline text-5xl font-bold text-primary mb-8">Visit Us</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-[24px] text-secondary mb-2">Location</h3>
              <address className="font-body text-[18px] text-on-surface-variant leading-relaxed not-italic">
                {businessConfig.location.display}<br />
                {businessConfig.location.conceptLabel}
              </address>
            </div>
            <div>
              <h3 className="font-headline text-[24px] text-secondary mb-2">Hours</h3>
              <div className="font-body text-[18px] text-on-surface-variant leading-relaxed space-y-1">
                <p>{businessConfig.hours.monThu.display}</p>
                <p>{businessConfig.hours.friSun.display}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Portland Concept Location Editorial Map */}
        <div
          role="img"
          aria-label="Stylized map of Portland, Oregon showing Amit Cafe as a fictional concept location"
          className="bg-[#fbf9f6] rounded-xl w-full h-[380px] sm:h-[400px] border border-outline-variant/40 shadow-[inset_0_2px_8px_rgba(61,43,31,0.04)] overflow-hidden relative select-none"
        >
          {/* Stylized Architectural Vector Map */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover"
          >
            <defs>
              {/* Subtle map paper grain / linear gradient */}
              <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbf9f6" />
                <stop offset="100%" stopColor="#f5efe8" />
              </linearGradient>

              {/* Willamette River soft wash */}
              <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dce5e7" />
                <stop offset="100%" stopColor="#cedbe0" />
              </linearGradient>
            </defs>

            {/* Base land background */}
            <rect width="600" height="400" fill="url(#mapBg)" />

            {/* Forest Park / West Hills soft green wash in northwest corner */}
            <path
              d="M 0 0 L 150 0 C 130 90, 70 170, 0 220 Z"
              fill="#edf2ec"
              opacity="0.75"
            />
            <text
              x="24"
              y="54"
              fill="#9caa99"
              fontSize="9"
              letterSpacing="2"
              fontFamily="sans-serif"
              fontWeight="600"
              opacity="0.8"
            >
              WEST HILLS
            </text>

            {/* Minor Eastside & Westside Street Grid Lines */}
            <g stroke="#eae1d7" strokeWidth="1" strokeDasharray="3 3">
              {/* Secondary Westside Streets */}
              <line x1="45" y1="0" x2="45" y2="400" />
              <line x1="85" y1="0" x2="85" y2="400" />
              <line x1="125" y1="0" x2="125" y2="400" />
              <line x1="165" y1="0" x2="165" y2="400" />

              {/* Secondary Eastside Streets */}
              <line x1="340" y1="0" x2="340" y2="400" />
              <line x1="380" y1="0" x2="380" y2="400" />
              <line x1="420" y1="0" x2="420" y2="400" />
              <line x1="460" y1="0" x2="460" y2="400" />
              <line x1="500" y1="0" x2="500" y2="400" />
              <line x1="540" y1="0" x2="540" y2="400" />
              <line x1="575" y1="0" x2="575" y2="400" />

              {/* Secondary East-West Avenues */}
              <line x1="0" y1="40" x2="600" y2="40" />
              <line x1="0" y1="75" x2="600" y2="75" />
              <line x1="0" y1="110" x2="600" y2="110" />
              <line x1="0" y1="145" x2="600" y2="145" />
              <line x1="0" y1="215" x2="600" y2="215" />
              <line x1="0" y1="250" x2="600" y2="250" />
              <line x1="0" y1="285" x2="600" y2="285" />
              <line x1="0" y1="320" x2="600" y2="320" />
              <line x1="0" y1="355" x2="600" y2="355" />
            </g>

            {/* Willamette River Form (natural flowing curve through Portland center) */}
            <path
              d="M 190 0 C 225 100, 240 150, 255 240 C 265 310, 280 350, 290 400 L 332 400 C 322 350, 307 310, 297 240 C 282 150, 267 100, 232 0 Z"
              fill="url(#riverGrad)"
              stroke="#cad6db"
              strokeWidth="1"
            />

            {/* Willamette River Typographic Label */}
            <text
              x="262"
              y="325"
              transform="rotate(-82 262 325)"
              fill="#839ba5"
              fontSize="9"
              letterSpacing="3"
              fontFamily="sans-serif"
              fontWeight="600"
              opacity="0.75"
            >
              WILLAMETTE RIVER
            </text>

            {/* Major Arterials & Bridges Crossing the Willamette */}
            {/* Broadway / Steel Bridge Alignment */}
            <line x1="0" y1="90" x2="600" y2="90" stroke="#dfd4c8" strokeWidth="1.5" />
            {/* Burnside St (Portland's primary North/South geographic divider) */}
            <line x1="0" y1="175" x2="600" y2="175" stroke="#d5c7ba" strokeWidth="2" />
            <text
              x="445"
              y="169"
              fill="#9e8c7e"
              fontSize="8.5"
              letterSpacing="2"
              fontFamily="sans-serif"
              fontWeight="700"
            >
              BURNSIDE ST
            </text>

            {/* Morrison / Belmont Alignment */}
            <line x1="0" y1="230" x2="600" y2="230" stroke="#dfd4c8" strokeWidth="1.5" />
            {/* Hawthorne Blvd Alignment */}
            <line x1="0" y1="285" x2="600" y2="285" stroke="#d5c7ba" strokeWidth="1.75" />
            <text
              x="445"
              y="279"
              fill="#9e8c7e"
              fontSize="8.5"
              letterSpacing="2"
              fontFamily="sans-serif"
              fontWeight="700"
            >
              HAWTHORNE BLVD
            </text>

            {/* Major North-South Avenues */}
            <line x1="140" y1="0" x2="140" y2="400" stroke="#dfd4c8" strokeWidth="1.5" />
            <line x1="390" y1="0" x2="390" y2="400" stroke="#dfd4c8" strokeWidth="1.5" />
            <line x1="490" y1="0" x2="490" y2="400" stroke="#dfd4c8" strokeWidth="1.5" />

            {/* Bridge structures over river */}
            <rect x="202" y="87" width="38" height="6" rx="2" fill="#baaba0" />
            <rect x="228" y="172" width="42" height="6" rx="2" fill="#ab9a8e" />
            <rect x="249" y="227" width="42" height="6" rx="2" fill="#baaba0" />
            <rect x="265" y="282" width="42" height="6" rx="2" fill="#ab9a8e" />

            {/* Symbolic Portland Concept Focal Point (City-level artistic beacon) */}
            <g transform="translate(225, 145)">
              {/* Outer gentle ambient pulse ring */}
              <circle cx="0" cy="0" r="32" fill="#534339" opacity="0.04" />
              <circle cx="0" cy="0" r="20" fill="#534339" opacity="0.07" />
              {/* Outer compass ring */}
              <circle
                cx="0"
                cy="0"
                r="10"
                fill="#ffffff"
                stroke="#534339"
                strokeWidth="2"
              />
              {/* Inner espresso core */}
              <circle cx="0" cy="0" r="4.5" fill="#534339" />
              <circle cx="0" cy="0" r="1.5" fill="#fcfaf7" />
            </g>
          </svg>

          {/* Top Corner Geographic Region Badge */}
          <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant/30 text-[10px] tracking-[0.18em] font-body text-secondary uppercase font-bold shadow-xs">
            Pacific Northwest
          </div>

          {/* Editorial Concept Location Plaque */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] bg-surface/95 backdrop-blur-md p-4 rounded-xl border border-outline-variant/40 shadow-[0_8px_24px_rgba(61,43,31,0.07)]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0"></span>
              <span className="font-body text-[12px] font-bold tracking-[0.16em] uppercase text-primary">
                Portland, Oregon
              </span>
            </div>
            <p className="font-body text-[13px] text-on-surface-variant leading-snug">
              Fictional Concept Location
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
