import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../STASH/graphql/schema",
  generates: {
    "./dist/stashGQL.d.ts": {
      plugins: ["typescript"],
      config: { constEnums: true, noExport: true },
    },
  },
};

export default config;
