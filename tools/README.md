# Showcase

## Tools

A directory dedicated for tools that run on nodejs, to maintain the mono-repo.

### Line of Code

The `loc.ts` is responsible to insert the current stats of the mono-repo into the main README.md file.

Any file or directory that is in the `.gitignore` file will be automatically ignored from `loc`.

Since `pnpm-lock.yml` is used to pin down our dependencies, it is part of the repository, hence the `loc.ts` excludes it explicitly.
