import nextConfig from 'eslint-config-next/core-web-vitals';

const config = [
    ...nextConfig,
    {
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'quotes': ['error', 'single'],
            'object-curly-spacing': ['error', 'always'],
        },
    },
];

export default config;
