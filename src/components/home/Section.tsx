import { PropsWithChildren } from "react";
import { View, ViewProps } from "reshaped";

import { NavButton } from "./nav/NavButton";

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
      attributes={{
        id,
        style: {
          position: "relative",
          minHeight: "100%",
        },
      }}
      backgroundColor={backgroundColor}
    >
      <View
        direction="column"
        align="center"
        justify="center"
        gap={10}
        padding={4}
      >
        {children}
      </View>
      <View
        justify="center"
        align="center"
        attributes={{
          style: {
            position: "absolute",
            bottom: 20,
            width: "100%",
          },
        }}
      >
        <NavButton nextId={nextId} lastItem={lastItem} />
      </View>
    </View>
  );
}
