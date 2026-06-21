import { PropsWithChildren } from "react";
import { Container, View } from "reshaped";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <Container justify="center" align="center">
      <View maxWidth="80%" paddingTop={30} paddingBottom={30}>
        {children}
      </View>
    </Container>
  );
}
