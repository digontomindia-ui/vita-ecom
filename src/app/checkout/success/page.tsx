import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
    return (
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
                Thank you for shopping with Vita Nova. Your organic goodness is on its way to you.
            </p>
            <div className="flex gap-4">
                <Link href="/">
                    <Button size="lg" className="px-8">
                        Return Home
                    </Button>
                </Link>
                <Link href="/shop">
                    <Button variant="outline" size="lg">
                        Continue Shopping
                    </Button>
                </Link>
            </div>
        </div>
    );
}
