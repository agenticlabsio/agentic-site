import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`solutions_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`challenge\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_challenges_order_idx\` ON \`solutions_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_challenges_parent_id_idx\` ON \`solutions_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_capabilities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_capabilities_order_idx\` ON \`solutions_capabilities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_capabilities_parent_id_idx\` ON \`solutions_capabilities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_process_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`step\` numeric NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_process_steps_order_idx\` ON \`solutions_process_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_process_steps_parent_id_idx\` ON \`solutions_process_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`integrations_id\` integer,
  	\`faq_id\` integer,
  	\`case_studies_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`integrations_id\`) REFERENCES \`integrations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`faq_id\`) REFERENCES \`faq\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`case_studies_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_rels_order_idx\` ON \`solutions_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_rels_parent_idx\` ON \`solutions_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_rels_path_idx\` ON \`solutions_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`solutions_rels_integrations_id_idx\` ON \`solutions_rels\` (\`integrations_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_rels_faq_id_idx\` ON \`solutions_rels\` (\`faq_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_rels_case_studies_id_idx\` ON \`solutions_rels\` (\`case_studies_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_market_context\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`stat\` text NOT NULL,
  	\`source\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_market_context_order_idx\` ON \`industries_market_context\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_market_context_parent_id_idx\` ON \`industries_market_context\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`challenge\` text NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_challenges_order_idx\` ON \`industries_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_challenges_parent_id_idx\` ON \`industries_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_ai_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_ai_solutions_order_idx\` ON \`industries_ai_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_ai_solutions_parent_id_idx\` ON \`industries_ai_solutions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_compliance\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`standard\` text NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_compliance_order_idx\` ON \`industries_compliance\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_compliance_parent_id_idx\` ON \`industries_compliance\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_roi_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`metric\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_roi_metrics_order_idx\` ON \`industries_roi_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_roi_metrics_parent_id_idx\` ON \`industries_roi_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`solutions_id\` integer,
  	\`integrations_id\` integer,
  	\`faq_id\` integer,
  	\`case_studies_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`solutions_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`integrations_id\`) REFERENCES \`integrations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`faq_id\`) REFERENCES \`faq\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`case_studies_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_rels_order_idx\` ON \`industries_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`industries_rels_parent_idx\` ON \`industries_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_rels_path_idx\` ON \`industries_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`industries_rels_solutions_id_idx\` ON \`industries_rels\` (\`solutions_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_rels_integrations_id_idx\` ON \`industries_rels\` (\`integrations_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_rels_faq_id_idx\` ON \`industries_rels\` (\`faq_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_rels_case_studies_id_idx\` ON \`industries_rels\` (\`case_studies_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts_tags\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tag\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blog_posts_tags_order_idx\` ON \`blog_posts_tags\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_tags_parent_id_idx\` ON \`blog_posts_tags\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blog_posts_faqs_order_idx\` ON \`blog_posts_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_faqs_parent_id_idx\` ON \`blog_posts_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts_key_takeaways\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`takeaway\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blog_posts_key_takeaways_order_idx\` ON \`blog_posts_key_takeaways\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_key_takeaways_parent_id_idx\` ON \`blog_posts_key_takeaways\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`content\` text NOT NULL,
  	\`featured_image_id\` integer,
  	\`category\` text NOT NULL,
  	\`status\` text DEFAULT 'draft' NOT NULL,
  	\`published_at\` text,
  	\`author\` text DEFAULT 'Agentic Labs',
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`featured_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`blog_posts_slug_idx\` ON \`blog_posts\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_featured_image_idx\` ON \`blog_posts\` (\`featured_image_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_seo_seo_og_image_idx\` ON \`blog_posts\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_updated_at_idx\` ON \`blog_posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_created_at_idx\` ON \`blog_posts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`solutions_id\` integer,
  	\`industries_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`solutions_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`industries_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blog_posts_rels_order_idx\` ON \`blog_posts_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_rels_parent_idx\` ON \`blog_posts_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_rels_path_idx\` ON \`blog_posts_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_rels_solutions_id_idx\` ON \`blog_posts_rels\` (\`solutions_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_rels_industries_id_idx\` ON \`blog_posts_rels\` (\`industries_id\`);`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`slug\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`tagline\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`short_description\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`full_description\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`hero_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`seo_meta_title\` text;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`seo_meta_description\` text;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`seo_og_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`seo_no_index\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`featured\` integer DEFAULT false;`)
  await db.run(sql`CREATE UNIQUE INDEX \`solutions_slug_idx\` ON \`solutions\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`solutions_hero_image_idx\` ON \`solutions\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_seo_seo_og_image_idx\` ON \`solutions\` (\`seo_og_image_id\`);`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`description\`;`)
  await db.run(sql`ALTER TABLE \`faq\` ADD \`answer_plain_text\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`faq\` ADD \`category\` text DEFAULT 'general' NOT NULL;`)
  await db.run(sql`ALTER TABLE \`faq\` ADD \`featured\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`slug\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`tagline\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`category\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`short_description\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`full_description\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`hero_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`target_audience\` text;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`seo_meta_title\` text;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`seo_meta_description\` text;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`seo_og_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`seo_no_index\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`industries\` ADD \`featured\` integer DEFAULT false;`)
  await db.run(sql`CREATE UNIQUE INDEX \`industries_slug_idx\` ON \`industries\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`industries_hero_image_idx\` ON \`industries\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_seo_seo_og_image_idx\` ON \`industries\` (\`seo_og_image_id\`);`)
  await db.run(sql`ALTER TABLE \`industries\` DROP COLUMN \`description\`;`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`blog_posts_id\` integer REFERENCES blog_posts(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_blog_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`blog_posts_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`solutions_challenges\`;`)
  await db.run(sql`DROP TABLE \`solutions_capabilities\`;`)
  await db.run(sql`DROP TABLE \`solutions_process_steps\`;`)
  await db.run(sql`DROP TABLE \`solutions_rels\`;`)
  await db.run(sql`DROP TABLE \`industries_market_context\`;`)
  await db.run(sql`DROP TABLE \`industries_challenges\`;`)
  await db.run(sql`DROP TABLE \`industries_ai_solutions\`;`)
  await db.run(sql`DROP TABLE \`industries_compliance\`;`)
  await db.run(sql`DROP TABLE \`industries_roi_metrics\`;`)
  await db.run(sql`DROP TABLE \`industries_rels\`;`)
  await db.run(sql`DROP TABLE \`blog_posts_tags\`;`)
  await db.run(sql`DROP TABLE \`blog_posts_faqs\`;`)
  await db.run(sql`DROP TABLE \`blog_posts_key_takeaways\`;`)
  await db.run(sql`DROP TABLE \`blog_posts\`;`)
  await db.run(sql`DROP TABLE \`blog_posts_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_solutions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`category\` text NOT NULL,
  	\`category_color\` text DEFAULT 'purple' NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_id\` integer,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions\`("id", "name", "category", "category_color", "description", "icon_id", "order", "updated_at", "created_at") SELECT "id", "name", "category", "category_color", "description", "icon_id", "order", "updated_at", "created_at" FROM \`solutions\`;`)
  await db.run(sql`DROP TABLE \`solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions\` RENAME TO \`solutions\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`solutions_name_idx\` ON \`solutions\` (\`name\`);`)
  await db.run(sql`CREATE INDEX \`solutions_icon_idx\` ON \`solutions\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_updated_at_idx\` ON \`solutions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`solutions_created_at_idx\` ON \`solutions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`icon_id\` integer,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries\`("id", "name", "description", "icon_id", "order", "updated_at", "created_at") SELECT "id", "name", "description", "icon_id", "order", "updated_at", "created_at" FROM \`industries\`;`)
  await db.run(sql`DROP TABLE \`industries\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries\` RENAME TO \`industries\`;`)
  await db.run(sql`CREATE INDEX \`industries_icon_idx\` ON \`industries\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_updated_at_idx\` ON \`industries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`industries_created_at_idx\` ON \`industries\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`products_id\` integer,
  	\`solutions_id\` integer,
  	\`case_studies_id\` integer,
  	\`faq_id\` integer,
  	\`industries_id\` integer,
  	\`integrations_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`products_id\`) REFERENCES \`products\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`solutions_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`case_studies_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`faq_id\`) REFERENCES \`faq\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`industries_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`integrations_id\`) REFERENCES \`integrations\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id", "products_id", "solutions_id", "case_studies_id", "faq_id", "industries_id", "integrations_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id", "products_id", "solutions_id", "case_studies_id", "faq_id", "industries_id", "integrations_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_products_id_idx\` ON \`payload_locked_documents_rels\` (\`products_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_solutions_id_idx\` ON \`payload_locked_documents_rels\` (\`solutions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_case_studies_id_idx\` ON \`payload_locked_documents_rels\` (\`case_studies_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_faq_id_idx\` ON \`payload_locked_documents_rels\` (\`faq_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_industries_id_idx\` ON \`payload_locked_documents_rels\` (\`industries_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_integrations_id_idx\` ON \`payload_locked_documents_rels\` (\`integrations_id\`);`)
  await db.run(sql`ALTER TABLE \`faq\` DROP COLUMN \`answer_plain_text\`;`)
  await db.run(sql`ALTER TABLE \`faq\` DROP COLUMN \`category\`;`)
  await db.run(sql`ALTER TABLE \`faq\` DROP COLUMN \`featured\`;`)
}
