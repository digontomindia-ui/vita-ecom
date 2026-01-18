import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#C5A028] text-[#0C3B2E]">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <span className="font-serif text-2xl font-bold tracking-tight text-[#0C3B2E]">
                            Vita<span className="text-white">Nova</span>
                        </span>
                        <p className="text-[#0C3B2E]/80 text-sm leading-relaxed">
                            Premium organic groceries delivered to your door. Freshness, quality, and community first.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 text-[#0C3B2E]">Shop</h3>
                        <ul className="space-y-2 text-sm text-[#0C3B2E]/80">
                            <li><Link href="/shop/fresh" className="hover:text-[#0C3B2E] font-medium transition-colors">Fresh Produce</Link></li>
                            <li><Link href="/shop/pantry" className="hover:text-[#0C3B2E] font-medium transition-colors">Pantry Essentials</Link></li>
                            <li><Link href="/shop/dairy" className="hover:text-[#0C3B2E] font-medium transition-colors">Dairy & Eggs</Link></li>
                            <li><Link href="/shop/beverages" className="hover:text-[#0C3B2E] font-medium transition-colors">Beverages</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 text-[#0C3B2E]">Company</h3>
                        <ul className="space-y-2 text-sm text-[#0C3B2E]/80">
                            <li><Link href="/about" className="hover:text-[#0C3B2E] font-medium transition-colors">About Us</Link></li>
                            <li><Link href="/sustainability" className="hover:text-[#0C3B2E] font-medium transition-colors">Sustainability</Link></li>
                            <li><Link href="/careers" className="hover:text-[#0C3B2E] font-medium transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-[#0C3B2E] font-medium transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 text-[#0C3B2E]">Stay Updated</h3>
                        <p className="text-sm text-[#0C3B2E]/80 mb-4">Subscribe to our newsletter for exclusive offers and organic tips.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 rounded-md bg-white/20 border border-[#0C3B2E]/20 text-[#0C3B2E] placeholder:text-[#0C3B2E]/50 focus:outline-none focus:ring-1 focus:ring-[#0C3B2E]"
                            />
                            <button className="bg-[#0C3B2E] text-[#C5A028] px-4 py-2 rounded-md font-medium hover:bg-[#092e24] transition-colors">
                                Join
                            </button>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="text-[#0C3B2E]/70 hover:text-[#0C3B2E] transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="text-[#0C3B2E]/70 hover:text-[#0C3B2E] transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-[#0C3B2E]/70 hover:text-[#0C3B2E] transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="text-[#0C3B2E]/70 hover:text-[#0C3B2E] transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-[#0C3B2E]/10 text-center text-sm text-[#0C3B2E]/60">
                    © {new Date().getFullYear()} Vita Nova Care. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
