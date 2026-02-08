import { NavBar } from "@/components/nav/NavBar";
import type { PropsWithChildren } from "react";
import { View } from "reshaped";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <View direction="column" padding={5} gap={5}>
      <NavBar />
      <View>{children}</View>
    </View>
  );
}
