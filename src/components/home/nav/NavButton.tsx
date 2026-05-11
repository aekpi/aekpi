import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "reshaped";

interface Props {
  nextId: string;
  lastItem?: boolean;
}

export function NavButton({ nextId, lastItem = false }: Props) {
  return (
    <Button
      color="media"
      variant="ghost"
      icon={!lastItem ? KeyboardArrowDownIcon : KeyboardArrowUpIcon}
      href={`#${nextId}`}
      size="xlarge"
    />
  );
}
