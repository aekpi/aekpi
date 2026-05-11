import { IndexLevels } from "@/components/home/IndexLevels";
import { OurIndex } from "@/components/home/OurIndex";
import { Start } from "@/components/home/Start";

const SECTIONS = [
  { id: "start", component: Start },
  { id: "our-index", component: OurIndex },
  { id: "index-levels", component: IndexLevels },
];

export default function Home() {
  return SECTIONS.map(({ id, component: Section }, idx) => (
    <Section
      key={id}
      id={id}
      nextId={SECTIONS[(idx + 1) % SECTIONS.length].id}
      lastItem={idx == SECTIONS.length - 1}
    />
  ));
}
