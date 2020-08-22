<p align="center">
    <img alt="Gatsby Theme Empty" src="https://www.erichowey.dev/images/empty-logo.png" width="400" />
</p>

<h3 align="center">A template for a <i>lightning fast</i> setup of a Gatsby themes monorepo</h3>

<hr/>

I took everything I have learned from managing a complex Gatsby themes monorepo and distilled it down to a lightning fast template you can use to setup your own Gatsby themes monorepo with Yarn workspaces, Lerna, Cypress, GitHub actions, and Depedabot **all preconfigured**.

## Prerequisites

The following tools should already be installed in your local dev environment for this to work. Odds are you already have these tools installed with the possible exception of Yarn. You can follow the [Yarn install instructions](https://classic.yarnpkg.com/en/docs/install/) if you need to before proceeding.

- Gatsby CLI
- NPM (with account and logged in)
- Yarn

## Lightning start

This might look like a lot of steps - but I just broke it down into detailed steps. The two key parts are creating a new repo using this template and then running a find and replace in your code editor of choice replacing `empty` with your theme name of choice.

1. Click `Use This Template` and create a new repo for your project from this template.

1. `git clone` your project and open it in your code editor of choice.

1. Find and replace `empty` with your theme's new name. For example if your theme name was going to be `gatsby-theme-kickoff` you would find and replace `empty` -> `kickoff`.

1. Update the folder names for the theme and starter. For example; from `gatsby-starter-empty` and `gatsby-theme-empty` to `gatsby-starter-kickoff` and `gatsby-theme-kickoff`.

1. Run `yarn install` to setup yarn workspaces

1. Run `lerna init` to initialize Lerna

1. Run `yarn develop:kickoff` to ensure it is building

1. Create something amazing.

1. Commit any changes to Git.

1. Run `lerna publish` and share it with the world on NPM.

1. Log in to Netlify, point it at your Git repo and launch it! It will automatically build and deploy the starter.

## Commands

The syntax for yarn workspaces is long and the following scripts are setup to make it easier to run commands in your starter.

**yarn develop:theme-name**: Runs `gatsby develop` on your starter.

**yarn build:theme-name**: Runs `gatsby build` on your starter.

**yarn serve:theme-name**: Runs `gatsby serve` on your starter.

**yarn clean:theme-name**: Runs `gatsby clean` on your starter.

**yarn test:theme-name**: Uses start-server-and-run to start and Gatsby develop server and then open Cypress.io for running end-to-end tests.

## What's inside

- An ultra-minimalist [Gatsby](https://www.gatsbyjs.com/) theme and starter preconfigured to work in unison using [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).
- [Cypress.io](https://www.cypress.io/) preconfigured with a basic smoke test and an accessibility audit test. Try running `yarn test:theme-name` and see what happens.
- [Lerna](https://github.com/lerna/lerna) preconfigured to manage publishing packages to NPM.
- GitHub action preconfigured for CI to run a smoke test on every pull request and push to the main branch.
- [Dependabot](https://docs.github.com/en/github/administering-a-repository/keeping-your-dependencies-updated-automatically) to manage any outdated dependencies.
- [Netlify](https://www.netlify.com/) config to automatically build and deploy the included starter

## What's next

One other integration you may want to consider, depending on how you will be using Gatsby themes, is adding a GitHub action to publish your starters to their own repo. Check out [actions-push-subdirectory](https://github.com/johno/actions-push-subdirectories) for instructions on how to do this. This is necessary for your starters to work properly with the `gatsby new` command as they need to be in an indepedent repo.

If you want to see a more advanced version of this monorepo setup you can checkout [Gatsby Theme Catalyst](https://github.com/ehowey/gatsby-theme-catalyst) which uses these same tools across a repository with over 10 interlinked themes.
