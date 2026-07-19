import Link from "next/link";
import { Grid2X2 } from "lucide-react";

export function Logo({ light = false }) {
  return (
    <Link
      href="/"
      aria-label="TileMuse homepage"
      className={`display-font inline-flex items-center gap-3 text-2xl font-bold ${
        light ? "text-white" : "text-[#18231d]"
      }`}
    >
      <span
        className={`grid size-11 place-items-center rounded-2xl ${
          light
            ? "bg-white text-[#28533f]"
            : "bg-[#28533f] text-white"
        }`}
      >
        <Grid2X2 className="size-5" />
      </span>

      <span>TileMuse</span>
    </Link>
  );
}