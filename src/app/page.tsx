import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/groceries/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Features } from "@/components/home/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CategoryGrid />
      <FeaturedProducts />
    </>
  );
}
