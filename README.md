# orc

> a tool for orchestrating many repos 🪄 [orc.ryanatkn.com](https://orc.ryanatkn.com/)

I maintain a lot of git repos between
[Felt](https://github.com/feltjs/felt), [Fuz](https://github.com/fuz-dev/fuz),
[Gro](https://github.com/grogarden/gro), and [others](https://github.com/ryanatkn).
Orc is a tool to help me orchestrate this complexity.

The goal is to make a generic tool that works for your projects too,
but for now I'm hardcoding all values in
[`$lib/orc.config.ts`](src/lib/orc.config.ts).
If you want to try it yourself, you can fork the repo and change the config manually,
and eventually I'll stabilize the APIs and publish a reusable library.

TODO

- figure out better automation than manually running `gro packages`

## License [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

[MIT](LICENSE)
