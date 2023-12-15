# orc

> a tool for orchestrating many repos 🪄 [orc.ryanatkn.com](https://orc.ryanatkn.com/)

I maintain a lot of git repos between
[Felt](https://github.com/feltjs/felt), [Fuz](https://github.com/fuz-dev/fuz),
[Gro](https://github.com/grogarden/gro), and [others](https://github.com/ryanatkn).
Orc is a tool for helping me orchestrate this complexity.
It's an alternative to the monorepo pattern that more loosely couples repos.
It's not orchestration in the Kubernetes or Pulumi sense - maybe Orc needs a rename.

This repo has demo data -
I'm using Orc in [Spiderspace](https://github.com/spiderspace/spiderspace),
[Fuz](https://github.com/fuz-dev/fuz),
and [Felt's website](https://github.com/feltjs/felt_website).

With Orc you can:

- fetch typesafe metadata about collections of deployments and import it as typesafe JSON
- publish a generated docs website for your collections of deployments
- import its components to view and interact with package collection metadata
- publish metadata about your collections of deployments to the web for other users and tools

planned additions:

- run updating operations and other workflows from the frontend in dev mode
  (ultimately, an `update all` button)

## Usage

- configure [`orc.config.ts`](/orc.config.ts)
- Orc calls the GitHub API using the environment variable `GITHUB_TOKEN_SECRET` for authorization,
  which is a [GitHub token](https://github.com/settings/tokens)
  (with "public access" for public repos, no options selected)
  in either `process.env`, a project-local `.env`, or the parent directory at `../.env`
  (currently optional to read public repos, but it's recommended regardless,
  and you'll need to select options to support private repos)

Getting started as a dev? Start with [Gro](https://github.com/grogarden/gro)
and the [Fuz template](https://github.com/fuz-dev/fuz_template)

TODO

- figure out better automation than manually running `gro deployments`
- show the rate limit info

## License [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

[MIT](LICENSE)
