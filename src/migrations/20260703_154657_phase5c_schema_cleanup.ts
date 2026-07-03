import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload: _payload, req: _req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`_solutions_v_version_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_features_order_idx\` ON \`_solutions_v_version_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_features_parent_id_idx\` ON \`_solutions_v_version_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v_version_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_challenges_order_idx\` ON \`_solutions_v_version_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_challenges_parent_id_idx\` ON \`_solutions_v_version_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v_version_capabilities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`metric\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_capabilities_order_idx\` ON \`_solutions_v_version_capabilities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_capabilities_parent_id_idx\` ON \`_solutions_v_version_capabilities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v_version_how_it_works\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`step\` numeric,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_how_it_works_order_idx\` ON \`_solutions_v_version_how_it_works\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_how_it_works_parent_id_idx\` ON \`_solutions_v_version_how_it_works\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v_version_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_integrations_order_idx\` ON \`_solutions_v_version_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_integrations_parent_id_idx\` ON \`_solutions_v_version_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v_version_results\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`metric\` text,
  	\`label\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_results_order_idx\` ON \`_solutions_v_version_results\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_results_parent_id_idx\` ON \`_solutions_v_version_results\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v_version_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text,
  	\`answer\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_solutions_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_faqs_order_idx\` ON \`_solutions_v_version_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_faqs_parent_id_idx\` ON \`_solutions_v_version_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_solutions_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_name\` text,
  	\`version_slug\` text,
  	\`version_category\` text,
  	\`version_description\` text,
  	\`version_hero_tagline\` text,
  	\`version_card_metric\` text,
  	\`version_card_metric_label\` text,
  	\`version_problem\` text,
  	\`version_solution_overview\` text,
  	\`version_cta_headline\` text,
  	\`version_cta_description\` text,
  	\`version_case_study_link\` text,
  	\`version_seo_meta_title\` text,
  	\`version_seo_meta_description\` text,
  	\`version_seo_og_image_id\` integer,
  	\`version_seo_no_index\` integer DEFAULT false,
  	\`version_order\` numeric DEFAULT 0,
  	\`version_featured\` integer DEFAULT false,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_solutions_v_parent_idx\` ON \`_solutions_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_version_name_idx\` ON \`_solutions_v\` (\`version_name\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_version_slug_idx\` ON \`_solutions_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_seo_version_seo_og_image_idx\` ON \`_solutions_v\` (\`version_seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_version_updated_at_idx\` ON \`_solutions_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_version_created_at_idx\` ON \`_solutions_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_version_version__status_idx\` ON \`_solutions_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_created_at_idx\` ON \`_solutions_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_updated_at_idx\` ON \`_solutions_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_solutions_v_latest_idx\` ON \`_solutions_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v_version_card_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_case_studies_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_card_metrics_order_idx\` ON \`_case_studies_v_version_card_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_card_metrics_parent_id_idx\` ON \`_case_studies_v_version_card_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v_version_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_case_studies_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_metrics_order_idx\` ON \`_case_studies_v_version_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_metrics_parent_id_idx\` ON \`_case_studies_v_version_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v_version_challenge_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_case_studies_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_challenge_pain_points_order_idx\` ON \`_case_studies_v_version_challenge_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_challenge_pain_points_parent_id_idx\` ON \`_case_studies_v_version_challenge_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v_version_solution_components\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_case_studies_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_solution_components_order_idx\` ON \`_case_studies_v_version_solution_components\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_solution_components_parent_id_idx\` ON \`_case_studies_v_version_solution_components\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v_version_results_before\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_case_studies_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_results_before_order_idx\` ON \`_case_studies_v_version_results_before\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_results_before_parent_id_idx\` ON \`_case_studies_v_version_results_before\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v_version_results_after\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_case_studies_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_results_after_order_idx\` ON \`_case_studies_v_version_results_after\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_results_after_parent_id_idx\` ON \`_case_studies_v_version_results_after\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_case_studies_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_slug\` text,
  	\`version_industry\` text,
  	\`version_subtitle\` text,
  	\`version_card_title\` text,
  	\`version_card_subtitle\` text,
  	\`version_challenge_intro\` text,
  	\`version_solution_intro\` text,
  	\`version_solution_timeline\` text,
  	\`version_quote_text\` text,
  	\`version_quote_author\` text,
  	\`version_seo_meta_title\` text,
  	\`version_seo_meta_description\` text,
  	\`version_seo_og_image_id\` integer,
  	\`version_seo_no_index\` integer DEFAULT false,
  	\`version_order\` numeric DEFAULT 0,
  	\`version_featured\` integer DEFAULT false,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_case_studies_v_parent_idx\` ON \`_case_studies_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_version_title_idx\` ON \`_case_studies_v\` (\`version_title\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_version_slug_idx\` ON \`_case_studies_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_seo_version_seo_og_image_idx\` ON \`_case_studies_v\` (\`version_seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_version_updated_at_idx\` ON \`_case_studies_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_version_created_at_idx\` ON \`_case_studies_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_version_version__status_idx\` ON \`_case_studies_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_created_at_idx\` ON \`_case_studies_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_updated_at_idx\` ON \`_case_studies_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_case_studies_v_latest_idx\` ON \`_case_studies_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_market_context\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`stat\` text,
  	\`source\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_market_context_order_idx\` ON \`_industries_v_version_market_context\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_market_context_parent_id_idx\` ON \`_industries_v_version_market_context\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`challenge\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_challenges_order_idx\` ON \`_industries_v_version_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_challenges_parent_id_idx\` ON \`_industries_v_version_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_ai_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`metric\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_ai_solutions_order_idx\` ON \`_industries_v_version_ai_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_ai_solutions_parent_id_idx\` ON \`_industries_v_version_ai_solutions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_integrations_order_idx\` ON \`_industries_v_version_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_integrations_parent_id_idx\` ON \`_industries_v_version_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_compliance\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`standard\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_compliance_order_idx\` ON \`_industries_v_version_compliance\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_compliance_parent_id_idx\` ON \`_industries_v_version_compliance\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_roi_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`metric\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_roi_metrics_order_idx\` ON \`_industries_v_version_roi_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_roi_metrics_parent_id_idx\` ON \`_industries_v_version_roi_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text,
  	\`answer\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_faqs_order_idx\` ON \`_industries_v_version_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_faqs_parent_id_idx\` ON \`_industries_v_version_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v_version_related_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`slug\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_industries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_version_related_solutions_order_idx\` ON \`_industries_v_version_related_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_related_solutions_parent_id_idx\` ON \`_industries_v_version_related_solutions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_industries_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_name\` text,
  	\`version_slug\` text,
  	\`version_tagline\` text,
  	\`version_icon\` text,
  	\`version_card_description\` text,
  	\`version_hero_description\` text,
  	\`version_target_audience\` text,
  	\`version_seo_meta_title\` text,
  	\`version_seo_meta_description\` text,
  	\`version_seo_og_image_id\` integer,
  	\`version_seo_no_index\` integer DEFAULT false,
  	\`version_order\` numeric DEFAULT 0,
  	\`version_featured\` integer DEFAULT false,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_industries_v_parent_idx\` ON \`_industries_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_version_name_idx\` ON \`_industries_v\` (\`version_name\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_version_slug_idx\` ON \`_industries_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_seo_version_seo_og_image_idx\` ON \`_industries_v\` (\`version_seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_version_updated_at_idx\` ON \`_industries_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_version_created_at_idx\` ON \`_industries_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_version_version__status_idx\` ON \`_industries_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_created_at_idx\` ON \`_industries_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_updated_at_idx\` ON \`_industries_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_industries_v_latest_idx\` ON \`_industries_v\` (\`latest\`);`)
  await db.run(sql`DROP TABLE \`products_features\`;`)
  await db.run(sql`DROP TABLE \`products\`;`)
  await db.run(sql`DROP TABLE \`site_settings_stats\`;`)
  await db.run(sql`DROP TABLE \`site_settings_trust_metrics\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`navigation_main_nav\`;`)
  await db.run(sql`DROP TABLE \`navigation_footer_nav\`;`)
  await db.run(sql`DROP TABLE \`navigation_social_links\`;`)
  await db.run(sql`DROP TABLE \`navigation\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`solutions_id\` integer,
  	\`case_studies_id\` integer,
  	\`faq_id\` integer,
  	\`industries_id\` integer,
  	\`integrations_id\` integer,
  	\`blog_posts_id\` integer,
  	\`leads_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`solutions_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`case_studies_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`faq_id\`) REFERENCES \`faq\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`industries_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`integrations_id\`) REFERENCES \`integrations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`blog_posts_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`leads_id\`) REFERENCES \`leads\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id", "solutions_id", "case_studies_id", "faq_id", "industries_id", "integrations_id", "blog_posts_id", "leads_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id", "solutions_id", "case_studies_id", "faq_id", "industries_id", "integrations_id", "blog_posts_id", "leads_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_solutions_id_idx\` ON \`payload_locked_documents_rels\` (\`solutions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_case_studies_id_idx\` ON \`payload_locked_documents_rels\` (\`case_studies_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_faq_id_idx\` ON \`payload_locked_documents_rels\` (\`faq_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_industries_id_idx\` ON \`payload_locked_documents_rels\` (\`industries_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_integrations_id_idx\` ON \`payload_locked_documents_rels\` (\`integrations_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_blog_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`blog_posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_leads_id_idx\` ON \`payload_locked_documents_rels\` (\`leads_id\`);`)
  await db.run(sql`DROP INDEX \`leads_email_idx\`;`)
  await db.run(sql`CREATE UNIQUE INDEX \`leads_email_idx\` ON \`leads\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_features\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`solutions_features\`;`)
  await db.run(sql`DROP TABLE \`solutions_features\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_features\` RENAME TO \`solutions_features\`;`)
  await db.run(sql`CREATE INDEX \`solutions_features_order_idx\` ON \`solutions_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_features_parent_id_idx\` ON \`solutions_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_challenges\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`solutions_challenges\`;`)
  await db.run(sql`DROP TABLE \`solutions_challenges\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_challenges\` RENAME TO \`solutions_challenges\`;`)
  await db.run(sql`CREATE INDEX \`solutions_challenges_order_idx\` ON \`solutions_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_challenges_parent_id_idx\` ON \`solutions_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_capabilities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_capabilities\`("_order", "_parent_id", "id", "title", "description", "metric") SELECT "_order", "_parent_id", "id", "title", "description", "metric" FROM \`solutions_capabilities\`;`)
  await db.run(sql`DROP TABLE \`solutions_capabilities\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_capabilities\` RENAME TO \`solutions_capabilities\`;`)
  await db.run(sql`CREATE INDEX \`solutions_capabilities_order_idx\` ON \`solutions_capabilities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_capabilities_parent_id_idx\` ON \`solutions_capabilities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_how_it_works\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`step\` numeric,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_how_it_works\`("_order", "_parent_id", "id", "step", "title", "description") SELECT "_order", "_parent_id", "id", "step", "title", "description" FROM \`solutions_how_it_works\`;`)
  await db.run(sql`DROP TABLE \`solutions_how_it_works\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_how_it_works\` RENAME TO \`solutions_how_it_works\`;`)
  await db.run(sql`CREATE INDEX \`solutions_how_it_works_order_idx\` ON \`solutions_how_it_works\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_how_it_works_parent_id_idx\` ON \`solutions_how_it_works\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_integrations\`("_order", "_parent_id", "id", "name") SELECT "_order", "_parent_id", "id", "name" FROM \`solutions_integrations\`;`)
  await db.run(sql`DROP TABLE \`solutions_integrations\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_integrations\` RENAME TO \`solutions_integrations\`;`)
  await db.run(sql`CREATE INDEX \`solutions_integrations_order_idx\` ON \`solutions_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_integrations_parent_id_idx\` ON \`solutions_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_results\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`metric\` text,
  	\`label\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_results\`("_order", "_parent_id", "id", "metric", "label", "description") SELECT "_order", "_parent_id", "id", "metric", "label", "description" FROM \`solutions_results\`;`)
  await db.run(sql`DROP TABLE \`solutions_results\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_results\` RENAME TO \`solutions_results\`;`)
  await db.run(sql`CREATE INDEX \`solutions_results_order_idx\` ON \`solutions_results\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_results_parent_id_idx\` ON \`solutions_results\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text,
  	\`answer\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_faqs\`("_order", "_parent_id", "id", "question", "answer") SELECT "_order", "_parent_id", "id", "question", "answer" FROM \`solutions_faqs\`;`)
  await db.run(sql`DROP TABLE \`solutions_faqs\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_faqs\` RENAME TO \`solutions_faqs\`;`)
  await db.run(sql`CREATE INDEX \`solutions_faqs_order_idx\` ON \`solutions_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_faqs_parent_id_idx\` ON \`solutions_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`slug\` text,
  	\`category\` text,
  	\`description\` text,
  	\`hero_tagline\` text,
  	\`card_metric\` text,
  	\`card_metric_label\` text,
  	\`problem\` text,
  	\`solution_overview\` text,
  	\`cta_headline\` text,
  	\`cta_description\` text,
  	\`case_study_link\` text,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions\`("id", "name", "slug", "category", "description", "hero_tagline", "card_metric", "card_metric_label", "problem", "solution_overview", "cta_headline", "cta_description", "case_study_link", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at", "_status") SELECT "id", "name", "slug", "category", "description", "hero_tagline", "card_metric", "card_metric_label", "problem", "solution_overview", "cta_headline", "cta_description", "case_study_link", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at", "_status" FROM \`solutions\`;`)
  await db.run(sql`DROP TABLE \`solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions\` RENAME TO \`solutions\`;`)
  await db.run(sql`CREATE INDEX \`solutions_name_idx\` ON \`solutions\` (\`name\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`solutions_slug_idx\` ON \`solutions\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`solutions_seo_seo_og_image_idx\` ON \`solutions\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`solutions_updated_at_idx\` ON \`solutions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`solutions_created_at_idx\` ON \`solutions\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`solutions__status_idx\` ON \`solutions\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_card_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_card_metrics\`("_order", "_parent_id", "id", "value", "label") SELECT "_order", "_parent_id", "id", "value", "label" FROM \`case_studies_card_metrics\`;`)
  await db.run(sql`DROP TABLE \`case_studies_card_metrics\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_card_metrics\` RENAME TO \`case_studies_card_metrics\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_card_metrics_order_idx\` ON \`case_studies_card_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_card_metrics_parent_id_idx\` ON \`case_studies_card_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_metrics\`("_order", "_parent_id", "id", "value", "label", "description") SELECT "_order", "_parent_id", "id", "value", "label", "description" FROM \`case_studies_metrics\`;`)
  await db.run(sql`DROP TABLE \`case_studies_metrics\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_metrics\` RENAME TO \`case_studies_metrics\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_metrics_order_idx\` ON \`case_studies_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_metrics_parent_id_idx\` ON \`case_studies_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_challenge_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_challenge_pain_points\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`DROP TABLE \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_challenge_pain_points\` RENAME TO \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_challenge_pain_points_order_idx\` ON \`case_studies_challenge_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_challenge_pain_points_parent_id_idx\` ON \`case_studies_challenge_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_solution_components\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_solution_components\`("_order", "_parent_id", "id", "title", "description") SELECT "_order", "_parent_id", "id", "title", "description" FROM \`case_studies_solution_components\`;`)
  await db.run(sql`DROP TABLE \`case_studies_solution_components\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_solution_components\` RENAME TO \`case_studies_solution_components\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_solution_components_order_idx\` ON \`case_studies_solution_components\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_solution_components_parent_id_idx\` ON \`case_studies_solution_components\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_results_before\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_results_before\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`case_studies_results_before\`;`)
  await db.run(sql`DROP TABLE \`case_studies_results_before\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_results_before\` RENAME TO \`case_studies_results_before\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_results_before_order_idx\` ON \`case_studies_results_before\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_results_before_parent_id_idx\` ON \`case_studies_results_before\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_results_after\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_results_after\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`case_studies_results_after\`;`)
  await db.run(sql`DROP TABLE \`case_studies_results_after\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_results_after\` RENAME TO \`case_studies_results_after\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_results_after_order_idx\` ON \`case_studies_results_after\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_results_after_parent_id_idx\` ON \`case_studies_results_after\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`slug\` text,
  	\`industry\` text,
  	\`subtitle\` text,
  	\`card_title\` text,
  	\`card_subtitle\` text,
  	\`challenge_intro\` text,
  	\`solution_intro\` text,
  	\`solution_timeline\` text,
  	\`quote_text\` text,
  	\`quote_author\` text,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies\`("id", "title", "slug", "industry", "subtitle", "card_title", "card_subtitle", "challenge_intro", "solution_intro", "solution_timeline", "quote_text", "quote_author", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at", "_status") SELECT "id", "title", "slug", "industry", "subtitle", "card_title", "card_subtitle", "challenge_intro", "solution_intro", "solution_timeline", "quote_text", "quote_author", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at", "_status" FROM \`case_studies\`;`)
  await db.run(sql`DROP TABLE \`case_studies\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies\` RENAME TO \`case_studies\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_title_idx\` ON \`case_studies\` (\`title\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`case_studies_slug_idx\` ON \`case_studies\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_seo_seo_og_image_idx\` ON \`case_studies\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_updated_at_idx\` ON \`case_studies\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_created_at_idx\` ON \`case_studies\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`case_studies__status_idx\` ON \`case_studies\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_market_context\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`stat\` text,
  	\`source\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_market_context\`("_order", "_parent_id", "id", "stat", "source") SELECT "_order", "_parent_id", "id", "stat", "source" FROM \`industries_market_context\`;`)
  await db.run(sql`DROP TABLE \`industries_market_context\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_market_context\` RENAME TO \`industries_market_context\`;`)
  await db.run(sql`CREATE INDEX \`industries_market_context_order_idx\` ON \`industries_market_context\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_market_context_parent_id_idx\` ON \`industries_market_context\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`challenge\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_challenges\`("_order", "_parent_id", "id", "challenge", "description") SELECT "_order", "_parent_id", "id", "challenge", "description" FROM \`industries_challenges\`;`)
  await db.run(sql`DROP TABLE \`industries_challenges\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_challenges\` RENAME TO \`industries_challenges\`;`)
  await db.run(sql`CREATE INDEX \`industries_challenges_order_idx\` ON \`industries_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_challenges_parent_id_idx\` ON \`industries_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_ai_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_ai_solutions\`("_order", "_parent_id", "id", "title", "description", "metric") SELECT "_order", "_parent_id", "id", "title", "description", "metric" FROM \`industries_ai_solutions\`;`)
  await db.run(sql`DROP TABLE \`industries_ai_solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_ai_solutions\` RENAME TO \`industries_ai_solutions\`;`)
  await db.run(sql`CREATE INDEX \`industries_ai_solutions_order_idx\` ON \`industries_ai_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_ai_solutions_parent_id_idx\` ON \`industries_ai_solutions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_integrations\`("_order", "_parent_id", "id", "name") SELECT "_order", "_parent_id", "id", "name" FROM \`industries_integrations\`;`)
  await db.run(sql`DROP TABLE \`industries_integrations\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_integrations\` RENAME TO \`industries_integrations\`;`)
  await db.run(sql`CREATE INDEX \`industries_integrations_order_idx\` ON \`industries_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_integrations_parent_id_idx\` ON \`industries_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_compliance\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`standard\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_compliance\`("_order", "_parent_id", "id", "standard", "description") SELECT "_order", "_parent_id", "id", "standard", "description" FROM \`industries_compliance\`;`)
  await db.run(sql`DROP TABLE \`industries_compliance\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_compliance\` RENAME TO \`industries_compliance\`;`)
  await db.run(sql`CREATE INDEX \`industries_compliance_order_idx\` ON \`industries_compliance\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_compliance_parent_id_idx\` ON \`industries_compliance\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_roi_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_roi_metrics\`("_order", "_parent_id", "id", "metric") SELECT "_order", "_parent_id", "id", "metric" FROM \`industries_roi_metrics\`;`)
  await db.run(sql`DROP TABLE \`industries_roi_metrics\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_roi_metrics\` RENAME TO \`industries_roi_metrics\`;`)
  await db.run(sql`CREATE INDEX \`industries_roi_metrics_order_idx\` ON \`industries_roi_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_roi_metrics_parent_id_idx\` ON \`industries_roi_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text,
  	\`answer\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_faqs\`("_order", "_parent_id", "id", "question", "answer") SELECT "_order", "_parent_id", "id", "question", "answer" FROM \`industries_faqs\`;`)
  await db.run(sql`DROP TABLE \`industries_faqs\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_faqs\` RENAME TO \`industries_faqs\`;`)
  await db.run(sql`CREATE INDEX \`industries_faqs_order_idx\` ON \`industries_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_faqs_parent_id_idx\` ON \`industries_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_related_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`slug\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_related_solutions\`("_order", "_parent_id", "id", "slug") SELECT "_order", "_parent_id", "id", "slug" FROM \`industries_related_solutions\`;`)
  await db.run(sql`DROP TABLE \`industries_related_solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_related_solutions\` RENAME TO \`industries_related_solutions\`;`)
  await db.run(sql`CREATE INDEX \`industries_related_solutions_order_idx\` ON \`industries_related_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_related_solutions_parent_id_idx\` ON \`industries_related_solutions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`slug\` text,
  	\`tagline\` text,
  	\`icon\` text,
  	\`card_description\` text,
  	\`hero_description\` text,
  	\`target_audience\` text,
  	\`seo_meta_title\` text,
  	\`seo_meta_description\` text,
  	\`seo_og_image_id\` integer,
  	\`seo_no_index\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`seo_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries\`("id", "name", "slug", "tagline", "icon", "card_description", "hero_description", "target_audience", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at", "_status") SELECT "id", "name", "slug", "tagline", "icon", "card_description", "hero_description", "target_audience", "seo_meta_title", "seo_meta_description", "seo_og_image_id", "seo_no_index", "order", "featured", "updated_at", "created_at", "_status" FROM \`industries\`;`)
  await db.run(sql`DROP TABLE \`industries\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries\` RENAME TO \`industries\`;`)
  await db.run(sql`CREATE INDEX \`industries_name_idx\` ON \`industries\` (\`name\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`industries_slug_idx\` ON \`industries\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`industries_seo_seo_og_image_idx\` ON \`industries\` (\`seo_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`industries_updated_at_idx\` ON \`industries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`industries_created_at_idx\` ON \`industries\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`industries__status_idx\` ON \`industries\` (\`_status\`);`)
}

export async function down({ db, payload: _payload, req: _req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`products_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`products_features_order_idx\` ON \`products_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`products_features_parent_id_idx\` ON \`products_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`products\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`category\` text NOT NULL,
  	\`category_color\` text DEFAULT 'blue' NOT NULL,
  	\`description\` text NOT NULL,
  	\`tagline\` text,
  	\`icon_id\` integer,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`products_name_idx\` ON \`products\` (\`name\`);`)
  await db.run(sql`CREATE INDEX \`products_icon_idx\` ON \`products\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`products_updated_at_idx\` ON \`products\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`products_created_at_idx\` ON \`products\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_stats_order_idx\` ON \`site_settings_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_stats_parent_id_idx\` ON \`site_settings_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_trust_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_trust_metrics_order_idx\` ON \`site_settings_trust_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_trust_metrics_parent_id_idx\` ON \`site_settings_trust_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_headline\` text NOT NULL,
  	\`hero_subheadline\` text,
  	\`hero_cta_primary_text\` text DEFAULT 'Get Started',
  	\`hero_cta_primary_link\` text DEFAULT '#contact',
  	\`hero_cta_secondary_text\` text DEFAULT 'Learn More',
  	\`hero_cta_secondary_link\` text DEFAULT '#solutions',
  	\`site_title\` text NOT NULL,
  	\`site_description\` text,
  	\`og_image_id\` integer,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_og_image_idx\` ON \`site_settings\` (\`og_image_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation_main_nav\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navigation_main_nav_order_idx\` ON \`navigation_main_nav\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navigation_main_nav_parent_id_idx\` ON \`navigation_main_nav\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation_footer_nav\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navigation_footer_nav_order_idx\` ON \`navigation_footer_nav\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navigation_footer_nav_parent_id_idx\` ON \`navigation_footer_nav\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navigation_social_links_order_idx\` ON \`navigation_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navigation_social_links_parent_id_idx\` ON \`navigation_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`contact_info_email\` text,
  	\`contact_info_phone\` text,
  	\`contact_info_address\` text,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`DROP TABLE \`_solutions_v_version_features\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v_version_challenges\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v_version_capabilities\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v_version_how_it_works\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v_version_integrations\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v_version_results\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v_version_faqs\`;`)
  await db.run(sql`DROP TABLE \`_solutions_v\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v_version_card_metrics\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v_version_metrics\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v_version_challenge_pain_points\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v_version_solution_components\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v_version_results_before\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v_version_results_after\`;`)
  await db.run(sql`DROP TABLE \`_case_studies_v\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_market_context\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_challenges\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_ai_solutions\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_integrations\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_compliance\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_roi_metrics\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_faqs\`;`)
  await db.run(sql`DROP TABLE \`_industries_v_version_related_solutions\`;`)
  await db.run(sql`DROP TABLE \`_industries_v\`;`)
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
  await db.run(sql`DROP INDEX \`leads_email_idx\`;`)
  await db.run(sql`CREATE INDEX \`leads_email_idx\` ON \`leads\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_features\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`solutions_features\`;`)
  await db.run(sql`DROP TABLE \`solutions_features\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_features\` RENAME TO \`solutions_features\`;`)
  await db.run(sql`CREATE INDEX \`solutions_features_order_idx\` ON \`solutions_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_features_parent_id_idx\` ON \`solutions_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_challenges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_challenges\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`solutions_challenges\`;`)
  await db.run(sql`DROP TABLE \`solutions_challenges\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_challenges\` RENAME TO \`solutions_challenges\`;`)
  await db.run(sql`CREATE INDEX \`solutions_challenges_order_idx\` ON \`solutions_challenges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_challenges_parent_id_idx\` ON \`solutions_challenges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_capabilities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_capabilities\`("_order", "_parent_id", "id", "title", "description", "metric") SELECT "_order", "_parent_id", "id", "title", "description", "metric" FROM \`solutions_capabilities\`;`)
  await db.run(sql`DROP TABLE \`solutions_capabilities\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_capabilities\` RENAME TO \`solutions_capabilities\`;`)
  await db.run(sql`CREATE INDEX \`solutions_capabilities_order_idx\` ON \`solutions_capabilities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_capabilities_parent_id_idx\` ON \`solutions_capabilities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_how_it_works\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`step\` numeric NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_how_it_works\`("_order", "_parent_id", "id", "step", "title", "description") SELECT "_order", "_parent_id", "id", "step", "title", "description" FROM \`solutions_how_it_works\`;`)
  await db.run(sql`DROP TABLE \`solutions_how_it_works\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_how_it_works\` RENAME TO \`solutions_how_it_works\`;`)
  await db.run(sql`CREATE INDEX \`solutions_how_it_works_order_idx\` ON \`solutions_how_it_works\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_how_it_works_parent_id_idx\` ON \`solutions_how_it_works\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_integrations\`("_order", "_parent_id", "id", "name") SELECT "_order", "_parent_id", "id", "name" FROM \`solutions_integrations\`;`)
  await db.run(sql`DROP TABLE \`solutions_integrations\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_integrations\` RENAME TO \`solutions_integrations\`;`)
  await db.run(sql`CREATE INDEX \`solutions_integrations_order_idx\` ON \`solutions_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_integrations_parent_id_idx\` ON \`solutions_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_results\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`metric\` text NOT NULL,
  	\`label\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_results\`("_order", "_parent_id", "id", "metric", "label", "description") SELECT "_order", "_parent_id", "id", "metric", "label", "description" FROM \`solutions_results\`;`)
  await db.run(sql`DROP TABLE \`solutions_results\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_results\` RENAME TO \`solutions_results\`;`)
  await db.run(sql`CREATE INDEX \`solutions_results_order_idx\` ON \`solutions_results\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_results_parent_id_idx\` ON \`solutions_results\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_solutions_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`solutions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_solutions_faqs\`("_order", "_parent_id", "id", "question", "answer") SELECT "_order", "_parent_id", "id", "question", "answer" FROM \`solutions_faqs\`;`)
  await db.run(sql`DROP TABLE \`solutions_faqs\`;`)
  await db.run(sql`ALTER TABLE \`__new_solutions_faqs\` RENAME TO \`solutions_faqs\`;`)
  await db.run(sql`CREATE INDEX \`solutions_faqs_order_idx\` ON \`solutions_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`solutions_faqs_parent_id_idx\` ON \`solutions_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_card_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_card_metrics\`("_order", "_parent_id", "id", "value", "label") SELECT "_order", "_parent_id", "id", "value", "label" FROM \`case_studies_card_metrics\`;`)
  await db.run(sql`DROP TABLE \`case_studies_card_metrics\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_card_metrics\` RENAME TO \`case_studies_card_metrics\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_card_metrics_order_idx\` ON \`case_studies_card_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_card_metrics_parent_id_idx\` ON \`case_studies_card_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_metrics\`("_order", "_parent_id", "id", "value", "label", "description") SELECT "_order", "_parent_id", "id", "value", "label", "description" FROM \`case_studies_metrics\`;`)
  await db.run(sql`DROP TABLE \`case_studies_metrics\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_metrics\` RENAME TO \`case_studies_metrics\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_metrics_order_idx\` ON \`case_studies_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_metrics_parent_id_idx\` ON \`case_studies_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_challenge_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_challenge_pain_points\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`DROP TABLE \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_challenge_pain_points\` RENAME TO \`case_studies_challenge_pain_points\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_challenge_pain_points_order_idx\` ON \`case_studies_challenge_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_challenge_pain_points_parent_id_idx\` ON \`case_studies_challenge_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_solution_components\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_solution_components\`("_order", "_parent_id", "id", "title", "description") SELECT "_order", "_parent_id", "id", "title", "description" FROM \`case_studies_solution_components\`;`)
  await db.run(sql`DROP TABLE \`case_studies_solution_components\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_solution_components\` RENAME TO \`case_studies_solution_components\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_solution_components_order_idx\` ON \`case_studies_solution_components\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_solution_components_parent_id_idx\` ON \`case_studies_solution_components\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_results_before\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_results_before\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`case_studies_results_before\`;`)
  await db.run(sql`DROP TABLE \`case_studies_results_before\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_results_before\` RENAME TO \`case_studies_results_before\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_results_before_order_idx\` ON \`case_studies_results_before\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_results_before_parent_id_idx\` ON \`case_studies_results_before\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_case_studies_results_after\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`case_studies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_case_studies_results_after\`("_order", "_parent_id", "id", "text") SELECT "_order", "_parent_id", "id", "text" FROM \`case_studies_results_after\`;`)
  await db.run(sql`DROP TABLE \`case_studies_results_after\`;`)
  await db.run(sql`ALTER TABLE \`__new_case_studies_results_after\` RENAME TO \`case_studies_results_after\`;`)
  await db.run(sql`CREATE INDEX \`case_studies_results_after_order_idx\` ON \`case_studies_results_after\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`case_studies_results_after_parent_id_idx\` ON \`case_studies_results_after\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_market_context\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`stat\` text NOT NULL,
  	\`source\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_market_context\`("_order", "_parent_id", "id", "stat", "source") SELECT "_order", "_parent_id", "id", "stat", "source" FROM \`industries_market_context\`;`)
  await db.run(sql`DROP TABLE \`industries_market_context\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_market_context\` RENAME TO \`industries_market_context\`;`)
  await db.run(sql`CREATE INDEX \`industries_market_context_order_idx\` ON \`industries_market_context\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_market_context_parent_id_idx\` ON \`industries_market_context\` (\`_parent_id\`);`)
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
  await db.run(sql`CREATE TABLE \`__new_industries_ai_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`metric\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_ai_solutions\`("_order", "_parent_id", "id", "title", "description", "metric") SELECT "_order", "_parent_id", "id", "title", "description", "metric" FROM \`industries_ai_solutions\`;`)
  await db.run(sql`DROP TABLE \`industries_ai_solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_ai_solutions\` RENAME TO \`industries_ai_solutions\`;`)
  await db.run(sql`CREATE INDEX \`industries_ai_solutions_order_idx\` ON \`industries_ai_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_ai_solutions_parent_id_idx\` ON \`industries_ai_solutions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_integrations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_integrations\`("_order", "_parent_id", "id", "name") SELECT "_order", "_parent_id", "id", "name" FROM \`industries_integrations\`;`)
  await db.run(sql`DROP TABLE \`industries_integrations\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_integrations\` RENAME TO \`industries_integrations\`;`)
  await db.run(sql`CREATE INDEX \`industries_integrations_order_idx\` ON \`industries_integrations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_integrations_parent_id_idx\` ON \`industries_integrations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_compliance\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`standard\` text NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_compliance\`("_order", "_parent_id", "id", "standard", "description") SELECT "_order", "_parent_id", "id", "standard", "description" FROM \`industries_compliance\`;`)
  await db.run(sql`DROP TABLE \`industries_compliance\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_compliance\` RENAME TO \`industries_compliance\`;`)
  await db.run(sql`CREATE INDEX \`industries_compliance_order_idx\` ON \`industries_compliance\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_compliance_parent_id_idx\` ON \`industries_compliance\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_roi_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`metric\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_roi_metrics\`("_order", "_parent_id", "id", "metric") SELECT "_order", "_parent_id", "id", "metric" FROM \`industries_roi_metrics\`;`)
  await db.run(sql`DROP TABLE \`industries_roi_metrics\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_roi_metrics\` RENAME TO \`industries_roi_metrics\`;`)
  await db.run(sql`CREATE INDEX \`industries_roi_metrics_order_idx\` ON \`industries_roi_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_roi_metrics_parent_id_idx\` ON \`industries_roi_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_faqs\`("_order", "_parent_id", "id", "question", "answer") SELECT "_order", "_parent_id", "id", "question", "answer" FROM \`industries_faqs\`;`)
  await db.run(sql`DROP TABLE \`industries_faqs\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_faqs\` RENAME TO \`industries_faqs\`;`)
  await db.run(sql`CREATE INDEX \`industries_faqs_order_idx\` ON \`industries_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_faqs_parent_id_idx\` ON \`industries_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_industries_related_solutions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`industries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_industries_related_solutions\`("_order", "_parent_id", "id", "slug") SELECT "_order", "_parent_id", "id", "slug" FROM \`industries_related_solutions\`;`)
  await db.run(sql`DROP TABLE \`industries_related_solutions\`;`)
  await db.run(sql`ALTER TABLE \`__new_industries_related_solutions\` RENAME TO \`industries_related_solutions\`;`)
  await db.run(sql`CREATE INDEX \`industries_related_solutions_order_idx\` ON \`industries_related_solutions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`industries_related_solutions_parent_id_idx\` ON \`industries_related_solutions\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`products_id\` integer REFERENCES products(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_products_id_idx\` ON \`payload_locked_documents_rels\` (\`products_id\`);`)
}
