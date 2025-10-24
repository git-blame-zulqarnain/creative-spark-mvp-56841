import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CategoryTabs, type Category } from "@/components/CategoryTabs";
import { IdeaCard } from "@/components/IdeaCard";
import { Navigation } from "@/components/Navigation";
import { getRandomIdea } from "@/data/ideas";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [category, setCategory] = useState<Category>("art");
  const [currentIdea, setCurrentIdea] = useState<string>("Click the button below to spark your creativity!");
  const [hasGenerated, setHasGenerated] = useState(false);
  
  const generateIdea = () => {
    const newIdea = getRandomIdea(category);
    setCurrentIdea(newIdea);
    setHasGenerated(true);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-3xl mx-auto space-y-10">
        <header className="text-center space-y-6 animate-slide-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-primary via-accent to-primary leading-tight font-extrabold text-slate-900 text-center">
              MindSpark
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <p className="text-xs leading-relaxed max-w-2xl mx-auto px-4 md:text-sm font-normal text-slate-200">
            Break through creative blocks with instant inspiration
          </p>
        </header>

        <CategoryTabs activeCategory={category} onCategoryChange={setCategory} />

        <IdeaCard idea={currentIdea} category={category} />

        <div className="flex justify-center animate-slide-up px-4">
          <Button onClick={generateIdea} size="lg" className="text-xs px-10 py-8 bg-gradient-to-r from-primary to-accent hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-bold border-4 border-black/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-[2px] active:translate-y-[2px] text-neutral-950 bg-neutral-800 hover:bg-neutral-700 rounded-xl">
            <Sparkles className="w-4 h-4 mr-3" />
            {hasGenerated ? "Generate New Idea" : "Spark an Idea"}
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index;