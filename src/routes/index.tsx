import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Menu, Play, ShoppingBag, Star } from "lucide-react";

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
      { title: "FORGE Nutrition | Premium Gym Supplements" },
      {
        name: "description",
        content: "Shop premium protein, creatine, pre-workout and daily nutrition made for stronger training.",
      },
      { property: "og:title", content: "FORGE Nutrition | Premium Gym Supplements" },
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

const products = [
  { name: "Snap Whey · Vanilla", category: "Protein", detail: "30g protein · 24 servings", price: "₹2,899", rating: "4.9 (2.1k)", image: wheyImage, badge: "Bestseller" },
  { name: "Plate Creatine HCL", category: "Creatine", detail: "5g micronized · 60 servings", price: "₹1,499", rating: "4.8 (980)", image: creatineImage, badge: "New" },
  { name: "Rep 900 · Citrus", category: "Pre-Workout", detail: "200mg caffeine · 30 scoops", price: "₹2,199", rating: "4.7 (1.3k)", image: preworkoutImage, badge: "Hot" },
  { name: "Daily Stack · D3 + Zinc", category: "Vitamins", detail: "Daily support · 90 caps", price: "₹899", rating: "4.9 (640)", image: vitaminsImage },
  { name: "Recovery Whey · Cocoa", category: "Protein", detail: "26g protein · 24 servings", price: "₹2,749", rating: "4.8 (770)", image: wheyImage },
  { name: "Pure Power Creatine", category: "Strength", detail: "Unflavoured · 50 servings", price: "₹1,299", rating: "4.9 (560)", image: creatineImage, badge: "Pure" },
];

const reels = [
  { image: reelGym, user: "@arjunlifts", views: "82K" },
  { image: reelScoop, user: "@fitwithriya", views: "126K" },
  { image: preworkoutImage, user: "@forgecrew", views: "94K" },
  { image: vitaminsImage, user: "@dailyfuel", views: "71K" },
];

const reviews = [
  { quote: "Sabse clean pre-workout. No crash, no jitters—sirf focused reps.", name: "Maya R.", role: "Powerlifter · Delhi", initials: "MR" },
  { quote: "Vanilla whey genuinely smooth hai. Third tub chal raha hai aur mix perfect hota hai.", name: "Dev K.", role: "CrossFit · Mumbai", initials: "DK" },
  { quote: "Creatine two days mein deliver hua aur bilkul clean dissolve hota hai.", name: "Priya S.", role: "Sprinter · Bengaluru", initials: "PS" },
  { quote: "Honest labels, premium packaging aur recovery mein clear difference.", name: "Kabir A.", role: "Coach · Pune", initials: "KA" },
];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="FORGE home">
      <span className="grid size-9 place-items-center rounded-xl bg-primary font-display text-sm font-extrabold text-primary-foreground">F</span>
      <span className={`font-display text-lg font-extrabold ${inverted ? "text-background" : "text-foreground"}`}>FORGE</span>
    </a>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl bg-card p-2.5 shadow-[0_10px_35px_-28px_var(--foreground)] ring-1 ring-foreground/8 transition-transform duration-300 hover:-translate-y-1 sm:p-4">
      <div className="relative overflow-hidden rounded-xl bg-clay-soft">
        <img src={product.image} alt={product.name} width={1024} height={1024} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        {product.badge ? <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-1 text-[9px] font-bold uppercase text-accent-foreground sm:text-[10px]">{product.badge}</span> : null}
      </div>
      <div className="flex flex-1 flex-col pt-3">
        <p className="text-[10px] font-bold uppercase text-primary sm:text-xs">{product.category}</p>
        <h3 className="mt-0.5 line-clamp-2 min-h-10 text-sm font-bold leading-tight text-foreground sm:text-base">{product.name}</h3>
        <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{product.detail}</p>
        <div className="mt-2 flex min-w-0 items-center gap-1 text-[10px] sm:text-xs">
          <span className="text-accent" aria-label="5 stars">★★★★★</span>
          <span className="truncate text-muted-foreground">{product.rating}</span>
        </div>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 pt-3">
          <span className="truncate font-display text-sm font-extrabold text-foreground sm:text-lg">{product.price}</span>
          <Button variant="forgeDark" size="sm" aria-label={`Add ${product.name} to bag`} className="size-8 rounded-full p-0 sm:h-8 sm:w-auto sm:px-3">
            <ShoppingBag className="size-3.5" /><span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Index() {
  const reelLoop = [...reels, ...reels];
  const reviewLoop = [...reviews, ...reviews];

  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:px-6">
          <Brand />
          <nav className="ml-7 hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex" aria-label="Main navigation">
            <a href="#shop" className="hover:text-foreground">Shop</a><a href="#categories" className="hover:text-foreground">Categories</a><a href="#feed" className="hover:text-foreground">Community</a><a href="#reviews" className="hover:text-foreground">Reviews</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu"><Menu /></Button>
            <Button variant="forge" size="sm"><ShoppingBag />Bag · 0</Button>
          </div>
        </div>
      </header>

      <section className="pt-5" aria-label="Current offers">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl ring-1 ring-foreground/8">
            <div className="banner-track flex w-[400%]">
              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-primary p-7 sm:min-h-[420px] sm:p-10">
                <div className="min-w-0 flex-1"><span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">New Drop</span><h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl">Strong starts with what you fuel.</h1><p className="mt-4 max-w-lg text-sm text-primary-foreground/75 sm:text-base">30g clean protein per scoop. Smooth texture, honest label, serious recovery.</p><Button asChild variant="forgeAccent" size="lg" className="mt-6"><a href="#shop">Shop the drop <ArrowRight /></a></Button></div>
                <img src={wheyImage} alt="FORGE whey protein" width={1024} height={1024} className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block" />
              </article>
              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-clay p-7 sm:min-h-[420px] sm:p-10"><div className="min-w-0 flex-1"><span className="rounded-full bg-surface px-3 py-1 text-[10px] font-bold uppercase">Bundle & Save</span><h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] sm:text-6xl">Train the full week.</h2><p className="mt-4 max-w-lg text-sm text-foreground/70 sm:text-base">Whey + creatine + pre-workout. Your complete stack with 20% savings.</p><Button asChild variant="forgeDark" size="lg" className="mt-6"><a href="#shop">Build your stack <ArrowRight /></a></Button></div><img src={creatineImage} alt="FORGE creatine" width={1024} height={1024} className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block" /></article>
              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-foreground p-7 text-background sm:min-h-[420px] sm:p-10"><div className="min-w-0 flex-1"><span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">Rated 4.9 / 5</span><h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] sm:text-6xl">Made for the next rep.</h2><p className="mt-4 max-w-lg text-sm text-background/70 sm:text-base">Tested formulas. Clean labels. Trusted by 40,000+ Indian athletes.</p><Button asChild variant="forgeAccent" size="lg" className="mt-6"><a href="#reviews">See real reviews <ArrowRight /></a></Button></div><img src={preworkoutImage} alt="FORGE pre-workout" width={1024} height={1024} className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block" /></article>
              <article className="flex min-h-[390px] w-1/4 items-center gap-5 bg-primary p-7 sm:min-h-[420px] sm:p-10"><div className="min-w-0 flex-1"><span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">New Drop</span><h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl">Strong starts with what you fuel.</h2><p className="mt-4 max-w-lg text-sm text-primary-foreground/75 sm:text-base">30g clean protein per scoop. Smooth texture, honest label, serious recovery.</p><Button asChild variant="forgeAccent" size="lg" className="mt-6"><a href="#shop">Shop the drop <ArrowRight /></a></Button></div><img src={wheyImage} alt="FORGE whey protein" width={1024} height={1024} className="hidden aspect-square w-[38%] max-w-sm rounded-2xl object-cover sm:block" /></article>
            </div>
          </div>
          <div className="mt-3 flex justify-center gap-1.5"><span className="h-1.5 w-8 rounded-full bg-primary" /><span className="size-1.5 rounded-full bg-foreground/20" /><span className="size-1.5 rounded-full bg-foreground/20" /></div>
        </div>
      </section>

      <section id="categories" className="scroll-mt-20 py-9">
        <div className="mx-auto max-w-6xl px-4 sm:px-6"><p className="mb-4 text-xs font-bold uppercase text-primary">Choose your goal</p><div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">{["All Products", "Protein", "Creatine", "Pre-Workout", "Vitamins", "Recovery", "Bundles"].map((item, i) => <Button key={item} asChild variant={i === 0 ? "forgeDark" : "outline"} className="shrink-0 rounded-full"><a href="#shop">{item}</a></Button>)}</div></div>
      </section>

      <section id="shop" className="scroll-mt-20 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="text-xs font-bold uppercase text-primary">Performance shelf</p><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Fuel every goal.</h2><p className="mt-2 text-sm text-muted-foreground">Clean formulas. Powerful results. No guesswork.</p></div><Button variant="ghost" className="hidden shrink-0 sm:inline-flex">View all <ArrowRight /></Button></div><div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div></div>
      </section>

      <section id="feed" className="scroll-mt-20 overflow-hidden bg-foreground py-14 text-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="mb-7 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="text-xs font-bold uppercase text-accent">Forge community</p><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">On the feed.</h2><p className="mt-2 text-sm text-background/55">Tag <span className="font-semibold text-accent">@forgenutrition</span> to get featured.</p></div><Button variant="forgeAccent" size="icon" className="shrink-0 sm:hidden" aria-label="Follow on Instagram"><Instagram /></Button><Button variant="forgeAccent" className="hidden shrink-0 sm:inline-flex"><Instagram /> Follow on Instagram</Button></div><div className="overflow-hidden"><div className="marquee-track flex w-max gap-4">{reelLoop.map((reel, index) => <article key={`${reel.user}-${index}`} className="relative w-44 shrink-0 overflow-hidden rounded-2xl bg-primary sm:w-52"><img src={reel.image} alt={`Fitness reel by ${reel.user}`} width={768} height={1152} loading="lazy" className="aspect-[3/4] w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/90 to-transparent p-4 pt-12"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2"><span className="truncate text-xs font-bold">{reel.user}</span><span className="flex shrink-0 items-center gap-1 text-[10px]"><Play className="size-3 fill-current" />{reel.views}</span></div></div></article>)}</div></div></div>
      </section>

      <section id="reviews" className="scroll-mt-20 overflow-hidden py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="mb-7 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4"><div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent font-display text-xl font-extrabold text-accent-foreground">4.9</div><div className="min-w-0"><h2 className="text-2xl font-extrabold sm:text-4xl">Rated by real lifters.</h2><p className="mt-1 text-sm text-muted-foreground">40,000+ verified customer reviews.</p></div></div><div className="overflow-hidden"><div className="marquee-track-slow flex w-max gap-4">{reviewLoop.map((review, index) => <article key={`${review.name}-${index}`} className="w-[82vw] max-w-sm shrink-0 rounded-2xl bg-card p-5 ring-1 ring-foreground/8"><div className="flex gap-0.5 text-accent" aria-label="5 stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-4 fill-current" />)}</div><blockquote className="mt-4 min-h-16 text-sm leading-relaxed text-foreground/80">“{review.quote}”</blockquote><div className="mt-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">{review.initials}</span><div><p className="text-sm font-bold">{review.name}</p><p className="text-xs text-muted-foreground">{review.role}</p></div></div></article>)}</div></div></div>
      </section>

      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6"><div className="grid gap-10 md:grid-cols-[1.3fr_2fr]"><div className="max-w-sm"><Brand inverted /><p className="mt-5 text-sm leading-relaxed text-background/55">Premium sports nutrition, clean formulas and performance you can feel—from first scoop to final rep.</p><Button variant="forgeAccent" className="mt-5">Join the club <ArrowRight /></Button><p className="mt-2 text-xs text-background/45">Get 10% off your first order.</p></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{[{title:"Shop",items:["Protein","Creatine","Pre-Workout","Bundles"]},{title:"Company",items:["Our standards","Lab results","Reviews","Careers"]},{title:"Support",items:["Shipping","Returns","Contact","FAQ"]}].map((group) => <div key={group.title}><h3 className="text-xs font-bold uppercase text-background/40">{group.title}</h3><ul className="mt-4 space-y-2.5 text-sm text-background/70">{group.items.map((item) => <li key={item}><a href="#top" className="hover:text-background">{item}</a></li>)}</ul></div>)}</div></div><div className="mt-12 flex flex-col gap-4 border-t border-background/10 pt-6 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 FORGE Nutrition. All products quality tested.</p><div className="flex gap-5"><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#feed">Instagram</a></div></div></div>
      </footer>
    </main>
  );
}