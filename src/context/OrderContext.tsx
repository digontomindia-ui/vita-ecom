"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "./CartContext";
import { useToast } from "./ToastContext";

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: "Processing" | "Shipped" | "Delivered";
    shippingDetails: {
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        zip: string;
    };
}

interface OrderContextType {
    orders: Order[];
    addOrder: (order: Omit<Order, "id" | "date" | "status">) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const { showToast } = useToast();

    // Load from local storage
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("vitanova_orders");
        if (saved) {
            try {
                setOrders(JSON.parse(saved));
            } catch (error) {
                console.error("Failed to parse orders:", error);
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("vitanova_orders", JSON.stringify(orders));
        }
    }, [orders, isMounted]);

    const addOrder = (orderData: Omit<Order, "id" | "date" | "status">) => {
        const newOrder: Order = {
            ...orderData,
            id: `#VN-${Math.floor(1000 + Math.random() * 9000)}`,
            date: new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            status: "Processing",
        };

        setOrders((prev) => [newOrder, ...prev]);
        showToast("Order placed successfully!");
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder() {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error("useOrder must be used within a OrderProvider");
    }
    return context;
}
