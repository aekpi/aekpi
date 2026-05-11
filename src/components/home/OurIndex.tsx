import { Text, Grid } from "reshaped";
import { Section } from "./Section";
import { ID as NEXT_ID } from "./IndexLevels";

export const ID = "index";

export function OurIndex() {
  return (
    <Section id={ID} nextId={NEXT_ID}>
      <Text variant="featured-1">Measure what truly creates value.</Text>

      <Grid
        columns={{ s: 1, l: 3 }}
        gap={4}
        columnGap={2}
        rowGap={6}
        maxWidth={300}
      >
        <Text variant="body-2">
          The AEKPI Index measures how businesses contribute to the
          attractiveness, identity and energy of a place. The score (1–10)
          reflects a concept’s ability to attract visitors, strengthen the
          surrounding ecosystem and elevate the overall perception of an area.
        </Text>
        <Text variant="body-2">
          Our Activation Value model measures the value tenants create through
          visibility, engagement and activity. It quantifies the place-building
          energy they contribute beyond traditional leasing metrics.
        </Text>
        <Text variant="body-2">
          The model compares organic activity with the cost of generating
          similar attention through marketing and activation. The result is
          smarter leasing decisions, stronger tenant mixes and more valuable
          destinations.
        </Text>
      </Grid>
    </Section>
  );
}
