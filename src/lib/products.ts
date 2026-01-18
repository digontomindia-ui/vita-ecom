export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    discountPercentage: number;
    category: string;
    image: string;
    description?: string;
    isNew?: boolean;
}

// Helper to calculate 60% off (price = original * 0.4)
const createProduct = (id: string, name: string, originalPrice: number, category: string, image: string, description: string): Product => ({
    id,
    name,
    originalPrice,
    price: Math.round(originalPrice * 0.4), // Round to nearest Rupee
    discountPercentage: 60,
    category,
    image,
    description,
    isNew: true
});

export const PRODUCTS: Product[] = [
    // Personal Care
    createProduct("1", "Clinic Plus Strong & Long Health Shampoo (650ml)", 655, "Personal Care", "/product-image/Clinic-Plus-Strong-_-Long-Health-Shampoo-650ml.webp", "Strengthens hair from root to tip. Enriched with milk protein formula for up to 30x stronger hair."),
    createProduct("2", "Colgate Strong Teeth Toothpaste (500g)", 265, "Personal Care", "/product-image/collage.webp", "India's No.1 Toothpaste. Calcium-boost formula for 2x stronger teeth."),
    createProduct("4", "Lifebuoy Total 10 Soap (Pack of 4)", 175, "Personal Care", "/product-image/lifebouy.webp", "Advanced germ protection formula. Kills 99.9% of germs in 10 seconds. (Vintage Packaging)"),
    createProduct("5", "Dove Cream Beauty Bathing Bar (3 x 100g)", 250, "Personal Care", "/product-image/DOVe.webp", "With 1/4 moisturizing cream for soft, smooth, and glowing skin."),
    createProduct("8", "Axe Dark Temptation Perfume Body Spray (150ml)", 245, "Personal Care", "/product-image/axe.webp", "Irresistible chocolate fragrance. Keeps you smelling fresh all day."),

    // Household
    createProduct("3", "Surf Excel Easy Wash Detergent Powder (1kg)", 135, "Household", "/product-image/surf-excel.webp", "Removes tough stains easily with just a 15-minute soak. No scrubbing needed."),

    // Pantry & Staples
    createProduct("6", "Fortune Kachi Ghani Mustard Oil (1L)", 195, "Pantry", "/product-image/FORTUNE%20KACHI%20GHANI%20PURE%20MUSTARD%20OIL%20500ML-550x550.webp", "Pure and traditional mustard oil. Adds a pungent kick to your pickles and curries."),
    createProduct("7", "Tata Salt (1kg)", 28, "Pantry", "/product-image/tata-salt-250x250.webp", "Desh Ka Namak. Vacuum evaporated iodine-fortified salt for healthy mental development."),
    createProduct("12", "Dabur Honey (500g)", 250, "Pantry", "/product-image/dobor-honey.webp", "100% Pure Honey. No added sugar. A healthy substitute for sugar in your daily diet."),
    createProduct("13", "Aashirvaad Superior MP Atta (5kg)", 314, "Pantry", "/product-image/Aashirvaad%20Superior%20MP%20Atta%20(5kg)%20.webp", "Made from the finest grains. Provides soft rotis that stay soft for longer."),
    createProduct("16", "Everest Royal Garam Masala (100g)", 105, "Pantry", "/product-image/Everest%20Royal%20Garam%20Masala%20(100g.webp", "A select blend of 13 spices. Adds a royal taste and aroma to your dishes."),

    // Snacks & Beverages
    createProduct("9", "Brooke Bond Red Label Tea (500g)", 275, "Beverages", "/product-image/Brooke%20Bond%20Red%20Label%20Tea%20(500g)%20.webp", "A perfect blend of flavor and strength. Bring the family together over a warm cup."),
    createProduct("10", "Parle Hide & Seek Chocolate Chip Cookies (200g)", 60, "Snacks", "/product-image/Parle%20Hide%20&%20Seek%20Chocolate%20Chip%20Cookies%20(200g)%20.webp", "The world's first moulded chocolate chip cookie. Rich chocolaty experience in every bite."),
    createProduct("11", "Maggi 2-Minute Masala Noodles (140g)", 30, "Snacks", "/product-image/Maggi%202-Minute%20Masala%20Noodles%20(140g)%20.webp", "India's favorite instant noodles. Made with the finest quality spices and ingredients."),
    createProduct("14", "Haldiram's Soan Papdi (500g)", 135, "Sweets", "/product-image/Haldiram's%20Soan%20Papdi%20(500g)%20.webp", "Classic flaky Indian sweet made with gram flour, ghee, and cardamom. Melts in your mouth."),
    createProduct("15", "Haldiram's Besan Ladoo (400g)", 350, "Sweets", "/product-image/Haldiram-BESAN-Ladoo-400g_1.webp", "Traditional delight made with roasted chickpea flour and pure ghee.")
];

export function getAllProducts(): Product[] {
    return PRODUCTS;
}

export function getProductById(id: string): Product | undefined {
    return PRODUCTS.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
    return PRODUCTS.slice(0, 4);
}
