import { Sparkles } from "lucide-react";
import type { Category } from "./CategoryTabs";
interface IdeaCardProps {
  idea: string;
  category: Category;
}
export const IdeaCard = ({
  idea,
  category
}: IdeaCardProps) => {
  const gradientClass = category === "art" ? "from-category-art/20 to-category-art/5" : category === "startup" ? "from-category-startup/20 to-category-startup/5" : "from-category-design/20 to-category-design/5";
  const iconColor = category === "art" ? "text-category-art" : category === "startup" ? "text-category-startup" : "text-category-design";
  return <div className={`
        relative overflow-hidden rounded-none p-8 md:p-10
        bg-gradient-to-br ${gradientClass}
        backdrop-blur-sm
        shadow-card
        border-4 border-black/20
        animate-fade-scale
        shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]
        mx-4
      `}>
      <div className="absolute top-6 right-6">
        <Sparkles className={`w-6 h-6 ${iconColor} opacity-50`} />
      </div>
      
      <div className="relative z-10 min-h-[200px] flex items-center justify-center">
        <p className="text-sm md:text-base font-bold leading-relaxed text-center max-w-2xl lg:text-base text-purple-900">
          {idea}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
    </div>;
};