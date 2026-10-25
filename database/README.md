# Database

CampusLoop uses **Netlify Blobs** as its database. There is nothing to install or create:
the store named `campusloop` is created automatically the first time the API runs.

All data is one JSON record under the key `state`. Its shape is in `schema.json`.
The starting demo listings are defined in `seedDb()` in `netlify/functions/api.js`.

To view or delete the data: Netlify dashboard -> your site -> Data & storage -> Blobs -> `campusloop`.
Deleting the `state` key resets the site to the demo listings (all accounts, requests and tickets are lost).

Limitation: a single shared record is fine for a campus-scale launch. For heavy use, migrate to Supabase or another relational database.
