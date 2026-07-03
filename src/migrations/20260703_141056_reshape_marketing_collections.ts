import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload: _payload, req: _req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`solutions_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_features_order_idx\` ON \`solutions_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_features_parent_id_idx\` ON \`solutions_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_how_it_works\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`step\` numeric NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_how_it_works_order_idx\` ON \`solutions_how_it_works\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_how_it_works_parent_id_idx\` ON \`solutions_how_it_works\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_integrations_order_idx\` ON \`solutions_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_integrations_parent_id_idx\` ON \`solutions_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_results\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`metric\` text NOT NULL,
  	\`label\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_results_order_idx\` ON \`solutions_results\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_results_parent_id_idx\` ON \`solutions_results\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`solutions_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`solutions_faqs_order_idx\` ON \`solutions_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_faqs_parent_id_idx\` ON \`solutions_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`case_studies_card_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`case_studies_card_metrics_order_idx\` ON \`case_studies_card_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_card_metrics_parent_id_idx\` ON \`case_studies_card_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`case_studies_challenge_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`case_studies_challenge_pain_points_order_idx\` ON \`case_studies_challenge_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_challenge_pain_points_parent_id_idx\` ON \`case_studies_challenge_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`case_studies_solution_components\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`case_studies_solution_components_order_idx\` ON \`case_studies_solution_components\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_solution_components_parent_id_idx\` ON \`case_studies_solution_components\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`case_studies_results_before\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`case_studies_results_before_order_idx\` ON \`case_studies_results_before\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_results_before_parent_id_idx\` ON \`case_studies_results_before\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`case_studies_results_after\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`case_studies_results_after_order_idx\` ON \`case_studies_results_after\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_results_after_parent_id_idx\` ON \`case_studies_results_after\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_integrations_order_idx\` ON \`industries_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_integrations_parent_id_idx\` ON \`industries_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_faqs_order_idx\` ON \`industries_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_faqs_parent_id_idx\` ON \`industries_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`industries_related_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`industries_related_solutions_order_idx\` ON \`industries_related_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_related_solutions_parent_id_idx\` ON \`industries_related_solutions\` (\`_parent_id\`);`)
  await db.run(sql`DROP TABLE \`solutions_process_steps\`;`)
  await db.run(sql`DROP TABLE \`solutions_rels\`;`)
  await db.run(sql`DROP TABLE \`industries_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_solutions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`category\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`hero_tagline\` text NOT NULL,
  	\`card_metric\` text NOT NULL,
  	\`card_metric_label\` text NOT NULL,
  	\`problem\` text NOT NULL,
  	\`solution_overview\` text NOT NULL,
  	\`cta_headline\` text NOT NULL,
  	\`cta_description\` text NOT NULL,
  	\`case_study_link\` text,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions\`("id", "name", "slug", "category", "description", "hero_tagline", "card_metric", "card_metric_label", "problem", "solution_overview", "cta_headline", "cta_description", "case_study_link", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at") SELECT "id", "name", "slug", "category", "description", "hero_tagline", "card_metric", "card_metric_label", "problem", "solution_overview", "cta_headline", "cta_description", "case_study_link", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at" FROM \`solutions\`;`)
  await db.run(sql`DROP TABLE \`solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions\` RENAME TO \`solutions\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`solutions_name_idx\` ON \`solutions\` (\`name\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`solutions_slug_idx\` ON \`solutions\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`solutions_seo_seo_og_image_idx\` ON \`solutions\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_updated_at_idx\` ON \`solutions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`solutions_created_at_idx\` ON \`solutions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`industry\` text NOT NULL,
  	\`subtitle\` text NOT NULL,
  	\`card_title\` text NOT NULL,
  	\`card_subtitle\` text NOT NULL,
  	\`challenge_intro\` text NOT NULL,
  	\`solution_intro\` text NOT NULL,
  	\`solution_timeline\` text NOT NULL,
  	\`quote_text\` text NOT NULL,
  	\`quote_author\` text NOT NULL,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies\`("id", "title", "slug", "industry", "subtitle", "card_title", "card_subtitle", "challenge_intro", "solution_intro", "solution_timeline", "quote_text", "quote_author", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at") SELECT "id", "title", "slug", "industry", "subtitle", "card_title", "card_subtitle", "challenge_intro", "solution_intro", "solution_timeline", "quote_text", "quote_author", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at" FROM \`case_studies\`;`)
  await db.run(sql`DROP TABLE \`case_studies\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies\` RENAME TO \`case_studies\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_title_idx\` ON \`case_studies\` (\`title\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`case_studies_slug_idx\` ON \`case_studies\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_seo_seo_og_image_idx\` ON \`case_studies\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_updated_at_idx\` ON \`case_studies\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_created_at_idx\` ON \`case_studies\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	\`card_description\` text NOT NULL,
  	\`hero_description\` text NOT NULL,
  	\`target_audience\` text NOT NULL,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries\`("id", "name", "slug", "tagline", "icon", "card_description", "hero_description", "target_audience", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at") SELECT "id", "name", "slug", "tagline", "icon", "card_description", "hero_description", "target_audience", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at" FROM \`industries\`;`)
  await db.run(sql`DROP TABLE \`industries\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries\` RENAME TO \`industries\`;`)
  await db.run(sql`CREATE INDEX \`industries_name_idx\` ON \`industries\` (\`name\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`industries_slug_idx\` ON \`industries\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`industries_seo_seo_og_image_idx\` ON \`industries\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_updated_at_idx\` ON \`industries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`industries_created_at_idx\` ON \`industries\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_faq\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`category\` text,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`INSERT INTO \`__new_faq\`("id", "question", "answer", "category", "order", "updated_at", "created_at") SELECT "id", "question", "answer", "category", "order", "updated_at", "created_at" FROM \`faq\`;`)
  await db.run(sql`DROP TABLE \`faq\`;`)
  await db.run(sql`ALTER TABLE \`__new_faq\` RENAME TO \`faq\`;`)
  await db.run(sql`CREATE INDEX \`faq_question_idx\` ON \`faq\` (\`question\`);`)
  await db.run(sql`CREATE INDEX \`faq_updated_at_idx\` ON \`faq\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`faq_created_at_idx\` ON \`faq\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`challenge\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_challenges\`("_order", "_parent_id", "id", "challenge", "description") SELECT "_order", "_parent_id", "id", "challenge", "description" FROM \`industries_challenges\`;`)
  await db.run(sql`DROP TABLE \`industries_challenges\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_challenges\` RENAME TO \`industries_challenges\`;`)
  await db.run(sql`CREATE INDEX \`industries_challenges_order_idx\` ON \`industries_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_challenges_parent_id_idx\` ON \`industries_challenges\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`solutions_challenges\` ADD \`text\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions_challenges\` DROP COLUMN \`challenge\`;`)
  await db.run(sql`ALTER TABLE \`case_studies_metrics\` ADD \`description\` text NOT NULL;`)
}

export async function down({ db, payload: _payload, req: _req }: MigrateDownArgs): Promise<void> {
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
  await db.run(sql`DROP TABLE \`solutions_features\`;`)
  await db.run(sql`DROP TABLE \`solutions_how_it_works\`;`)
  await db.run(sql`DROP TABLE \`solutions_integrations\`;`)
  await db.run(sql`DROP TABLE \`solutions_results\`;`)
  await db.run(sql`DROP TABLE \`solutions_faqs\`;`)
  await db.run(sql`DROP TABLE \`case_studies_card_metrics\`;`)
  await db.run(sql`DROP TABLE \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`DROP TABLE \`case_studies_solution_components\`;`)
  await db.run(sql`DROP TABLE \`case_studies_results_before\`;`)
  await db.run(sql`DROP TABLE \`case_studies_results_after\`;`)
  await db.run(sql`DROP TABLE \`industries_integrations\`;`)
  await db.run(sql`DROP TABLE \`industries_faqs\`;`)
  await db.run(sql`DROP TABLE \`industries_related_solutions\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_case_studies\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`category\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`image_id\` integer,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies\`("id", "title", "category", "description", "image_id", "order", "updated_at", "created_at") SELECT "id", "title", "category", "description", "image_id", "order", "updated_at", "created_at" FROM \`case_studies\`;`)
  await db.run(sql`DROP TABLE \`case_studies\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies\` RENAME TO \`case_studies\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`case_studies_title_idx\` ON \`case_studies\` (\`title\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_image_idx\` ON \`case_studies\` (\`image_id\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_updated_at_idx\` ON \`case_studies\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_created_at_idx\` ON \`case_studies\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_faq\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`answer_plain_text\` text NOT NULL,
  	\`category\` text DEFAULT 'general' NOT NULL,
  	\`featured\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`INSERT INTO \`__new_faq\`("id", "question", "answer", "answer_plain_text", "category", "featured", "order", "updated_at", "created_at") SELECT "id", "question", "answer", "answer_plain_text", "category", "featured", "order", "updated_at", "created_at" FROM \`faq\`;`)
  await db.run(sql`DROP TABLE \`faq\`;`)
  await db.run(sql`ALTER TABLE \`__new_faq\` RENAME TO \`faq\`;`)
  await db.run(sql`CREATE INDEX \`faq_updated_at_idx\` ON \`faq\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`faq_created_at_idx\` ON \`faq\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`category\` text NOT NULL,
  	\`short_description\` text NOT NULL,
  	\`full_description\` text NOT NULL,
  	\`icon_id\` integer,
  	\`hero_image_id\` integer,
  	\`target_audience\` text,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries\`("id", "name", "slug", "tagline", "category", "short_description", "full_description", "icon_id", "hero_image_id", "target_audience", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at") SELECT "id", "name", "slug", "tagline", "category", "short_description", "full_description", "icon_id", "hero_image_id", "target_audience", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at" FROM \`industries\`;`)
  await db.run(sql`DROP TABLE \`industries\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries\` RENAME TO \`industries\`;`)
  await db.run(sql`CREATE UNIQUE INDEX \`industries_slug_idx\` ON \`industries\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`industries_icon_idx\` ON \`industries\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_hero_image_idx\` ON \`industries\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_seo_seo_og_image_idx\` ON \`industries\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_updated_at_idx\` ON \`industries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`industries_created_at_idx\` ON \`industries\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`challenge\` text NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_challenges\`("_order", "_parent_id", "id", "challenge", "description") SELECT "_order", "_parent_id", "id", "challenge", "description" FROM \`industries_challenges\`;`)
  await db.run(sql`DROP TABLE \`industries_challenges\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_challenges\` RENAME TO \`industries_challenges\`;`)
  await db.run(sql`CREATE INDEX \`industries_challenges_order_idx\` ON \`industries_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_challenges_parent_id_idx\` ON \`industries_challenges\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`solutions_challenges\` ADD \`challenge\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions_challenges\` DROP COLUMN \`text\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`tagline\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`category_color\` text DEFAULT 'purple' NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`short_description\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`full_description\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`icon_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`solutions\` ADD \`hero_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`solutions_icon_idx\` ON \`solutions\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_hero_image_idx\` ON \`solutions\` (\`hero_image_id\`);`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`description\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`hero_tagline\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`card_metric\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`card_metric_label\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`problem\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`solution_overview\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`cta_headline\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`cta_description\`;`)
  await db.run(sql`ALTER TABLE \`solutions\` DROP COLUMN \`case_study_link\`;`)
  await db.run(sql`ALTER TABLE \`case_studies_metrics\` DROP COLUMN \`description\`;`)
}
