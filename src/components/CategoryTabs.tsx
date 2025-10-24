import { Button } from "@/components/ui/button";

export type Category = "art" | "startup" | "design";

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: "art", label: "Art" },
  { value: "startup", label: "Startup" },
  { value: "design", label: "Design" },
];

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex gap-3 p-3 bg-card rounded-none shadow-card animate-slide-up border-4 border-black/20 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] mx-4">
      {categories.map((category) => (
        <Button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          variant={activeCategory === category.value ? "default" : "ghost"}
          className={`
            flex-1 rounded-none font-bold transition-all duration-300 text-xs py-5
            border-2 border-black/20
            ${
              activeCategory === category.value
                ? category.value === "art"
                  ? "bg-gradient-art text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
                  : category.value === "startup"
                  ? "bg-gradient-startup text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-design text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
                : "hover:bg-secondary hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
            }
          `}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};
