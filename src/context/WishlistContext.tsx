"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/lib/products";
import { useToast } from "./ToastContext";

interface WishlistContextType {
    wishlistItems: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const { showToast } = useToast();

    // Load from local storage
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("vitanova_wishlist");
        if (saved) {
            try {
                setWishlistItems(JSON.parse(saved));
            } catch (error) {
                console.error("Failed to parse wishlist:", error);
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("vitanova_wishlist", JSON.stringify(wishlistItems));
        }
    }, [wishlistItems, isMounted]);

    const addToWishlist = (product: Product) => {
        setWishlistItems((prev) => {
            if (prev.some((item) => item.id === product.id)) return prev;
            showToast("Added to Wishlist");
            return [...prev, product];
        });
    };

    const removeFromWishlist = (productId: string) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
        showToast("Removed from Wishlist", "info");
    };

    const isInWishlist = (productId: string) => {
        return wishlistItems.some((item) => item.id === productId);
    };

    const toggleWishlist = (product: Product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                toggleWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
