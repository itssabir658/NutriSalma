// Shared copy & data for the NutriSalma landing page, ported from the
// Claude Design prototype (NutriSalma.dc.html).

export const WHATSAPP_NUMBER = "966500000000";

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: "/#dietitian", label: "Know Your Dietitian" },
  { href: "/#how", label: "How It Works" },
  { href: "/#plans", label: "Plans" },
  { href: "/#about", label: "About" },
  { href: "/#resources", label: "Resources" },
];

export const HERO_NOTIFICATIONS = [
  { icon: "✓", text: "Breakfast completed" },
  { icon: "💧", text: "You're 72% toward today's hydration goal" },
  { icon: "🎯", text: "You're on track with your weekly goal" },
  { icon: "🍎", text: "A healthier dinner alternative is available" },
  { icon: "📋", text: "Your weekly nutrition report is ready" },
];

export const HERO_MEALS = [
  {
    slot: "hero-meal-1",
    slotName: "Breakfast",
    name: "Greek yogurt bowl",
    kcal: "420",
    image: "/images/meals/greek-yogurt-bowl.webp",
  },
  {
    slot: "hero-meal-2",
    slotName: "Lunch",
    name: "Grilled chicken & quinoa",
    kcal: "560",
    image: "/images/meals/chicken-quinoa-bowl.webp",
  },
  {
    slot: "hero-meal-3",
    slotName: "Dinner",
    name: "Salmon + vegetables",
    kcal: "480",
    image: "/images/meals/salmon-vegetables.webp",
  },
];

export const HERO_KCAL_TARGET = 1420;
export const HERO_KCAL_GOAL = 1900;

export const PLAN_MEALS = [
  {
    id: "b",
    slot: "Breakfast",
    name: "Avocado toast + eggs",
    kcal: 380,
    protein: 28,
    image: "/images/meals/avocado-toast-eggs.webp",
  },
  {
    id: "l",
    slot: "Lunch",
    name: "Chicken quinoa bowl",
    kcal: 520,
    protein: 42,
    image: "/images/meals/chicken-quinoa-bowl-2.webp",
  },
  {
    id: "d",
    slot: "Dinner",
    name: "Salmon + roasted vegetables",
    kcal: 490,
    protein: 39,
    image: "/images/meals/salmon-roasted-vegetables.webp",
  },
];

export const ALTERNATIVES = [
  {
    name: "Chicken Quinoa Bowl",
    kcal: 480,
    protein: 44,
    carbs: 38,
    fat: 16,
    note: "Highest protein per calorie",
    image: "/images/meals/chicken-quinoa-bowl-2.webp",
  },
  {
    name: "Tofu Power Bowl",
    kcal: 450,
    protein: 32,
    carbs: 44,
    fat: 14,
    note: "Plant-based, lighter",
    image: "/images/meals/tofu-power-bowl.webp",
  },
  {
    name: "Mediterranean Chicken Plate",
    kcal: 470,
    protein: 41,
    carbs: 30,
    fat: 19,
    note: "Closest to your original",
    image: "/images/meals/mediterranean-chicken-plate.webp",
  },
];

export const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Tell Us About You",
    body: "Complete a simple personalized assessment covering your goals, lifestyle, food preferences, allergies, activity, and routine.",
    icon: "assessment",
  },
  {
    num: "02",
    title: "Get Your Plan",
    body: "Receive a nutrition plan designed around your personal needs.",
    icon: "plan",
  },
  {
    num: "03",
    title: "Track Your Progress",
    body: "Track meals, hydration, habits, weight, goals, and progress from one simple dashboard.",
    icon: "progress",
  },
  {
    num: "04",
    title: "Adapt & Improve",
    body: "Your recommendations evolve based on your progress, preferences, and feedback.",
    icon: "adapt",
  },
];

export const WORKFLOW_STEPS = [
  "Your Information",
  "Personalized Analysis",
  "Nutrition Plan",
  "Dietitian Review",
  "Daily Tracking",
  "Progress Analysis",
  "Plan Optimization",
].map((label, i, arr) => ({
  label,
  num: String(i + 1).padStart(2, "0"),
  hasNext: i < arr.length - 1,
}));

export const AUTOMATIONS = [
  {
    icon: "🗓",
    title: "Smart Meal Planning",
    body: "Automatically organize daily and weekly meals.",
    channels: false,
  },
  {
    icon: "🛒",
    title: "Grocery Lists",
    body: "Generate grocery lists based on the selected meal plan.",
    channels: false,
  },
  {
    icon: "⏰",
    title: "Smart Reminders",
    body: "Automatically remind users about meals, hydration, tracking, and appointments.",
    channels: false,
  },
  {
    icon: "📊",
    title: "Progress Reports",
    body: "Automatically generate weekly progress summaries.",
    channels: false,
  },
  {
    icon: "🔄",
    title: "Adaptive Recommendations",
    body: "Recommendations change according to progress and user feedback.",
    channels: false,
  },
  {
    icon: "📨",
    title: "Multi-Channel Notifications",
    body: "Reach people where they already are.",
    channels: true,
  },
];

export const PLANS = [
  {
    name: "Online Consultation",
    price: "SAR 100",
    period: "/ 20 mins",
    badge: null,
    cta: "Start Essential",
    dark: false,
    blurb:
      "A focused 20-minute session to understand your goals, assess your nutrition, and create your next steps",
    features: [
      "Personalized nutrition guidance",
      "Goal & diet assessment",
      "Answers to your nutrition questions",
      "Tailored recommendations for you",
    ],
  },
  {
    name: "Complete",
    price: "SAR 299",
    period: "/ month",
    badge: "Most chosen",
    cta: "Start Complete",
    dark: true,
    blurb: "Everything in Essential plus a dietitian who reviews and adapts your plan.",
    features: [
      "Assigned registered dietitian",
      "Plan reviewed & approved",
      "Unlimited messaging",
      "One consultation per month",
      "Weekly progress report",
    ],
  },
  {
    name: "Pregnant Mothers Consulatation",
    price: "SAR 549",
    period: "/ 3 Months",
    badge: null,
    cta: "Talk to us",
    dark: false,
    blurb: "Personalized nutrition support for every stage of pregnancy.",
    features: [
      "Weekly consultations",
      "Pregnancy nutrition assessment",
      "Personalized meal recommendations",
      "Priority response",
      "Weight & wellness monitoring",
    ],
  },
];
