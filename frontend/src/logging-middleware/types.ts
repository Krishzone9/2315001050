export type Stack = "frontend";

export type Level =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

export type Package =
  | "api"
  | "component"
  | "hook"
  | "page"
  | "state"
  | "style"
  | "auth"
  | "config"
  | "middleware"
  | "utils";

export interface LogPayload {
  stack: Stack;
  level: Level;
  package: Package;
  message: string;
}
