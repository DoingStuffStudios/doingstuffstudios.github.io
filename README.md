# Doing Stuff Studios website

Official studio website, built with static HTML, shared CSS, and a small script for the mobile menu and copyright year. GitHub Pages is configured to publish the repository root from `main`. Its built-in Jekyll build copies the static site and uses `_config.yml` to exclude this README from the published website. Local preview does not require Jekyll.

## Local preview

From the repository root, start a loopback-only server using Python 3:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open [the local home page](http://127.0.0.1:8765/) in a browser. Press **Ctrl+C** in the terminal to stop the server. Serve from the repository root so root-relative links and assets resolve. To preview the custom error page, open [the local 404 page](http://127.0.0.1:8765/404.html) directly. GitHub Pages serves it for missing URLs, while Python's basic server uses its own error response.

## Site structure

| File or directory | Purpose |
| --- | --- |
| `index.html` | Studio home and Rail Racer feature |
| `games/` | Game catalog and individual game pages |
| `apps-software/` | Application and software catalog |
| `about/`, `contact/` | Studio introduction and contact categories |
| `privacy/` | Website statement at `/privacy/` and product policies at `/privacy/<project-slug>/` |
| `404.html` | GitHub Pages error page |
| `assets/brand/`, `assets/games/` | Studio branding and project artwork |
| `assets/css/site.css`, `assets/js/site.js` | Shared styling and behavior |

## Add a project

1. Choose a lowercase, hyphenated slug and create an `index.html` under `games/<slug>/` or `apps-software/<slug>/` if the project needs a detail page. Use `games/rail-racer/index.html` as a starting point for the shared header, footer, and metadata. Set the current navigation state for the new page.
2. Copy the Rail Racer `project-card` from `games/index.html` into the appropriate catalog's `project-grid`. Replace the empty state when adding the first app. Update the image, text, and destination.
3. Place web-ready art in a project folder such as `assets/games/<slug>/` or `assets/apps/<slug>/`. Keep original artwork separately. Export suitably sized copies, retain their proportions, and add descriptive alt text and intrinsic width and height values.
4. Add support, download, and storefront links when their destinations are supplied and verified. Use direct media links or verified trailer URLs as they become available.

Update the header and footer in all pages when shared navigation changes. Mark only the exact current page with `aria-current="page"` and use the `section-current` class for the parent catalog on detail pages.

## Add or finalize a privacy policy

1. Copy the Rail Racer policy layout into `privacy/<project-slug>/index.html`. Set the page title, description, and scope.
2. Confirm the actual practices for the site or product with the studio owner. Replace draft prompts with approved text and add the effective date and privacy contact channel.
3. Keep the draft banner and `noindex` metadata while the content is under review. Remove them when the studio owner approves the policy for publication.
4. Link the policy from the relevant product page and the product policy list on `/privacy/`. Keep the URLs stable.

## Before publication

- Set both privacy pages' visible effective date and `<time datetime>` value to the actual publication date. The dates shown in the local preview are provisional.
- Obtain studio owner approval before committing, pushing, or publishing.
- After publication, verify both permanent policy URLs load as public HTML without sign-in or geographic restrictions, and verify that the Pages build excludes `README.md`.
- Add confirmed studio social, Rail Racer trailer, download, and storefront URLs when available.

## Developer checklist for an advertising-enabled Rail Racer release

- [ ] Implement and verify Google AdMob in the release build, including startup behavior and ad requests.
- [ ] Review the final advertising SDK's actual data collection and sharing. Check SDK versions, fields, purposes, recipients, retention, and behavior after refusal or withdrawal.
- [ ] Implement appropriate consent management, including Google User Messaging Platform (UMP) where applicable.
- [ ] Implement and test age-related advertising restrictions for minors. Confirm how unknown-age users are handled.
- [ ] Provide advertising privacy choices where required and verify that users can change or withdraw choices.
- [ ] Update the Rail Racer Privacy Policy and verify the public policy URL and its links in the app and Play listing.
- [ ] Update Google Play Data Safety declarations to reflect the release build and its SDKs.
- [ ] Update the Google Play Contains Ads declaration.
- [ ] Verify Android Advertising ID use, the merged manifest permissions, and the separate Play Advertising ID declaration.
- [ ] Verify applicable regional privacy requirements and test regional consent paths.
- [ ] Review all third-party advertising and mediation dependencies and their disclosures.

Official references

- [Google Mobile Ads SDK Google Play data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure)
- [Google UMP setup and privacy choices](https://developers.google.com/admob/android/privacy)
- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311)
