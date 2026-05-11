import { View, Text, Grid } from "reshaped";
import { Section, SectionProps } from "./Section";
import Image from "next/image";

export function Start(sectionProps: SectionProps) {
  return (
    <Section {...sectionProps}>
      <Grid
        columns={{ s: 1, l: 2 }}
        gap={4}
        columnGap={2}
        rowGap={6}
        maxWidth={300}
      >
        <View align="center" justify="center">
          <Image
            src="logo_512.svg"
            height={512}
            width={512}
            alt="aekpi logo"
            style={{ height: "20vh", maxWidth: "50vw" }}
          />
        </View>

        <View gap={4}>
          <Text variant="featured-1">
            Data Driven Decision Support for Ground Floor Strategy
          </Text>
          <Text variant="body-3">
            Our analytics platform combines
            <b>
              {" "}
              more than 50 years of experience in leasing, placemaking, retail,
              and HoReCa
            </b>{" "}
            to help property owners identify tenants that create long-term value
            beyond rent. but by attracting people, strengthening place identity,
            and driving activity.
          </Text>
          <Text variant="body-3">
            By analysing <b> more than 40 data points,</b> including social
            media, reviews, press visibility, engagement metrics, and
            engagement, the platform delivers clear insights for smarter leasing
            and development decisions.
          </Text>
        </View>
      </Grid>
    </Section>
  );
}
