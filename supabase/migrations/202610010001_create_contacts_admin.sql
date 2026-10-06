create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  topic text not null,
  message text,
  consent_at timestamptz not null,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'following_up', 'won', 'lost', 'spam')),
  admin_note text,
  line_notification_status text not null default 'pending'
    check (line_notification_status in ('pending', 'sent', 'failed')),
  line_notification_error text
);

create index if not exists contacts_created_at_idx on public.contacts (created_at desc);
create index if not exists contacts_status_idx on public.contacts (status);
create index if not exists contacts_email_idx on public.contacts (lower(email));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists contacts_set_updated_at on public.contacts;
create trigger contacts_set_updated_at
before update on public.contacts
for each row execute function public.set_updated_at();

alter table public.admin_users enable row level security;
alter table public.contacts enable row level security;

revoke all on table public.admin_users from anon, authenticated;
revoke all on table public.contacts from anon, authenticated;

grant select on table public.admin_users to authenticated;
grant select, update on table public.contacts to authenticated;

drop policy if exists "Admins can read their membership" on public.admin_users;
create policy "Admins can read their membership"
on public.admin_users
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Admins can read contacts" on public.contacts;
create policy "Admins can read contacts"
on public.contacts
for select
to authenticated
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

drop policy if exists "Admins can update contacts" on public.contacts;
create policy "Admins can update contacts"
on public.contacts
for update
to authenticated
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

comment on table public.contacts is 'Contact form leads from the ATTA9 website';
comment on table public.admin_users is 'Allowlist of Supabase Auth users who can access the admin area';
