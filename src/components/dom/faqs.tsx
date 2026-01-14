"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { colors } from "@/theme/colors";
import { useLanguage } from "@/components/language-provider";

const FAQ = () => {
    const { t } = useLanguage();

    const faqs = t.faq.items;

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
                            {t.faq.badge}
                        </div>
                        <h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            {t.faq.title}
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            {t.faq.description}
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
