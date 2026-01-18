import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/groceries/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
    </>
  );
}
