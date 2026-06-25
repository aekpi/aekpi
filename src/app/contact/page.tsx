import { PageContainer } from "@/components/PageContainer";
import { View, Text, Grid } from "reshaped";
import Image from "next/image";
import { Form } from "@/components/Form";

import Img from "./images/cykelkafe.png";

export default function Contact() {
  return (
    <PageContainer>
      <View gap={4}>
        <Text variant="featured-1" align="center">
          Start the Conversation
        </Text>
      </View>

      <View align="center" gap={4} paddingTop={20}>
        <Grid columns={{ s: 1, l: 2 }} columnGap={6} rowGap={6} align="center">
          <Image
            src={Img}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="A modern city square"
          />
          <View direction="column" gap={4}>
            <Form />
            <Text variant="body-3" color="disabled">
              <b>Address</b>
              <br />
              AEKPI Langen
              <br />
              Ljusslingan 32
              <br />
              12064 Stockholm
            </Text>
            <Text variant="body-3" color="disabled">
              <b>Contact</b>
              <br />
              hello@aekpi.se
            </Text>
          </View>
        </Grid>
      </View>
    </PageContainer>
  );
}
