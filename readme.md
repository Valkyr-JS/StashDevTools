# Stash Dev Tools

Plugin development tools for Stash.

## Setup

1. Clone this repository and install dependencies (`npm install`).
2. Follow the instructions for Pre-requisites and Environment in the [Stash development docs](https://github.com/stashapp/stash/blob/f79677ba96b745ab50a0176e946647dea6951949/docs/DEVELOPMENT.md).
   - Stash Dev Tools is based on the Windows install. Other OS may require the `package.json` scripts to be amended.
3. Run the `STASH--pre-ui` script.
4. Run the `STASH--generate` script.

## Tools

### Stash Types

This generates a Typescript definition file from the Stash graphql schema files.

1. Run the `STASH--update` script to pull the latest version of Stash.
2. Run the `stash-types--codegen` script to generate the types file.
3. A `stashGQL.d.ts` file will be output to the `./stash-types/dist` folder. This can be copied over to your project for use.
