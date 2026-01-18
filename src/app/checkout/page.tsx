"use client";

import { useCart } from "@/context/CartContext";
import { useOrder } from "@/context/OrderContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component, otherwise use standard input
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const { addOrder } = useOrder();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        addOrder({
            items,
            total: cartTotal,
            shippingDetails: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                city: formData.city,
                zip: formData.zip
            }
        });

        clearCart();
        setIsProcessing(false);
        router.push("/checkout/success");
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">Your cart is empty</h1>
                <p className="text-muted-foreground mb-8">Add some fresh groceries before checking out.</p>
                <Link href="/shop">
                    <Button>Return to Shop</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Form Section */}
                <div className="space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                Shipping Details
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="text-sm font-medium mb-1 block">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="text-sm font-medium mb-1 block">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-sm font-medium mb-1 block">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-sm font-medium mb-1 block">Zip Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                Payment Details
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="text-sm font-medium mb-1 block">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="0000 0000 0000 0000"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-sm font-medium mb-1 block">Expiry</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.expiry}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-sm font-medium mb-1 block">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="123"
                                        required
                                        className="w-full p-2 rounded-md border border-input bg-background"
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full text-lg h-12" disabled={isProcessing}>
                            {isProcessing ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing Order...
                                </>
                            ) : (
                                `Pay ₹${cartTotal.toFixed(2)}`
                            )}
                        </Button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-muted/30 p-6 rounded-xl h-fit border border-border">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4 max-h-[400px] overflow-auto pr-2">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center">
                                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border border-border">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-sm">{item.name}</h4>
                                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                <div className="font-semibold text-sm">
                                    ₹{(item.price * item.quantity).toFixed(0)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-border my-6 pt-4 space-y-2">
                        <div className="flex justify-between text-muted-foreground">
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-xl pt-2 text-primary">
                            <span>Total</span>
                            <span>₹{cartTotal.toFixed(0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
