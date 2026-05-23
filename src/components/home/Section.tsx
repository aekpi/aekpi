import { PropsWithChildren } from "react";
import { View, ViewProps } from "reshaped";

import { NavButton } from "./nav/NavButton";
import styles from "./Section.module.css";

const NAV_HEIGHT = 20;

export interface SectionProps {
  id: string;
  nextId: string;
  lastItem?: boolean;
  backgroundColor?: ViewProps["backgroundColor"];
}

export function Section(props: PropsWithChildren<SectionProps>) {
  const { id, nextId, lastItem, children, backgroundColor } = props;

  return (
    <View
      direction="column"
      justify="center"
      align="center"
      attributes={{ id }}
      backgroundColor={backgroundColor}
      paddingBottom={NAV_HEIGHT}
      className={styles.section}
    >
      <View
        direction="column"
        align="center"
        justify="center"
        gap={10}
        padding={4}
        maxWidth="90%"
      >
        {children}
      </View>
      <View
        justify="center"
        align="center"
        attributes={{
          style: {
            position: "absolute",
            bottom: NAV_HEIGHT,
            width: "100%",
          },
        }}
      >
        <NavButton nextId={nextId} lastItem={lastItem} />
      </View>
    </View>
  );
}
