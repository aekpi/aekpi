import Image from "next/image";
import { Button, View } from "reshaped";

export function NavBar() {
  return (
    <View direction="row" width="100%" justify="space-between">
      <Image
        src="/logo_512.svg"
        height={512}
        width={512}
        alt="aekpi logo"
        style={{ height: 50, width: 50 }}
      />
      <Button color="primary" variant="outline">
        Sign out
      </Button>
    </View>
  );
}
