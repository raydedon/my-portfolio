export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    hero: string;
    previewUrl?: string;
    showDiagram?: boolean;
    sections: {
        heading: string;
        paragraphs: string[];
    }[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: 'microfrontends',
        title: 'Microfrontends with Turborepo and Vercel',
        date: 'Apr 2026',
        previewUrl: 'https://turbo-repo-project-blogs.vercel.app',
        showDiagram: true,
        summary:
            'How I split the users and blogs experiences into independently deployable frontends inside one Turborepo and shipped them cleanly on Vercel.',
        tags: ['Microfrontends', 'Turborepo', 'Vercel'],
        hero:
            'I used the apps/users and apps/blogs applications in my Turborepo as independently deployable frontends, while still keeping a shared developer experience through common tooling, shared packages, and predictable deployment pipelines on Vercel.',
        sections: [
            {
                heading: 'Why I chose this structure',
                paragraphs: [
                    'The main goal was to let different parts of the product evolve without forcing every UI change through one large frontend deployment. I wanted the users experience and the blogs experience to move at their own pace while still living in one repository.',
                    'Turborepo gave me the right monorepo foundation for that. It let me keep apps/users and apps/blogs separate as real applications, while still sharing code, TypeScript configuration, linting, and any reusable UI or utility packages from the workspace.'
                ]
            },
            {
                heading: 'How the microfrontend setup worked',
                paragraphs: [
                    'I treated each app as its own deployable surface. The users app focused on user-centric flows, while the blogs app owned the blog-related experience. That separation made ownership clearer and reduced the blast radius of changes.',
                    'Instead of duplicating everything, I leaned on Turborepo to share the foundation. Shared packages helped me keep common logic and conventions in one place, and Turbo caching kept local development and CI fast even as the repo grew.'
                ]
            },
            {
                heading: 'Why Vercel fit the deployment model',
                paragraphs: [
                    'Vercel worked well because each app could be deployed as its own project while still pointing back to the same repository. That gave me clean app-level deployments, preview environments for isolated changes, and a workflow that matched the microfrontend boundary I wanted.',
                    'In practice, this meant I could update the blogs app without coupling that release to users, and vice versa. The combination of Turborepo for workspace orchestration and Vercel for app-specific deployment made the architecture feel lightweight instead of over-engineered.'
                ]
            },
            {
                heading: 'What this improved',
                paragraphs: [
                    'The biggest win was team and codebase autonomy. Each frontend area had a clearer responsibility, deploys were easier to reason about, and shared code still stayed centralized instead of drifting apart.',
                    'This approach gave me the benefits of microfrontends without losing the productivity of a monorepo. I could keep consistency where it mattered, but still ship the users and blogs applications as independently managed experiences.'
                ]
            }
        ]
    },
    {
        slug: 'federated-graphql',
        title: 'Federated GraphQL in a Turborepo',
        date: 'Apr 2026',
        summary:
            'How I structured GraphQL federation in my Turborepo so domain services could expose their own schemas while still presenting a unified graph to clients.',
        tags: ['GraphQL', 'Federation', 'Architecture'],
        hero:
            'I implemented GraphQL federation in my Turborepo by letting domain services own their own schemas and resolvers, then composing them into one unified graph so frontend clients could consume a single API instead of talking to multiple backends directly.',
        sections: [
            {
                heading: 'The problem federation solved',
                paragraphs: [
                    'As the system grew, I did not want one large GraphQL service to become the bottleneck for every domain change. Different backend capabilities needed clear ownership, but I still wanted the frontend to see one consistent graph.',
                    'Federation was the right fit because it let me split the graph into domain-oriented subgraphs while preserving a single entry point for clients.'
                ]
            },
            {
                heading: 'How I approached the implementation',
                paragraphs: [
                    'Inside the Turborepo, I kept the services organized so each domain could define the part of the schema it truly owned. That meant types, resolvers, and business logic stayed close to the service that knew the data best.',
                    'The federated layer then composed those subgraphs into one graph. From the client perspective, it looked like one API. Internally, the ownership was distributed, which made the architecture easier to scale than a single centralized schema.'
                ]
            },
            {
                heading: 'What made the setup practical',
                paragraphs: [
                    'The monorepo structure helped a lot here. Shared tooling made it easier to keep schema conventions, dependencies, and developer workflows aligned across the federated services.',
                    'Because everything lived in the same Turborepo, I could evolve subgraphs in parallel, manage changes with better visibility, and reduce the friction that usually appears when multiple services need to contribute to one API surface.'
                ]
            },
            {
                heading: 'The outcome',
                paragraphs: [
                    'The final result was a cleaner separation of backend responsibilities with a much simpler experience for consumers of the API. Frontend applications could query one graph, while backend services remained independently owned and easier to extend.',
                    'That is what made federation valuable in this project: it balanced autonomy and consistency. Teams or domains could move independently, but the product still exposed one coherent GraphQL contract.'
                ]
            }
        ]
    }
];

export const blogPostMap = Object.fromEntries(
    blogPosts.map((post) => [post.slug, post])
) as Record<string, BlogPost>;
