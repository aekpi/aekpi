import { Grid, Text, View } from "reshaped";
import { SectionProps, Section } from "./Section";
import Image from "next/image";

import Img from "./images/nicheshop.png";

export function Vision(sectionProps: SectionProps) {
  return (
    <Section {...sectionProps}>
      <Text variant="featured-1">Our Vision</Text>
      <Grid columns={{ s: 1, l: 2 }} columnGap={6} rowGap={6} align="center">
        <Image
          src={Img}
          alt="Concept image for a popular business"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <View gap={3} justify="center">
          <Text variant="body-2">
            At AEKPI, we love the colorful café owner who knows every regular by
            name, the ultra-niche store hidden on the corner that somehow
            becomes the soul of a neighborhood, the weekend flea market that
            turns a quiet street into a destination, the local culture that
            gives a place authenticity - and the international influences that
            make it exciting.
          </Text>
          <Text variant="body-2">
            Because the future&apos;s most attractive cities will not be built
            through scale alone - they will be built through identity.
          </Text>
          <Text variant="body-2">
            Our vision is to help municipalities, developers and property owners
            create global destinations within the scale of a single block.
            Places where people want to work, live, meet and return to - not
            because they have to, but because they feel something there.
          </Text>
          <Text variant="body-2">
            For too long, cultural and social value have existed outside
            traditional real estate logic. The most important qualities of a
            place - energy, relevance, uniqueness, belonging - have been
            difficult to quantify, despite often being the very things that
            drive attraction, movement and long-term value creation - AEKPI
            exists to change that.
          </Text>
          <Text variant="body-2">
            By creating a framework where cultural and social capital can be
            measured, valued and aligned with financial strategy, we help bridge
            the gap between municipalities, landlords, global brands, local
            entrepreneurs and independent operators. We create a common language
            between long-term city building and commercial decision making.
          </Text>
          <Text variant="body-2">
            Our ambition is not to standardize cities - It is the opposite.
          </Text>
          <Text variant="body-2">
            We want to give the industry the tools to protect uniqueness, enable
            brave concepts, support local culture and create urban environments
            where small, medium and large actors can grow together. Because
            truly great places are never built by one type of player alone.
            <br />
            They happen when ambition, personality and long-term thinking align.
          </Text>
          <Text variant="body-2">That is the future we believe in.</Text>
        </View>
      </Grid>
    </Section>
  );
}
