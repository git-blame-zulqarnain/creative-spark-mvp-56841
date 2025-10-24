import { Navigation } from "@/components/Navigation";
import { Palette, Rocket, Pen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <header className="text-center space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Categories
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Choose your creative path and unlock endless possibilities
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] p-6 space-y-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-category-art to-category-art/70 flex items-center justify-center border-2 border-border">
              <Palette className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Art</h2>
            <p className="text-xs text-foreground leading-relaxed">
              Discover unique artistic concepts, from painting and sculpture to digital art and mixed media. 
              Perfect for artists seeking fresh perspectives and unconventional approaches.
            </p>
            <ul className="text-xs text-foreground space-y-1">
              <li>• Visual art concepts</li>
              <li>• Creative mediums</li>
              <li>• Artistic techniques</li>
              <li>• Style explorations</li>
            </ul>
          </div>

          <div className="bg-card border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] p-6 space-y-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-category-startup to-category-startup/70 flex items-center justify-center border-2 border-border">
              <Rocket className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Startup</h2>
            <p className="text-xs text-foreground leading-relaxed">
              Generate innovative business ideas and entrepreneurial opportunities. From tech startups 
              to service businesses, find the spark that could become your next venture.
            </p>
            <ul className="text-xs text-foreground space-y-1">
              <li>• Business concepts</li>
              <li>• Market opportunities</li>
              <li>• Product ideas</li>
              <li>• Service innovations</li>
            </ul>
          </div>

          <div className="bg-card border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] p-6 space-y-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-category-design to-category-design/70 flex items-center justify-center border-2 border-border">
              <Pen className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Design</h2>
            <p className="text-xs text-foreground leading-relaxed">
              Explore design challenges across UI/UX, graphic design, product design, and more. 
              Get prompts that push your creative boundaries and refine your design thinking.
            </p>
            <ul className="text-xs text-foreground space-y-1">
              <li>• UI/UX challenges</li>
              <li>• Visual design</li>
              <li>• Product concepts</li>
              <li>• Design systems</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link to="/">
            <Button 
              size="lg" 
              className="text-xs px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-[2px] active:translate-y-[2px]"
            >
              Start Generating Ideas
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Categories;
