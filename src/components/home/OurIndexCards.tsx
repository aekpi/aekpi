import { View, Text } from "reshaped";
import { JSX, PropsWithChildren } from "react";

interface Props {
  icon?: JSX.Element;
  iconRight?: boolean;
}

export function OurIndexCard({ icon, children }: PropsWithChildren<Props>) {
  return (
    <View direction="row" align="center" maxWidth={200}>
      <View width={30}>{icon}</View>
      <View grow>
        <Text variant="body-2">{children}</Text>
      </View>
    </View>
  );
}
