import Link from "next/link";
import { ProductCard } from "@/components/groceries/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Mock Data
import { getAllProducts } from "@/lib/products";

// Get data from centralized source
const products = getAllProducts();

const categories = ["All", "Produce", "Dairy", "Bakery", "Pantry", "Beverages"];

export default function ShopPage() {
    return (
        <div className="container px-4 py-8 mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-primary">Shop Organic</h1>
                    <p className="text-muted-foreground mt-1">Found {products.length} products</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        Sort by: Featured
                    </Button>
                    <Button variant="outline" size="sm" className="md:hidden">
                        <Filter className="w-4 h-4 mr-2" /> Filters
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0 hidden md:block space-y-8">
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4 text-primary">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4 text-primary">Price Range</h3>
                        {/* Slider placeholder */}
                        <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-secondary"></div>
                        </div>
                        <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                            <span>₹0</span>
                            <span>₹500+</span>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
