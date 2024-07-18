// import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";

// const config: Pick<Config, "prefix" | "presets" | "content"> = {
//   content: ["./src/**/*.tsx"],
//   prefix: "ui-",
//   presets: [sharedConfig],
// };

// export default config;
import sharedConfig from "@repo/tailwind";

const config = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
