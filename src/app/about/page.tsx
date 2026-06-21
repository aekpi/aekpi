import { PageContainer } from "@/components/PageContainer";
import { View, Text } from "reshaped";

export default function About() {
  return (
    <PageContainer>
      <View gap={4}>
        <Text variant="featured-1" align="center">
          Why I Started AEKPI
        </Text>
        <Text variant="body-1">
          AEKPI started with an observation I kept coming back to throughout my
          career. Some of the businesses creating the greatest value for a place
          are often the ones creating the least measurable value in traditional
          real estate models. The café that makes people choose a particular
          office. The niche retailer that turns an ordinary street into a
          destination. The local entrepreneur who creates community, identity
          and movement. The operator that attracts visitors, generates
          visibility and strengthens every surrounding business.
          <br />
          I saw these businesses changing neighborhoods, attracting talent,
          increasing footfall and creating stories people wanted to be part of.
          Yet when leasing decisions were made, these contributions were rarely
          visible in the spreadsheets.
          <br />
          That led me to a simple question:
        </Text>
        <Text
          variant="featured-3"
          align="center"
          attributes={{ style: { padding: 20 } }}
        >
          <i>
            What if we could create a shared economic language between property
            owners, municipalities and tenants? A framework where cultural
            value, social influence and place-making impact could be measured,
            understood and incorporated into commercial decision-making.
          </i>
        </Text>
        <Text variant="body-1">
          To bring the idea to life, I brought together a team with backgrounds
          in urban development, festivals and events, destination building,
          activation, marketing, software development, artificial intelligence
          and data analysis. What united us was a belief that a gap has existed
          for far too long. Cities are built by people, culture and experiences.
          Real estate is financed through economics. <br />
          Too often, those worlds operate separately. We believe they should
          work together. AEKPI was created to quantify the impact that
          businesses, concepts and operators have on places. <br />
          By measuring cultural capital, social influence, activation value and
          destination potential, we help municipalities, property owners and
          leasing teams make better decisions about how places evolve.
        </Text>
        <Text variant="body-1">
          <b>My vision is simple.</b> <br />I want to give the industry the
          tools to build places with personality. Places where local
          entrepreneurs coexist with global brands. Places where culture and
          commerce strengthen each other.
        </Text>
        <Text variant="body-1">
          Places where the value of community, creativity and identity is
          understood not only emotionally, but economically. By creating
          transparency around these values, AEKPI helps align the ambitions of
          municipalities, property owners, investors and operators around a
          shared goal: building places people genuinely want to be part of.
          Because I believe the most valuable square meters of the future will
          not be defined by what is built on them — but by the life they create
          around them.
        </Text>
      </View>
    </PageContainer>
  );
}
