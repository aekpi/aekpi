import { Grid, Text, View } from "reshaped";
import { SectionProps, Section } from "./Section";
import Image from "next/image";

import Img from "./images/roucharloutclub.png";

export function Intro(sectionProps: SectionProps) {
  return (
    <Section {...sectionProps}>
      <Grid columns={{ s: 1, l: 2 }} columnGap={6} rowGap={6}>
        <View gap={3} justify="center">
          <Text variant="body-2">
            We deliver data-driven analyses that enable placemakers and property
            owners to make informed, strategic decisions about their ground
            floor mix and leasing direction, for both existing and prospective
            tenants. By combining social media performance, engagement metrics,
            activation value and expertise in our proprietary AEKPI Index, we
            assess and compare how different operators contribute to
            placemaking, foot traffic, brand positioning and long-term value
            creation, beyond traditional rent per square meter.
          </Text>
          <Text variant="body-2">
            Our analytics platform provides a structured evaluation framework to
            benchmark current tenants, assess new leasing candidates, and model
            the potential impact of different tenant scenarios before decisions
            are made. It transforms complex engagement and performance data into
            clear, decision-ready insights.
          </Text>
        </View>
        <Image
          src={Img}
          alt="Concept image for a popular business"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Section>
  );
}
