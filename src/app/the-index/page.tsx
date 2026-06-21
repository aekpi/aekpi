import { PageContainer } from "@/components/PageContainer";
import { View, Text, Grid } from "reshaped";
import Image from "next/image";

import CitySquare from "./images/citysquare.png";
import VespaClub from "./images/vespaclub.png";
import { WhatIndexLevels } from "./levels";
import { JSX } from "@emotion/react/jsx-runtime";

import BoltIcon from "@mui/icons-material/Bolt";
import TuneIcon from "@mui/icons-material/Tune";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocationCityIcon from "@mui/icons-material/LocationCity";

interface ResultPointInterface {
  icon: JSX.Element;
  text: string;
  paddingTop?: number;
}

function ResultPoint({ icon, text, paddingTop = 2 }: ResultPointInterface) {
  return (
    <View direction="row" gap={4} paddingTop={paddingTop}>
      {icon}
      <Text variant="body-2" weight="bold">
        {text}
      </Text>
    </View>
  );
}

export default function TheIndex() {
  return (
    <PageContainer>
      <View gap={4}>
        <Text variant="featured-1" align="center">
          The Index
        </Text>
        <Text variant="body-1">
          The value of a successful ground floor extends far beyond rental
          income. The operators that contribute most to a property&apos;s
          long-term performance are often those that attract people, reinforce
          the character of a place, and create a vibrant environment that
          encourages ongoing activity.
        </Text>
        <Text variant="body-1">
          Our analytics platform helps property owners identify and evaluate
          these qualities in a structured and measurable way. Drawing on
          extensive experience in leasing, placemaking, retail, and hospitality,
          the platform provides a broader perspective on tenant performance and
          potential than traditional financial metrics alone.
        </Text>
        <Text variant="body-1">
          By combining market signals such as customer sentiment, public
          visibility, audience engagement, brand strength, and concept quality,
          the platform converts fragmented information into clear, actionable
          insights. This enables more informed leasing decisions, stronger
          tenant mixes, and the creation of destinations that generate lasting
          value for both property owners and the communities they serve.
        </Text>
      </View>

      <View align="center" gap={4} paddingTop={20}>
        <Grid columns={{ s: 1, l: 2 }} columnGap={6} rowGap={6} align="center">
          <Image
            src={CitySquare}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="A modern city square"
          />
          <View gap={3} justify="center">
            <Text variant="featured-2">AEKPI Index</Text>
            <Text variant="body-2">
              A score between 1-10 that measures how attractive and influential
              a business is as a place-building operator. The index reflects a
              concept&apos;s ability to attract visitors, strengthen the
              surrounding ecosystem and elevate the overall perception of the
              area. <br />
              The AEKPI Index is designed to help property owners,
              municipalities and leasing teams make smarter and faster decisions
              around tenant mix, place identity and long-term value creation.
            </Text>
            <Text variant="body-2">
              This makes it possible to clearly understand:
              <ul style={{ listStylePosition: "inside" }}>
                <li>what is missing in a shopping center or district</li>
                <li>
                  which concepts can define the identity of a neighborhood
                </li>
                <li>
                  which operators act as “anchors” that drive movement and
                  attention
                </li>
                <li>which tenants strengthen surrounding businesses</li>
                <li>
                  which locations should prioritize activation over maximum
                  short-term rent
                </li>
                <li>
                  where premium-paying tenants can benefit from surrounding
                  energy and traffic
                </li>
              </ul>
            </Text>
          </View>
        </Grid>
      </View>

      <View align="center" gap={4} paddingTop={20}>
        <Grid columns={{ s: 1, l: 2 }} columnGap={6} rowGap={6} align="center">
          <View gap={3} justify="center">
            <Text variant="featured-2">Activation Value</Text>
            <Text variant="body-2">
              An estimate of the economic value a tenant generates through the
              activity, visibility and engagement they create around a place.
            </Text>
            <Text variant="body-2">
              Activation Value measures more than just social media exposure. It
              captures the combined value of:
              <ul style={{ listStylePosition: "inside" }}>
                <li>digital reach and engagement</li>
                <li>customer-generated content</li>
                <li>events and physical activity</li>
                <li>reviews and public reputation</li>
                <li>
                  Which locations should prioritize activation over maximum
                  short-term rent
                </li>
              </ul>
            </Text>
            <Text variant="body-2">
              The model then compares this organic activity with what it would
              cost to create similar attention through purchased activation,
              such as marketing campaigns, events or promotional initiatives
              aimed at generating the same level of visibility and movement in
              the area.
            </Text>
            <Text variant="body-2">
              In other words, activation value quantifies how much
              place-building energy a tenant contributes that the property owner
              would otherwise need to invest in themselves
            </Text>
          </View>
          <Image
            src={VespaClub}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="urban farmers market"
          />
        </Grid>
      </View>

      <View paddingTop={20} gap={4}>
        <Text variant="body-2">
          The platform also simplifies leasing execution by helping teams
          identify the right tenant for the right space from the beginning. By
          analyzing audience fit, behavioral patterns, concept strength,
          engagement levels, activation potential and place compatibility, AEKPI
          allows leasing teams to work more strategically and proactively.
        </Text>
        <Text variant="body-2">
          Instead of broadly marketing vacant spaces and waiting for the right
          tenant to appear, landlords can directly target operators that
          strengthen both the location and the long-term business case.
        </Text>

        <Text variant="body-2">
          This results in:
          <ResultPoint icon={<BoltIcon />} text="Faster leasing decisions" />
          <ResultPoint icon={<TuneIcon />} text="Stronger tenant mix" />
          <ResultPoint
            icon={<PlusOneIcon />}
            text="Increased destination value"
          />
          <ResultPoint
            icon={<ChecklistIcon />}
            text="Better alignment between leasing and asset strategy"
          />
          <ResultPoint
            icon={<TrendingUpIcon />}
            text="Higher long-term rental performance"
          />
          <ResultPoint
            icon={<LocationCityIcon />}
            text="More vibrant and commercially resilient urban environments"
          />
        </Text>
      </View>

      <View paddingTop={15}>
        <Text variant="featured-3" align="center">
          AEKPI bridges the gap between culture and commerce — turning
          place-making into a measurable and scalable business strategy.
        </Text>
      </View>

      <View paddingTop={20} gap={4}>
        <Text variant="featured-2" align="center">
          What the AEKPI Index Levels Mean
        </Text>
        <WhatIndexLevels />
      </View>
    </PageContainer>
  );
}
