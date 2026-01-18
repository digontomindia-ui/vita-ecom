import Image from "next/image";
import { Leaf, Award, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-background">
            <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/70 z-10 mix-blend-multiply" />
                    <Image
                        src="https://images.unsplash.com/photo-1595855709915-445c82302388?q=80&w=2670&auto=format&fit=crop"
                        alt="Farm landscape"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Roots</h1>
                    <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                        Cultivating a healthier future through sustainable, organic, and ethically sourced groceries.
                    </p>
                </div>
            </div>

            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Born from Purpose</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Vita Nova Care began with a simple belief: that nature holds the key to vitality. Disheartened by the industrial food system, we set out to create a sanctuary of purity where families could trust every item in their basket.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We partner directly with small-scale artisan farmers who treat the soil with reverence. Every apple, every grain, and every bottle of milk tells a story of sustainable stewardship and uncompromised quality.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2670&auto=format&fit=crop"
                                    alt="Farmer in field"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1606775791238-d06903f62cb2?q=80&w=2670&auto=format&fit=crop"
                                    alt="Fresh produce"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-3 text-primary">100% Organic</h3>
                            <p className="text-muted-foreground">Certified organic produce free from synthetic pesticides and harmful chemicals.</p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-3 text-primary">Quality First</h3>
                            <p className="text-muted-foreground">We hand-select every item to ensure only the freshest and finest reach your table.</p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-3 text-primary">Community Focused</h3>
                            <p className="text-muted-foreground">Supporting local farmers and giving back to the communities that nourish us.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
