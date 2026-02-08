import { Card, Grid } from "reshaped";

export default function Overview() {
  return (
    <Grid rows={2} columns={3} columnGap={2} rowGap={2}>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
    </Grid>
  );
}
