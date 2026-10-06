# Supabase setup

1. Create a Supabase project.
2. Open **SQL Editor** and run `migrations/202610010001_create_contacts_admin.sql`.
3. In **Authentication → Users**, create the first admin user with email and password.
4. Copy that user's UUID and run:

```sql
insert into public.admin_users (user_id, display_name)
values ('AUTH_USER_UUID', 'Administrator');
```

5. Copy the project URL, publishable key, and secret key into `.env.local` using `.env.example` as a guide.

The public contact form writes through the Next.js Route Handler with the server-only secret key. Signed-in admins read and update contacts through Row Level Security policies.
