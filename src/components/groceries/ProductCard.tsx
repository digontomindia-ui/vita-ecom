"use client";

import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
    description?: string;
    originalPrice?: number;
    discountPercentage?: number;
}

export function ProductCard(props: ProductCardProps) {
    const { addToCart } = useCart();
    const { id, name, price, image, category, isNew } = props;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation if clicked on cart
        addToCart({
            id,
            name,
            price,
            image,
            category,
            isNew,
            description: props.description,
            originalPrice: props.originalPrice || price,
            discountPercentage: props.discountPercentage || 0
        });
    };

    return (
        <div className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="relative aspect-square overflow-hidden bg-muted">
                {(props.discountPercentage || 0) > 0 && (
                    <span className="absolute top-3 left-3 bg-destructive text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide z-10 shadow-sm">
                        {props.discountPercentage}% OFF
                    </span>
                )}
                {/* ... inside component ... */}

                <Link href={`/product/${props.id}`}>
                    <Image
                        src={props.image}
                        alt={props.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>
                {/* Quick Actions overlay */}
                <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Add to Wishlist</span>
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{category}</p>
                <h3 className="font-medium text-foreground text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/product/${id}`}>
                        {name}
                    </Link>
                </h3>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        {props.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through decoration-destructive/50">
                                ₹{props.originalPrice.toFixed(0)}
                            </span>
                        )}
                        <span className="font-serif text-xl font-bold text-primary">₹{price.toFixed(0)}</span>
                    </div>
                    <Button size="sm" className="rounded-full px-4 bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
                        <ShoppingCart className="w-4 h-4 mr-2" /> Add
                    </Button>
                </div>
            </div>
        </div>
    );
}
