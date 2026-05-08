import { PropsWithChildren } from "react";
import { View, ViewProps } from "reshaped";

import { NavButton } from "./NavButton";

interface Props {
  id?: string;
  nextId?: string;
  backgroundColor?: ViewProps["backgroundColor"];
}

export function Section(props: PropsWithChildren<Props>) {
  const { id, nextId, children, backgroundColor } = props;

  return (
    <View
      direction="column"
      justify="center"
      attributes={{
        id,
        style: {
          position: "relative",
          height: "100%",
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
        <NavButton nextId={nextId} />
      </View>
    </View>
  );
}
