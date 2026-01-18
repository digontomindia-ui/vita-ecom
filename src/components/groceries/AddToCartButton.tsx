"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleIncrement = () => setQuantity(q => q + 1);
    const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    const handleAddToCart = () => {
        // Simple loop to add quantity
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        setQuantity(1);
    };

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center border border-border rounded-md">
                <button
                    onClick={handleDecrement}
                    className="px-4 py-2 hover:bg-muted transition-colors text-lg"
                >-</button>
                <span className="px-4 py-2 font-medium w-12 text-center">{quantity}</span>
                <button
                    onClick={handleIncrement}
                    className="px-4 py-2 hover:bg-muted transition-colors text-lg"
                >+</button>
            </div>
            <Button size="lg" className="flex-1 text-base h-12" onClick={handleAddToCart}>
                Add to Cart - ₹{(product.price * quantity).toFixed(0)}
            </Button>
        </div>
    );
}
