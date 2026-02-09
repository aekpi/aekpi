import { NavBar } from "@/components/nav/NavBar";
import type { PropsWithChildren } from "react";
import { View } from "reshaped";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <View direction="column" padding={10} gap={10}>
      <NavBar />
      <View>{children}</View>
    </View>
  );
}
