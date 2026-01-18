"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function Header() {
    const { cartCount } = useCart();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-secondary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Mobile Menu */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                </Button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
                        Vita<span className="text-secondary">Nova</span>
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
                    <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                    </Button>
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
