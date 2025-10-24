import type { Category } from "@/components/CategoryTabs";

export const ideas: Record<Category, string[]> = {
  art: [
    "Create a series of abstract paintings inspired by emotions you felt this week",
    "Design a mural that represents your city's hidden stories",
    "Sculpt everyday objects from recycled materials",
    "Paint a landscape using only three colors",
    "Create digital art that blends nature with technology",
    "Draw a comic about your morning routine with a surreal twist",
    "Make a photo collage that tells a story without words",
    "Design a poster series about climate change using bold typography",
    "Create portraits using only geometric shapes",
    "Illustrate your favorite song as a visual narrative",
    "Build a miniature world inside a glass jar",
    "Design an album cover for a genre you've never listened to",
  ],
  startup: [
    "An app that helps remote teams build stronger connections through virtual coffee breaks",
    "A platform for local artisans to sell custom-made products directly to consumers",
    "A service that turns voice memos into organized to-do lists using AI",
    "An eco-friendly subscription box for sustainable living products",
    "A marketplace for renting professional equipment by the hour",
    "An AI-powered personal stylist that works with your existing wardrobe",
    "A mental health app that connects users with peer support groups",
    "A platform that gamifies learning new languages through real conversations",
    "A tool that helps small businesses automate their social media presence",
    "A service matching freelancers with short-term gig opportunities",
    "An app for organizing and sharing family recipes across generations",
    "A platform connecting travelers with local guides for authentic experiences",
  ],
  design: [
    "Redesign a common household item with sustainable materials",
    "Create a minimalist logo for a fictional coffee shop",
    "Design a mobile app interface for meditation and mindfulness",
    "Develop a color palette inspired by your favorite season",
    "Design packaging that tells a brand's sustainability story",
    "Create a website layout for a local bookstore with vintage vibes",
    "Design a typeface that expresses movement and energy",
    "Build a design system for a fitness app",
    "Create an infographic explaining a complex topic simply",
    "Design a restaurant menu that doubles as an art piece",
    "Develop a brand identity for an eco-friendly fashion line",
    "Design a dashboard for tracking personal carbon footprint",
  ],
};

export const getRandomIdea = (category: Category): string => {
  const categoryIdeas = ideas[category];
  const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
  return categoryIdeas[randomIndex];
};
