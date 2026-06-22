import { View, Text, Grid, Button } from "reshaped";
import { Section, SectionProps } from "./Section";
import Image from "next/image";
import Link from "next/link";

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
            AEKPI is a data intelligence platform that helps property owners,
            investors, and municipalities identify the tenants, brands, and
            operators that create long-term value beyond traditional real estate
            metrics.
          </Text>

          <Text variant="body-3">
            Built on decades of experience in leasing, placemaking, retail,
            hospitality, and analytics, AEKPI helps stakeholders create stronger
            destinations, more resilient portfolios, and places people genuinely
            want to be part of.
          </Text>

          <Text variant="body-2" weight="bold">
            Curious to learn more?
          </Text>
          <View maxWidth={200}>
            <Link href="/contact">
              <Button color="primary">Contact Us</Button>
            </Link>
          </View>
        </View>
      </Grid>
    </Section>
  );
}
