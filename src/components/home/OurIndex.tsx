import { Text } from "reshaped";
import { SectionProps, Section } from "./Section";
import { OurIndexCard } from "./OurIndexCards";

import SensorsIcon from "@mui/icons-material/Sensors";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExtensionIcon from "@mui/icons-material/Extension";
import ThreePIcon from "@mui/icons-material/ThreeP";

const iconProps = {
  sx: {
    fontSize: 80,
  },
};

export function OurIndex(sectionProps: SectionProps) {
  return (
    <Section {...sectionProps}>
      <Text variant="featured-1">We Measure What Truly Creates Value</Text>
      <OurIndexCard icon={<SensorsIcon {...iconProps} />}>
        Input signals are the data sources the analysis is based on. We use a
        range of data from social media, ratings, reviews, related accounts,
        physical traffic indicators, traditional media and cultural presence.
      </OurIndexCard>

      <OurIndexCard icon={<AutoGraphIcon {...iconProps} />}>
        Depending on the quality of the data we generate a Signal Strength. This
        graph indicates where data is harvested from and the quantity from that
        area. The Signal Strength is unique for each business and is connected
        to their online, cultural and medial presence.
      </OurIndexCard>

      <OurIndexCard icon={<AttachMoneyIcon {...iconProps} />}>
        Activation value is the value the business creates for other brands,
        places and real estate companies. The activation value is delivered as
        per month and per year.
      </OurIndexCard>

      <OurIndexCard icon={<ExtensionIcon {...iconProps} />}>
        The index is the puzzle piece that clearly puts a concept or business in
        the context of the area. This gives placemakers and developers a
        powerful tool to design the area.
      </OurIndexCard>

      <OurIndexCard icon={<ThreePIcon {...iconProps} />}>
        Data is not everything, our analysis always comes with an expert
        commentary to provide some background to the data and helps explain the
        soft values the business contributes and how it fits to a strategy and
        place identity.
      </OurIndexCard>
    </Section>
  );
}
