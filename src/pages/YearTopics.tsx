import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { curriculum, findYearById } from "@/data/curriculum";
import { CategorySection } from "@/components/learn/CategorySection";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SEO } from "@/components/SEO";


export default function YearTopics() {
  const { yearId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [, forceUpdate] = useState(0);

  // Listen for progress updates
  useEffect(() => {
    const handler = () => forceUpdate(n => n + 1);
    window.addEventListener('storage', handler);
    window.addEventListener('lesson-complete', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('lesson-complete', handler);
    };
  }, []);
  
  const year = findYearById(yearId || "");
  
  const isYear10 = yearId === "year-10";

  const filteredCategories = useMemo(() => {
    if (!year) return [];
    return year.categories.map(category => ({
      ...category,
      topics: category.topics.filter(topic => {
        const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = levelFilter === "all" ||
          (levelFilter === "core" && topic.level !== "10A") ||
          (levelFilter === "10A" && topic.level === "10A") ||
          !topic.level;
        return matchesSearch && (isYear10 ? matchesLevel : true);
      })
    })).filter(category => category.topics.length > 0);
  }, [year, searchQuery, levelFilter, isYear10]);

  if (!year) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="font-display text-xl font-bold mb-2 text-foreground">Year level not found</h1>
        <p className="text-sm text-muted-foreground mb-6">This year level doesn't exist or has been removed.</p>
        <Link to="/learn" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" />
          Back to Learn
        </Link>
      </div>
    );
  }

  const totalTopics = year.categories.reduce((sum, c) => sum + c.topics.length, 0);

  return (
    <div className="pb-8">
      <SEO
        title={`${year.name} — Topics & Lessons | MathMind`}
        description={`Browse ${totalTopics} maths topics across ${year.categories.length} chapters for ${year.name}. Aligned to the Victorian Curriculum.`}
      />
      {/* Sticky header area */}

      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md -mx-3 px-3 sm:-mx-5 sm:px-5 lg:-mx-8 lg:px-8 pt-3 pb-3 border-b border-border/40 mb-4 sm:mb-6">
        {/* Back + Title row */}
        <div className="flex items-center gap-3 mb-3">
          <Link 
            to="/learn" 
            className="w-9 h-9 rounded-xl bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Back to year selection"
          >
            <ArrowLeft className="w-4.5 h-4.5 text-foreground" />
          </Link>
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <span className="text-2xl sm:text-3xl flex-shrink-0">{year.icon}</span>
            <div className="min-w-0">
              <h1 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground truncate">{year.name}</h1>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{totalTopics} topics · {year.categories.length} chapters</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-xl bg-card border border-border/60 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Year 10 level filter */}
        {isYear10 && (
          <div className="mt-3 -mx-1 px-1 overflow-x-auto scrollbar-hide">
            <ToggleGroup
              type="single"
              value={levelFilter}
              onValueChange={(v) => v && setLevelFilter(v)}
              className="bg-card border border-border/60 rounded-xl p-1 inline-flex w-full sm:w-auto"
            >
              <ToggleGroupItem 
                value="all" 
                className="flex-1 sm:flex-none rounded-lg px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
              >
                All Topics
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="core" 
                className="flex-1 sm:flex-none rounded-lg px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
              >
                Core
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="10A" 
                className="flex-1 sm:flex-none rounded-lg px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:shadow-sm"
              >
                10A Extension
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-5 sm:space-y-8">
        {filteredCategories.map((category, index) => (
          <CategorySection 
            key={category.id} 
            category={category} 
            yearId={year.id}
            chapterIndex={index + 1}
          />
        ))}
      </div>

      {/* Empty / no-results state */}
      {filteredCategories.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="font-display text-base font-semibold text-foreground mb-1">No topics found</h3>
          <p className="text-sm text-muted-foreground text-center max-w-xs">
            No results for "{searchQuery}". Try a different search term.
          </p>
          <button
            onClick={() => { setSearchQuery(""); setLevelFilter("all"); }}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
