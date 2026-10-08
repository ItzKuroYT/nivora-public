# Nivora website

Official download website and usage wiki for **Nivora Browser**, built by gamers, for gamers. Brought to you by IconRealms.

This public repository contains **website code, branding, Nivora screenshots, and the download catalog only**. Browser application source belongs in the private [`ItzKuroYT/Nivora`](https://github.com/ItzKuroYT/Nivora) repository. Nivora and this website are proprietary, not open source. See LICENSE.

## Preview and validate

Use Node 22 or newer. Run `npm ci`, `npm test`, and `npm run build`. Run `npm run dev` for the preview at http://127.0.0.1:4173. `dist/` is the deployable website. There is no backend, analytics, account server, browser source, or bundled installer in the website deployment.

## Downloads and updates

Compiled binaries are attached to this repository's [GitHub Releases](https://github.com/ItzKuroYT/nivora-public/releases), not committed to Git. `data/releases.json` provides a static fallback. The website also reads the latest stable public release through GitHub's API so new compiled versions appear automatically. Only official release URLs are accepted. SHA-256 checksums are displayed when provided by GitHub or the fallback catalog.

Windows Setup supports application updates in 2.1+. Portable is updated manually. Mac and Linux appear when corresponding artifacts are actually published. Native iOS and Android browsers are planned; Electron does not generate mobile browsers. The optional phone web companion belongs to the private application's sync setup and is separate from this marketing website.

## Hosting

The GitHub Pages workflow deploys `dist/` on changes to main. Set repository Settings â†’ Pages â†’ Source to **GitHub Actions**. Configured custom domain: https://nivora.iconrealms.net/ . The GitHub Pages project address redirects to that domain. All local links are relative so the GitHub Pages project subpath works.

For **Vercel**, import this repository, use the Other framework preset, build command `npm run build`, and output directory `dist`. `vercel.json` supplies these settings and security headers. Add `nivora.iconrealms.net` to the Vercel project and set the DNS record specified by Vercel in your domain provider. The domain is planned and is not provisioned by committing this code. No installer upload to Vercel is necessary; downloads remain on GitHub.

## Content

- `index.html`: landing page, real browser screenshots, feature descriptions, Discord and PulsedConnect links, PulsedMC Minecraft hosting.
- `downloads.html`: Windows, Mac, Linux, iOS and Android cards, current availability, installer/portable information and checksums.
- `wiki.html`: searchable usage documentation, feature limits, privacy, sync, customization, accessibility, developer tools and update behavior.
- `assets/`: original Nivora logo and screenshots; reference browser images are not redistributed.

Future cross-device accounts require a separately deployed sync service. No hosted account service is claimed by this website.
