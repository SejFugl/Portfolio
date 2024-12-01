import { motion } from "framer-motion";

const uiuxResources = [
  "Sketching User Experiences af Bill Buxton - Kapitel 9, 13, 14 og 28",
  "Udemy kursus i UI/UX - Section 1: Introduction",
  "Udemy kursus i UI/UX - Section 2: Sketching",
  "Udemy kursus i UI/UX - Section 3: Inspiration",
  "Udemy kursus i UI/UX - Section 4: Figma Basics",
  "The User Experience Team of One af Leah Buley - Kapitel 7",
  "https://careerfoundry.com/en/blog/ux-design/what-are-user-flows/",
  "Udemy kursus i UI/UX - Section 5: User Flows",
  "Information Architecture for the Web and Beyond af Louis Rosenfeld - Kapitel 5, 6 og 13",
  "Udemy kursus i UI/UX - Section 6: Sitemaps",
  "Udemy kursus i UI/UX - Section 7: Wireframes",
  "Prototyping for Designers: Developing the Best Digital and Physical Products af Kathryn McElroy - Kapitel 1, 4 og 5",
  "Udemy kursus i UI/UX - Section 8: Prototyping",
  "https://www.interaction-design.org/literature/topics/ui-design-patterns",
  "Udemy kursus i UI/UX - Section 16: Design Patterns",
  "Designing Brand Identity af Alina Wheeler af Alina Wheeler - Brand Basics, Brand Identity Ideals, Brand Identity Elements og Phase 3 - Designing Identity",
  "Microinteractions: Designing with Details af Dan Saffer - Kapitel 1-5",
  "Udemy kursus i UI/UX - Section 19: Motion in UX Design",
  "https://medium.com/@uviniranasinghe21/microinteractions-the-secret-sauce-of-exceptional-ui-ux-design-1a42b10edf8a",
  "WCAG 2.1 AA Guide",
  "Don't Make Me Think af Steve Krug - Kapitel 10 + 12",
];

const reactResources = [
  "Scrimba - React basics: Static pages",
  "Scrimba - React basics: Data-Driven React",
  "Scrimba - React basics: React State",
  "Scrimba - React basics: Side Effects",
  "Scrimba - Advanced React: Reusability",
  "Scrimba - Advanced React: React Router 6",
  "Scrimba - Responsive Design: Build a Responsive Site",
  "Scrimba - Responsive Design: Build a Product Splash Page",
  "Scrimba - Responsive Design: Build a Responsive Layout with CSS Grid",
  "Page Transitions In React - React Router V6 and Framer Motion Tutorial: https://youtu.be/FdrEjwymzdY?si=nq2TAbWgxxasVX_U",
  "Smooth Loading Transitions with Framer Motion | AnimateSharedLayout: https://youtu.be/BtsVMvds3P0?si=ksI-_F2ny4ysuAx2",
  "React Full Course for free ⚛️ (2024): https://youtu.be/CgkZ7MvWUAA?si=N7SiU52rUJUlv1dD",
  "Figma to React JS: https://youtu.be/Hc5HQZxI0bQ?si=6DwdD00b7PydzUyy",
  "React Tutorial for Beginners: https://youtu.be/SqcY0GlETPk?si=-RcWKuVsCJBy0TN5",
];

const bulletPointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function ResourcesPage() {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Ressourcer</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">UI/UX Ressourcer</h2>
          <ul className="list-disc pl-5 space-y-2">
            {uiuxResources.map((resource, index) => (
              <motion.li
                key={index}
                variants={bulletPointVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.25 }}
              >
                {resource}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">React Ressourcer</h2>
          <ul className="list-disc pl-5 space-y-2">
            {reactResources.map((resource, index) => (
              <motion.li
                key={index}
                variants={bulletPointVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.25 }}
              >
                {resource}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
