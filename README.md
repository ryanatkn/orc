# orc

> a tool for orchestrating many repos 🪄 [orc.ryanatkn.com](https://orc.ryanatkn.com/)

I maintain a lot of git repos between
[Felt](https://github.com/feltjs/felt), [Fuz](https://github.com/fuz-dev/fuz),
[Gro](https://github.com/grogarden/gro), and [others](https://github.com/ryanatkn).
Orc is a tool for helping me orchestrate this complexity.
It's an alternative to the monorepo pattern that more loosely couples repos.

This repo has demo data,
I'm using Orc in [Spiderspace](https://github.com/spiderspace/spiderspace)
and [fuz_repos](https://github.com/fuz-dev/fuz_repos).

With Orc you can:

- publish a generated docs website for your collections of packages
- publish metadata about your collections of packages to the web for other users and tools

planned additions:

- run updating operations and other workflows from the frontend in dev mode
  (ultimately, an `update all` button)

## Usage

- configure [`orc.config.ts`](/orc.config.ts)
- see [`.env.example`](/.env.example) and add your own `.env` with `GITHUB_TOKEN_SECRET`,
  whose value is a [GitHub token](https://github.com/settings/tokens)
  (currently optional because it's only used to read public repos)

Getting started as a dev? Start with [Gro](https://github.com/grogarden/gro)
and the [Fuz template](https://github.com/fuz-dev/fuz_template)

TODO

- figure out better automation than manually running `gro packages`
- show the rate limit info
- automate `.env` (gro sync?)

## License [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

[MIT](LICENSE)
