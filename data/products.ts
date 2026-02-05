export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string; // Path in public/images/
    themeColor: string; // Hex for accents
    gradientColors: [string, string]; // Start/End hex
    features: string[];
    nutrition: { label: string; value: string }[];
    heroTexts: string[];
    details: {
        title: string;
        content: string;
    };
    processing: {
        title: string;
        content: string;
    };
    frameCount: number;
}

export const products: Product[] = [
    {
        id: "mango-lassi",
        name: "Mango Lassi",
        subName: "The Golden Summer Blend",
        price: "₹80",
        description: "Hand-picked Ratnagiri Alphonso mangoes blended with our signature thick curd. A festive celebration of summer in every sip.",
        folderPath: "mango lassi",
        themeColor: "#FFC300", // Mango
        gradientColors: ["#FFF9E6", "#FFF0B3"],
        features: ["Real Alphonso Pulp", "Probiotic Rich", "No Preservatives", "Farm Fresh Curd"],
        nutrition: [
            { label: "Energy", value: "120 kcal" },
            { label: "Protein", value: "4g" },
            { label: "Calcium", value: "15%" },
        ],
        heroTexts: [
            "Pure Alphonso Magic",
            "Thick. Creamy. Golden.",
            "Taste the Indian Summer",
            "No Artificial Flavors",
        ],
        details: {
            title: "Royal Indulgence",
            content: "We use only export-grade Ratnagiri Alphonso mangoes, ripened naturally in hay stacks. The pulp is extracted manually to preserve the fibrous texture and natural sweetness, then folded gently into our probiotic-rich curd.",
        },
        processing: {
            title: "Cold-Chain Freshness",
            content: "From the orchard to the bottle, the temperature never exceeds 4°C. This locks in the volatile aroma compounds of the mango and the live cultures of the yogurt.",
        },
        frameCount: 144,
    },
    {
        id: "malai-lassi",
        name: "Malai Lassi",
        subName: "Traditional Creamy Delight",
        price: "₹70",
        description: "Rich, velvety, and topped with a dollop of fresh Malai. Made from full-fat buffalo milk for that authentic Punjabi texture.",
        folderPath: "malai lassi",
        themeColor: "#FF9933", // Saffronish tint
        gradientColors: ["#FDFBF7", "#FFFDD0"],
        features: ["Buffalo Milk Richness", "Traditional Set Curd", "Slow Churned", "Heavy Body"],
        nutrition: [
            { label: "Energy", value: "140 kcal" },
            { label: "Protein", value: "6g" },
            { label: "Calcium", value: "20%" },
        ],
        heroTexts: [
            "The Original Classic",
            "Thick Malai Top",
            "Spoon-Worthy Texture",
            "Calm & Indulgent",
        ],
        details: {
            title: "The Art of Patience",
            content: "Our Malai Lassi starts with milk boiled slowly in large iron kadhais to reduce water content and caramelize the lactose. It's set overnight in earthen pots before being churned with a wooden madhani.",
        },
        processing: {
            title: "Purity Preserved",
            content: "Zero homogenization. We believe the cream layer is the best part. Our bottling process ensures the texture remains undisturbed until you open it.",
        },
        frameCount: 144,
    },
    {
        id: "masala-taak",
        name: "Masala Taak",
        subName: "Spiced Buttermilk Cooler",
        price: "₹40",
        description: "A rustic, digestive cooler spiced with roasted cumin, rock salt, ginger, and fresh coriander. Light, refreshing, and deeply grounding.",
        folderPath: "masala taak",
        themeColor: "#4E9F3D", // Leaf green
        gradientColors: ["#F0FFF4", "#E6FFFA"],
        features: ["Digestive Spices", "Light & Hydrating", "Low Calorie", "Ayurvedic Blend"],
        nutrition: [
            { label: "Energy", value: "45 kcal" },
            { label: "Protein", value: "3g" },
            { label: "Hydration", value: "High" },
        ],
        heroTexts: [
            "Rustic & Refreshing",
            "Roasted Cumin Kick",
            "The Perfect Digestive",
            "Village Style Recipe",
        ],
        details: {
            title: "Roots of Wellness",
            content: "Inspired by the traditional 'Chhaas' served in Indian villages. We crush fresh ginger and green chilies daily to infuse the buttermilk with lively heat, balanced by cooling coriander.",
        },
        processing: {
            title: "Fresh Herb Infusion",
            content: "We don't use dried powders for our greens. Fresh coriander and curry leaves are sanitized and cold-pressed into the buttermilk just minutes before bottling.",
        },
        frameCount: 120,
    },
];
