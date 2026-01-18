import Link from "next/link";
import { ProductCard } from "@/components/groceries/ProductCard";
import { Button } from "@/components/ui/button";
import { ProductFilters } from "@/components/groceries/ProductFilters";
import { Filter } from "lucide-react";

// Mock Data
import { getAllProducts } from "@/lib/products";

// Get data from centralized source
const products = getAllProducts();

export default async function ShopPage(props: {
    searchParams: Promise<{ category?: string; search?: string }>;
}) {
    const searchParams = await props.searchParams;
    const currentCategory = searchParams.category || "All";
    const searchQuery = searchParams.search?.toLowerCase() || "";

    // Filter logic
    let filteredProducts = products;

    if (currentCategory !== "All") {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery)
        );
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-primary">
                        {currentCategory === "All" ? "Shop Organic" : `${currentCategory} Collection`}
                    </h1>
                    <p className="text-muted-foreground mt-1">Found {filteredProducts.length} products</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        Sort by: Featured
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters (Desktop Sidebar + Mobile Drawer linked via ProductFilters) */}
                <ProductFilters currentCategory={currentCategory} />

                {/* Product Grid */}
                <div className="flex-1">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/30 rounded-xl">
                            <p className="text-muted-foreground">No products found in this category.</p>
                            <Link href="/shop" className="mt-2 inline-block">
                                <Button variant="link">View all products</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
