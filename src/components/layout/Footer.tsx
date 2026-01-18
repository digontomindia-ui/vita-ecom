import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <span className="font-serif text-2xl font-bold tracking-tight text-white">
                            Vita<span className="text-secondary">Nova</span>
                        </span>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Premium organic groceries delivered to your door. Freshness, quality, and community first.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Shop</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><Link href="/shop/fresh" className="hover:text-white transition-colors">Fresh Produce</Link></li>
                            <li><Link href="/shop/pantry" className="hover:text-white transition-colors">Pantry Essentials</Link></li>
                            <li><Link href="/shop/dairy" className="hover:text-white transition-colors">Dairy & Eggs</Link></li>
                            <li><Link href="/shop/beverages" className="hover:text-white transition-colors">Beverages</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Company</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Stay Updated</h3>
                        <p className="text-sm text-white/80 mb-4">Subscribe to our newsletter for exclusive offers and organic tips.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                            <button className="bg-secondary text-primary px-4 py-2 rounded-md font-medium hover:bg-white transition-colors">
                                Join
                            </button>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="text-white/70 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
                    © {new Date().getFullYear()} Vita Nova Care. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
