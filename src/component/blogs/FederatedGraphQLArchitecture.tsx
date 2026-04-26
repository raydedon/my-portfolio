const FederatedGraphQLArchitecture = () => (
    <figure className="my-2 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <figcaption className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
            AWS Deployment Architecture
        </figcaption>
        <svg
            viewBox="0 0 810 510"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto w-full max-w-3xl"
            aria-label="Federated GraphQL AWS architecture diagram"
            role="img"
        >
            <defs>
                <marker id="fga-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
                </marker>
                <marker id="fga-arr-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
                </marker>
                <marker id="fga-arr-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
                </marker>
                <marker id="fga-arr-slate" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#475569" />
                </marker>
            </defs>

            {/* ── Internet/Client ────────────────────────────────── */}
            <rect x="330" y="8" width="150" height="40" rx="8"
                fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="405" y="33" textAnchor="middle" fontSize="12" fontWeight="600"
                fill="#334155" fontFamily="ui-sans-serif,system-ui,sans-serif">
                Internet / Client
            </text>

            {/* Arrow Internet → ALB */}
            <line x1="405" y1="48" x2="405" y2="76" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />
            <text x="413" y="67" fontSize="9" fill="#9ca3af"
                fontFamily="ui-sans-serif,system-ui,sans-serif">HTTPS</text>

            {/* ── ALB + ACM ──────────────────────────────────────── */}
            <rect x="170" y="78" width="470" height="56" rx="10"
                fill="#fff7ed" stroke="#fb923c" strokeWidth="2" />
            <text x="405" y="101" textAnchor="middle" fontSize="12" fontWeight="700"
                fill="#c2410c" fontFamily="ui-sans-serif,system-ui,sans-serif">
                Application Load Balancer
            </text>
            <text x="405" y="121" textAnchor="middle" fontSize="10" fill="#9a3412"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                HTTPS :443 · ACM Certificate · HTTP → HTTPS redirect
            </text>

            {/* Arrow ALB → Apollo Router */}
            <line x1="405" y1="134" x2="405" y2="170" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />

            {/* ── ECS Fargate Cluster ────────────────────────────── */}
            <rect x="15" y="160" width="615" height="335" rx="14"
                fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="8 4" />
            <text x="38" y="182" fontSize="10" fontWeight="700"
                fill="#0369a1" fontFamily="ui-sans-serif,system-ui,sans-serif">
                ECS Fargate Cluster  ·  turbo-graphql-production
            </text>

            {/* ── Apollo Router ──────────────────────────────────── */}
            <rect x="310" y="188" width="190" height="56" rx="10"
                fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
            <text x="405" y="213" textAnchor="middle" fontSize="12" fontWeight="700"
                fill="#1d4ed8" fontFamily="ui-sans-serif,system-ui,sans-serif">
                Apollo Router
            </text>
            <text x="405" y="231" textAnchor="middle" fontSize="10" fill="#3b82f6"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                :4000 · supergraph.graphql
            </text>

            {/* Fork from Router down to 3 services */}
            <line x1="405" y1="244" x2="405" y2="262" stroke="#6b7280" strokeWidth="1.5" />
            <line x1="112" y1="262" x2="598" y2="262" stroke="#6b7280" strokeWidth="1.5" />
            <line x1="112" y1="262" x2="112" y2="278" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />
            <line x1="405" y1="262" x2="405" y2="278" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />
            <line x1="598" y1="262" x2="598" y2="278" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />

            {/* Cloud Map label on fork */}
            <rect x="428" y="248" width="118" height="26" rx="5"
                fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
            <text x="487" y="265" textAnchor="middle" fontSize="9" fontWeight="600"
                fill="#15803d" fontFamily="ui-sans-serif,system-ui,sans-serif">
                Cloud Map DNS · *.turbo-graphql.local
            </text>

            {/* ── Subgraph Services ──────────────────────────────── */}
            <rect x="30" y="280" width="164" height="56" rx="10"
                fill="#ffffff" stroke="#67e8f9" strokeWidth="2" />
            <text x="112" y="305" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#0e7490" fontFamily="ui-sans-serif,system-ui,sans-serif">
                users-service
            </text>
            <text x="112" y="323" textAnchor="middle" fontSize="10" fill="#0891b2"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                NestJS · :4001
            </text>

            <rect x="323" y="280" width="164" height="56" rx="10"
                fill="#ffffff" stroke="#67e8f9" strokeWidth="2" />
            <text x="405" y="305" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#0e7490" fontFamily="ui-sans-serif,system-ui,sans-serif">
                posts-service
            </text>
            <text x="405" y="323" textAnchor="middle" fontSize="10" fill="#0891b2"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                NestJS · :4002
            </text>

            <rect x="516" y="280" width="164" height="56" rx="10"
                fill="#ffffff" stroke="#67e8f9" strokeWidth="2" />
            <text x="598" y="305" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#0e7490" fontFamily="ui-sans-serif,system-ui,sans-serif">
                comments-service
            </text>
            <text x="598" y="323" textAnchor="middle" fontSize="10" fill="#0891b2"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                NestJS · :4003
            </text>

            {/* Arrows services → RDS */}
            <line x1="112" y1="336" x2="112" y2="372" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />
            <line x1="405" y1="336" x2="405" y2="372" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />
            <line x1="598" y1="336" x2="598" y2="372" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />

            {/* ── RDS PostgreSQL ──────────────────────────────────── */}
            <rect x="30" y="374" width="164" height="50" rx="8"
                fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1.5" />
            <text x="112" y="396" textAnchor="middle" fontSize="10" fontWeight="600"
                fill="#7e22ce" fontFamily="ui-sans-serif,system-ui,sans-serif">
                RDS · users DB
            </text>
            <text x="112" y="413" textAnchor="middle" fontSize="9" fill="#9333ea"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                PostgreSQL · Prisma
            </text>

            <rect x="323" y="374" width="164" height="50" rx="8"
                fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1.5" />
            <text x="405" y="396" textAnchor="middle" fontSize="10" fontWeight="600"
                fill="#7e22ce" fontFamily="ui-sans-serif,system-ui,sans-serif">
                RDS · posts DB
            </text>
            <text x="405" y="413" textAnchor="middle" fontSize="9" fill="#9333ea"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                PostgreSQL · Prisma
            </text>

            <rect x="516" y="374" width="164" height="50" rx="8"
                fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1.5" />
            <text x="598" y="396" textAnchor="middle" fontSize="10" fontWeight="600"
                fill="#7e22ce" fontFamily="ui-sans-serif,system-ui,sans-serif">
                RDS · comments DB
            </text>
            <text x="598" y="413" textAnchor="middle" fontSize="9" fill="#9333ea"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                PostgreSQL · Prisma
            </text>

            {/* ── Right column: ECR, Secrets Manager, CloudWatch ── */}

            {/* ECR */}
            <rect x="652" y="188" width="145" height="56" rx="10"
                fill="#f0fdf4" stroke="#4ade80" strokeWidth="1.5" />
            <text x="724" y="212" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#15803d" fontFamily="ui-sans-serif,system-ui,sans-serif">
                Amazon ECR
            </text>
            <text x="724" y="230" textAnchor="middle" fontSize="9" fill="#16a34a"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                4 repos · Docker images
            </text>
            {/* ECR → Apollo Router (dashed, image pull) */}
            <line x1="652" y1="216" x2="500" y2="216" stroke="#16a34a" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#fga-arr-green)" />

            {/* Secrets Manager */}
            <rect x="652" y="280" width="145" height="56" rx="10"
                fill="#fff1f2" stroke="#fca5a5" strokeWidth="1.5" />
            <text x="724" y="304" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#b91c1c" fontFamily="ui-sans-serif,system-ui,sans-serif">
                Secrets Manager
            </text>
            <text x="724" y="322" textAnchor="middle" fontSize="9" fill="#dc2626"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                DATABASE_URL per service
            </text>
            {/* Secrets Manager → comments-service (dashed) */}
            <line x1="652" y1="308" x2="680" y2="308" stroke="#dc2626" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="652" y1="308" x2="652" y2="316" stroke="#dc2626" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="652" y1="308" x2="598" y2="308" stroke="#dc2626" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#fga-arr-red)" />

            {/* CloudWatch */}
            <rect x="652" y="374" width="145" height="50" rx="10"
                fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="724" y="396" textAnchor="middle" fontSize="11" fontWeight="600"
                fill="#334155" fontFamily="ui-sans-serif,system-ui,sans-serif">
                CloudWatch Logs
            </text>
            <text x="724" y="413" textAnchor="middle" fontSize="9" fill="#475569"
                fontFamily="ui-sans-serif,system-ui,sans-serif">
                /ecs/turbo-graphql/…
            </text>
            {/* Services → CloudWatch (dashed log arrow from comments-service area) */}
            <line x1="598" y1="420" x2="652" y2="399" stroke="#475569" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#fga-arr-slate)" />

            {/* ECR also feeds subgraph services (dashed down-right) */}
            <line x1="724" y1="244" x2="724" y2="280" stroke="#16a34a" strokeWidth="1"
                strokeDasharray="4 3" />
            <text x="740" y="264" fontSize="8" fill="#86efac"
                fontFamily="ui-sans-serif,system-ui,sans-serif">all 4</text>

            {/* ── Legend ────────────────────────────────────────── */}
            <rect x="15" y="465" width="630" height="36" rx="8"
                fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="30" y1="483" x2="55" y2="483" stroke="#6b7280" strokeWidth="1.5"
                markerEnd="url(#fga-arr)" />
            <text x="60" y="487" fontSize="9" fill="#64748b"
                fontFamily="ui-sans-serif,system-ui,sans-serif">traffic flow</text>
            <line x1="140" y1="483" x2="165" y2="483" stroke="#16a34a" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#fga-arr-green)" />
            <text x="170" y="487" fontSize="9" fill="#64748b"
                fontFamily="ui-sans-serif,system-ui,sans-serif">image pull (ECR)</text>
            <line x1="275" y1="483" x2="300" y2="483" stroke="#dc2626" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#fga-arr-red)" />
            <text x="305" y="487" fontSize="9" fill="#64748b"
                fontFamily="ui-sans-serif,system-ui,sans-serif">secrets injection</text>
            <line x1="410" y1="483" x2="435" y2="483" stroke="#475569" strokeWidth="1.5"
                strokeDasharray="5 3" markerEnd="url(#fga-arr-slate)" />
            <text x="440" y="487" fontSize="9" fill="#64748b"
                fontFamily="ui-sans-serif,system-ui,sans-serif">logs (CloudWatch)</text>
            <line x1="545" y1="483" x2="570" y2="483" stroke="#7dd3fc" strokeWidth="2"
                strokeDasharray="8 4" />
            <text x="575" y="487" fontSize="9" fill="#64748b"
                fontFamily="ui-sans-serif,system-ui,sans-serif">cluster boundary</text>
        </svg>

        {/* AWS components list */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
                { name: 'ECS Fargate', desc: 'Runs all 4 services as tasks' },
                { name: 'ALB + ACM', desc: 'HTTPS entry point, TLS termination' },
                { name: 'ECR', desc: '4 Docker image repositories' },
                { name: 'RDS PostgreSQL', desc: 'One database per subgraph' },
                { name: 'Secrets Manager', desc: 'DATABASE_URL injected at runtime' },
                { name: 'Cloud Map', desc: 'Private DNS for router → subgraphs' },
                { name: 'CloudWatch Logs', desc: 'Log groups per service, 14-day retention' },
                { name: 'VPC + Security Groups', desc: 'ALB SG (public) + ECS SG (internal)' },
                { name: 'IAM', desc: 'Task execution role for ECR & Secrets' },
            ].map((item) => (
                <div key={item.name} className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <p className="text-xs font-semibold text-gray-900">{item.name}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{item.desc}</p>
                </div>
            ))}
        </div>
    </figure>
);

export default FederatedGraphQLArchitecture;
