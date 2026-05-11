import { View, Card, Text } from "reshaped";
import Image from "next/image";
import { PropsWithChildren } from "react";

import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";

const IMAGE_VARIANT_MAP = {
  a: Image1,
  b: Image2,
  c: Image3,
};

type ImageVariant = keyof typeof IMAGE_VARIANT_MAP;

interface Props {
  imageVariant: ImageVariant;
}

export function OurIndexCard({
  imageVariant,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Card padding={0}>
      <View aspectRatio={16 / 9} align="center" minHeight={50}>
        <Image
          src={IMAGE_VARIANT_MAP[imageVariant]}
          alt="isometric city"
          objectFit="cover"
          fill
        />
      </View>
      <View padding={4}>
        <Text variant="body-2">{children}</Text>
      </View>
    </Card>
  );
}
