import { View, Text, Grid } from "reshaped";
import { PropsWithChildren } from "react";

function Level({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <View maxWidth={145} gap={1}>
      <Text variant="featured-3">{title}</Text>
      <Text variant="body-3">{children}</Text>
    </View>
  );
}

export function WhatIndexLevels() {
  return (
    <Grid
      columns={{ s: 1, l: 2 }}
      gap={4}
      columnGap={6}
      rowGap={8}
      autoFlow="row"
    >
      <Level title="10 - Global Destination">
        A once-in-a-generation concept. A business that can operate anywhere,
        even in isolation, and still attract visitors from across the world. It
        defines the place rather than being defined by it. A true landmark that
        reshapes entire districts.
      </Level>

      <Level title="9 - Iconic Magnet">
        A powerful, status-elevating concept capable of thriving in an
        unconventional or off location setting. It draws people on its own and
        significantly strengthens the brand and perception of the surrounding
        area.
      </Level>

      <Level title="8 - Recognized Anchor">
        A well established and attractive operator that consistently drives
        traffic. Other businesses actively seek to locate nearby. Creates
        measurable placemaking effects and positive rental impact.
      </Level>

      <Level title="7 - Strong Traffic Driver">
        A popular and relevant concept that attracts steady footfall and
        contributes clearly to area activation. Strengthens the ecosystem and
        supports neighboring tenants.
      </Level>

      <Level title="6 - Solid Contributor">
        A stable and appreciated business that performs well within the right
        context. Contributes positively to activity levels but depends partly on
        surrounding flow.
      </Level>

      <Level title="5 - Functional Presence">
        A reliable tenant that fulfills its role but generates limited external
        pull. Primarily serves existing traffic rather than creating new demand.
      </Level>

      <Level title="4 - Context Dependent">
        Works mainly because of the location rather than enhancing it. Limited
        brand strength and modest activation effect.
      </Level>

      <Level title="3 - Low Activation Impact">
        Generates minimal engagement or external traffic. Has little measurable
        influence on surrounding businesses or area attractiveness.
      </Level>

      <Level title="2 - Passive Occupier">
        Occupies space without contributing to placemaking, traffic generation,
        or brand value for the property.
      </Level>

      <Level title="1 - Value Neutral / Negative Impact">
        A concept that neither attracts visitors nor supports surrounding
        businesses — and may in some cases weaken the overall perception of the
        location.
      </Level>
    </Grid>
  );
}
