-- Altair Live initial schema (excerpt for P0)
-- Full migrations will be expanded. Run in Supabase SQL Editor.

create extension if not exists "uuid-ossp";

-- Profiles linked to auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text check (role in ('owner','editor','author','reviewer')) default 'author',
  active boolean default true,
  created_at timestamptz default now()
);

-- Regions
create table if not exists public.regions (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  timezone text default 'Asia/Irkutsk',
  active boolean default true,
  "order" int default 0
);

-- Categories
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  "order" int default 0,
  active boolean default true
);

-- Articles (core)
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  headline text not null,
  deck text,
  summary_points jsonb,
  body text,
  kind text check (kind in ('news','explainer','analysis','opinion','calculation','update','guide','event','interview')),
  status text check (status in ('draft','in_review','approved','scheduled','published','rejected','archived','corrected')) default 'draft',
  author_id uuid references public.profiles(id),
  published_at timestamptz,
  updated_at timestamptz default now(),
  is_demo boolean default false,
  seo_title text,
  seo_description text,
  created_at timestamptz default now()
);

-- Enable RLS later; for demo leave open or restrict after bootstrap.
-- alter table public.articles enable row level security;
-- create policy "public read published" on public.articles for select using (status = 'published' and is_demo = false);

insert into public.regions (slug, title) values
  ('irkutsk', 'Иркутск и Иркутская область'),
  ('ulan-ude', 'Улан-Удэ и Республика Бурятия'),
  ('krasnoyarsk', 'Красноярск и Красноярский край')
on conflict (slug) do nothing;

insert into public.categories (slug, title) values
  ('na-sluhu', 'На слуху'),
  ('chto-tvoritsya', 'Что творится?'),
  ('nashi-dengi', 'Наши деньги'),
  ('sibirskiy-dvizh', 'Сибирский движ'),
  ('nashi-lyudi', 'Наши люди'),
  ('kuda-shodit', 'Куда сходить')
on conflict (slug) do nothing;
