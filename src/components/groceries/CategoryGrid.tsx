import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
    {
        name: "Fresh Produce",
        description: "Organic fruits & locally sourced vegetables.",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2670&auto=format&fit=crop",
        href: "/shop/produce"
    },
    {
        name: "Pantry Essentials",
        description: "Grains, pulses, and organic spices.",
        image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2670&auto=format&fit=crop",
        href: "/shop/pantry"
    },
    {
        name: "Dairy & Artisanal Cheese",
        description: "Farm-fresh milk and handmade cheeses.",
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=2670&auto=format&fit=crop",
        href: "/shop/dairy"
    },
];

export function CategoryGrid() {
    return (
        <section className="py-20 md:py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">curated <span className="text-secondary italic">Collections</span></h2>
                        <p className="text-muted-foreground">Browse our most popular organic categories.</p>
                    </div>
                    <Link href="/shop" className="hidden md:flex items-center text-primary font-medium hover:text-secondary transition-colors">
                        View All Categories <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <Link
                            key={idx}
                            href={cat.href}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                                    {cat.name}
                                </h3>
                                <span className="inline-flex items-center text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <Link href="/shop" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
                        View All Categories <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
