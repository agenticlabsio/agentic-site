# CMS Admin — hosting, deploy & employee access

The Payload CMS admin ships **with the main site**. Once the site is deployed to
Cloudflare it is reachable at:

> **https://agenticlabs.io/admin**

There is no separate service to host — deploying `agentic-site` deploys the admin.

---

## 1. One-time production setup

### a. Set the production secret (required)

`payload.config.ts` refuses to boot in production without `PAYLOAD_SECRET`
(it signs auth tokens). Set it as a Cloudflare Worker secret once:

```bash
# from the repo root; paste a random 32+ char string when prompted
npx wrangler secret put PAYLOAD_SECRET
```

Generate one with: `openssl rand -base64 32`. Store it in 1Password — do **not**
commit it.

### b. Apply the database schema to the remote D1 (first deploy only)

```bash
npx wrangler d1 migrations apply agentic-site-db --remote
```

Skip this if the production D1 already has the schema. (This week's dashboard /
access-control change added **no** migration — it's runtime-only — so you only
run this for a genuinely fresh database.)

---

## 2. Deploy (you run this — I don't push to production)

```bash
pnpm deploy
```

That runs, in order: the deploy-config safety check → `opennextjs-cloudflare`
build → `wrangler deploy`. When it finishes, https://agenticlabs.io/admin is live.

For later routine deploys, `pnpm deploy` is the only command (secret + schema are
already in place).

---

## 3. Create the first admin & employee logins

Payload has no email adapter yet, so accounts are created manually (see the
follow-up note below to enable email invites/password resets).

1. **First visit** to `/admin` shows *Create first user* — make the owner/admin
   account here. Give it the **Admin** role.
2. **Add employees:** Admin → **Users** → *Create*:
   - set their name + email,
   - choose role **Editor** (content only) or **Admin** (content + team),
   - set a temporary password.
3. **Share credentials securely** (1Password, not email/Slack). Ask them to change
   the password after first login (their own account is editable via Users → their
   row).

### Roles

| Capability                         | Editor | Admin |
|------------------------------------|:------:|:-----:|
| Edit all content collections       |   ✅   |  ✅   |
| View & export Leads                |   ✅   |  ✅   |
| See/edit **own** account           |   ✅   |  ✅   |
| See/create/delete **other** users  |   ❌   |  ✅   |
| Change anyone's role               |   ❌   |  ✅   |

Access control lives in `src/access/roles.ts` and is applied in
`src/collections/Users.ts`. Editors are scoped to their own user record and
cannot change their own role, so they can't self-promote to Admin.

---

## 4. What's on the dashboard

`src/components/admin/DashboardWidgets.tsx` (role-aware):

- **Stats** — leads this week / total, content items, media files, and (admins)
  team member count.
- **Content health** — per-collection counts, each a deep link.
- **Quick add** — new blog post / case study / solution, plus *Export Leads CSV*.
- **Quick links** — live site, demo site; (admins) GitHub, Cloudflare dashboard,
  and Cloudflare Web Analytics for traffic.
- **Team card** (admins only) — manage team / invite a teammate.

Traffic analytics is intentionally a **link to Cloudflare Web Analytics** rather
than fabricated numbers; wire a data source if you want it inline (see follow-ups).

---

## 5. Follow-ups (not done in this pass)

- **Email adapter** — add e.g. Resend so Payload can send invites and
  password-reset emails (employees self-serve instead of manual passwords).
  Needs a provider API key.
- **Demo content in the CMS** — `demo.agenticlabs.io` content is currently static
  TypeScript (`apps/demo/data/*.ts`), not CMS-managed. Making it editable here
  means modelling those shapes as Payload collections, migrating the data, and
  rewiring the demo app to read the CMS API. Deferred by decision ("phase it").
- **Inline traffic analytics** — pull Cloudflare Web Analytics via API into the
  dashboard instead of a link.
