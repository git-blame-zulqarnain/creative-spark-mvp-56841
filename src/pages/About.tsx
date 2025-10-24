import { Navigation } from "@/components/Navigation";
import { Sparkles, Lightbulb, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <header className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              About MindSpark
            </h1>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Your creative companion for breaking through blocks
          </p>
        </header>

        <div className="space-y-6">
          <section className="bg-card border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">The Problem</h2>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              Creative block is a universal challenge. Whether you're an artist staring at a blank canvas, 
              an entrepreneur searching for the next big idea, or a designer facing an empty screen, 
              sometimes you just need that initial spark to get going.
            </p>
          </section>

          <section className="bg-card border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">The Solution</h2>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              MindSpark generates random creative ideas with just one click. No complexity, no barriers—just 
              instant inspiration when you need it most. Our curated collection of prompts spans art, startups, 
              and design, ensuring there's always something to ignite your creativity.
            </p>
          </section>

          <section className="bg-card border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">How It Works</h2>
            </div>
            <ol className="space-y-3 text-sm text-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Choose your category: Art, Startup, or Design</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Click the "Spark an Idea" button</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Get instant inspiration and let your creativity flow</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Generate as many ideas as you need—no limits!</span>
              </li>
            </ol>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
