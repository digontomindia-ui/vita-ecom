"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Get in Touch</h1>
                <p className="text-lg text-muted-foreground">
                    Have questions about our produce or your order? We&apos;d love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Our Headquarters</h4>
                                    <p className="text-muted-foreground">123 Organic Lane, Green Valley<br />Bangalore, KA 560001</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-secondary shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Phone</h4>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-secondary shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <p className="text-muted-foreground">hello@vitanovacare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-2xl border border-secondary/20">
                        <h3 className="text-xl font-bold mb-2">Support Hours</h3>
                        <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 8:00 PM<br />
                            Saturday - Sunday: 10:00 AM - 6:00 PM
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                            <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-2">Send us a Message</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <Input required placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <Input required placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input required type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                                    required
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
