import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-black/40 z-10 mix-blend-multiply" />
                <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
                    alt="Organic fresh food background"
                    fill
                    priority
                    className="object-cover opacity-60 animate-in zoom-in-110 duration-[20s]"
                    sizes="100vw"
                />
            </div>

            <div className="relative z-20 text-center container px-4 space-y-8 animate-in fade-in zoom-in duration-700">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-lg">
                    Revitalize Your <span className="text-secondary italic">Life</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed">
                    Experience the purest organic groceries, hand-picked for their freshness and vitality.
                    From our farm to your premium table.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button variant="gold" size="lg" className="px-8 text-base">
                        Shop Fresh Produce
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 text-base border-white text-white hover:bg-white hover:text-primary">
                        Our Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
        </div>
    );
}
