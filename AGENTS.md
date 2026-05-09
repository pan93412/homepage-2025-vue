## Dependency Update Workflow

This repository contains a `flake.nix`. Prefer running project commands from the
development shell:

```sh
nix develop
```

Use the following workflow when refreshing dependencies:

1. Update the Nix lockfile:

   ```sh
   nix flake update
   ```

2. Update the package manager version managed by Corepack:

   ```sh
   corepack up
   ```

3. Upgrade package dependencies to the latest available versions, including
   major version updates:

   ```sh
   pnpm upgrade --latest
   ```

4. Refresh Nuxt nightly dependencies:

   ```sh
   pnpm dlx nuxt upgrade --channel=nightly
   ```

   In non-interactive environments, prefer the explicit Nuxt 4 nightly channel
   and lockfile dedupe option so the command does not stop on prompts:

   ```sh
   pnpm dlx nuxt upgrade --channel=v4-nightly --dedupe
   ```

5. Refresh GitHub Actions dependencies:

   ```sh
   pnpm dlx actions-up --include-branches -y
   ```

6. Dedupe the pnpm dependency graph:

   ```sh
   pnpm dedupe
   ```

After the update flow, review the changed lockfiles and run the normal project
checks before committing:

```sh
pnpm lint
pnpm format:check
pnpm build
```
