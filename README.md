# CampusLoop (Netlify version)

Frontend: `index.html`, `style.css`, `app.js`
Backend: `netlify/functions/api.js` (one serverless function)
Database: Netlify Blobs (built into Netlify, no separate account needed)

## Deploy on Netlify (recommended: via GitHub)
1. Create a GitHub repository and upload this whole folder (keep the `netlify` folder and `package.json`).
2. Go to app.netlify.com → Add new site → Import an existing project → pick the repo.
3. Build settings: leave Build command empty, Publish directory `.` (already set in netlify.toml).
4. Before the first deploy, open Site configuration → Environment variables and add:
   - `ADMIN_EMAIL` = `gokilad2@gmail.com`
   - `ADMIN_PASSWORD` = a strong password you choose (never put it in the code)
   - `ADMIN_REG` = optional, defaults to `2025509999`
5. Click Deploy. Your public URL looks like `https://your-site-name.netlify.app`.

To update later: change files, commit and push to GitHub, and Netlify redeploys automatically.

## Using the site
- Students sign up with a registration number `202550XXXX`, a name and a password.
- Admin: log in with `ADMIN_REG` and `ADMIN_PASSWORD`. The admin sees all Help Center tickets and can reply and set their status.
- Demo listings are owned by the admin account and can be edited or deleted.

## Local testing (optional)
Requires Node.js 18+. Run `npm install`, then `npx netlify dev` (install with `npm i -g netlify-cli`). Set the environment variables in a `.env` file (never commit it).

## Limitations to know
- All data is kept as one shared record, so many simultaneous writes can overwrite each other. Fine for a campus-scale launch; a relational database (e.g. Supabase) is the upgrade path.
- Listing photos are stored in the database (compressed to about 480px). Every page load downloads the listings, so keep the catalogue reasonable in size.
- No password reset or email verification yet.
- Logged-in students can see each other's phone and email on listings, as in the original design.
- Sessions last 7 days.
