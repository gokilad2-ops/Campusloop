# CampusLoop

```
CampusLoop/
  frontend/              Website (HTML, CSS, JavaScript)
    index.html  style.css  app.js
  netlify/functions/
    api.js               Backend API (login, listings, requests, tickets, admin checks)
  database/              Database notes and data schema (database = Netlify Blobs)
  netlify.toml           Netlify settings (publishes /frontend, functions in /netlify/functions)
  package.json           Backend dependency (@netlify/blobs)
  .env.example           Environment variables you must set
```

## Deploy (about 10 minutes)
1. Create a GitHub repository. Upload everything inside this folder so that `frontend`, `netlify`, `database`, `netlify.toml` and `package.json` are at the TOP LEVEL of the repo (not inside another folder). If you used an older version, delete the old files first.
2. At app.netlify.com: Add new site -> Import an existing project -> choose the repo. Leave the build command empty. (Publish directory and functions come from netlify.toml.)
3. Site configuration -> Environment variables -> add:
   - `ADMIN_REG` = `2025503589`
   - `ADMIN_EMAIL` = `gokilad2@gmail.com`
   - `ADMIN_PASSWORD` = a strong password you choose
4. Deploy (or Deploys -> Trigger deploy). Open your `.netlify.app` URL.

## Admin
Log in with the `ADMIN_REG` number and `ADMIN_PASSWORD`. The admin account is created or updated automatically from these settings. To change the admin password, change `ADMIN_PASSWORD` and redeploy. Admin rights never come from anything a user can edit.

## Updating the site later
Edit files, commit and push to GitHub. Netlify redeploys automatically.

## Known limits
No password reset or email verification. Photos are stored inside the database record. See database/README.md.
