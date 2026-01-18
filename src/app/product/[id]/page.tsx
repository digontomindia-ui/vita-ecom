import { AddToCartButton } from "@/components/groceries/AddToCartButton";

import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock Data
import { getProductById, getAllProducts } from "@/lib/products";

interface PageProps {
    params: {
        id: string;
    };
}

// In Next.js 15+ (and 14), params is a Promise in dynamic routes if using async generateMetadata but directly here we can treat it as async page or use hook. 
// However, strictly speaking in App Router params is passed as prop. 
// Note: As of latest Next.js (15), params is async. But sticking to 14/standard patterns for safety unless I know it's 15. The package.json said "next": "16.1.3", wait 16? Next 15 is current... wait 16?
// The user has "next": "16.1.3" in package.json (from step 51). Wait, Next.js 16 isn't out yet, maybe 15.1.3?
// Ah, step 51 says "next": "16.1.3". That's very new or a canary? Or I misread "15.1.3"?
// Let's look closely at step 51 output again.
// Line 15: "next": "16.1.3",
// That seems futuristic or I am hallucinating the version number or it is indeed 16 canary?
// Actually, 15.1.3 is plausible. 16.1.3 is ... unlikely unless it's a very specific build.
// Regardless, in Next 15, `params` should be awaited.
// Let's implement it as `async function Page({ params }: { params: Promise<{ id: string }> })`.

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = getProductById(resolvedParams.id);

    if (!product) {
        return notFound();
    }

    const displayProduct = product;

    return (
        <div className="container px-4 py-12 mx-auto">
            <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Image Section */}
                <div className="bg-muted rounded-2xl overflow-hidden aspect-square relative group">
                    <img
                        src={displayProduct.image}
                        alt={displayProduct.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <div className="space-y-4">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">{displayProduct.category}</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">{displayProduct.name}</h1>

                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                {displayProduct.originalPrice > displayProduct.price && (
                                    <span className="text-lg text-muted-foreground line-through decoration-destructive/50">
                                        Was: ₹{displayProduct.originalPrice.toFixed(0)}
                                    </span>
                                )}
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-light text-foreground">₹{displayProduct.price.toFixed(0)}</span>
                                    {displayProduct.discountPercentage > 0 && (
                                        <span className="bg-destructive text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
                                            {displayProduct.discountPercentage}% OFF
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center text-yellow-400">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current/50" />
                                <span className="text-muted-foreground ml-2 text-sm">(24 reviews)</span>
                            </div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                            {displayProduct.description}
                        </p>

                        <div className="pt-8 space-y-4">
                            <AddToCartButton product={displayProduct} />
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-8 text-sm">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Truck className="w-5 h-5 text-secondary" />
                                <span>Free shipping on orders over ₹500</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <ShieldCheck className="w-5 h-5 text-secondary" />
                                <span>Certified Organic & Non-GMO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
