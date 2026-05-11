import { Text, Grid } from "reshaped";
import { SectionProps, Section } from "./Section";
import { OurIndexCard } from "./OurIndexCards/OurIndexCards";

export function OurIndex(sectionProps: SectionProps) {
  return (
    <Section {...sectionProps}>
      <Text variant="featured-1">Measure what truly creates value.</Text>
      <Grid
        columns={{ s: 1, l: 3 }}
        gap={4}
        columnGap={6}
        rowGap={6}
        maxWidth={300}
      >
        <OurIndexCard imageVariant="a">
          The AEKPI Index measures how businesses contribute to the
          attractiveness, identity and energy of a place. The score (1–10)
          reflects a concept’s ability to attract visitors, strengthen the
          surrounding ecosystem and elevate the overall perception of an area.
        </OurIndexCard>

        <OurIndexCard imageVariant="b">
          Our Activation Value model measures the value tenants create through
          visibility, engagement and activity. It quantifies the place-building
          energy they contribute beyond traditional leasing metrics.
        </OurIndexCard>
        <OurIndexCard imageVariant="c">
          The model compares organic activity with the cost of generating
          similar attention through marketing and activation. The result is
          smarter leasing decisions, stronger tenant mixes and more valuable
          destinations.
        </OurIndexCard>
      </Grid>
    </Section>
  );
}
