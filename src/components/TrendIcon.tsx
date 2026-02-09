"use client";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Icon } from "reshaped";

interface Props {
  up: boolean;
}

export function TrendIcon({ up }: Props) {
  return up == true ? <Icon svg={ArrowOutwardIcon} /> : <ArrowOutwardIcon />;
}
