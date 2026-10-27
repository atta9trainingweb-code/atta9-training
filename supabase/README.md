# Supabase setup

1. Create a Supabase project.
2. Open **SQL Editor** and run the migrations in order:
   - `migrations/202610010001_create_contacts_admin.sql`
   - `migrations/202610260001_create_portfolio_cms.sql`
3. In **Authentication → Users**, create the first admin user with email and password.
4. Copy that user's UUID and run:

```sql
insert into public.admin_users (user_id, display_name)
values ('AUTH_USER_UUID', 'Administrator');
```

5. Copy the project URL, publishable key, and secret key into `.env.local` using `.env.example` as a guide.

The second migration creates the Portfolio CMS table, public media bucket, Row Level Security policies, and an editable seed for the existing Thai VietJet Air story.

The public contact form writes through the Next.js Route Handler with the server-only secret key. Signed-in admins manage contacts and portfolio posts through Row Level Security policies. Portfolio media uploads directly to the public `portfolio` bucket after the user's admin membership is verified by Storage policies.
