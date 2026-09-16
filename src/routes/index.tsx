import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  Dumbbell,
  Eye,
  Flame,
  Instagram,
  LayoutGrid,
  Menu,
  Minus,
  Package,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import wheyImage from "@/assets/forge-whey.jpg";
import creatineImage from "@/assets/forge-creatine.jpg";
import preworkoutImage from "@/assets/forge-preworkout.jpg";
import vitaminsImage from "@/assets/forge-vitamins.jpg";
import reelGym from "@/assets/forge-reel-gym.jpg";
import reelScoop from "@/assets/forge-reel-scoop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Everest Nutrition | Premium Gym Supplements" },
      {
        name: "description",
        content:
          "Shop premium protein, creatine, pre-workout and daily nutrition made for stronger training.",
      },
      { property: "og:title", content: "Everest Nutrition | Premium Gym Supplements" },
      {
        property: "og:description",
        content: "Clean, performance-first nutrition for every rep, recovery and goal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

interface Product {
  id: string;
  name: string;
  category: string;
  detail: string;
  price: string;
  priceNum: number;
  originalPrice: string;
  originalPriceNum: number;
  rating: string;
  reviewCount: string;
  image: string;
  badge?: string;
  description: string;
  flavours: string[];
  sizes: string[];
  nutritionFacts: { label: string; value: string }[];
  highlights: string[];
  usage: string;
}

interface CategoryConfig {
  name: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
}

const categoriesList: CategoryConfig[] = [
  { name: "All Products", label: "All Products", icon: LayoutGrid, tagline: "Full Range" },
  { name: "Protein", label: "Protein", icon: Dumbbell, tagline: "Muscle Fuel" },
  { name: "Creatine", label: "Creatine", icon: Zap, tagline: "Pure Power" },
  { name: "Pre-Workout", label: "Pre-Workout", icon: Flame, tagline: "Max Energy" },
  { name: "Vitamins", label: "Vitamins", icon: ShieldCheck, tagline: "Daily Health" },
  { name: "Recovery", label: "Recovery", icon: RefreshCw, tagline: "Fast Repair" },
  { name: "Bundles", label: "Bundles", icon: Package, tagline: "Save 25%" },
];

const products: Product[] = [
  {
    id: "p1",
    name: "Everest Apex Whey · Vanilla",
    category: "Protein",
    detail: "30g protein · 24 servings",
    price: "₹2,899",
    priceNum: 2899,
    originalPrice: "₹3,499",
    originalPriceNum: 3499,
    rating: "4.9",
    reviewCount: "2.1k",
    image: wheyImage,
    badge: "Bestseller",
    description:
      "Crafted for athletes who demand fast digestion and maximum protein purity. Formulated with cold-microfiltered whey isolate and concentrate, delivering 30g pure protein per scoop with zero amino spiking.",
    flavours: ["French Vanilla", "Belgian Chocolate", "Alphonso Mango", "Cafe Mocha"],
    sizes: ["1 kg (30 Servings)", "2 kg (60 Servings)"],
    nutritionFacts: [
      { label: "Protein", value: "30g" },
      { label: "BCAAs", value: "6.8g" },
      { label: "Sugar", value: "0g" },
      { label: "EAAs", value: "13.2g" },
    ],
    highlights: [
      "Ultra-cold microfiltered for instant shaker solubility",
      "Enzyme matrix with DigeZyme for zero bloating or heaviness",
      "100% genuine imported whey with batch-wise lab verification",
    ],
    usage:
      "Mix 1 rounded scoop (33g) in 250-300ml chilled water or milk. Consume 20-30 minutes post-workout or first thing in the morning.",
  },
  {
    id: "p2",
    name: "Everest Glacier Creatine HCL",
    category: "Creatine",
    detail: "5g micronized · 60 servings",
    price: "₹1,499",
    priceNum: 1499,
    originalPrice: "₹1,899",
    originalPriceNum: 1899,
    rating: "4.8",
    reviewCount: "980",
    image: creatineImage,
    badge: "New",
    description:
      "Micro-crystallized 200-mesh Creatine HCL designed for immediate ATP replenishment, explosive muscular power, and rapid intra-set recovery without subcutaneous water bloat.",
    flavours: ["Unflavoured", "Tangy Blue Raspberry", "Fresh Watermelon"],
    sizes: ["250g (60 Servings)", "100g (25 Servings)"],
    nutritionFacts: [
      { label: "Creatine HCL", value: "5g" },
      { label: "Mesh", value: "200 Mesh" },
      { label: "Carbs", value: "0g" },
      { label: "Purity", value: "99.9%" },
    ],
    highlights: [
      "No heavy loading phase or cycling required",
      "Dissolves crystal clear within 5 seconds in cold water",
      "Enhances 1-rep max, sprint capacity, and muscle volume",
    ],
    usage:
      "Mix 1 scoop (3-5g) with 200ml cold water, juice, or your post-workout shake. Drink daily for sustained cellular saturation.",
  },
  {
    id: "p3",
    name: "Everest Altitude 8848 · Citrus",
    category: "Pre-Workout",
    detail: "200mg caffeine · 30 scoops",
    price: "₹2,199",
    priceNum: 2199,
    originalPrice: "₹2,799",
    originalPriceNum: 2799,
    rating: "4.7",
    reviewCount: "1.3k",
    image: preworkoutImage,
    badge: "Hot",
    description:
      "High-stimulant pre-workout formula engineered for skin-splitting nitric oxide pumps, razor-sharp focus, and sustained training stamina without any post-workout crash.",
    flavours: ["Citrus Rush", "Mountain Berry", "Green Apple"],
    sizes: ["300g (30 Scoops)", "150g (15 Scoops)"],
    nutritionFacts: [
      { label: "Caffeine", value: "200mg" },
      { label: "L-Citrulline", value: "6,000mg" },
      { label: "Beta-Alanine", value: "3,200mg" },
      { label: "Taurine", value: "1,000mg" },
    ],
    highlights: [
      "Smooth laser focus matrix with zero jittery drop-offs",
      "Massive vascularity and muscular fullness through L-Citrulline",
      "Clinically dosed to power through heavy compound sessions",
    ],
    usage:
      "Mix 1 scoop in 200-250ml chilled water 20-30 minutes prior to training. First-time users should start with half a scoop.",
  },
  {
    id: "p4",
    name: "Everest Daily Stack · D3 + Zinc",
    category: "Vitamins",
    detail: "Daily support · 90 caps",
    price: "₹899",
    priceNum: 899,
    originalPrice: "₹1,199",
    originalPriceNum: 1199,
    rating: "4.9",
    reviewCount: "640",
    image: vitaminsImage,
    description:
      "Essential micronutrient foundation to support natural hormone balance, deep REM recovery, joint resilience, and immune defense under intense training stress.",
    flavours: ["Standard Veg Capsules"],
    sizes: ["90 Capsules (3 Months)", "180 Capsules (6 Months)"],
    nutritionFacts: [
      { label: "Vitamin D3", value: "2000 IU" },
      { label: "Zinc Picolinate", value: "25mg" },
      { label: "Magnesium", value: "400mg" },
      { label: "Vitamin C", value: "500mg" },
    ],
    highlights: [
      "Chelated minerals for highest gut bio-availability",
      "Strengthens immune response and joint connective tissue",
      "100% vegetarian capsules with zero synthetic fillers",
    ],
    usage:
      "Take 1 capsule daily after a nutrient-rich meal (preferably breakfast or post-dinner) with water.",
  },
  {
    id: "p5",
    name: "Everest Recovery Whey · Cocoa",
    category: "Protein",
    detail: "26g protein + Glutamine · 24 servings",
    price: "₹2,749",
    priceNum: 2749,
    originalPrice: "₹3,399",
    originalPriceNum: 3399,
    rating: "4.8",
    reviewCount: "770",
    image: wheyImage,
    badge: "Recovery",
    description:
      "Formulated specifically for overnight recovery and rapid muscle tissue repair. Blended with micronized L-Glutamine and Dutch dark cocoa for an indulgent, restorative shake.",
    flavours: ["Dutch Dark Cocoa", "Chocolate Hazelnut", "Creamy Vanilla"],
    sizes: ["1 kg (24 Servings)", "2 kg (48 Servings)"],
    nutritionFacts: [
      { label: "Protein", value: "26g" },
      { label: "L-Glutamine", value: "5g" },
      { label: "BCAAs", value: "5.5g" },
      { label: "Enzymes", value: "50mg" },
    ],
    highlights: [
      "Accelerates glycogen recovery and combats delayed soreness (DOMS)",
      "Decadent rich taste crafted from genuine Dutch cocoa",
      "Easy digestion with zero heavy stomach feeling",
    ],
    usage:
      "Mix 1 scoop with 250ml chilled milk or water immediately after grueling training sessions or before bed.",
  },
  {
    id: "p6",
    name: "Everest Pure Power Creatine",
    category: "Creatine",
    detail: "Unflavoured micronized · 50 servings",
    price: "₹1,299",
    priceNum: 1299,
    originalPrice: "₹1,599",
    originalPriceNum: 1599,
    rating: "4.9",
    reviewCount: "560",
    image: creatineImage,
    badge: "Pure",
    description:
      "Ultra-pure Creapure standard micronized creatine monohydrate. Completely unflavoured, dissolves effortlessly into any shake, and primes muscle cells for raw strength.",
    flavours: ["100% Pure Unflavoured"],
    sizes: ["250g (50 Servings)", "500g (100 Servings)"],
    nutritionFacts: [
      { label: "Creatine", value: "3g" },
      { label: "Purity", value: "99.9%" },
      { label: "Carbs", value: "0g" },
      { label: "Mesh", value: "200 Mesh" },
    ],
    highlights: [
      "Creapure standard ultra-fine micronized powder",
      "Blends cleanly without sandiness, grit or bitterness",
      "Gold standard for muscle hypertrophy and strength gains",
    ],
    usage:
      "Mix 1 level scoop (3g) in 250ml water, whey protein, or your favourite electrolyte beverage daily.",
  },
  {
    id: "p7",
    name: "Everest Summit Beast Stack",
    category: "Bundles",
    detail: "Apex Whey + Glacier Creatine + Altitude 8848",
    price: "₹5,499",
    priceNum: 5499,
    originalPrice: "₹7,299",
    originalPriceNum: 7299,
    rating: "5.0",
    reviewCount: "420",
    image: wheyImage,
    badge: "Save 25%",
    description:
      "The ultimate 360-degree training bundle. Includes Apex Whey 1kg, Glacier Creatine 250g, Altitude 8848 Pre-workout, and our stainless steel Everest Summit Shaker.",
    flavours: [
      "Vanilla Whey + Citrus Pre + Unflavoured Creatine",
      "Chocolate Whey + Berry Pre + Unflavoured Creatine",
    ],
    sizes: ["Complete 4-Piece Athlete Kit"],
    nutritionFacts: [
      { label: "Total Items", value: "4 Products" },
      { label: "Savings", value: "25% OFF" },
      { label: "Bonus", value: "Free Shaker" },
      { label: "Duration", value: "30-45 Days" },
    ],
    highlights: [
      "Covers pre-workout energy, intra-workout drive, and post-workout rebuild",
      "Instant ₹1,800 savings compared to purchasing products separately",
      "Delivered in premium Everest heavy-duty gift packaging",
    ],
    usage:
      "Take Altitude 8848 30 mins before workout. Mix Apex Whey with Glacier Creatine post-workout for maximum growth.",
  },
  {
    id: "p8",
    name: "Everest Night Recovery Matrix",
    category: "Recovery",
    detail: "ZMA + Ashwagandha + Tart Cherry · 60 caps",
    price: "₹1,199",
    priceNum: 1199,
    originalPrice: "₹1,599",
    originalPriceNum: 1599,
    rating: "4.8",
    reviewCount: "310",
    image: vitaminsImage,
    badge: "Night Fuel",
    description:
      "Deep REM sleep and natural hormonal restorer combining KSM-66 Ashwagandha, Tart Cherry Extract, bio-chelated ZMA, and Melatonin for overnight muscle repair.",
    flavours: ["Herbal Veg Capsules"],
    sizes: ["60 Capsules (30 Servings)"],
    nutritionFacts: [
      { label: "KSM-66", value: "300mg" },
      { label: "Tart Cherry", value: "500mg" },
      { label: "Magnesium", value: "250mg" },
      { label: "Melatonin", value: "3mg" },
    ],
    highlights: [
      "Significantly reduces cortisol and workout-induced central fatigue",
      "Encourages restorative slow-wave sleep cycles",
      "Wake up fresh and powerful with zero morning grogginess",
    ],
    usage: "Take 2 capsules with water 30-45 minutes before going to bed.",
  },
  {
    id: "p9",
    name: "Everest Peak Pump · Watermelon",
    category: "Pre-Workout",
    detail: "Zero caffeine · Massive pumps · 30 scoops",
    price: "₹1,999",
    priceNum: 1999,
    originalPrice: "₹2,499",
    originalPriceNum: 2499,
    rating: "4.8",
    reviewCount: "510",
    image: preworkoutImage,
    badge: "Pump Only",
    description:
      "Caffeine-free nitric oxide booster designed for late-night lifters or stimulant-sensitive athletes who want massive muscle pumps, hyper-hydration, and vascularity.",
    flavours: ["Watermelon Splash", "Blue Raspberry", "Pineapple Mango"],
    sizes: ["300g (30 Scoops)"],
    nutritionFacts: [
      { label: "L-Citrulline", value: "7,000mg" },
      { label: "GlycerSize", value: "2,000mg" },
      { label: "Betaine", value: "2,500mg" },
      { label: "Caffeine", value: "0mg" },
    ],
    highlights: [
      "Extreme blood flow and nutrient delivery to working muscle fibers",
      "100% stimulant-free — train hard at 8 PM and sleep soundly at 10 PM",
      "Can be stacked with fat burners or coffee without caffeine overload",
    ],
    usage: "Mix 1 scoop in 250ml water 20 minutes before training.",
  },
  {
    id: "p10",
    name: "Everest Multi-Mineral Omega Stack",
    category: "Vitamins",
    detail: "Triple Omega 1000mg + Multivitamin · 60 softgels",
    price: "₹999",
    priceNum: 999,
    originalPrice: "₹1,399",
    originalPriceNum: 1399,
    rating: "4.9",
    reviewCount: "820",
    image: vitaminsImage,
    badge: "Essential",
    description:
      "High-potency molecularly distilled Omega-3 fish oil delivering 1000mg combined EPA & DHA with enteric coating for zero fishy burps and maximum joint lubrication.",
    flavours: ["Lemon-Infused Softgels"],
    sizes: ["60 Softgels (1 Month)", "120 Softgels (2 Months)"],
    nutritionFacts: [
      { label: "Fish Oil", value: "1,250mg" },
      { label: "EPA", value: "600mg" },
      { label: "DHA", value: "400mg" },
      { label: "Vitamin E", value: "10 IU" },
    ],
    highlights: [
      "Molecularly distilled to eliminate mercury, PCBs, and heavy metals",
      "Supports cardiovascular wellness, joint cushioning, and brain health",
      "Enteric-coated shell guarantees absolutely zero unpleasant burps",
    ],
    usage: "Take 1-2 softgels daily with a meal and water.",
  },
  {
    id: "p11",
    name: "Everest Lean Muscle Transformation Kit",
    category: "Bundles",
    detail: "Iso-Whey + Pure Creatine + Shaker Bottle",
    price: "₹4,299",
    priceNum: 4299,
    originalPrice: "₹5,299",
    originalPriceNum: 5299,
    rating: "4.9",
    reviewCount: "380",
    image: wheyImage,
    badge: "Top Bundle",
    description:
      "Engineered specifically for lean muscle building and body recomposition. Includes 100% Iso-Whey 1kg, Pure Micronized Creatine 250g, and Shaker Bottle.",
    flavours: [
      "Double Rich Cocoa + Unflavoured",
      "Alpine Vanilla + Unflavoured",
    ],
    sizes: ["Starter Transformation Pack"],
    nutritionFacts: [
      { label: "Iso-Whey", value: "1 kg" },
      { label: "Creatine", value: "250g" },
      { label: "Shaker", value: "Included" },
      { label: "Value", value: "Save ₹1,000" },
    ],
    highlights: [
      "Ultra-pure isolate with 90%+ protein concentration per serving",
      "Synergistic combo accelerates muscle protein synthesis and strength",
      "Ideal for both calorie deficit cuts and lean mass phases",
    ],
    usage:
      "Drink Iso-Whey post-workout; take 3g Pure Creatine daily with water.",
  },
];

const reels = [
  { image: reelGym, user: "@arjunlifts", views: "82K" },
  { image: reelScoop, user: "@fitwithriya", views: "126K" },
  { image: preworkoutImage, user: "@everestcrew", views: "94K" },
  { image: vitaminsImage, user: "@dailyfuel", views: "71K" },
];

const reviews = [
  {
    quote: "Sabse clean pre-workout. No crash, no jitters—sirf focused reps.",
    name: "Maya R.",
    role: "Powerlifter · Delhi",
    initials: "MR",
  },
  {
    quote: "Vanilla whey genuinely smooth hai. Third tub chal raha hai aur mix perfect hota hai.",
    name: "Dev K.",
    role: "CrossFit · Mumbai",
    initials: "DK",
  },
  {
    quote: "Creatine two days mein deliver hua aur bilkul clean dissolve hota hai.",
    name: "Priya S.",
    role: "Sprinter · Bengaluru",
    initials: "PS",
  },
  {
    quote: "Honest labels, premium packaging aur recovery mein clear difference.",
    name: "Kabir A.",
    role: "Coach · Pune",
    initials: "KA",
  },
];

interface CartItem {
  product: Product;
  quantity: number;
}

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#top"
      className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
      aria-label="Everest Nutrition home"
    >
      <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground shadow-sm">
        E
      </span>
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${
          inverted ? "text-background" : "text-foreground"
        }`}
      >
        EVEREST NUTRITION
      </span>
    </a>
  );
}

function ProductCard({
  product,
  onAddToCart,
  onOpenQuickView,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
  onOpenQuickView: (p: Product) => void;
}) {
  return (
    <article
      onClick={() => onOpenQuickView(product)}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl bg-card p-2.5 shadow-[0_10px_35px_-28px_var(--foreground)] ring-1 ring-foreground/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-primary/40 cursor-pointer select-none sm:p-4"
    >
      <div className="relative overflow-hidden rounded-xl bg-clay-soft">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        {product.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-accent px-2.5 py-1 text-[9px] font-extrabold uppercase text-accent-foreground sm:text-[10px] shadow-sm">
            {product.badge}
          </span>
        ) : null}

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-background/95 text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="size-3.5 text-primary" /> View Details
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-3">
        <p className="text-[10px] font-bold uppercase text-primary tracking-wider sm:text-xs">
          {product.category}
        </p>
        <h3 className="mt-0.5 line-clamp-2 min-h-10 text-sm font-bold leading-tight text-foreground group-hover:text-primary transition-colors sm:text-base">
          {product.name}
        </h3>
        <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{product.detail}</p>
        <div className="mt-2 flex min-w-0 items-center gap-1.5 text-[10px] sm:text-xs">
          <span className="text-accent text-xs" aria-label="5 stars">
            ★★★★★
          </span>
          <span className="font-bold text-foreground/85">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 pt-3">
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span className="truncate font-display text-sm font-extrabold text-foreground sm:text-lg">
              {product.price}
            </span>
            <span className="text-[11px] text-muted-foreground line-through hidden min-[380px]:inline">
              {product.originalPrice}
            </span>
          </div>
          <Button
            variant="forgeDark"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            aria-label={`Add ${product.name} to bag`}
            className="size-8 rounded-full p-0 sm:h-8 sm:w-auto sm:px-3 hover:bg-primary cursor-pointer"
          >
            <ShoppingBag className="size-3.5" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Index() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // E-commerce Product Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFlavour, setSelectedFlavour] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [modalQty, setModalQty] = useState<number>(1);
  const [modalActiveImage, setModalActiveImage] = useState<string>("");

  const handleOpenProduct = (p: Product) => {
    setSelectedProduct(p);
    setSelectedFlavour(p.flavours?.[0] || "Standard");
    setSelectedSize(p.sizes?.[0] || "Standard Pack");
    setModalQty(1);
    setModalActiveImage(p.image);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const matchCategory = (product: Product, cat: string) => {
    if (cat === "All Products") return true;
    if (cat === "Protein")
      return product.category === "Protein" || product.name.toLowerCase().includes("whey");
    if (cat === "Creatine")
      return (
        product.category === "Creatine" ||
        product.category === "Strength" ||
        product.name.toLowerCase().includes("creatine")
      );
    if (cat === "Pre-Workout")
      return (
        product.category === "Pre-Workout" ||
        product.name.toLowerCase().includes("pump") ||
        product.name.toLowerCase().includes("8848")
      );
    if (cat === "Vitamins")
      return (
        product.category === "Vitamins" ||
        product.name.toLowerCase().includes("stack") ||
        product.name.toLowerCase().includes("omega")
      );
    if (cat === "Recovery")
      return (
        product.category === "Recovery" || product.name.toLowerCase().includes("recovery")
      );
    if (cat === "Bundles")
      return (
        product.category === "Bundles" ||
        product.name.toLowerCase().includes("stack") ||
        product.name.toLowerCase().includes("kit")
      );
    return product.category.toLowerCase() === cat.toLowerCase();
  };

  const filteredProducts = products.filter((p) => matchCategory(p, activeCategory));
  const getCategoryCount = (catName: string) =>
    products.filter((p) => matchCategory(p, catName)).length;

  const totalCartQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.priceNum * item.quantity,
    0,
  );

  const handleAddToCart = (product: Product, quantity = 1, flavour?: string, size?: string) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedFlavour: flavour || product.flavours?.[0],
          selectedSize: size || product.sizes?.[0],
        },
      ];
    });
    toast.success(`Added ${product.name} to Bag! 🏔️`, {
      description: flavour
        ? `Flavour: ${flavour} · Qty: ${quantity}`
        : "Everest pure supplement added.",
    });
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const next = item.quantity + delta;
            return next > 0 ? { ...item, quantity: next } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[],
    );
  };

  const reelLoop = [...reels, ...reels];
  const reviewLoop = [...reviews, ...reviews];

  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      {/* Top Banner Ticker */}
      <div className="bg-primary px-4 py-1.5 text-center text-xs font-semibold text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
          <span>🏔️ Welcome to Everest Nutrition — Fueling 40,000+ Indian Athletes.</span>
          <span className="hidden sm:inline font-bold text-accent">Code: EVEREST10</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:px-6">
          <Brand />
          <nav
            className="ml-7 hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            <a href="#shop" className="hover:text-foreground transition-colors">
              Shop
            </a>
            <a href="#categories" className="hover:text-foreground transition-colors">
              Categories
            </a>
            <a href="#feed" className="hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#reviews" className="hover:text-foreground transition-colors">
              Reviews
            </a>
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
            <Button
              variant="forge"
              size="sm"
              onClick={() => setIsBagOpen(true)}
              className="font-bold"
            >
              <ShoppingBag />
              Bag · {totalCartQty}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-foreground/8 bg-background px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <a
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-primary"
              >
                Shop All
              </a>
              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-primary"
              >
                Categories
              </a>
              <a
                href="#feed"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-primary"
              >
                Community Feed
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-primary"
              >
                Lifter Reviews
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Carousel */}
      <section className="pt-5" aria-label="Current offers">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl ring-1 ring-foreground/8">
            <div className="banner-track flex w-[400%]">
              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-primary p-7 sm:min-h-[420px] sm:p-10">
                <div className="min-w-0 flex-1">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">
                    New Drop
                  </span>
                  <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl">
                    Strong starts with what you fuel.
                  </h1>
                  <p className="mt-4 max-w-lg text-sm text-primary-foreground/75 sm:text-base">
                    30g clean protein per scoop. Smooth texture, honest label, serious recovery with
                    Everest Apex Whey.
                  </p>
                  <Button asChild variant="forgeAccent" size="lg" className="mt-6 font-bold">
                    <a href="#shop">
                      Shop the drop <ArrowRight />
                    </a>
                  </Button>
                </div>
                <img
                  src={wheyImage}
                  alt="Everest whey protein"
                  width={1024}
                  height={1024}
                  className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block"
                />
              </article>

              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-clay p-7 sm:min-h-[420px] sm:p-10">
                <div className="min-w-0 flex-1">
                  <span className="rounded-full bg-surface px-3 py-1 text-[10px] font-bold uppercase">
                    Bundle & Save
                  </span>
                  <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] sm:text-6xl">
                    Train the full week.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm text-foreground/70 sm:text-base">
                    Everest Whey + Creatine + Pre-workout. Your complete stack with 20% savings.
                  </p>
                  <Button asChild variant="forgeDark" size="lg" className="mt-6 font-bold">
                    <a href="#shop">
                      Build your stack <ArrowRight />
                    </a>
                  </Button>
                </div>
                <img
                  src={creatineImage}
                  alt="Everest creatine"
                  width={1024}
                  height={1024}
                  className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block"
                />
              </article>

              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-foreground p-7 text-background sm:min-h-[420px] sm:p-10">
                <div className="min-w-0 flex-1">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">
                    Rated 4.9 / 5
                  </span>
                  <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] sm:text-6xl">
                    Made for the next rep.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm text-background/70 sm:text-base">
                    Tested formulas. Clean labels. Trusted by 40,000+ Indian athletes across the
                    nation.
                  </p>
                  <Button asChild variant="forgeAccent" size="lg" className="mt-6 font-bold">
                    <a href="#reviews">
                      See real reviews <ArrowRight />
                    </a>
                  </Button>
                </div>
                <img
                  src={preworkoutImage}
                  alt="Everest pre-workout"
                  width={1024}
                  height={1024}
                  className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block"
                />
              </article>

              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-primary p-7 sm:min-h-[420px] sm:p-10">
                <div className="min-w-0 flex-1">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">
                    New Drop
                  </span>
                  <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl">
                    Strong starts with what you fuel.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm text-primary-foreground/75 sm:text-base">
                    30g clean protein per scoop. Smooth texture, honest label, serious recovery with
                    Everest Apex Whey.
                  </p>
                  <Button asChild variant="forgeAccent" size="lg" className="mt-6 font-bold">
                    <a href="#shop">
                      Shop the drop <ArrowRight />
                    </a>
                  </Button>
                </div>
                <img
                  src={wheyImage}
                  alt="Everest whey protein"
                  width={1024}
                  height={1024}
                  className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block"
                />
              </article>
            </div>
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-8 rounded-full bg-primary" />
            <span className="size-1.5 rounded-full bg-foreground/20" />
            <span className="size-1.5 rounded-full bg-foreground/20" />
          </div>
        </div>
      </section>

      {/* Categories Filter - Square Boxes */}
      <section id="categories" className="scroll-mt-20 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <Sparkles className="size-3.5" />
                <span>CATEGORIES</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Choose Your Goal
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Click any square box below to filter supplements instantly
              </p>
            </div>
            {activeCategory !== "All Products" && (
              <button
                onClick={() => setActiveCategory("All Products")}
                className="self-start sm:self-auto text-xs font-bold text-primary hover:text-foreground flex items-center gap-1.5 bg-clay-soft px-3.5 py-1.5 rounded-full transition-colors cursor-pointer border border-foreground/10"
              >
                <span>Filtered by: <strong>{activeCategory}</strong></span>
                <span className="grid size-4 place-items-center rounded-full bg-primary text-primary-foreground text-[10px]">✕</span>
              </button>
            )}
          </div>

          {/* Square Boxes Grid */}
          <div className="grid grid-cols-2 min-[440px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              const count = getCategoryCount(cat.name);

              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.name);
                    const el = document.getElementById("shop");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }
                  }}
                  className={`group relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer select-none aspect-square text-center shadow-xs ${
                    isActive
                      ? "bg-foreground text-background border-foreground shadow-xl -translate-y-1 ring-4 ring-primary/25"
                      : "bg-card text-foreground border-foreground/10 hover:border-primary/50 hover:bg-clay-soft hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <span className="absolute top-2.5 right-2.5 flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                    </span>
                  )}

                  {/* Icon Container */}
                  <div
                    className={`grid size-11 sm:size-12 place-items-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-sm scale-110"
                        : "bg-clay-soft text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105"
                    }`}
                  >
                    <Icon className="size-5 sm:size-6" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="my-auto px-0.5">
                    <span
                      className={`block font-display text-xs sm:text-sm font-extrabold tracking-tight transition-colors ${
                        isActive ? "text-background" : "text-foreground"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <span
                      className={`text-[10px] hidden min-[360px]:block transition-colors ${
                        isActive ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {cat.tagline}
                    </span>
                  </div>

                  {/* Item Count Badge */}
                  <div
                    className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold transition-colors ${
                      isActive
                        ? "bg-background/20 text-background"
                        : "bg-clay-soft text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {count} {count === 1 ? "Item" : "Items"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Shelf */}
      <section id="shop" className="scroll-mt-20 pb-16 pt-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground/8 pb-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  {activeCategory}
                </span>
                <span className="text-xs text-muted-foreground">
                  • {filteredProducts.length} Products available
                </span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold sm:text-4xl text-foreground">
                {activeCategory === "All Products" ? "Fuel Every Goal." : `${activeCategory} Collection`}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {activeCategory === "All Products"
                  ? "Clean formulas. Powerful results. No guesswork."
                  : `Showing high-potency Everest formulas crafted for ${activeCategory.toLowerCase()}.`}
              </p>
            </div>
            {activeCategory !== "All Products" && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory("All Products")}
                className="self-start sm:self-auto rounded-full font-bold text-xs"
              >
                View all ({products.length}) <ArrowRight className="size-3.5 ml-1" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onOpenQuickView={handleOpenProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Bundle Offer Banner (Above Feed) */}
      <section id="special-offer" className="scroll-mt-20 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-2xl ring-1 ring-foreground/10">
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={wheyImage}
                alt="Everest complete stack"
                className="h-full w-full object-cover opacity-20 mix-blend-overlay filter blur-[1px] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/88 to-primary/95" />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 grid gap-8 p-6 sm:p-10 md:grid-cols-[1.5fr_auto] md:items-center">
              {/* Left Offer Details */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-accent">
                  <Sparkles className="size-4 text-accent" />
                  <span>COMPLETE SUMMIT OFFER</span>
                </div>

                <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-background leading-tight">
                  Save 25% on the full Everest Summit set.
                </h2>

                <p className="mt-3 text-sm sm:text-base text-background/80 leading-relaxed max-w-lg">
                  Apex Whey, Glacier Creatine, Altitude 8848 Pre-Workout and Shaker together. Add the
                  complete training ritual to your bag.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-background/75">
                  <span className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-accent" /> 100% Lab Tested Purity
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-accent" /> Free Express Delivery
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-accent" /> Extra 10% on UPI
                  </span>
                </div>
              </div>

              {/* Right Price & CTA Box */}
              <div className="flex shrink-0 flex-col justify-center rounded-2xl bg-background/15 backdrop-blur-md p-6 ring-1 ring-background/25 shadow-xl min-w-[260px] sm:min-w-[280px]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-background">
                    ₹5,499
                  </span>
                  <span className="text-sm font-semibold line-through text-background/55">
                    ₹7,299
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-background/75 font-medium">
                  Includes 4 Full-size products · ₹1,800 savings
                </p>

                <Button
                  variant="forgeAccent"
                  size="lg"
                  onClick={() => {
                    const bundleProduct = products.find((p) => p.id === "p7") || products[0];
                    handleAddToCart(bundleProduct);
                    toast.success("Everest Summit Set added to Bag! 🏔️", {
                      description: "Complete 4-item athlete kit with 25% savings included.",
                    });
                    setIsBagOpen(true);
                  }}
                  className="mt-4 w-full rounded-xl py-3 font-extrabold text-sm tracking-wide shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <ShoppingBag className="size-4" />
                  Add full set
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Feed */}
      <section
        id="feed"
        className="scroll-mt-20 overflow-hidden bg-foreground py-14 text-background"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-7 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-accent">Everest community</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">On the feed.</h2>
              <p className="mt-2 text-sm text-background/55">
                Tag <span className="font-semibold text-accent">@everestnutrition</span> to get
                featured.
              </p>
            </div>
            <Button
              variant="forgeAccent"
              size="icon"
              className="shrink-0 sm:hidden"
              aria-label="Follow on Instagram"
            >
              <Instagram />
            </Button>
            <Button variant="forgeAccent" className="hidden shrink-0 sm:inline-flex">
              <Instagram /> Follow on Instagram
            </Button>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max gap-4">
              {reelLoop.map((reel, index) => (
                <article
                  key={`${reel.user}-${index}`}
                  className="relative w-44 shrink-0 overflow-hidden rounded-2xl bg-primary sm:w-52"
                >
                  <img
                    src={reel.image}
                    alt={`Fitness reel by ${reel.user}`}
                    width={768}
                    height={1152}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/90 to-transparent p-4 pt-12">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                      <span className="truncate text-xs font-bold">{reel.user}</span>
                      <span className="flex shrink-0 items-center gap-1 text-[10px]">
                        <Play className="size-3 fill-current" />
                        {reel.views}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="scroll-mt-20 overflow-hidden py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-7 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent font-display text-xl font-extrabold text-accent-foreground">
              4.9
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold sm:text-4xl">Rated by real lifters.</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                40,000+ verified customer reviews.
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track-slow flex w-max gap-4">
              {reviewLoop.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="w-[82vw] max-w-sm shrink-0 rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
                >
                  <div className="flex gap-0.5 text-accent" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 min-h-16 text-sm leading-relaxed text-foreground/80">
                    “{review.quote}”
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
            <div className="max-w-sm">
              <Brand inverted />
              <p className="mt-5 text-sm leading-relaxed text-background/55">
                Premium sports nutrition, clean formulas and performance you can feel—from first
                scoop to final rep.
              </p>
              <Button variant="forgeAccent" className="mt-5">
                Join the club <ArrowRight />
              </Button>
              <p className="mt-2 text-xs text-background/45">Get 10% off your first order.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Shop",
                  items: ["Protein", "Creatine", "Pre-Workout", "Bundles"],
                },
                {
                  title: "Company",
                  items: ["Our standards", "Lab results", "Reviews", "Careers"],
                },
                {
                  title: "Support",
                  items: ["Shipping", "Returns", "Contact", "FAQ"],
                },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-bold uppercase text-background/40">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-background/70">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href="#top" className="hover:text-background transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-background/10 pt-6 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Everest Nutrition. All products quality tested.</p>
            <div className="flex gap-5">
              <a href="#top" className="hover:text-background">
                Privacy
              </a>
              <a href="#top" className="hover:text-background">
                Terms
              </a>
              <a href="#feed" className="hover:text-background">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* E-Commerce Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/65 p-3 sm:p-6 backdrop-blur-md animate-in fade-in-50 duration-200 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-background p-5 sm:p-8 shadow-2xl border border-foreground/10 my-auto max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full bg-clay-soft text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
              aria-label="Close product details"
            >
              <X className="size-5" />
            </button>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {/* Left Column: Product Media & Badges */}
              <div className="flex flex-col gap-4">
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-clay-soft p-4 sm:p-6 ring-1 ring-foreground/8">
                  <img
                    src={modalActiveImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-full w-full object-cover rounded-xl transition-all duration-300"
                  />
                  {selectedProduct.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-extrabold uppercase text-accent-foreground shadow-sm">
                      {selectedProduct.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-foreground backdrop-blur-sm shadow-xs">
                    <BadgeCheck className="size-3.5 text-primary" /> 100% Genuine Formula
                  </span>
                </div>

                {/* Thumbnail angle selectors */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Front Tub", img: selectedProduct.image },
                    { label: "Scoop Prep", img: reelScoop },
                    { label: "Gym Fuel", img: reelGym },
                  ].map((thumb, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setModalActiveImage(thumb.img)}
                      className={`relative flex items-center gap-2 rounded-xl p-1.5 border-2 text-left transition-all cursor-pointer ${
                        (modalActiveImage || selectedProduct.image) === thumb.img
                          ? "border-primary bg-primary/5 shadow-xs"
                          : "border-foreground/10 hover:border-foreground/30 bg-card"
                      }`}
                    >
                      <img
                        src={thumb.img}
                        alt={thumb.label}
                        className="size-10 rounded-lg object-cover"
                      />
                      <span className="text-[11px] font-bold text-foreground line-clamp-1">
                        {thumb.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Trust Badges Strip */}
                <div className="rounded-2xl border border-foreground/10 bg-clay-soft/60 p-3.5 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="flex flex-col items-center">
                    <Truck className="size-4 text-primary mb-1" />
                    <span className="text-[11px] font-bold">Free Shipping</span>
                    <span className="text-[10px] text-muted-foreground">Pan-India</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-foreground/10 px-1">
                    <CheckCircle2 className="size-4 text-primary mb-1" />
                    <span className="text-[11px] font-bold">Lab Certified</span>
                    <span className="text-[10px] text-muted-foreground">Batch QR Check</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RotateCcw className="size-4 text-primary mb-1" />
                    <span className="text-[11px] font-bold">Easy Returns</span>
                    <span className="text-[10px] text-muted-foreground">7 Days Policy</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Buying Engine & Details */}
              <div className="flex flex-col">
                {/* Category & Ratings */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {selectedProduct.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-accent">★★★★★</span>
                    <span className="font-bold text-foreground">{selectedProduct.rating}</span>
                    <span className="text-muted-foreground">({selectedProduct.reviewCount})</span>
                  </div>
                </div>

                {/* Title & Short Tagline */}
                <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                  {selectedProduct.name}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {selectedProduct.detail}
                </p>

                {/* Price Box */}
                <div className="mt-4 flex items-baseline gap-3 rounded-xl bg-clay-soft/80 p-3">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                    ₹{(selectedProduct.priceNum * modalQty).toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold line-through text-muted-foreground">
                    ₹{(selectedProduct.originalPriceNum * modalQty).toLocaleString()}
                  </span>
                  <span className="rounded-md bg-accent px-2 py-0.5 text-[11px] font-bold text-accent-foreground">
                    Save ₹{((selectedProduct.originalPriceNum - selectedProduct.priceNum) * modalQty).toLocaleString()}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Inclusive of all taxes. Free 48-hour express dispatch.
                </p>

                {/* Flavour Selector */}
                {selectedProduct.flavours && selectedProduct.flavours.length > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-bold text-foreground">Select Flavour:</span>
                      <span className="text-primary font-bold">{selectedFlavour}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.flavours.map((flavour) => (
                        <button
                          key={flavour}
                          type="button"
                          onClick={() => setSelectedFlavour(flavour)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer ${
                            selectedFlavour === flavour
                              ? "bg-foreground text-background border-foreground shadow-sm ring-2 ring-primary/20"
                              : "bg-card text-foreground border-foreground/15 hover:border-foreground/40 hover:bg-clay-soft"
                          }`}
                        >
                          {flavour}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size / Serving Selector */}
                {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-bold text-foreground">Select Size / Servings:</span>
                      <span className="text-primary font-bold">{selectedSize}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer ${
                            selectedSize === size
                              ? "bg-foreground text-background border-foreground shadow-sm ring-2 ring-primary/20"
                              : "bg-card text-foreground border-foreground/15 hover:border-foreground/40 hover:bg-clay-soft"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fast Nutrition Highlights (4 tiles) */}
                {selectedProduct.nutritionFacts && selectedProduct.nutritionFacts.length > 0 && (
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {selectedProduct.nutritionFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-xl bg-card border border-foreground/10 p-2 text-center"
                      >
                        <span className="block font-display text-xs sm:text-sm font-extrabold text-foreground">
                          {fact.value}
                        </span>
                        <span className="block text-[10px] text-muted-foreground uppercase font-bold">
                          {fact.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quantity & CTA Buttons */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center rounded-xl border border-foreground/20 bg-card px-2 py-1.5">
                    <button
                      type="button"
                      onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                      className="p-1 hover:text-primary transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-bold">{modalQty}</span>
                    <button
                      type="button"
                      onClick={() => setModalQty(modalQty + 1)}
                      className="p-1 hover:text-primary transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>

                  <Button
                    variant="forgeDark"
                    size="lg"
                    onClick={() => {
                      handleAddToCart(selectedProduct, modalQty, selectedFlavour, selectedSize);
                      handleCloseModal();
                      setIsBagOpen(true);
                    }}
                    className="flex-1 rounded-xl font-extrabold text-sm shadow-md cursor-pointer hover:bg-primary"
                  >
                    <ShoppingBag className="size-4" />
                    Add to Bag · ₹{(selectedProduct.priceNum * modalQty).toLocaleString()}
                  </Button>
                </div>

                {/* Description & Highlights */}
                <div className="mt-5 border-t border-foreground/10 pt-4 text-xs space-y-2.5">
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-1 pt-1">
                    {selectedProduct.highlights?.map((h) => (
                      <p key={h} className="flex items-center gap-1.5 text-foreground/75">
                        <Check className="size-3 text-accent shrink-0" />
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                  <div className="rounded-xl bg-clay-soft/80 p-3 mt-2">
                    <span className="font-bold block text-foreground mb-0.5">How to use:</span>
                    <span className="text-muted-foreground">{selectedProduct.usage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Bag Slide-out Drawer */}
      {isBagOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-foreground/50 backdrop-blur-sm animate-in fade-in-50">
          <div className="relative flex h-full w-full max-w-md flex-col bg-background p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-primary" />
                <h3 className="font-display text-lg font-bold">Your Bag</h3>
                <span className="rounded-full bg-clay-soft px-2 py-0.5 text-xs font-bold">
                  {totalCartQty} items
                </span>
              </div>
              <button
                onClick={() => setIsBagOpen(false)}
                className="grid size-8 place-items-center rounded-full hover:bg-clay-soft"
                aria-label="Close Bag"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto space-y-3 pr-1">
              {cart.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <div className="grid size-14 place-items-center rounded-2xl bg-clay-soft text-muted-foreground">
                    <ShoppingBag className="size-7" />
                  </div>
                  <h4 className="mt-4 font-bold">Your Bag is empty</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Fuel your training with Everest Nutrition.
                  </p>
                  <Button
                    variant="forgeDark"
                    size="sm"
                    className="mt-4 font-bold"
                    onClick={() => setIsBagOpen(false)}
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 rounded-2xl bg-card p-3 shadow-sm ring-1 ring-foreground/8"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="size-16 rounded-xl object-cover bg-clay-soft"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="line-clamp-1 text-xs font-bold">{item.product.name}</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.selectedFlavour && (
                              <span className="rounded bg-clay-soft px-1.5 py-0.5 text-[10px] text-muted-foreground font-semibold">
                                {item.selectedFlavour}
                              </span>
                            )}
                            {item.selectedSize && (
                              <span className="rounded bg-clay-soft px-1.5 py-0.5 text-[10px] text-muted-foreground font-semibold">
                                {item.selectedSize}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => handleUpdateQty(item.product.id, -item.quantity)}
                          className="text-muted-foreground hover:text-destructive cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="font-display text-sm font-bold">
                          ₹{(item.product.priceNum * item.quantity).toLocaleString()}
                        </span>

                        <div className="flex items-center rounded-full border border-foreground/15 bg-background px-1.5 py-0.5">
                          <button
                            onClick={() => handleUpdateQty(item.product.id, -1)}
                            className="p-1 hover:text-primary"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQty(item.product.id, 1)}
                            className="p-1 hover:text-primary"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-4 border-t border-foreground/10 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="font-bold text-accent-foreground">FREE</span>
                </div>
                <div className="flex items-baseline justify-between border-t border-foreground/10 pt-2 text-sm font-bold">
                  <span>Total Amount</span>
                  <span className="font-display text-lg font-extrabold text-foreground">
                    ₹{cartSubtotal.toLocaleString()}
                  </span>
                </div>

                <Button
                  variant="forgeAccent"
                  size="lg"
                  className="w-full mt-3 font-bold text-sm"
                  onClick={() => {
                    toast.success("Order Placed Successfully! 🏔️", {
                      description: `Thank you for choosing Everest Nutrition. Total: ₹${cartSubtotal.toLocaleString()}`,
                    });
                    setCart([]);
                    setIsBagOpen(false);
                  }}
                >
                  Proceed to Checkout · ₹{cartSubtotal.toLocaleString()}
                </Button>
                <p className="text-center text-[10px] text-muted-foreground pt-1 flex items-center justify-center gap-1">
                  <Check className="size-3 text-accent" /> 100% Secure Checkout Across India
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}