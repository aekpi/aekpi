import { PageContainer } from "@/components/PageContainer";
import { View, Text, Grid } from "reshaped";
import Image from "next/image";

import CarMeet from "./images/carmeet.png";

export default function About() {
  return (
    <PageContainer>
      <View gap={4}>
        <Text variant="featured-1" align="center">
          About AEKPI
        </Text>
        <Text variant="body-1">
          AEKPI was founded on a simple observation: some of the businesses that
          create the greatest value for a place often create the least
          measurable value in traditional real estate models.
          <br />
          The café that influences where people choose to work. The independent
          retailer that transforms an ordinary street into a destination. The
          local entrepreneur who creates community, identity and movement. The
          operator that attracts visitors, generates visibility and strengthens
          surrounding businesses.
          <br />
          These actors shape neighborhoods, attract talent, increase footfall
          and create experiences people want to be part of. Yet their
          contribution is rarely reflected in the metrics used to guide leasing,
          investment and development decisions. <br />
          This led to a fundamental question:
        </Text>
        <Text
          variant="featured-3"
          align="center"
          attributes={{ style: { padding: 20 } }}
        >
          <i>
            What if property owners, municipalities and tenants could share a
            common economic language for measuring the value of place?
          </i>
        </Text>
      </View>
      <View align="center" gap={4} paddingTop={20}>
        <Grid columns={{ s: 1, l: 2 }} columnGap={6} rowGap={6} align="center">
          <Image
            src={CarMeet}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="A modern city square"
          />
          <View gap={3} justify="center">
            <Text variant="body-2">
              A language capable of quantifying cultural capital, social
              influence, activation value and destination potential alongside
              traditional financial metrics. <br />
              To answer that question, AEKPI brought together expertise from
              urban development, destination building, festivals and events,
              placemaking, marketing, software development, artificial
              intelligence and advanced data analytics. <br />
              United by a shared belief that a critical gap has existed for too
              long, the team set out to build a framework that connects the
              social and cultural forces that shape places with the economic
              realities that finance them. <br />
              Cities are built by people, culture and experiences. Real estate
              is financed through economics. Too often, these worlds operate
              independently. AEKPI was created to bridge that gap. By measuring
              and visualizing the impact that businesses, concepts and operators
              have on places, AEKPI enables municipalities, property owners,
              investors and leasing teams to make more informed decisions about
              how destinations evolve and where value is created.
            </Text>
          </View>
        </Grid>
      </View>
      <View paddingTop={15}>
        <Text variant="body-1">
          The company’s mission is to provide the industry with the tools needed
          to build places with character and long-term relevance. Places where
          local entrepreneurs coexist with global brands. Places where culture
          and commerce reinforce one another. Places where the value of
          community, creativity and identity is understood not only emotionally,
          but economically. By creating transparency around these
          often-overlooked drivers of value, AEKPI helps align the ambitions of
          municipalities, property owners, investors and operators around a
          common objective: creating destinations that people genuinely want to
          visit, work in and belong to. Because the most valuable square meters
          of the future will not be defined solely by what is built on them, but
          by the life they create around them.
        </Text>
      </View>
    </PageContainer>
  );
}
