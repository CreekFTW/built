"use client";

import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAnalytics } from "@/lib/analytics";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [files, setFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { events } = useAnalytics();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create FormData to handle file uploads
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('subject', formData.subject);
            formDataToSend.append('message', formData.message);

            // Append files
            files.forEach((file) => {
                formDataToSend.append('files', file);
            });

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Track successful form submission
            events.formSubmit('contact_form', true);
            events.contactConversion();

            toast.success('Message sent successfully!', {
                description: 'Thank you for contacting us. We will get back to you soon.',
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
            setFiles([]);
        } catch (error) {
            // Track form submission error
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            events.formError('contact_form', errorMessage);

            toast.error('Failed to send message', {
                description: error instanceof Error ? error.message : 'Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);

        if (selectedFiles.length === 0) {
            return;
        }

        // Validate file types
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        const invalidFiles = selectedFiles.filter(file => !allowedTypes.includes(file.type));

        if (invalidFiles.length > 0) {
            toast.error('Upload failed', {
                description: 'Only PDF, DOC, and DOCX files are allowed.',
            });
            e.target.value = ''; // Reset file input
            return;
        }

        // Validate file size (10MB max per file)
        const maxSize = 10 * 1024 * 1024; // 10MB
        const oversizedFiles = selectedFiles.filter(file => file.size > maxSize);

        if (oversizedFiles.length > 0) {
            toast.error('Upload failed', {
                description: 'Each file must be less than 10MB.',
            });
            e.target.value = ''; // Reset file input
            return;
        }

        // Limit total files to 3
        if (files.length + selectedFiles.length > 3) {
            toast.error('Upload failed', {
                description: 'You can upload a maximum of 3 files.',
            });
            e.target.value = ''; // Reset file input
            return;
        }

        // Success - add files
        setFiles([...files, ...selectedFiles]);

        // Track file uploads
        selectedFiles.forEach((file) => {
            events.fileUpload(file.name, file.type, file.size);
        });

        // Show success toast
        const fileCount = selectedFiles.length;
        toast.success(`File${fileCount > 1 ? 's' : ''} uploaded successfully`, {
            description: `${fileCount} file${fileCount > 1 ? 's' : ''} added to your message.`,
        });

        // Reset file input to allow selecting the same files again if needed
        e.target.value = '';
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <div
            className="p-4 sm:p-8 rounded-xl"
            style={{
                backgroundColor: colors.background.secondary,
                borderColor: colors.border.default,
                borderWidth: '1px'
            }}
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium"
                        style={{ color: colors.text.primary }}
                    >
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                            backgroundColor: colors.background.tertiary,
                            borderColor: colors.border.default,
                            color: colors.text.primary
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium"
                        style={{ color: colors.text.primary }}
                    >
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="user@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            backgroundColor: colors.background.tertiary,
                            borderColor: colors.border.default,
                            color: colors.text.primary
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium"
                        style={{ color: colors.text.primary }}
                    >
                        Phone Number
                    </label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                            backgroundColor: colors.background.tertiary,
                            borderColor: colors.border.default,
                            color: colors.text.primary
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="subject"
                        className="text-sm font-medium"
                        style={{ color: colors.text.primary }}
                    >
                        Subject
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        placeholder="Dashboard"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                            backgroundColor: colors.background.tertiary,
                            borderColor: colors.border.default,
                            color: colors.text.primary
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium"
                        style={{ color: colors.text.primary }}
                    >
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here in English..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        style={{
                            backgroundColor: colors.background.tertiary,
                            borderColor: colors.border.default,
                            color: colors.text.primary
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="files"
                        className="text-sm font-medium"
                        style={{ color: colors.text.primary }}
                    >
                        Attachments (Optional)
                    </label>
                    <div className="space-y-3">
                        <div className="relative">
                            <Input
                                id="files"
                                name="files"
                                type="file"
                                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={handleFileChange}
                                multiple
                                className="hidden"
                                disabled={isSubmitting}
                            />
                            <label
                                htmlFor="files"
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:opacity-80"
                                style={{
                                    backgroundColor: colors.background.tertiary,
                                    borderColor: colors.border.default,
                                    borderWidth: '1px',
                                    borderStyle: 'dashed',
                                    color: colors.text.secondary
                                }}
                            >
                                <Paperclip className="h-4 w-4" />
                                <span className="text-sm">
                                    Click to upload PDF, DOC, or DOCX files (Max 10MB each, up to 3 files)
                                </span>
                            </label>
                        </div>
                        {files.length > 0 && (
                            <div className="space-y-2">
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg"
                                        style={{
                                            backgroundColor: colors.background.tertiary,
                                            borderColor: colors.border.default,
                                            borderWidth: '1px'
                                        }}
                                    >
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <Paperclip className="h-4 w-4 shrink-0" style={{ color: colors.text.secondary }} />
                                            <span
                                                className="text-sm truncate"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {file.name}
                                            </span>
                                            <span
                                                className="text-xs shrink-0"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="shrink-0 p-1 rounded hover:opacity-80 transition-opacity"
                                            style={{ color: colors.text.secondary }}
                                            disabled={isSubmitting}
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="text-xs" style={{ color: colors.text.secondary }}>
                        Accepted formats: PDF, DOC, DOCX
                    </p>
                </div>
                <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                    style={{
                        backgroundColor: colors.primary,
                        color: colors.text.primary
                    }}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                </Button>
            </form>
        </div>
    );
}
