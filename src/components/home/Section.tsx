import { PropsWithChildren } from "react";
import { View, ViewProps } from "reshaped";

interface Props {
  backgroundColor?: ViewProps["backgroundColor"];
}

export function Section(props: PropsWithChildren<Props>) {
  return (
    <View
      direction="column"
      justify="center"
      attributes={{ style: { height: "100%" } }}
      backgroundColor={props.backgroundColor}
    >
      <View
        direction="column"
        align="center"
        justify="center"
        gap={10}
        padding={4}
      >
        {props.children}
      </View>
    </View>
  );
}
