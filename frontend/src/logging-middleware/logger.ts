import { sendLog } from "./api";
import { Stack, Level, Package } from "./types";

export const Log = async (
  stack: Stack,
  level: Level,
  pkg: Package,
  message: string
): Promise<void> => {
  await sendLog({
    stack,
    level,
    package: pkg,
    message,
  });
};
