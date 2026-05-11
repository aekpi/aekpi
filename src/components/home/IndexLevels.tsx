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
        <View maxWidth={120}>
          <Text variant="featured-1">10 – Global Destination</Text>
          <Text variant="body-2">
            A once-in-a-generation concept. A business that can operate anywhere
            — even in isolation — and still attract visitors from across the
            world. It defines the place rather than being defined by it. A true
            landmark that reshapes entire districts.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">9 – Iconic Magnet</Text>
          <Text variant="body-2">
            A once-in-a-generation concept. A business that can operate anywhere
            — even in isolation — and still attract visitors from across the
            world. It defines the place rather than being defined by it. A true
            landmark that reshapes entire districts.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">8 – Recognized Anchor</Text>
          <Text variant="body-2">
            A well-established and attractive operator that consistently drives
            traffic. Other businesses actively seek to locate nearby. Creates
            measurable placemaking effects and positive rental impact.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">7 – Strong Traffic Driver</Text>
          <Text variant="body-2">
            A popular and relevant concept that attracts steady footfall and
            contributes clearly to area activation. Strengthens the ecosystem
            and supports neighboring tenants.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">6 – Solid Contributor</Text>
          <Text variant="body-2">
            A stable and appreciated business that performs well within the
            right context. Contributes positively to activity levels but depends
            partly on surrounding flow.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">5 – Functional Presence</Text>
          <Text variant="body-2">
            A reliable tenant that fulfills its role but generates limited
            external pull. Primarily serves existing traffic rather than
            creating new demand.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">4 – Context Dependent</Text>
          <Text variant="body-2">
            Works mainly because of the location rather than enhancing it.
            Limited brand strength and modest activation effect.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">3 – Low Activation Impact</Text>
          <Text variant="body-2">
            Generates minimal engagement or external traffic. Has little
            measurable influence on surrounding businesses or area
            attractiveness.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">2 – Passive Occupier</Text>
          <Text variant="body-2">
            Occupies space without contributing to placemaking, traffic
            generation, or brand value for the property.
          </Text>
        </View>
        <View maxWidth={120}>
          <Text variant="featured-1">1 – Value Neutral / Negative Impact</Text>
          <Text variant="body-2">
            A concept that neither attracts visitors nor supports surrounding
            businesses — and may in some cases weaken the overall perception of
            the location.
          </Text>
        </View>
      </Grid>
    </Section>
  );
}
