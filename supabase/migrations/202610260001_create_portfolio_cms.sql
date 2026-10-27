create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at date,
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  slug text not null unique
    check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  organization text not null,
  short_name text not null,
  course text not null,
  category text not null,
  logo_url text not null,
  logo_alt text not null,
  cover_url text not null,
  cover_position text not null default 'center center',
  excerpt text not null,
  overview text not null,
  challenge text not null,
  approach text not null,
  learning_goals jsonb not null default '[]'::jsonb
    check (jsonb_typeof(learning_goals) = 'array'),
  methods jsonb not null default '[]'::jsonb
    check (jsonb_typeof(methods) = 'array'),
  gallery jsonb not null default '[]'::jsonb
    check (jsonb_typeof(gallery) = 'array'),
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  constraint published_project_has_date check (status <> 'published' or published_at is not null)
);

create index if not exists portfolio_projects_status_published_idx
  on public.portfolio_projects (status, published_at desc);
create index if not exists portfolio_projects_updated_at_idx
  on public.portfolio_projects (updated_at desc);

drop trigger if exists portfolio_projects_set_updated_at on public.portfolio_projects;
create trigger portfolio_projects_set_updated_at
before update on public.portfolio_projects
for each row execute function public.set_updated_at();

alter table public.portfolio_projects enable row level security;
grant select on table public.portfolio_projects to anon, authenticated;
grant insert, update, delete on table public.portfolio_projects to authenticated;

drop policy if exists "Anyone can read published portfolio" on public.portfolio_projects;
create policy "Anyone can read published portfolio"
on public.portfolio_projects for select
using (
  status = 'published'
  or exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

drop policy if exists "Admins can create portfolio" on public.portfolio_projects;
create policy "Admins can create portfolio"
on public.portfolio_projects for insert to authenticated
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

drop policy if exists "Admins can update portfolio" on public.portfolio_projects;
create policy "Admins can update portfolio"
on public.portfolio_projects for update to authenticated
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

drop policy if exists "Admins can delete portfolio" on public.portfolio_projects;
create policy "Admins can delete portfolio"
on public.portfolio_projects for delete to authenticated
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio',
  'portfolio',
  true,
  12582912,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admins can upload portfolio media" on storage.objects;
create policy "Admins can upload portfolio media"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'portfolio'
  and exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

drop policy if exists "Admins can update portfolio media" on storage.objects;
create policy "Admins can update portfolio media"
on storage.objects for update to authenticated
using (
  bucket_id = 'portfolio'
  and exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

drop policy if exists "Admins can delete portfolio media" on storage.objects;
create policy "Admins can delete portfolio media"
on storage.objects for delete to authenticated
using (
  bucket_id = 'portfolio'
  and exists (
    select 1 from public.admin_users
    where admin_users.user_id = (select auth.uid())
  )
);

-- Seed the current featured case so it can be edited immediately after migration.
insert into public.portfolio_projects (
  slug, status, published_at, organization, short_name, course, category,
  logo_url, logo_alt, cover_url, cover_position, excerpt, overview,
  challenge, approach, learning_goals, methods, gallery
)
values (
  'thai-vietjet-air', 'published', '2023-10-10',
  'บริษัท ไทยเวียดเจ๊ทแอร์', 'Thai VietJet Air',
  'Train the Professional Trainer', 'พัฒนาวิทยากร',
  '/images/customers/thai-vietjet.jpg', 'โลโก้ Thai VietJet Air',
  '/images/train-the-trainer/gallery-vietjet.webp', 'center 38%',
  'พัฒนาทักษะการถ่ายทอดและความมั่นใจของวิทยากรภายใน ผ่านการฝึกปฏิบัติและรับ Feedback ในห้องเรียน',
  'หลักสูตรสำหรับผู้ที่ต้องถ่ายทอดความรู้ภายในองค์กร ให้สามารถเปลี่ยนเนื้อหาที่มีอยู่เป็นประสบการณ์เรียนรู้ที่เข้าใจง่าย มีส่วนร่วม และนำไปใช้ได้จริง',
  'ผู้สอนมีความรู้ในงานเป็นอย่างดี แต่ยังต้องการเครื่องมือจัดลำดับเนื้อหา สร้างบรรยากาศ และรับมือกับผู้เรียนที่มีพื้นฐานต่างกัน',
  'ออกแบบให้ผู้เรียนสลับระหว่างการเรียนรู้หลักการ การดูตัวอย่าง และการทดลองสอนจริง พร้อมรับ Feedback ที่ชัดเจนเพื่อนำไปปรับทันที',
  '["วางโครงสร้างการสอนให้ชัดและจดจำง่าย", "ใช้กิจกรรมและคำถามสร้างการมีส่วนร่วม", "ถ่ายทอดอย่างมั่นใจและเป็นธรรมชาติ"]'::jsonb,
  '["Workshop", "Practice Session", "Peer Feedback", "Reflection"]'::jsonb,
  '[{"src":"/images/train-the-trainer/gallery-vietjet.webp","alt":"ผู้เข้าอบรมไทยเวียดเจ๊ทแอร์ฝึกถ่ายทอดในชั้นเรียน"},{"src":"/images/train-the-trainer/gallery-04.jpg","alt":"กิจกรรมฝึกทักษะวิทยากรภายในองค์กร"},{"src":"/images/train-the-trainer/gallery-05.jpg","alt":"ผู้เรียนร่วมแลกเปลี่ยนระหว่างการฝึกสอน"},{"src":"/images/train-the-trainer/gallery-06.jpg","alt":"บรรยากาศการฝึกนำเสนอและรับ Feedback"},{"src":"/images/train-the-trainer/gallery-07.jpg","alt":"วิทยากรให้คำแนะนำกับผู้เข้าอบรม"},{"src":"/images/train-the-trainer/gallery-08.jpg","alt":"ผู้เรียนลงมือฝึกสอนจากสถานการณ์จริง"}]'::jsonb
)
on conflict (slug) do nothing;

comment on table public.portfolio_projects is 'Portfolio stories managed from the ATTA9 admin area';
