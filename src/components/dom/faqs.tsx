"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { colors } from "@/theme/colors";

const FAQ = () => {
    const faqs = [
        {
            question: "What types of businesses do you work with?",
            answer: "We work with growing businesses across all industries — from service companies and e-commerce brands to agencies, startups, and established enterprises. If you're dealing with manual workflows, missed leads, or need custom software to scale, we can help."
        },
        {
            question: "How long does it take to build a custom solution?",
            answer: "Timeline varies based on complexity. Simple automations and AI phone agents can be live in 1-2 weeks. Custom business systems typically take 4-8 weeks. Full software platforms range from 2-6 months. We'll give you a clear timeline after understanding your needs."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes. We offer ongoing support, maintenance, and updates for all our solutions. We're your long-term tech partner — we don't just build and disappear. You'll have access to our team for troubleshooting, updates, and feature additions."
        },
        {
            question: "What's the difference between your solutions and off-the-shelf software?",
            answer: "Off-the-shelf tools force you to adapt your business to their limitations. We build custom solutions tailored exactly to your workflows, processes, and goals. You get software that fits your business perfectly, integrates with your existing tools, and scales as you grow."
        },
        {
            question: "Can you integrate with our existing tools and systems?",
            answer: "Absolutely. We specialize in connecting systems together. Whether it's your CRM, accounting software, e-commerce platform, or internal databases — we build integrations that make everything work seamlessly as one unified ecosystem."
        },
        {
            question: "How do AI phone agents work?",
            answer: "Our AI phone agents are conversational voice bots trained on your business. They answer calls 24/7, understand your services, handle FAQs, book appointments, qualify leads, and create tickets or CRM entries. When needed, they seamlessly transfer to your team. It's like having a virtual receptionist that never sleeps."
        },
        {
            question: "What if we need changes or new features later?",
            answer: "We build with flexibility in mind. All our solutions are designed to evolve with your business. Need new features? Want to adjust workflows? No problem. We make updates and additions as your needs change — you're never locked into a rigid system."
        },
        {
            question: "How do we get started?",
            answer: "Simple. Fill out our contact form or email us. We'll schedule a call to understand your goals, challenges, and requirements. Then we'll propose a solution with a clear scope, timeline, and pricing. Once approved, we get to work building your custom system."
        }
    ];

    return (
        <section
            id="faq"
            className="w-full py-20 lg:py-40"
            style={{ backgroundColor: colors.background.secondary }}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div
                            className="inline-block rounded-lg px-3 py-1 text-sm"
                            style={{
                                backgroundColor: colors.neutral[800],
                                color: colors.text.tertiary
                            }}
                        >
                            FAQ
                        </div>
                        <h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            Everything you need to know about our custom software solutions and how we work with businesses.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                style={{ borderColor: colors.border.default }}
                            >
                                <AccordionTrigger
                                    className="text-left text-base sm:text-lg"
                                    style={{ color: colors.text.primary }}
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    className="text-base"
                                    style={{ color: colors.text.secondary }}
                                >
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQ
