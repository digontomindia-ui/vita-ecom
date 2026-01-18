"use client";

import Link from "next/link";
import { ProductCard } from "@/components/groceries/ProductCard";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import { Heart } from "lucide-react";

export default function WishlistPage() {
    const { wishlistItems } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="container px-4 py-24 mx-auto text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-muted-foreground" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">Your wishlist is empty</h1>
                <p className="text-muted-foreground mb-8 text-lg">Save items you love to revisit later.</p>
                <Link href="/shop">
                    <Button size="lg" className="rounded-full px-8">
                        Start Explore
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container px-4 py-12 mx-auto">
            <h1 className="text-3xl font-serif font-bold text-primary mb-8">My Wishlist ({wishlistItems.length})</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
