import styles from "./page.module.css";

import { Intro } from "@/components/home/Intro";
import { OurIndex } from "@/components/home/OurIndex";
import { Start } from "@/components/home/Start";
import { Vision } from "@/components/home/Vision";

const SECTIONS = [
  { id: "start", component: Start },
  { id: "intro", component: Intro },
  { id: "our-index", component: OurIndex },
  { id: "vision", component: Vision },
];

export default function Home() {
  return (
    <div className={styles.container} dir="ltr">
      {SECTIONS.map(({ id, component: Section }, idx) => {
        return (
          <Section
            key={id}
            id={id}
            nextId={SECTIONS[(idx + 1) % SECTIONS.length].id}
            lastItem={idx == SECTIONS.length - 1}
          />
        );
      })}
    </div>
  );
}
