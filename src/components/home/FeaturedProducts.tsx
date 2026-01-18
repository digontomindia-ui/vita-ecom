import { ProductCard } from "@/components/groceries/ProductCard";

import { getAllProducts } from "@/lib/products";

const products = getAllProducts();

export function FeaturedProducts() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Collection</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto mb-6" />
                    <p className="text-muted-foreground">
                        Explore our complete range of premium organic groceries. Sustainably sourced and packed with flavor.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
