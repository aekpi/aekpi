import { View, Text, Grid, Card } from "reshaped";
import { Section } from "./Section";

export const ID = "indexlevels";

export function IndexLevels() {
  return (
    <Section id={ID}>
      <Text variant="featured-1">What the AEKPI Index levels mean.</Text>

      <Grid
        columns={{ s: 1, l: 2 }}
        gap={4}
        columnGap={2}
        rowGap={6}
        maxWidth={300}
      >
        <View>
          <Text variant="featured-1">10 – Global Destination</Text>
          <Text variant="body-2">
            A once-in-a-generation concept. A business that can operate anywhere
            — even in isolation — and still attract visitors from across the
            world. It defines the place rather than being defined by it. A true
            landmark that reshapes entire districts.
          </Text>
        </View>
        <View>
          <Text variant="featured-1">9 – Iconic Magnet</Text>
          <Text variant="body-2">
            A once-in-a-generation concept. A business that can operate anywhere
            — even in isolation — and still attract visitors from across the
            world. It defines the place rather than being defined by it. A true
            landmark that reshapes entire districts.
          </Text>
        </View>
      </Grid>
    </Section>
  );
}
