import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "reshaped";
import { START_ID } from "./Start";

interface Props {
  nextId?: string;
}

export function NavButton({ nextId }: Props) {
  return (
    <Button
      color="media"
      variant="ghost"
      icon={nextId ? KeyboardArrowDownIcon : KeyboardArrowUpIcon}
      href={nextId ? `#${nextId}` : `#${START_ID}`}
      size="xlarge"
    />
  );
}
