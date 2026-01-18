"use client";

import Link from "next/link";
import { ShoppingCart, Search, Heart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { SheetSimple } from "@/components/ui/sheet-simple";
import { useRouter } from "next/navigation";

export function Header() {
    const { cartCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 shadow-sm transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Mobile Menu */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                </Button>

                <SheetSimple
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    side="left"
                    title="Menu"
                >
                    <nav className="flex flex-col gap-4 mt-4">
                        {["Home", "Groceries", "Our Story", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : item === "Groceries" ? "/shop" : `/${item.toLowerCase().replace(" ", "-")}`}
                                className="text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </SheetSimple>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Vita<span className="text-[#C5A028]">Nova</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
                    {["Home", "Groceries", "Our Story", "Contact"].map((item, i) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : item === "Groceries" ? "/shop" : `/${item.toLowerCase().replace(" ", "-")}`}
                            className="relative group text-foreground/90 hover:text-primary transition-colors py-1"
                        >
                            {item}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {isSearchOpen ? (
                        <form onSubmit={handleSearch} className="relative hidden sm:block animate-in fade-in slide-in-from-right-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="h-9 w-40 lg:w-64 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                onBlur={() => !searchQuery && setIsSearchOpen(false)}
                            />
                        </form>
                    ) : (
                        <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={() => setIsSearchOpen(true)}>
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                    )}

                    <Link href="/orders">
                        <Button variant="ghost" size="icon" className="hidden sm:flex">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Orders</span>
                        </Button>
                    </Link>

                    <Link href="/wishlist">
                        <Button variant="ghost" size="icon" className="hidden sm:flex">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Wishlist</span>
                        </Button>
                    </Link>

                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-primary">
                                    {cartCount}
                                </span>
                            )}
                            <span className="sr-only">Cart</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
