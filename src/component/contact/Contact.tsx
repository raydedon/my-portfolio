'use client';

import { FormEvent, useState } from 'react';

const contactLinks = [
    {
        label: 'Email',
        value: 'raydedon@gmail.com',
        href: 'mailto:raydedon@gmail.com'
    },
    {
        label: 'GitHub',
        value: 'github.com/raydedon',
        href: 'https://github.com/raydedon'
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/animesh-ray-wins',
        href: 'https://www.linkedin.com/in/animesh-ray-wins/'
    }
];

const initialFormData = {
    name: '',
    email: '',
    project: '',
    message: ''
};

const Contact = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        setStatusType('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = (await response.json()) as { message?: string };

            if (!response.ok) {
                throw new Error(result.message || 'Unable to send message.');
            }

            setFormData(initialFormData);
            setStatusType('success');
            setStatusMessage('Message sent successfully. I will get back to you soon.');
        } catch (error) {
            setStatusType('error');
            setStatusMessage(
                error instanceof Error
                    ? error.message
                    : 'Something went wrong while sending your message.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="px-6 py-16 md:py-24 scroll-mt-24">
            <div className="mx-auto flex max-w-5xl flex-col gap-8">
                <div className="flex flex-col gap-3 text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
                        Contact
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Let&apos;s talk about your next build
                    </h2>
                    <p className="max-w-2xl text-base leading-7 text-gray-600">
                        Share a product idea, platform challenge, or hiring conversation. The
                        form sends your message directly to my inbox.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
                    >
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-gray-800">Name</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(event) =>
                                        setFormData((current) => ({
                                            ...current,
                                            name: event.target.value
                                        }))
                                    }
                                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:bg-white"
                                    placeholder="Your name"
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-gray-800">Email</span>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(event) =>
                                        setFormData((current) => ({
                                            ...current,
                                            email: event.target.value
                                        }))
                                    }
                                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:bg-white"
                                    placeholder="you@example.com"
                                />
                            </label>

                            <label className="flex flex-col gap-2 md:col-span-2">
                                <span className="text-sm font-semibold text-gray-800">
                                    Company or project
                                </span>
                                <input
                                    type="text"
                                    value={formData.project}
                                    onChange={(event) =>
                                        setFormData((current) => ({
                                            ...current,
                                            project: event.target.value
                                        }))
                                    }
                                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:bg-white"
                                    placeholder="Startup, team, or idea"
                                />
                            </label>

                            <label className="flex flex-col gap-2 md:col-span-2">
                                <span className="text-sm font-semibold text-gray-800">Message</span>
                                <textarea
                                    required
                                    rows={7}
                                    value={formData.message}
                                    onChange={(event) =>
                                        setFormData((current) => ({
                                            ...current,
                                            message: event.target.value
                                        }))
                                    }
                                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:bg-white"
                                    placeholder="What are you building, and how can I help?"
                                />
                            </label>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm leading-6 text-gray-500">
                                Messages are delivered to `raydedon@gmail.com`.
                            </p>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-400"
                            >
                                {isSubmitting ? 'Sending...' : 'Send message'}
                            </button>
                        </div>

                        {statusMessage ? (
                            <p
                                className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium ${
                                    statusType === 'success'
                                        ? 'bg-green-50 text-green-800'
                                        : 'bg-red-50 text-red-700'
                                }`}
                            >
                                {statusMessage}
                            </p>
                        ) : null}
                    </form>

                    <div className="flex flex-col gap-4 rounded-3xl border border-green-100 bg-green-50 p-6 md:p-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
                                Reach Out
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Prefer direct contact?
                            </h3>
                            <p className="text-base leading-7 text-gray-600">
                                You can also contact me directly through email or connect with me
                                on GitHub and LinkedIn.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label === 'Email' ? undefined : '_blank'}
                                    rel={link.label === 'Email' ? undefined : 'noreferrer'}
                                    className="rounded-2xl border border-white bg-white p-5 transition-colors hover:border-green-200 hover:bg-green-100/40"
                                >
                                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-green-700">
                                        {link.label}
                                    </p>
                                    <p className="text-base font-semibold text-gray-900">
                                        {link.value}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
