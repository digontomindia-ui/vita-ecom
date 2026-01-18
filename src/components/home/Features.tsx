import { Leaf, Truck, ShieldCheck, HeartPulse } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "100% Organic",
        description: "Certified organic produce sourced directly from sustainable farms."
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Fresh delivery to your doorstep within 24 hours of harvest."
    },
    {
        icon: ShieldCheck,
        title: "Quality Guaranteed",
        description: "Every item is hand-inspected for premium quality assurance."
    },
    {
        icon: HeartPulse,
        title: "Healthy Living",
        description: "Nutrient-rich foods to support your wellness journey."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-accent/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why Choose Vita Nova?</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto mb-6" />
                    <p className="text-muted-foreground text-lg">
                        We define excellence in organic grocery, ensuring every bite is as pure as nature intended.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
