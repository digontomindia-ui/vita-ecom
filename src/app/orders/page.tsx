"use client";

import Link from "next/link";
import { useOrder } from "@/context/OrderContext";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBag, Clock } from "lucide-react";

export default function OrdersPage() {
    const { orders } = useOrder();

    if (orders.length === 0) {
        return (
            <div className="container px-4 py-24 mx-auto text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">No orders yet</h1>
                <p className="text-muted-foreground mb-8 text-lg">You haven&apos;t placed any orders yet.</p>
                <Link href="/shop">
                    <Button size="lg" className="rounded-full px-8">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container px-4 py-12 mx-auto max-w-4xl">
            <h1 className="text-3xl font-serif font-bold text-primary mb-8">My Orders ({orders.length})</h1>
            <div className="space-y-6">
                {orders.map((order) => (
                    <div key={order.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-muted/30 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-primary">{order.id}</span>
                                <span className="text-sm text-muted-foreground">{order.date}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-primary font-bold">₹{order.total.toFixed(0)}</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                    <Clock className="w-3 h-3" /> {order.status}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Items</h4>
                            <ul className="divide-y divide-border/50">
                                {order.items.map((item, idx) => (
                                    <li key={idx} className="py-3 flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-3">
                                            <span className="font-medium text-foreground">{item.name}</span>
                                            <span className="text-muted-foreground">x {item.quantity}</span>
                                        </div>
                                        <span className="font-medium">₹{(item.price * item.quantity).toFixed(0)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="text-muted-foreground">Shipped to: </span>
                                    <span className="font-medium">{order.shippingDetails.firstName} {order.shippingDetails.lastName}, {order.shippingDetails.city}</span>
                                </div>
                                <Button variant="outline" size="sm">
                                    Track Order
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
