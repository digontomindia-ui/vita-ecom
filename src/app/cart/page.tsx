"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <div className="container px-4 py-24 mx-auto text-center">
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">Your cart is empty</h1>
                <p className="text-muted-foreground mb-8 text-lg">Looks like you haven&apos;t added anything to your cart yet.</p>
                <Link href="/shop">
                    <Button size="lg" className="rounded-full px-8">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container px-4 py-12 mx-auto">
            <h1 className="text-3xl font-serif font-bold text-primary mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-8">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-6 py-6 border-b border-border/50">
                            {/* Image */}
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif font-semibold text-lg text-foreground">
                                            <Link href={`/product/${item.id}`} className="hover:text-primary transition-colors">
                                                {item.name}
                                            </Link>
                                        </h3>
                                        <p className="font-bold text-lg">₹{(item.price * item.quantity).toFixed(0)}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">{item.category}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center border border-border rounded-md">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-1 hover:bg-muted transition-colors"
                                        >-</button>
                                        <span className="px-3 py-1 font-medium w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-1 hover:bg-muted transition-colors"
                                        >+</button>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-muted-foreground hover:text-destructive"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="pt-4">
                        <Button variant="outline" onClick={clearCart} className="text-muted-foreground">
                            Clear Cart
                        </Button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 sticky top-24">
                        <h2 className="font-serif font-bold text-xl mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toFixed(0)}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Shipping estimate</span>
                                <span>{cartTotal > 500 ? "Free" : "₹50"}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Tax estimate (GST 18%)</span>
                                <span>₹{(cartTotal * 0.18).toFixed(0)}</span>
                            </div>
                        </div>

                        <div className="border-t border-border/50 pt-4 mb-8">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Order Total</span>
                                <span>₹{(cartTotal + (cartTotal > 500 ? 0 : 50) + (cartTotal * 0.18)).toFixed(0)}</span>
                            </div>
                        </div>

                        <Button className="w-full text-lg h-12" size="lg">
                            Checkout <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            Secure checkout powered by Stripe
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
