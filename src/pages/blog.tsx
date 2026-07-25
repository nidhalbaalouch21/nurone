import { useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
}

const ALL_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Saying No",
    excerpt: "A framework for resource-constrained startups to focus on what truly moves the needle.",
    category: "Startup",
    date: "April 8, 2026",
    readTime: "5 min read",
    gradient: "from-purple-600 to-indigo-800",
  },
  {
    id: "2",
    title: "Understanding Your Metrics",
    excerpt: "The metrics that matter most at early stage, and how to measure them accurately.",
    category: "Technology",
    date: "April 6, 2026",
    readTime: "8 min read",
    gradient: "from-indigo-600 to-purple-800",
  },
  {
    id: "3",
    title: "Building the Right Things",
    excerpt: "Aligning product roadmap with customer discovery and high-integrity feedback loops.",
    category: "Product",
    date: "March 29, 2026",
    readTime: "6 min read",
    gradient: "from-violet-600 to-purple-900",
  },
  {
    id: "4",
    title: "Revenue Models That Work",
    excerpt: "Subscription, usage-based, and hybrid revenue models designed for sustainable scale.",
    category: "Tactics",
    date: "March 22, 2026",
    readTime: "10 min read",
    gradient: "from-fuchsia-600 to-indigo-900",
  },
  {
    id: "5",
    title: "Infrastructure at Scale",
    excerpt: "Architecture decisions that prevent early stage systems from collapsing under load.",
    category: "Technology",
    date: "March 15, 2026",
    readTime: "12 min read",
    gradient: "from-purple-700 to-violet-950",
  },
  {
    id: "6",
    title: "Look for Signals",
    excerpt: "Identifying early indicators of product-market fit before committing to heavy scaling.",
    category: "Growth",
    date: "March 8, 2026",
    readTime: "7 min read",
    gradient: "from-indigo-700 to-fuchsia-950",
  },
  {
    id: "7",
    title: "Remote Team Collaboration",
    excerpt: "Tools and rituals that keep distributed engineering teams perfectly aligned and fast.",
    category: "Technology",
    date: "March 1, 2026",
    readTime: "6 min read",
    gradient: "from-violet-700 to-purple-800",
  },
  {
    id: "8",
    title: "Saying Yes to Simplicity",
    excerpt: "Why simple technical architectures outperform complex ones 9 times out of 10.",
    category: "Technology",
    date: "February 20, 2026",
    readTime: "9 min read",
    gradient: "from-purple-800 to-indigo-950",
  },
];

export function BlogPage({ onRequestAccess }: { onRequestAccess?: () => void }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Startup", "Product", "Tactics", "Growth"];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full relative min-h-screen text-white overflow-hidden pb-16">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-20 pb-12 mb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2563EB_100%)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight font-nevera text-white mb-6 leading-tight">
              Our Blog &{" "}
              <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
                Insights
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-libra">
              <span className="block font-bold text-white mb-2">
                NURONE is an AI-augmented operating team of elite engineers, product architects and growth hackers.
              </span>
              We write about systems for turning ideas, broken MVPs, and existing businesses into scalable products, automated systems, and revenue growth.
            </p>

            {/* Inline newsletter subscribe input */}
            <div className="max-w-md mx-auto mb-12">
              {subscribed ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-2.5 text-xs font-bold text-white">
                  <Check size={14} className="text-primary" />
                  Subscribed successfully. Welcome!
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="relative flex items-center border border-white/10 bg-[#0f0f11d0] rounded-full p-1 pl-4 pr-1 focus-within:border-primary/60 transition-all duration-300"
                >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Subscribe to our newsletter..."
                  className="w-full bg-transparent border-none outline-none text-xs text-white placeholder:text-white/30 h-9"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight size={14} className="text-white" />
                </button>
              </form>
            )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Grid & Filtering */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/5 pb-6 mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight font-nevera">
                Latest Content
              </h2>
            </div>
            
            {/* Search & Category Filter */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-60">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0f0f1180] border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-xs outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-primary text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid of cards */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No articles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx % 2 === 0 ? 0 : 0.15}>
                <div className="group relative bg-[#0f0f1140] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]">
                  {/* Image cover area with Step Forward text */}
                  <div className={`aspect-video w-full bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[#000]/10 mix-blend-overlay" />
                    <span className="text-2xl font-bold tracking-widest font-nevera text-white/80 select-none group-hover:scale-105 transition-transform duration-500">
                      Step Forward
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-blue-500/30 bg-blue-950/20 text-blue-400">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-nevera text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 line-clamp-2 mb-6 font-libra flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-[11px] text-gray-500">
                      <span>{post.date}</span>
                      <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold text-gray-400">
                        Read post <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Pagination */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-1.5 pt-4 text-xs font-semibold text-gray-400">
            <button className="h-8 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors flex items-center gap-1 disabled:opacity-40 cursor-pointer" disabled>
              <ChevronLeft size={14} /> Prev
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center cursor-pointer">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center cursor-pointer">2</button>
            <span className="px-1">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center cursor-pointer">10</button>
            <button className="h-8 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Mid CTA Section matching screenshot style */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 mb-12">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090b14] p-10 sm:p-14 text-left shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-normal font-nevera text-white mb-2 leading-tight">
                Bring the ambition.
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-medium">
                We'll build the system behind it.
              </p>
            </div>
            <button
              onClick={onRequestAccess}
              className="relative z-10 px-8 py-3.5 text-xs font-bold tracking-wider text-white border border-blue-500/50 bg-blue-950/40 rounded-full hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 cursor-pointer uppercase shadow-[0_0_15px_rgba(59,130,246,0.3)] whitespace-nowrap self-start md:self-auto"
            >
              Request Access
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
