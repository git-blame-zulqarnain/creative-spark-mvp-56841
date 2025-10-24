import { Link, useLocation } from "react-router-dom";
import { Sparkles, Home, Info, Grid3x3 } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="w-full bg-card border-b-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-foreground">MindSpark</span>
          </Link>
          
          <div className="flex gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 text-xs border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-[1px] active:translate-y-[1px] ${
                isActive("/") ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/categories"
              className={`flex items-center gap-2 px-4 py-2 text-xs border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-[1px] active:translate-y-[1px] ${
                isActive("/categories") ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              <span>Categories</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center gap-2 px-4 py-2 text-xs border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-[1px] active:translate-y-[1px] ${
                isActive("/about") ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
