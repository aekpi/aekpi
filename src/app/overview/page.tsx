import { MinimalAreaChart } from "@/components/charts/MinimalAreaChart";
import { TrendIcon } from "@/components/TrendIcon";
import { Card, Grid, Progress, Table, Text } from "reshaped";

const PREMISES = Array.from(Array(10).keys()).map((key) => {
  const points = Math.floor(Math.random() * 10000);
  return {
    id: key + 1,
    project: key > 5 ? "Globen" : "Slakthusområdet",
    name: `Hyresgäst ${key}`,
    address: `Gatuvägen ${key + 10}`,
    points: points,
    limit: Math.ceil(points / 1000) * 1000,
    rent: 20000,
    trend: true,
  };
});

export default function Overview() {
  return (
    <Grid columns={{ s: 1, l: 3 }} columnGap={4} rowGap={4}>
      <Card>
        <Text variant="caption-1">Points</Text>
        <Text variant="featured-1">50%</Text>
        <Progress value={50} attributes={{ style: { marginTop: 10 } }} />
      </Card>
      <Card>
        <Text variant="caption-1">Engagement</Text>
        <Text variant="featured-1">13.37k reached</Text>
        <MinimalAreaChart data={[0.2, 0.5, 0.4, 0.8]} />
      </Card>
      <Card>
        <Text variant="caption-1">Active Tenants</Text>
        <Text variant="featured-1">5</Text>
        <MinimalAreaChart data={[120, 110, 125, 140]} />
      </Card>

      <Grid.Item colSpan={{ s: 1, l: 3 }}>
        <Card>
          <Table>
            <Table.Row>
              <Table.Heading>Project</Table.Heading>
              <Table.Heading>Address</Table.Heading>
              <Table.Heading>Tenant</Table.Heading>
              <Table.Heading>Points / Maximum</Table.Heading>
              <Table.Heading>% of rent</Table.Heading>
              <Table.Heading>Trend</Table.Heading>
            </Table.Row>
            {PREMISES.map(
              ({ id, project, address, name, points, limit, rent, trend }) => (
                <Table.Row key={id}>
                  <Table.Cell>{project}</Table.Cell>
                  <Table.Cell>{address}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>
                    {points} / {limit}
                  </Table.Cell>
                  <Table.Cell>
                    {Math.round(((points * 1.2) / rent) * 100)} %
                  </Table.Cell>
                  <Table.Cell>
                    <TrendIcon up={trend} />
                  </Table.Cell>
                </Table.Row>
              ),
            )}
          </Table>
        </Card>
      </Grid.Item>
    </Grid>
  );
}
