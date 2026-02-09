import Image from "next/image";
import { Button, View } from "reshaped";

export function NavBar() {
  return (
    <View direction="row" justify="space-between" align="center" gap={5}>
      <Image
        src="/logo_512.svg"
        height={512}
        width={512}
        alt="aekpi logo"
        style={{ height: 50, width: "auto" }}
      />
      <Button color="primary" variant="outline" href="/">
        Sign out
      </Button>
    </View>
  );
}
