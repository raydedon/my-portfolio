const MicrofrontendsArchitecture = () => (
    <figure className="my-2 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <figcaption className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
            Architecture
        </figcaption>
        <svg
            viewBox="0 0 680 400"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto w-full max-w-2xl"
            aria-label="Microfrontends architecture diagram"
            role="img"
        >
            {/* Turborepo monorepo container */}
            <rect x="10" y="10" width="660" height="380" rx="16" ry="16"
                fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="2" strokeDasharray="8 4" />
            <text x="340" y="38" textAnchor="middle" fontSize="13" fontWeight="700"
                fill="#15803d" fontFamily="ui-sans-serif, system-ui, sans-serif">
                Turborepo Monorepo
            </text>

            {/* apps/blogs – HOST */}
            <rect x="50" y="65" width="220" height="130" rx="12" ry="12"
                fill="#ffffff" stroke="#86efac" strokeWidth="2" />
            <text x="160" y="94" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#166534" fontFamily="ui-sans-serif, system-ui, sans-serif">
                apps/blogs
            </text>
            <rect x="70" y="105" width="80" height="22" rx="6" ry="6" fill="#dcfce7" />
            <text x="110" y="121" textAnchor="middle" fontSize="10" fontWeight="700"
                fill="#15803d" fontFamily="ui-sans-serif, system-ui, sans-serif">
                HOST
            </text>
            <text x="160" y="152" textAnchor="middle" fontSize="10" fill="#374151"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                Next.js · port 3000
            </text>
            <text x="160" y="168" textAnchor="middle" fontSize="10" fill="#6b7280"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                microfrontends.json
            </text>
            <text x="160" y="184" textAnchor="middle" fontSize="10" fill="#6b7280"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                declares users as remote
            </text>

            {/* apps/users – REMOTE */}
            <rect x="410" y="65" width="220" height="130" rx="12" ry="12"
                fill="#ffffff" stroke="#86efac" strokeWidth="2" />
            <text x="520" y="94" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#166534" fontFamily="ui-sans-serif, system-ui, sans-serif">
                apps/users
            </text>
            <rect x="430" y="105" width="80" height="22" rx="6" ry="6" fill="#dbeafe" />
            <text x="470" y="121" textAnchor="middle" fontSize="10" fontWeight="700"
                fill="#1d4ed8" fontFamily="ui-sans-serif, system-ui, sans-serif">
                REMOTE
            </text>
            <text x="520" y="152" textAnchor="middle" fontSize="10" fill="#374151"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                Next.js · port 3001
            </text>
            <text x="520" y="168" textAnchor="middle" fontSize="10" fill="#6b7280"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                basePath: /users
            </text>
            <text x="520" y="184" textAnchor="middle" fontSize="10" fill="#6b7280"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                routed at /users/*
            </text>

            {/* Shared packages */}
            <rect x="205" y="65" width="270" height="50" rx="10" ry="10"
                fill="#fefce8" stroke="#fde047" strokeWidth="1.5" />
            <text x="340" y="86" textAnchor="middle" fontSize="10" fontWeight="600"
                fill="#854d0e" fontFamily="ui-sans-serif, system-ui, sans-serif">
                packages/
            </text>
            <text x="340" y="103" textAnchor="middle" fontSize="10" fill="#78350f"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                @repo/ui · @repo/eslint-config · @repo/typescript-config
            </text>

            {/* Arrow from blogs to shared */}
            <line x1="270" y1="130" x2="215" y2="105" stroke="#d1d5db" strokeWidth="1.5"
                markerEnd="url(#arrow)" />
            {/* Arrow from users to shared */}
            <line x1="410" y1="130" x2="465" y2="105" stroke="#d1d5db" strokeWidth="1.5"
                markerEnd="url(#arrow)" />

            {/* Local proxy */}
            <rect x="245" y="240" width="190" height="55" rx="10" ry="10"
                fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="2" />
            <text x="340" y="264" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#6d28d9" fontFamily="ui-sans-serif, system-ui, sans-serif">
                Local Proxy · :3024
            </text>
            <text x="340" y="284" textAnchor="middle" fontSize="10" fill="#7c3aed"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                turbo dev · aggregates both apps
            </text>

            {/* Arrows from apps down to proxy */}
            <line x1="160" y1="195" x2="280" y2="240" stroke="#a3a3a3" strokeWidth="1.5"
                markerEnd="url(#arrow)" />
            <line x1="520" y1="195" x2="400" y2="240" stroke="#a3a3a3" strokeWidth="1.5"
                markerEnd="url(#arrow)" />

            {/* Vercel row */}
            <rect x="60" y="330" width="175" height="50" rx="10" ry="10"
                fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" />
            <text x="147" y="351" textAnchor="middle" fontSize="10" fontWeight="600"
                fill="#c2410c" fontFamily="ui-sans-serif, system-ui, sans-serif">
                Vercel: blogs project
            </text>
            <text x="147" y="368" textAnchor="middle" fontSize="9" fill="#9a3412"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                fallback URL in microfrontends.json
            </text>

            <rect x="445" y="330" width="175" height="50" rx="10" ry="10"
                fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" />
            <text x="532" y="351" textAnchor="middle" fontSize="10" fontWeight="600"
                fill="#c2410c" fontFamily="ui-sans-serif, system-ui, sans-serif">
                Vercel: users project
            </text>
            <text x="532" y="368" textAnchor="middle" fontSize="9" fill="#9a3412"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                independent deployment
            </text>

            {/* Arrows from apps down to Vercel boxes */}
            <line x1="160" y1="195" x2="147" y2="330" stroke="#fb923c" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#arrowOrange)" />
            <line x1="520" y1="195" x2="532" y2="330" stroke="#fb923c" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#arrowOrange)" />

            {/* Arrow defs */}
            <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#a3a3a3" />
                </marker>
                <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
                </marker>
            </defs>
        </svg>
    </figure>
);

export default MicrofrontendsArchitecture;
