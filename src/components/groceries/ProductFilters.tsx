"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";
import { SheetSimple } from "@/components/ui/sheet-simple";

const categories = ["All", "Produce", "Dairy", "Bakery", "Pantry", "Beverages"];

interface ProductFiltersProps {
    currentCategory: string;
}

export function ProductFilters({ currentCategory }: ProductFiltersProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const FilterContent = () => (
        <div className="space-y-8">
            <div>
                <h3 className="font-serif font-semibold text-lg mb-4 text-primary">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <Link
                                href={cat === "All" ? "/shop" : `/shop?category=${cat}`}
                                className={`block py-1 transition-colors ${currentCategory === cat ? "text-secondary font-medium" : "text-muted-foreground hover:text-primary"}`}
                                onClick={() => setIsFilterOpen(false)}
                            >
                                {cat}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-serif font-semibold text-lg mb-4 text-primary">Price Range</h3>
                <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-secondary"></div>
                </div>
                <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                    <span>₹0</span>
                    <span>₹500+</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
                <FilterContent />
            </aside>

            {/* Mobile Filter Button */}
            <div className="md:hidden w-full mb-6">
                <Button variant="outline" className="w-full" onClick={() => setIsFilterOpen(true)}>
                    <Filter className="w-4 h-4 mr-2" /> Filter Products
                </Button>
            </div>

            {/* Mobile Filter Drawer */}
            <SheetSimple
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                side="right"
                title="Filters"
            >
                <div className="mt-6">
                    <FilterContent />
                </div>
            </SheetSimple>
        </>
    );
}
