"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface SheetSimpleProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: "left" | "right";
    title?: string;
}

export function SheetSimple({
    isOpen,
    onClose,
    children,
    side = "left",
    title,
}: SheetSimpleProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Content */}
            <div
                className={cn(
                    "relative z-50 flex flex-col bg-background p-6 shadow-xl transition-transform duration-300 animate-in h-full w-3/4 max-w-sm sm:max-w-md",
                    side === "left"
                        ? "slide-in-from-left mr-auto border-r"
                        : "slide-in-from-right ml-auto border-l"
                )}
            >
                <div className="flex items-center justify-between mb-6">
                    {title && <h2 className="text-xl font-serif font-bold">{title}</h2>}
                    <Button variant="ghost" size="icon" onClick={onClose} className="ml-auto">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                    </Button>
                </div>
                <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>,
        document.body
    );
}
