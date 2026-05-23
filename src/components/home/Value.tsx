import { View, Text, Grid, Card } from "reshaped";
import { Section, SectionProps } from "./Section";
import { PropsWithChildren } from "react";

import styles from "./Value.module.css";

function ValueLevel({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <View maxWidth={100} gap={1} className={styles.valueLevel}>
      <Text variant="featured-2">{title}</Text>
      <Text variant="body-2">{children}</Text>
    </View>
  );
}

export function Value(sectionProps: SectionProps) {
  return (
    <Section {...sectionProps}>
      <Text variant="featured-1">Three Cafés - Example of value.</Text>
      <Text variant="body-2">
        In the same area, there are three cafés with similar premises size and
        comparable rent levels: Årstabo, Il Caffè, and Panini. Without a
        structured system, they may appear equivalent at first glance. With
        AEKPI, however, their actual contribution to the area becomes
        measurable, comparable, and possible to evaluate over time.
      </Text>
      <Card>
        <Grid
          columns={{ s: 1, l: 3 }}
          gap={4}
          columnGap={6}
          rowGap={8}
          autoFlow="row"
        >
          <ValueLevel title="Årstabo - The social hub">
            <p>
              Årstabo is a local meeting place that is active during both
              daytime and evening hours. The café regularly organizes events and
              encourages strong local engagement, where guests actively share
              and tag content from the venue. Indicative AEKPI data (per month):
            </p>
            <ul>
              <li>Followers (Instagram): 4,000</li>
              <li>Public activities/events: 5–7</li>
              <li>Guest-generated posts/shares: 80–120</li>
              <li>Own posts with location connection: 12–15</li>
              <li>Index: 7</li>
            </ul>
            <p>
              Value for the area: It positions the location as a destination,
              increases demand, and strengthens the area’s external
              attractiveness. Årstabo ranks highly in AEKPI as a stable value
              creator for everyday life and place quality.
            </p>
          </ValueLevel>
          <ValueLevel title="Il Caffé - The strong brand">
            <p>
              Il Caffè är ett välkänt koncept med stor följarskara och stark
              identitet. Även om den lokala aktivitetsnivån är lägre än hos
              Årstabo, genererar caféet betydande synlighet genom räckvidd och
              varumärkeseffekt långt utanför området.
            </p>
            <ul>
              <li>Followers (Instagram): +30,000</li>
              <li>Public activities/events: 5–7</li>
              <li>Guest-generated posts/shares: 80–120</li>
              <li>Own posts with location connection: 12–15</li>
              <li>Index: 6</li>
            </ul>
            <p>
              Value for the area: Skapar kontinuerligt flöde och social
              närvaro.l Caffè rankas som en index 6 “solid contributor” i AEKPI
              för varumärkes- och efterfrågedrivande värde.
            </p>
          </ValueLevel>

          <ValueLevel title="Panini - The functional agent">
            <p>
              Panini fyller en tydlig servicefunktion i området, men har
              begränsad aktivitet utanför kärnaffären. Verksamheten har låga
              nivåer av synlighet, få publika aktiviteter och ett begränsat
              engagemang kopplat till platsen.
            </p>
            <ul>
              <li>Followers (Instagram): 1,800</li>
              <li>Public activities/events: 0–1</li>
              <li>Guest-generated posts/shares: 5–10</li>
              <li>Own posts with location connection: 2–4</li>
              <li>Index: 5</li>
            </ul>
            <p>
              Value for the area: Bidrar med grundläggande service men i
              begränsad utsträckning till platsutveckling, flöde eller
              identitet. Panini rankas lägre i AEKPI:s värdeanalys.
            </p>
          </ValueLevel>
        </Grid>
      </Card>
    </Section>
  );
}
