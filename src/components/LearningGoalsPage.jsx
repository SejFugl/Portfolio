import { motion } from "framer-motion";

const bulletPointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Section = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ul className="list-disc pl-5 space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={bulletPointVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.25 }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function LearningGoalsPage() {
  const reactGoals = {
    viden: [
      "Viden om praksis og centralt anvendt teori inden for udvikling af moderne, interaktive webapplikationer ved hjælp af React.",
      "Viden om komponentbaseret udvikling og genanvendelighed i React.",
      "Forståelse for grundlæggende koncepter inden for state management, herunder brugen af forskellige typer af hooks som useState eller useEffect.",
      "Viden om økosystemet omkring React, herunder vigtige værktøjer som React Router, Redux og Next.js.",
    ],
    faerdigheder: [
      "Anvende React til at udvikle dynamiske og responsive webapplikationer.",
      "Strukturere og organisere koden i en React-applikation ved hjælp af komponenter, props og state management.",
      "Integrere tredjepartsbiblioteker og API'er i en React-applikation.",
      "Debugge og optimere React-applikationer for ydeevne og brugeroplevelse.",
      "Anvende værktøjer som Vite til at opsætte og vedligeholde et professionelt udviklingsmiljø for React-projekter.",
    ],
    kompetencer: [
      "Deltage i valg af relevante teknologier og biblioteker i forbindelse med udvikling af webapplikationer med React.",
      "I en struktureret sammenhæng tilegne sig ny viden, færdigheder og kompetencer inden for React og tilhørende teknologier for at følge med i den hastigt udviklende webudviklingsindustri.",
      "Arbejde effektivt i teams, hvor React er den valgte teknologi, og samarbejde med back-end udviklere, designere og andre interessenter om at skabe komplette webapplikationer.",
      "Kritisk evaluere og forbedre eksisterende React-kodebaser med henblik på at øge genanvendelighed, modularitet og skalerbarhed.",
    ],
  };

  const uiuxGoals = {
    viden: [
      "Viden om praksis og centralt anvendt teori inden for brugercentreret design og anvendelsen af UX-principper.",
      "Viden om de psykologiske og kulturelle faktorer, der påvirker brugeroplevelser og interaktion med digitale grænseflader.",
      "Forståelse for principperne bag visuel hierarki, typografi, farveteori og layout i UI-design.",
      "Viden om designprocesser som sketching, wireframing og prototyping.",
    ],
    faerdigheder: [
      "Anvende centrale redskaber og metoder til at udvikle brugervenlige grænseflader, herunder designsoftware som Figma, Adobe XD eller Sketch.",
      "Udføre eksperimenter og iterere på resultaterne for at optimere brugeroplevelsen i digitale produkter.",
      "Designe og implementere interaktive prototyper, der kan testes og valideres med eksperimentering.",
      "Vurdere og anvende aktuelle UI/UX trends og best practices i design af digitale grænseflader.",
      "Anvende responsivt design for at sikre, at brugeroplevelsen er konsistent på tværs af forskellige enheder og skærmstørrelser.",
    ],
    kompetencer: [
      "Deltage aktivt i tværfaglige teams og samarbejde med udviklere, grafiske designere og andre interessenter om at skabe intuitive og effektive brugergrænseflader.",
      "Kritisk evaluere og forbedre eksisterende UI/UX-designs baseret på feedbacksessioner og eksperimenter.",
      "I en struktureret sammenhæng tilegne sig ny viden, færdigheder og kompetencer inden for UI/UX for at kunne tilpasse sig den hurtigt udviklende teknologiske og designmæssige verden.",
      "Bidrage til at sikre, at designet af digitale produkter er intuitivt og engagerende, hvilket skaber en positiv og sammenhængende brugeroplevelse, der imødekommer forskellige brugeres behov og præferencer.",
    ],
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Læringsmål</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">React (12 ECTS)</h2>
          <Section title="Viden" items={reactGoals.viden} />
          <Section title="Færdigheder" items={reactGoals.faerdigheder} />
          <Section title="Kompetencer" items={reactGoals.kompetencer} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">UI/UX (18 ECTS)</h2>
          <Section title="Viden" items={uiuxGoals.viden} />
          <Section title="Færdigheder" items={uiuxGoals.faerdigheder} />
          <Section title="Kompetencer" items={uiuxGoals.kompetencer} />
        </div>
      </div>
    </div>
  );
}
