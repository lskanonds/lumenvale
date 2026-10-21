import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_pages_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_pages_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_pages_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum_pages_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_pages_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__pages_v_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_plants_performance_metrics_trend" AS ENUM('none', 'up', 'down');
  CREATE TYPE "public"."enum_plants_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_plants_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_plants_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_plants_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_plants_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_plants_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum_plants_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_plants_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_plants_operating_status" AS ENUM('operating', 'repowering', 'construction');
  CREATE TYPE "public"."enum_plants_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__plants_v_version_performance_metrics_trend" AS ENUM('none', 'up', 'down');
  CREATE TYPE "public"."enum__plants_v_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__plants_v_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__plants_v_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__plants_v_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__plants_v_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__plants_v_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum__plants_v_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__plants_v_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__plants_v_version_operating_status" AS ENUM('operating', 'repowering', 'construction');
  CREATE TYPE "public"."enum__plants_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_services_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_services_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_services_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_services_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_services_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_services_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum_services_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_services_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__services_v_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__services_v_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__services_v_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__services_v_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__services_v_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum__services_v_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__services_v_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_team_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__team_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_jobs_type" AS ENUM('Full-time', 'Part-time', 'Seasonal');
  CREATE TYPE "public"."enum_jobs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__jobs_v_version_type" AS ENUM('Full-time', 'Part-time', 'Seasonal');
  CREATE TYPE "public"."enum__jobs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_enquiries_kind" AS ENUM('general', 'owners', 'investors', 'careers');
  CREATE TYPE "public"."enum_enquiries_status" AS ENUM('new', 'inProgress', 'closed');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_homepage_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_homepage_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_homepage_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_homepage_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_homepage_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_homepage_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum_homepage_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum_homepage_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_blocks_prose_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_prose_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__homepage_v_blocks_text_image_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_text_image_image_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__homepage_v_blocks_gallery_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_long_form_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_cards_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__homepage_v_blocks_details_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_details_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__homepage_v_blocks_process_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_figures_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_owner_report_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_quote_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_faq_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_inquiry_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_blocks_inquiry_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__homepage_v_blocks_inquiry_mode" AS ENUM('form', 'email');
  CREATE TYPE "public"."enum__homepage_v_blocks_contact_routes_items_email_route" AS ENUM('general', 'owners', 'investors');
  CREATE TYPE "public"."enum__homepage_v_blocks_contact_routes_surface" AS ENUM('cream', 'white', 'sand', 'accentTint', 'accentBand', 'primary', 'primaryDeep', 'primaryGradient', 'ink');
  CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum_pages_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum_pages_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "pages_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_pages_blocks_cards_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_pages_blocks_details_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "pages_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "pages_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar
  );
  
  CREATE TABLE "pages_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "pages_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum_pages_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum_pages_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum_pages_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_pages_blocks_contact_routes_surface" DEFAULT 'cream',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"show_in_nav" boolean DEFAULT false,
  	"nav_label" varchar,
  	"nav_order" numeric DEFAULT 100,
  	"title" varchar,
  	"eyebrow" varchar DEFAULT 'Lumenvale',
  	"intro" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_pages_v_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum__pages_v_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum__pages_v_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__pages_v_blocks_cards_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__pages_v_blocks_details_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum__pages_v_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum__pages_v_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum__pages_v_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__pages_v_blocks_contact_routes_surface" DEFAULT 'cream',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_show_in_nav" boolean DEFAULT false,
  	"version_nav_label" varchar,
  	"version_nav_order" numeric DEFAULT 100,
  	"version_title" varchar,
  	"version_eyebrow" varchar DEFAULT 'Lumenvale',
  	"version_intro" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "plants_performance_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"trend" "enum_plants_performance_metrics_trend" DEFAULT 'none',
  	"caption" varchar
  );
  
  CREATE TABLE "plants_performance_index_series" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"month" varchar,
  	"yield_index" numeric
  );
  
  CREATE TABLE "plants_scope_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "plants_scope" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"group" varchar
  );
  
  CREATE TABLE "plants_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "plants_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "plants_systems" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"system" varchar
  );
  
  CREATE TABLE "plants_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "plants_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "plants_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum_plants_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "plants_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum_plants_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "plants_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "plants_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_plants_blocks_cards_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "plants_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_plants_blocks_details_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "plants_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "plants_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar
  );
  
  CREATE TABLE "plants_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "plants_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "plants_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "plants_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum_plants_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum_plants_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "plants_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum_plants_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar
  );
  
  CREATE TABLE "plants_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "plants_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_plants_blocks_contact_routes_surface" DEFAULT 'cream',
  	"block_name" varchar
  );
  
  CREATE TABLE "plants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"featured" boolean DEFAULT false,
  	"order" numeric DEFAULT 0,
  	"name" varchar,
  	"technology" varchar,
  	"offtake" varchar,
  	"operating_status" "enum_plants_operating_status" DEFAULT 'operating',
  	"status_label" varchar,
  	"region" varchar,
  	"commissioned_year" numeric,
  	"capacity" numeric,
  	"storage" varchar,
  	"interconnection" varchar,
  	"role" varchar DEFAULT 'Asset management & O&M',
  	"address_street" varchar,
  	"address_city" varchar,
  	"address_state" varchar,
  	"address_zip" varchar,
  	"address_map_query" varchar,
  	"performance_headline" varchar,
  	"performance_body" varchar,
  	"performance_period" varchar,
  	"performance_source" varchar,
  	"performance_peer_group_size" numeric,
  	"performance_rank" varchar,
  	"performance_rank_caption" varchar DEFAULT 'Position within regional peer group',
  	"performance_data_note" varchar,
  	"role_summary" varchar,
  	"hero_image_id" integer,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_plants_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_plants_v_version_performance_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"trend" "enum__plants_v_version_performance_metrics_trend" DEFAULT 'none',
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_performance_index_series" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"month" varchar,
  	"yield_index" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_scope_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_scope" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"group" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_systems" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"system" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum__plants_v_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum__plants_v_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__plants_v_blocks_cards_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__plants_v_blocks_details_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum__plants_v_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum__plants_v_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum__plants_v_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plants_v_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__plants_v_blocks_contact_routes_surface" DEFAULT 'cream',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_plants_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_order" numeric DEFAULT 0,
  	"version_name" varchar,
  	"version_technology" varchar,
  	"version_offtake" varchar,
  	"version_operating_status" "enum__plants_v_version_operating_status" DEFAULT 'operating',
  	"version_status_label" varchar,
  	"version_region" varchar,
  	"version_commissioned_year" numeric,
  	"version_capacity" numeric,
  	"version_storage" varchar,
  	"version_interconnection" varchar,
  	"version_role" varchar DEFAULT 'Asset management & O&M',
  	"version_address_street" varchar,
  	"version_address_city" varchar,
  	"version_address_state" varchar,
  	"version_address_zip" varchar,
  	"version_address_map_query" varchar,
  	"version_performance_headline" varchar,
  	"version_performance_body" varchar,
  	"version_performance_period" varchar,
  	"version_performance_source" varchar,
  	"version_performance_peer_group_size" numeric,
  	"version_performance_rank" varchar,
  	"version_performance_rank_caption" varchar DEFAULT 'Position within regional peer group',
  	"version_performance_data_note" varchar,
  	"version_role_summary" varchar,
  	"version_hero_image_id" integer,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__plants_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "services_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "services_covers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "services_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum_services_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum_services_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "services_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "services_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_services_blocks_cards_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "services_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_services_blocks_details_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "services_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "services_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar
  );
  
  CREATE TABLE "services_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "services_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "services_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum_services_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum_services_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum_services_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar
  );
  
  CREATE TABLE "services_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "services_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_services_blocks_contact_routes_surface" DEFAULT 'cream',
  	"block_name" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"title" varchar,
  	"blurb" varchar,
  	"lead" varchar,
  	"reporting" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_services_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_covers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum__services_v_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum__services_v_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__services_v_blocks_cards_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__services_v_blocks_details_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum__services_v_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum__services_v_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum__services_v_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__services_v_blocks_contact_routes_surface" DEFAULT 'cream',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_title" varchar,
  	"version_blurb" varchar,
  	"version_lead" varchar,
  	"version_reporting" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "team_bio" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"name" varchar,
  	"title" varchar,
  	"email" varchar,
  	"linkedin" varchar,
  	"photo_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_team_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_team_v_version_bio" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_team_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_name" varchar,
  	"version_title" varchar,
  	"version_email" varchar,
  	"version_linkedin" varchar,
  	"version_photo_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__team_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "jobs_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "jobs_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"plant" varchar DEFAULT 'Corporate',
  	"location" varchar,
  	"type" "enum_jobs_type" DEFAULT 'Full-time',
  	"department" varchar,
  	"summary" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_jobs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_jobs_v_version_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v_version_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_jobs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_plant" varchar DEFAULT 'Corporate',
  	"version_location" varchar,
  	"version_type" "enum__jobs_v_version_type" DEFAULT 'Full-time',
  	"version_department" varchar,
  	"version_summary" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__jobs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "enquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum_enquiries_kind" NOT NULL,
  	"status" "enum_enquiries_status" DEFAULT 'new' NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"company" varchar,
  	"plant_name" varchar,
  	"capacity" varchar,
  	"location" varchar,
  	"commissioned" varchar,
  	"role" varchar,
  	"message" varchar NOT NULL,
  	"page" varchar,
  	"attachment_names" varchar,
  	"notified" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"credit" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_wide_url" varchar,
  	"sizes_wide_width" numeric,
  	"sizes_wide_height" numeric,
  	"sizes_wide_mime_type" varchar,
  	"sizes_wide_filesize" numeric,
  	"sizes_wide_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"plants_id" integer,
  	"services_id" integer,
  	"team_id" integer,
  	"jobs_id" integer,
  	"enquiries_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"descriptor" varchar,
  	"name_full" varchar,
  	"legal_name" varchar,
  	"tagline" varchar,
  	"description" varchar,
  	"url" varchar,
  	"footer_note" varchar,
  	"email_general" varchar,
  	"email_owners" varchar,
  	"email_investors" varchar,
  	"location_city" varchar,
  	"location_state" varchar,
  	"location_state_code" varchar,
  	"location_region" varchar,
  	"social_linkedin" varchar,
  	"social_facebook" varchar,
  	"social_instagram" varchar,
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_name" varchar,
  	"version_descriptor" varchar,
  	"version_name_full" varchar,
  	"version_legal_name" varchar,
  	"version_tagline" varchar,
  	"version_description" varchar,
  	"version_url" varchar,
  	"version_footer_note" varchar,
  	"version_email_general" varchar,
  	"version_email_owners" varchar,
  	"version_email_investors" varchar,
  	"version_location_city" varchar,
  	"version_location_state" varchar,
  	"version_location_state_code" varchar,
  	"version_location_region" varchar,
  	"version_social_linkedin" varchar,
  	"version_social_facebook" varchar,
  	"version_social_instagram" varchar,
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "homepage_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "homepage_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "homepage_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum_homepage_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "homepage_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum_homepage_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "homepage_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "homepage_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_homepage_blocks_cards_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "homepage_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_homepage_blocks_details_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "homepage_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "homepage_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar
  );
  
  CREATE TABLE "homepage_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "homepage_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "homepage_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "homepage_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum_homepage_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum_homepage_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum_homepage_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar
  );
  
  CREATE TABLE "homepage_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "homepage_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"surface" "enum_homepage_blocks_contact_routes_surface" DEFAULT 'cream',
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar,
  	"hero_intro" varchar,
  	"_status" "enum_homepage_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_homepage_v_version_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_prose_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"align" "enum__homepage_v_blocks_prose_align" DEFAULT 'left',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_text_image_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_text_image_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"image_side" "enum__homepage_v_blocks_text_image_image_side" DEFAULT 'right',
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_gallery_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_long_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_long_form_surface" DEFAULT 'cream',
  	"meta" varchar,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_cards_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__homepage_v_blocks_cards_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_details_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__homepage_v_blocks_details_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"marker" varchar,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_process_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"footnote" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_figures_surface" DEFAULT 'primaryDeep',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_owner_report_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"note" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_owner_report_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_owner_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_owner_report_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"report_period" varchar,
  	"covers" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_quote_surface" DEFAULT 'primary',
  	"quote" varchar,
  	"attribution" varchar,
  	"role" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_faq_surface" DEFAULT 'cream',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_cta_surface" DEFAULT 'primary',
  	"heading" varchar,
  	"body" varchar,
  	"primary_label" varchar,
  	"primary_href" varchar,
  	"secondary_label" varchar,
  	"secondary_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_inquiry_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_inquiry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_inquiry_surface" DEFAULT 'sand',
  	"eyebrow" varchar,
  	"email_route" "enum__homepage_v_blocks_inquiry_email_route" DEFAULT 'general',
  	"mode" "enum__homepage_v_blocks_inquiry_mode" DEFAULT 'form',
  	"subject" varchar,
  	"cta" varchar,
  	"allow_attachments" boolean DEFAULT false,
  	"note" varchar,
  	"footnote_eyebrow" varchar,
  	"footnote_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_contact_routes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"email_route" "enum__homepage_v_blocks_contact_routes_items_email_route" DEFAULT 'general',
  	"subject" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_contact_routes_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_contact_routes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"surface" "enum__homepage_v_blocks_contact_routes_surface" DEFAULT 'cream',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_eyebrow" varchar,
  	"version_hero_intro" varchar,
  	"version__status" "enum__homepage_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "pages_blocks_prose_paragraphs" ADD CONSTRAINT "pages_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_prose" ADD CONSTRAINT "pages_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image_paragraphs" ADD CONSTRAINT "pages_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_form" ADD CONSTRAINT "pages_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_items" ADD CONSTRAINT "pages_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards" ADD CONSTRAINT "pages_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details_items" ADD CONSTRAINT "pages_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details" ADD CONSTRAINT "pages_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps" ADD CONSTRAINT "pages_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_figures_items" ADD CONSTRAINT "pages_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_figures" ADD CONSTRAINT "pages_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_owner_report_metrics" ADD CONSTRAINT "pages_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_owner_report_actions" ADD CONSTRAINT "pages_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_owner_report" ADD CONSTRAINT "pages_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote" ADD CONSTRAINT "pages_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_inquiry_steps" ADD CONSTRAINT "pages_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_inquiry" ADD CONSTRAINT "pages_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_routes_items" ADD CONSTRAINT "pages_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_routes_columns" ADD CONSTRAINT "pages_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_routes" ADD CONSTRAINT "pages_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_prose_paragraphs" ADD CONSTRAINT "_pages_v_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_prose" ADD CONSTRAINT "_pages_v_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_image_paragraphs" ADD CONSTRAINT "_pages_v_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_image" ADD CONSTRAINT "_pages_v_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_image" ADD CONSTRAINT "_pages_v_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_form" ADD CONSTRAINT "_pages_v_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_items" ADD CONSTRAINT "_pages_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards" ADD CONSTRAINT "_pages_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_details_items" ADD CONSTRAINT "_pages_v_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_details" ADD CONSTRAINT "_pages_v_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps" ADD CONSTRAINT "_pages_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process" ADD CONSTRAINT "_pages_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_figures_items" ADD CONSTRAINT "_pages_v_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_figures" ADD CONSTRAINT "_pages_v_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_owner_report_metrics" ADD CONSTRAINT "_pages_v_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_owner_report_actions" ADD CONSTRAINT "_pages_v_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_owner_report" ADD CONSTRAINT "_pages_v_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote" ADD CONSTRAINT "_pages_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_inquiry_steps" ADD CONSTRAINT "_pages_v_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_inquiry" ADD CONSTRAINT "_pages_v_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_routes_items" ADD CONSTRAINT "_pages_v_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_routes_columns" ADD CONSTRAINT "_pages_v_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_routes" ADD CONSTRAINT "_pages_v_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_performance_metrics" ADD CONSTRAINT "plants_performance_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_performance_index_series" ADD CONSTRAINT "plants_performance_index_series_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_scope_items" ADD CONSTRAINT "plants_scope_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_scope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_scope" ADD CONSTRAINT "plants_scope_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_description" ADD CONSTRAINT "plants_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_highlights" ADD CONSTRAINT "plants_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_systems" ADD CONSTRAINT "plants_systems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_gallery" ADD CONSTRAINT "plants_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_gallery" ADD CONSTRAINT "plants_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_prose_paragraphs" ADD CONSTRAINT "plants_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_prose" ADD CONSTRAINT "plants_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_text_image_paragraphs" ADD CONSTRAINT "plants_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_text_image" ADD CONSTRAINT "plants_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_blocks_text_image" ADD CONSTRAINT "plants_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_gallery_images" ADD CONSTRAINT "plants_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "plants_blocks_gallery_images" ADD CONSTRAINT "plants_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_gallery" ADD CONSTRAINT "plants_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_long_form" ADD CONSTRAINT "plants_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_cards_items" ADD CONSTRAINT "plants_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_cards" ADD CONSTRAINT "plants_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_details_items" ADD CONSTRAINT "plants_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_details" ADD CONSTRAINT "plants_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_process_steps" ADD CONSTRAINT "plants_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_process" ADD CONSTRAINT "plants_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_figures_items" ADD CONSTRAINT "plants_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_figures" ADD CONSTRAINT "plants_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_owner_report_metrics" ADD CONSTRAINT "plants_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_owner_report_actions" ADD CONSTRAINT "plants_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_owner_report" ADD CONSTRAINT "plants_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_quote" ADD CONSTRAINT "plants_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_faq_items" ADD CONSTRAINT "plants_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_faq" ADD CONSTRAINT "plants_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_cta" ADD CONSTRAINT "plants_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_inquiry_steps" ADD CONSTRAINT "plants_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_inquiry" ADD CONSTRAINT "plants_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_contact_routes_items" ADD CONSTRAINT "plants_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_contact_routes_columns" ADD CONSTRAINT "plants_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants_blocks_contact_routes" ADD CONSTRAINT "plants_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plants" ADD CONSTRAINT "plants_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_plants_v_version_performance_metrics" ADD CONSTRAINT "_plants_v_version_performance_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_performance_index_series" ADD CONSTRAINT "_plants_v_version_performance_index_series_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_scope_items" ADD CONSTRAINT "_plants_v_version_scope_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_version_scope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_scope" ADD CONSTRAINT "_plants_v_version_scope_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_description" ADD CONSTRAINT "_plants_v_version_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_highlights" ADD CONSTRAINT "_plants_v_version_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_systems" ADD CONSTRAINT "_plants_v_version_systems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_version_gallery" ADD CONSTRAINT "_plants_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_plants_v_version_gallery" ADD CONSTRAINT "_plants_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_prose_paragraphs" ADD CONSTRAINT "_plants_v_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_prose" ADD CONSTRAINT "_plants_v_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_text_image_paragraphs" ADD CONSTRAINT "_plants_v_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_text_image" ADD CONSTRAINT "_plants_v_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_text_image" ADD CONSTRAINT "_plants_v_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_gallery_images" ADD CONSTRAINT "_plants_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_gallery_images" ADD CONSTRAINT "_plants_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_gallery" ADD CONSTRAINT "_plants_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_long_form" ADD CONSTRAINT "_plants_v_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_cards_items" ADD CONSTRAINT "_plants_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_cards" ADD CONSTRAINT "_plants_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_details_items" ADD CONSTRAINT "_plants_v_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_details" ADD CONSTRAINT "_plants_v_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_process_steps" ADD CONSTRAINT "_plants_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_process" ADD CONSTRAINT "_plants_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_figures_items" ADD CONSTRAINT "_plants_v_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_figures" ADD CONSTRAINT "_plants_v_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_owner_report_metrics" ADD CONSTRAINT "_plants_v_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_owner_report_actions" ADD CONSTRAINT "_plants_v_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_owner_report" ADD CONSTRAINT "_plants_v_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_quote" ADD CONSTRAINT "_plants_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_faq_items" ADD CONSTRAINT "_plants_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_faq" ADD CONSTRAINT "_plants_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_cta" ADD CONSTRAINT "_plants_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_inquiry_steps" ADD CONSTRAINT "_plants_v_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_inquiry" ADD CONSTRAINT "_plants_v_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_contact_routes_items" ADD CONSTRAINT "_plants_v_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_contact_routes_columns" ADD CONSTRAINT "_plants_v_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v_blocks_contact_routes" ADD CONSTRAINT "_plants_v_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plants_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plants_v" ADD CONSTRAINT "_plants_v_parent_id_plants_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."plants"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_plants_v" ADD CONSTRAINT "_plants_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_sections" ADD CONSTRAINT "services_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_covers" ADD CONSTRAINT "services_covers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_prose_paragraphs" ADD CONSTRAINT "services_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_prose" ADD CONSTRAINT "services_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_text_image_paragraphs" ADD CONSTRAINT "services_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_text_image" ADD CONSTRAINT "services_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_text_image" ADD CONSTRAINT "services_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_gallery_images" ADD CONSTRAINT "services_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_gallery_images" ADD CONSTRAINT "services_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_gallery" ADD CONSTRAINT "services_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_long_form" ADD CONSTRAINT "services_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cards_items" ADD CONSTRAINT "services_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cards" ADD CONSTRAINT "services_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_details_items" ADD CONSTRAINT "services_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_details" ADD CONSTRAINT "services_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_process_steps" ADD CONSTRAINT "services_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_process" ADD CONSTRAINT "services_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_figures_items" ADD CONSTRAINT "services_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_figures" ADD CONSTRAINT "services_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_owner_report_metrics" ADD CONSTRAINT "services_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_owner_report_actions" ADD CONSTRAINT "services_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_owner_report" ADD CONSTRAINT "services_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_quote" ADD CONSTRAINT "services_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_faq_items" ADD CONSTRAINT "services_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_faq" ADD CONSTRAINT "services_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_inquiry_steps" ADD CONSTRAINT "services_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_inquiry" ADD CONSTRAINT "services_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_contact_routes_items" ADD CONSTRAINT "services_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_contact_routes_columns" ADD CONSTRAINT "services_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_contact_routes" ADD CONSTRAINT "services_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_sections" ADD CONSTRAINT "_services_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_covers" ADD CONSTRAINT "_services_v_version_covers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_prose_paragraphs" ADD CONSTRAINT "_services_v_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_prose" ADD CONSTRAINT "_services_v_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_text_image_paragraphs" ADD CONSTRAINT "_services_v_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_text_image" ADD CONSTRAINT "_services_v_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_text_image" ADD CONSTRAINT "_services_v_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_gallery_images" ADD CONSTRAINT "_services_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_gallery_images" ADD CONSTRAINT "_services_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_gallery" ADD CONSTRAINT "_services_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_long_form" ADD CONSTRAINT "_services_v_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cards_items" ADD CONSTRAINT "_services_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cards" ADD CONSTRAINT "_services_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_details_items" ADD CONSTRAINT "_services_v_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_details" ADD CONSTRAINT "_services_v_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_process_steps" ADD CONSTRAINT "_services_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_process" ADD CONSTRAINT "_services_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_figures_items" ADD CONSTRAINT "_services_v_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_figures" ADD CONSTRAINT "_services_v_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_owner_report_metrics" ADD CONSTRAINT "_services_v_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_owner_report_actions" ADD CONSTRAINT "_services_v_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_owner_report" ADD CONSTRAINT "_services_v_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_quote" ADD CONSTRAINT "_services_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_faq_items" ADD CONSTRAINT "_services_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_faq" ADD CONSTRAINT "_services_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_inquiry_steps" ADD CONSTRAINT "_services_v_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_inquiry" ADD CONSTRAINT "_services_v_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_contact_routes_items" ADD CONSTRAINT "_services_v_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_contact_routes_columns" ADD CONSTRAINT "_services_v_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_contact_routes" ADD CONSTRAINT "_services_v_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_bio" ADD CONSTRAINT "team_bio_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v_version_bio" ADD CONSTRAINT "_team_v_version_bio_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_parent_id_team_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."team"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "jobs_responsibilities" ADD CONSTRAINT "jobs_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs_requirements" ADD CONSTRAINT "jobs_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_responsibilities" ADD CONSTRAINT "_jobs_v_version_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v_version_requirements" ADD CONSTRAINT "_jobs_v_version_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_jobs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v" ADD CONSTRAINT "_jobs_v_parent_id_jobs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."jobs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_plants_fk" FOREIGN KEY ("plants_id") REFERENCES "public"."plants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_jobs_fk" FOREIGN KEY ("jobs_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_enquiries_fk" FOREIGN KEY ("enquiries_id") REFERENCES "public"."enquiries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_stats" ADD CONSTRAINT "homepage_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_prose_paragraphs" ADD CONSTRAINT "homepage_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_prose" ADD CONSTRAINT "homepage_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_image_paragraphs" ADD CONSTRAINT "homepage_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_image" ADD CONSTRAINT "homepage_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_image" ADD CONSTRAINT "homepage_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_gallery_images" ADD CONSTRAINT "homepage_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_gallery_images" ADD CONSTRAINT "homepage_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_gallery" ADD CONSTRAINT "homepage_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_long_form" ADD CONSTRAINT "homepage_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_cards_items" ADD CONSTRAINT "homepage_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_cards" ADD CONSTRAINT "homepage_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_details_items" ADD CONSTRAINT "homepage_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_details" ADD CONSTRAINT "homepage_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_process_steps" ADD CONSTRAINT "homepage_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_process" ADD CONSTRAINT "homepage_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_figures_items" ADD CONSTRAINT "homepage_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_figures" ADD CONSTRAINT "homepage_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_owner_report_metrics" ADD CONSTRAINT "homepage_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_owner_report_actions" ADD CONSTRAINT "homepage_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_owner_report" ADD CONSTRAINT "homepage_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_quote" ADD CONSTRAINT "homepage_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_faq_items" ADD CONSTRAINT "homepage_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_faq" ADD CONSTRAINT "homepage_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_cta" ADD CONSTRAINT "homepage_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_inquiry_steps" ADD CONSTRAINT "homepage_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_inquiry" ADD CONSTRAINT "homepage_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_contact_routes_items" ADD CONSTRAINT "homepage_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_contact_routes_columns" ADD CONSTRAINT "homepage_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_contact_routes" ADD CONSTRAINT "homepage_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_stats" ADD CONSTRAINT "_homepage_v_version_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_prose_paragraphs" ADD CONSTRAINT "_homepage_v_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_prose" ADD CONSTRAINT "_homepage_v_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_text_image_paragraphs" ADD CONSTRAINT "_homepage_v_blocks_text_image_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_text_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_text_image" ADD CONSTRAINT "_homepage_v_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_text_image" ADD CONSTRAINT "_homepage_v_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_gallery_images" ADD CONSTRAINT "_homepage_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_gallery_images" ADD CONSTRAINT "_homepage_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_gallery" ADD CONSTRAINT "_homepage_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_long_form" ADD CONSTRAINT "_homepage_v_blocks_long_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_cards_items" ADD CONSTRAINT "_homepage_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_cards" ADD CONSTRAINT "_homepage_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_details_items" ADD CONSTRAINT "_homepage_v_blocks_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_details" ADD CONSTRAINT "_homepage_v_blocks_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_process_steps" ADD CONSTRAINT "_homepage_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_process" ADD CONSTRAINT "_homepage_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_figures_items" ADD CONSTRAINT "_homepage_v_blocks_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_figures" ADD CONSTRAINT "_homepage_v_blocks_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_owner_report_metrics" ADD CONSTRAINT "_homepage_v_blocks_owner_report_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_owner_report_actions" ADD CONSTRAINT "_homepage_v_blocks_owner_report_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_owner_report"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_owner_report" ADD CONSTRAINT "_homepage_v_blocks_owner_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_quote" ADD CONSTRAINT "_homepage_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_faq_items" ADD CONSTRAINT "_homepage_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_faq" ADD CONSTRAINT "_homepage_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_cta" ADD CONSTRAINT "_homepage_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_inquiry_steps" ADD CONSTRAINT "_homepage_v_blocks_inquiry_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_inquiry"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_inquiry" ADD CONSTRAINT "_homepage_v_blocks_inquiry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_contact_routes_items" ADD CONSTRAINT "_homepage_v_blocks_contact_routes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_contact_routes_columns" ADD CONSTRAINT "_homepage_v_blocks_contact_routes_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_contact_routes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_contact_routes" ADD CONSTRAINT "_homepage_v_blocks_contact_routes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_prose_paragraphs_order_idx" ON "pages_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_prose_paragraphs_parent_id_idx" ON "pages_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_prose_order_idx" ON "pages_blocks_prose" USING btree ("_order");
  CREATE INDEX "pages_blocks_prose_parent_id_idx" ON "pages_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_prose_path_idx" ON "pages_blocks_prose" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_image_paragraphs_order_idx" ON "pages_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_image_paragraphs_parent_id_idx" ON "pages_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_image_order_idx" ON "pages_blocks_text_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_image_parent_id_idx" ON "pages_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_image_path_idx" ON "pages_blocks_text_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_image_image_idx" ON "pages_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_form_order_idx" ON "pages_blocks_long_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_long_form_parent_id_idx" ON "pages_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_long_form_path_idx" ON "pages_blocks_long_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_items_order_idx" ON "pages_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_items_parent_id_idx" ON "pages_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_order_idx" ON "pages_blocks_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_parent_id_idx" ON "pages_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_path_idx" ON "pages_blocks_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_details_items_order_idx" ON "pages_blocks_details_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_items_parent_id_idx" ON "pages_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_order_idx" ON "pages_blocks_details" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_parent_id_idx" ON "pages_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_path_idx" ON "pages_blocks_details" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_steps_order_idx" ON "pages_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_parent_id_idx" ON "pages_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_order_idx" ON "pages_blocks_process" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_parent_id_idx" ON "pages_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_path_idx" ON "pages_blocks_process" USING btree ("_path");
  CREATE INDEX "pages_blocks_figures_items_order_idx" ON "pages_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_figures_items_parent_id_idx" ON "pages_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_figures_order_idx" ON "pages_blocks_figures" USING btree ("_order");
  CREATE INDEX "pages_blocks_figures_parent_id_idx" ON "pages_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_figures_path_idx" ON "pages_blocks_figures" USING btree ("_path");
  CREATE INDEX "pages_blocks_owner_report_metrics_order_idx" ON "pages_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "pages_blocks_owner_report_metrics_parent_id_idx" ON "pages_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_owner_report_actions_order_idx" ON "pages_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_owner_report_actions_parent_id_idx" ON "pages_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_owner_report_order_idx" ON "pages_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "pages_blocks_owner_report_parent_id_idx" ON "pages_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_owner_report_path_idx" ON "pages_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "pages_blocks_quote_order_idx" ON "pages_blocks_quote" USING btree ("_order");
  CREATE INDEX "pages_blocks_quote_parent_id_idx" ON "pages_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quote_path_idx" ON "pages_blocks_quote" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_inquiry_steps_order_idx" ON "pages_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_inquiry_steps_parent_id_idx" ON "pages_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_inquiry_order_idx" ON "pages_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "pages_blocks_inquiry_parent_id_idx" ON "pages_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_inquiry_path_idx" ON "pages_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_routes_items_order_idx" ON "pages_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_routes_items_parent_id_idx" ON "pages_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_routes_columns_order_idx" ON "pages_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_routes_columns_parent_id_idx" ON "pages_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_routes_order_idx" ON "pages_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_routes_parent_id_idx" ON "pages_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_routes_path_idx" ON "pages_blocks_contact_routes" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "_pages_v_blocks_prose_paragraphs_order_idx" ON "_pages_v_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_prose_paragraphs_parent_id_idx" ON "_pages_v_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_prose_order_idx" ON "_pages_v_blocks_prose" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_prose_parent_id_idx" ON "_pages_v_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_prose_path_idx" ON "_pages_v_blocks_prose" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_image_paragraphs_order_idx" ON "_pages_v_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_image_paragraphs_parent_id_idx" ON "_pages_v_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_image_order_idx" ON "_pages_v_blocks_text_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_image_parent_id_idx" ON "_pages_v_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_image_path_idx" ON "_pages_v_blocks_text_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_image_image_idx" ON "_pages_v_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_order_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_image_idx" ON "_pages_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_form_order_idx" ON "_pages_v_blocks_long_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_long_form_parent_id_idx" ON "_pages_v_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_long_form_path_idx" ON "_pages_v_blocks_long_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_items_order_idx" ON "_pages_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_items_parent_id_idx" ON "_pages_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_order_idx" ON "_pages_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_parent_id_idx" ON "_pages_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_path_idx" ON "_pages_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_details_items_order_idx" ON "_pages_v_blocks_details_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_details_items_parent_id_idx" ON "_pages_v_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_details_order_idx" ON "_pages_v_blocks_details" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_details_parent_id_idx" ON "_pages_v_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_details_path_idx" ON "_pages_v_blocks_details" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_process_steps_order_idx" ON "_pages_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_parent_id_idx" ON "_pages_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_order_idx" ON "_pages_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_parent_id_idx" ON "_pages_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_path_idx" ON "_pages_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_figures_items_order_idx" ON "_pages_v_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_figures_items_parent_id_idx" ON "_pages_v_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_figures_order_idx" ON "_pages_v_blocks_figures" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_figures_parent_id_idx" ON "_pages_v_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_figures_path_idx" ON "_pages_v_blocks_figures" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_owner_report_metrics_order_idx" ON "_pages_v_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_owner_report_metrics_parent_id_idx" ON "_pages_v_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_owner_report_actions_order_idx" ON "_pages_v_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_owner_report_actions_parent_id_idx" ON "_pages_v_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_owner_report_order_idx" ON "_pages_v_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_owner_report_parent_id_idx" ON "_pages_v_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_owner_report_path_idx" ON "_pages_v_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_quote_order_idx" ON "_pages_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quote_parent_id_idx" ON "_pages_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quote_path_idx" ON "_pages_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_inquiry_steps_order_idx" ON "_pages_v_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_inquiry_steps_parent_id_idx" ON "_pages_v_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_inquiry_order_idx" ON "_pages_v_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_inquiry_parent_id_idx" ON "_pages_v_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_inquiry_path_idx" ON "_pages_v_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_routes_items_order_idx" ON "_pages_v_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_routes_items_parent_id_idx" ON "_pages_v_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_routes_columns_order_idx" ON "_pages_v_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_routes_columns_parent_id_idx" ON "_pages_v_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_routes_order_idx" ON "_pages_v_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_routes_parent_id_idx" ON "_pages_v_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_routes_path_idx" ON "_pages_v_blocks_contact_routes" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "plants_performance_metrics_order_idx" ON "plants_performance_metrics" USING btree ("_order");
  CREATE INDEX "plants_performance_metrics_parent_id_idx" ON "plants_performance_metrics" USING btree ("_parent_id");
  CREATE INDEX "plants_performance_index_series_order_idx" ON "plants_performance_index_series" USING btree ("_order");
  CREATE INDEX "plants_performance_index_series_parent_id_idx" ON "plants_performance_index_series" USING btree ("_parent_id");
  CREATE INDEX "plants_scope_items_order_idx" ON "plants_scope_items" USING btree ("_order");
  CREATE INDEX "plants_scope_items_parent_id_idx" ON "plants_scope_items" USING btree ("_parent_id");
  CREATE INDEX "plants_scope_order_idx" ON "plants_scope" USING btree ("_order");
  CREATE INDEX "plants_scope_parent_id_idx" ON "plants_scope" USING btree ("_parent_id");
  CREATE INDEX "plants_description_order_idx" ON "plants_description" USING btree ("_order");
  CREATE INDEX "plants_description_parent_id_idx" ON "plants_description" USING btree ("_parent_id");
  CREATE INDEX "plants_highlights_order_idx" ON "plants_highlights" USING btree ("_order");
  CREATE INDEX "plants_highlights_parent_id_idx" ON "plants_highlights" USING btree ("_parent_id");
  CREATE INDEX "plants_systems_order_idx" ON "plants_systems" USING btree ("_order");
  CREATE INDEX "plants_systems_parent_id_idx" ON "plants_systems" USING btree ("_parent_id");
  CREATE INDEX "plants_gallery_order_idx" ON "plants_gallery" USING btree ("_order");
  CREATE INDEX "plants_gallery_parent_id_idx" ON "plants_gallery" USING btree ("_parent_id");
  CREATE INDEX "plants_gallery_image_idx" ON "plants_gallery" USING btree ("image_id");
  CREATE INDEX "plants_blocks_prose_paragraphs_order_idx" ON "plants_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "plants_blocks_prose_paragraphs_parent_id_idx" ON "plants_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_prose_order_idx" ON "plants_blocks_prose" USING btree ("_order");
  CREATE INDEX "plants_blocks_prose_parent_id_idx" ON "plants_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_prose_path_idx" ON "plants_blocks_prose" USING btree ("_path");
  CREATE INDEX "plants_blocks_text_image_paragraphs_order_idx" ON "plants_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "plants_blocks_text_image_paragraphs_parent_id_idx" ON "plants_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_text_image_order_idx" ON "plants_blocks_text_image" USING btree ("_order");
  CREATE INDEX "plants_blocks_text_image_parent_id_idx" ON "plants_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_text_image_path_idx" ON "plants_blocks_text_image" USING btree ("_path");
  CREATE INDEX "plants_blocks_text_image_image_idx" ON "plants_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "plants_blocks_gallery_images_order_idx" ON "plants_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "plants_blocks_gallery_images_parent_id_idx" ON "plants_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_gallery_images_image_idx" ON "plants_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "plants_blocks_gallery_order_idx" ON "plants_blocks_gallery" USING btree ("_order");
  CREATE INDEX "plants_blocks_gallery_parent_id_idx" ON "plants_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_gallery_path_idx" ON "plants_blocks_gallery" USING btree ("_path");
  CREATE INDEX "plants_blocks_long_form_order_idx" ON "plants_blocks_long_form" USING btree ("_order");
  CREATE INDEX "plants_blocks_long_form_parent_id_idx" ON "plants_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_long_form_path_idx" ON "plants_blocks_long_form" USING btree ("_path");
  CREATE INDEX "plants_blocks_cards_items_order_idx" ON "plants_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "plants_blocks_cards_items_parent_id_idx" ON "plants_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_cards_order_idx" ON "plants_blocks_cards" USING btree ("_order");
  CREATE INDEX "plants_blocks_cards_parent_id_idx" ON "plants_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_cards_path_idx" ON "plants_blocks_cards" USING btree ("_path");
  CREATE INDEX "plants_blocks_details_items_order_idx" ON "plants_blocks_details_items" USING btree ("_order");
  CREATE INDEX "plants_blocks_details_items_parent_id_idx" ON "plants_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_details_order_idx" ON "plants_blocks_details" USING btree ("_order");
  CREATE INDEX "plants_blocks_details_parent_id_idx" ON "plants_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_details_path_idx" ON "plants_blocks_details" USING btree ("_path");
  CREATE INDEX "plants_blocks_process_steps_order_idx" ON "plants_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "plants_blocks_process_steps_parent_id_idx" ON "plants_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_process_order_idx" ON "plants_blocks_process" USING btree ("_order");
  CREATE INDEX "plants_blocks_process_parent_id_idx" ON "plants_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_process_path_idx" ON "plants_blocks_process" USING btree ("_path");
  CREATE INDEX "plants_blocks_figures_items_order_idx" ON "plants_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "plants_blocks_figures_items_parent_id_idx" ON "plants_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_figures_order_idx" ON "plants_blocks_figures" USING btree ("_order");
  CREATE INDEX "plants_blocks_figures_parent_id_idx" ON "plants_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_figures_path_idx" ON "plants_blocks_figures" USING btree ("_path");
  CREATE INDEX "plants_blocks_owner_report_metrics_order_idx" ON "plants_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "plants_blocks_owner_report_metrics_parent_id_idx" ON "plants_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_owner_report_actions_order_idx" ON "plants_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "plants_blocks_owner_report_actions_parent_id_idx" ON "plants_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_owner_report_order_idx" ON "plants_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "plants_blocks_owner_report_parent_id_idx" ON "plants_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_owner_report_path_idx" ON "plants_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "plants_blocks_quote_order_idx" ON "plants_blocks_quote" USING btree ("_order");
  CREATE INDEX "plants_blocks_quote_parent_id_idx" ON "plants_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_quote_path_idx" ON "plants_blocks_quote" USING btree ("_path");
  CREATE INDEX "plants_blocks_faq_items_order_idx" ON "plants_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "plants_blocks_faq_items_parent_id_idx" ON "plants_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_faq_order_idx" ON "plants_blocks_faq" USING btree ("_order");
  CREATE INDEX "plants_blocks_faq_parent_id_idx" ON "plants_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_faq_path_idx" ON "plants_blocks_faq" USING btree ("_path");
  CREATE INDEX "plants_blocks_cta_order_idx" ON "plants_blocks_cta" USING btree ("_order");
  CREATE INDEX "plants_blocks_cta_parent_id_idx" ON "plants_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_cta_path_idx" ON "plants_blocks_cta" USING btree ("_path");
  CREATE INDEX "plants_blocks_inquiry_steps_order_idx" ON "plants_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "plants_blocks_inquiry_steps_parent_id_idx" ON "plants_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_inquiry_order_idx" ON "plants_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "plants_blocks_inquiry_parent_id_idx" ON "plants_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_inquiry_path_idx" ON "plants_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "plants_blocks_contact_routes_items_order_idx" ON "plants_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "plants_blocks_contact_routes_items_parent_id_idx" ON "plants_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_contact_routes_columns_order_idx" ON "plants_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "plants_blocks_contact_routes_columns_parent_id_idx" ON "plants_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_contact_routes_order_idx" ON "plants_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "plants_blocks_contact_routes_parent_id_idx" ON "plants_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "plants_blocks_contact_routes_path_idx" ON "plants_blocks_contact_routes" USING btree ("_path");
  CREATE UNIQUE INDEX "plants_slug_idx" ON "plants" USING btree ("slug");
  CREATE INDEX "plants_hero_image_idx" ON "plants" USING btree ("hero_image_id");
  CREATE INDEX "plants_updated_at_idx" ON "plants" USING btree ("updated_at");
  CREATE INDEX "plants_created_at_idx" ON "plants" USING btree ("created_at");
  CREATE INDEX "plants__status_idx" ON "plants" USING btree ("_status");
  CREATE INDEX "_plants_v_version_performance_metrics_order_idx" ON "_plants_v_version_performance_metrics" USING btree ("_order");
  CREATE INDEX "_plants_v_version_performance_metrics_parent_id_idx" ON "_plants_v_version_performance_metrics" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_performance_index_series_order_idx" ON "_plants_v_version_performance_index_series" USING btree ("_order");
  CREATE INDEX "_plants_v_version_performance_index_series_parent_id_idx" ON "_plants_v_version_performance_index_series" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_scope_items_order_idx" ON "_plants_v_version_scope_items" USING btree ("_order");
  CREATE INDEX "_plants_v_version_scope_items_parent_id_idx" ON "_plants_v_version_scope_items" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_scope_order_idx" ON "_plants_v_version_scope" USING btree ("_order");
  CREATE INDEX "_plants_v_version_scope_parent_id_idx" ON "_plants_v_version_scope" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_description_order_idx" ON "_plants_v_version_description" USING btree ("_order");
  CREATE INDEX "_plants_v_version_description_parent_id_idx" ON "_plants_v_version_description" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_highlights_order_idx" ON "_plants_v_version_highlights" USING btree ("_order");
  CREATE INDEX "_plants_v_version_highlights_parent_id_idx" ON "_plants_v_version_highlights" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_systems_order_idx" ON "_plants_v_version_systems" USING btree ("_order");
  CREATE INDEX "_plants_v_version_systems_parent_id_idx" ON "_plants_v_version_systems" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_gallery_order_idx" ON "_plants_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_plants_v_version_gallery_parent_id_idx" ON "_plants_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_version_gallery_image_idx" ON "_plants_v_version_gallery" USING btree ("image_id");
  CREATE INDEX "_plants_v_blocks_prose_paragraphs_order_idx" ON "_plants_v_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_prose_paragraphs_parent_id_idx" ON "_plants_v_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_prose_order_idx" ON "_plants_v_blocks_prose" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_prose_parent_id_idx" ON "_plants_v_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_prose_path_idx" ON "_plants_v_blocks_prose" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_text_image_paragraphs_order_idx" ON "_plants_v_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_text_image_paragraphs_parent_id_idx" ON "_plants_v_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_text_image_order_idx" ON "_plants_v_blocks_text_image" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_text_image_parent_id_idx" ON "_plants_v_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_text_image_path_idx" ON "_plants_v_blocks_text_image" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_text_image_image_idx" ON "_plants_v_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "_plants_v_blocks_gallery_images_order_idx" ON "_plants_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_gallery_images_parent_id_idx" ON "_plants_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_gallery_images_image_idx" ON "_plants_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_plants_v_blocks_gallery_order_idx" ON "_plants_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_gallery_parent_id_idx" ON "_plants_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_gallery_path_idx" ON "_plants_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_long_form_order_idx" ON "_plants_v_blocks_long_form" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_long_form_parent_id_idx" ON "_plants_v_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_long_form_path_idx" ON "_plants_v_blocks_long_form" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_cards_items_order_idx" ON "_plants_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_cards_items_parent_id_idx" ON "_plants_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_cards_order_idx" ON "_plants_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_cards_parent_id_idx" ON "_plants_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_cards_path_idx" ON "_plants_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_details_items_order_idx" ON "_plants_v_blocks_details_items" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_details_items_parent_id_idx" ON "_plants_v_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_details_order_idx" ON "_plants_v_blocks_details" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_details_parent_id_idx" ON "_plants_v_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_details_path_idx" ON "_plants_v_blocks_details" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_process_steps_order_idx" ON "_plants_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_process_steps_parent_id_idx" ON "_plants_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_process_order_idx" ON "_plants_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_process_parent_id_idx" ON "_plants_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_process_path_idx" ON "_plants_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_figures_items_order_idx" ON "_plants_v_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_figures_items_parent_id_idx" ON "_plants_v_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_figures_order_idx" ON "_plants_v_blocks_figures" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_figures_parent_id_idx" ON "_plants_v_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_figures_path_idx" ON "_plants_v_blocks_figures" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_owner_report_metrics_order_idx" ON "_plants_v_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_owner_report_metrics_parent_id_idx" ON "_plants_v_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_owner_report_actions_order_idx" ON "_plants_v_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_owner_report_actions_parent_id_idx" ON "_plants_v_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_owner_report_order_idx" ON "_plants_v_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_owner_report_parent_id_idx" ON "_plants_v_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_owner_report_path_idx" ON "_plants_v_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_quote_order_idx" ON "_plants_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_quote_parent_id_idx" ON "_plants_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_quote_path_idx" ON "_plants_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_faq_items_order_idx" ON "_plants_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_faq_items_parent_id_idx" ON "_plants_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_faq_order_idx" ON "_plants_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_faq_parent_id_idx" ON "_plants_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_faq_path_idx" ON "_plants_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_cta_order_idx" ON "_plants_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_cta_parent_id_idx" ON "_plants_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_cta_path_idx" ON "_plants_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_inquiry_steps_order_idx" ON "_plants_v_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_inquiry_steps_parent_id_idx" ON "_plants_v_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_inquiry_order_idx" ON "_plants_v_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_inquiry_parent_id_idx" ON "_plants_v_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_inquiry_path_idx" ON "_plants_v_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "_plants_v_blocks_contact_routes_items_order_idx" ON "_plants_v_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_contact_routes_items_parent_id_idx" ON "_plants_v_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_contact_routes_columns_order_idx" ON "_plants_v_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_contact_routes_columns_parent_id_idx" ON "_plants_v_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_contact_routes_order_idx" ON "_plants_v_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "_plants_v_blocks_contact_routes_parent_id_idx" ON "_plants_v_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "_plants_v_blocks_contact_routes_path_idx" ON "_plants_v_blocks_contact_routes" USING btree ("_path");
  CREATE INDEX "_plants_v_parent_idx" ON "_plants_v" USING btree ("parent_id");
  CREATE INDEX "_plants_v_version_version_slug_idx" ON "_plants_v" USING btree ("version_slug");
  CREATE INDEX "_plants_v_version_version_hero_image_idx" ON "_plants_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_plants_v_version_version_updated_at_idx" ON "_plants_v" USING btree ("version_updated_at");
  CREATE INDEX "_plants_v_version_version_created_at_idx" ON "_plants_v" USING btree ("version_created_at");
  CREATE INDEX "_plants_v_version_version__status_idx" ON "_plants_v" USING btree ("version__status");
  CREATE INDEX "_plants_v_created_at_idx" ON "_plants_v" USING btree ("created_at");
  CREATE INDEX "_plants_v_updated_at_idx" ON "_plants_v" USING btree ("updated_at");
  CREATE INDEX "_plants_v_latest_idx" ON "_plants_v" USING btree ("latest");
  CREATE INDEX "_plants_v_autosave_idx" ON "_plants_v" USING btree ("autosave");
  CREATE INDEX "services_sections_order_idx" ON "services_sections" USING btree ("_order");
  CREATE INDEX "services_sections_parent_id_idx" ON "services_sections" USING btree ("_parent_id");
  CREATE INDEX "services_covers_order_idx" ON "services_covers" USING btree ("_order");
  CREATE INDEX "services_covers_parent_id_idx" ON "services_covers" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_prose_paragraphs_order_idx" ON "services_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "services_blocks_prose_paragraphs_parent_id_idx" ON "services_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_prose_order_idx" ON "services_blocks_prose" USING btree ("_order");
  CREATE INDEX "services_blocks_prose_parent_id_idx" ON "services_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_prose_path_idx" ON "services_blocks_prose" USING btree ("_path");
  CREATE INDEX "services_blocks_text_image_paragraphs_order_idx" ON "services_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "services_blocks_text_image_paragraphs_parent_id_idx" ON "services_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_text_image_order_idx" ON "services_blocks_text_image" USING btree ("_order");
  CREATE INDEX "services_blocks_text_image_parent_id_idx" ON "services_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_text_image_path_idx" ON "services_blocks_text_image" USING btree ("_path");
  CREATE INDEX "services_blocks_text_image_image_idx" ON "services_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "services_blocks_gallery_images_order_idx" ON "services_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "services_blocks_gallery_images_parent_id_idx" ON "services_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_gallery_images_image_idx" ON "services_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "services_blocks_gallery_order_idx" ON "services_blocks_gallery" USING btree ("_order");
  CREATE INDEX "services_blocks_gallery_parent_id_idx" ON "services_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_gallery_path_idx" ON "services_blocks_gallery" USING btree ("_path");
  CREATE INDEX "services_blocks_long_form_order_idx" ON "services_blocks_long_form" USING btree ("_order");
  CREATE INDEX "services_blocks_long_form_parent_id_idx" ON "services_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_long_form_path_idx" ON "services_blocks_long_form" USING btree ("_path");
  CREATE INDEX "services_blocks_cards_items_order_idx" ON "services_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "services_blocks_cards_items_parent_id_idx" ON "services_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_cards_order_idx" ON "services_blocks_cards" USING btree ("_order");
  CREATE INDEX "services_blocks_cards_parent_id_idx" ON "services_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_cards_path_idx" ON "services_blocks_cards" USING btree ("_path");
  CREATE INDEX "services_blocks_details_items_order_idx" ON "services_blocks_details_items" USING btree ("_order");
  CREATE INDEX "services_blocks_details_items_parent_id_idx" ON "services_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_details_order_idx" ON "services_blocks_details" USING btree ("_order");
  CREATE INDEX "services_blocks_details_parent_id_idx" ON "services_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_details_path_idx" ON "services_blocks_details" USING btree ("_path");
  CREATE INDEX "services_blocks_process_steps_order_idx" ON "services_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "services_blocks_process_steps_parent_id_idx" ON "services_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_process_order_idx" ON "services_blocks_process" USING btree ("_order");
  CREATE INDEX "services_blocks_process_parent_id_idx" ON "services_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_process_path_idx" ON "services_blocks_process" USING btree ("_path");
  CREATE INDEX "services_blocks_figures_items_order_idx" ON "services_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "services_blocks_figures_items_parent_id_idx" ON "services_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_figures_order_idx" ON "services_blocks_figures" USING btree ("_order");
  CREATE INDEX "services_blocks_figures_parent_id_idx" ON "services_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_figures_path_idx" ON "services_blocks_figures" USING btree ("_path");
  CREATE INDEX "services_blocks_owner_report_metrics_order_idx" ON "services_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "services_blocks_owner_report_metrics_parent_id_idx" ON "services_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_owner_report_actions_order_idx" ON "services_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "services_blocks_owner_report_actions_parent_id_idx" ON "services_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_owner_report_order_idx" ON "services_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "services_blocks_owner_report_parent_id_idx" ON "services_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_owner_report_path_idx" ON "services_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "services_blocks_quote_order_idx" ON "services_blocks_quote" USING btree ("_order");
  CREATE INDEX "services_blocks_quote_parent_id_idx" ON "services_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_quote_path_idx" ON "services_blocks_quote" USING btree ("_path");
  CREATE INDEX "services_blocks_faq_items_order_idx" ON "services_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "services_blocks_faq_items_parent_id_idx" ON "services_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_faq_order_idx" ON "services_blocks_faq" USING btree ("_order");
  CREATE INDEX "services_blocks_faq_parent_id_idx" ON "services_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_faq_path_idx" ON "services_blocks_faq" USING btree ("_path");
  CREATE INDEX "services_blocks_cta_order_idx" ON "services_blocks_cta" USING btree ("_order");
  CREATE INDEX "services_blocks_cta_parent_id_idx" ON "services_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_cta_path_idx" ON "services_blocks_cta" USING btree ("_path");
  CREATE INDEX "services_blocks_inquiry_steps_order_idx" ON "services_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "services_blocks_inquiry_steps_parent_id_idx" ON "services_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_inquiry_order_idx" ON "services_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "services_blocks_inquiry_parent_id_idx" ON "services_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_inquiry_path_idx" ON "services_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "services_blocks_contact_routes_items_order_idx" ON "services_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "services_blocks_contact_routes_items_parent_id_idx" ON "services_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_contact_routes_columns_order_idx" ON "services_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "services_blocks_contact_routes_columns_parent_id_idx" ON "services_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_contact_routes_order_idx" ON "services_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "services_blocks_contact_routes_parent_id_idx" ON "services_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_contact_routes_path_idx" ON "services_blocks_contact_routes" USING btree ("_path");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX "_services_v_version_sections_order_idx" ON "_services_v_version_sections" USING btree ("_order");
  CREATE INDEX "_services_v_version_sections_parent_id_idx" ON "_services_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_covers_order_idx" ON "_services_v_version_covers" USING btree ("_order");
  CREATE INDEX "_services_v_version_covers_parent_id_idx" ON "_services_v_version_covers" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_prose_paragraphs_order_idx" ON "_services_v_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_prose_paragraphs_parent_id_idx" ON "_services_v_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_prose_order_idx" ON "_services_v_blocks_prose" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_prose_parent_id_idx" ON "_services_v_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_prose_path_idx" ON "_services_v_blocks_prose" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_text_image_paragraphs_order_idx" ON "_services_v_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_text_image_paragraphs_parent_id_idx" ON "_services_v_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_text_image_order_idx" ON "_services_v_blocks_text_image" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_text_image_parent_id_idx" ON "_services_v_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_text_image_path_idx" ON "_services_v_blocks_text_image" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_text_image_image_idx" ON "_services_v_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_gallery_images_order_idx" ON "_services_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_gallery_images_parent_id_idx" ON "_services_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_gallery_images_image_idx" ON "_services_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_gallery_order_idx" ON "_services_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_gallery_parent_id_idx" ON "_services_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_gallery_path_idx" ON "_services_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_long_form_order_idx" ON "_services_v_blocks_long_form" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_long_form_parent_id_idx" ON "_services_v_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_long_form_path_idx" ON "_services_v_blocks_long_form" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_cards_items_order_idx" ON "_services_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_cards_items_parent_id_idx" ON "_services_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_cards_order_idx" ON "_services_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_cards_parent_id_idx" ON "_services_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_cards_path_idx" ON "_services_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_details_items_order_idx" ON "_services_v_blocks_details_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_details_items_parent_id_idx" ON "_services_v_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_details_order_idx" ON "_services_v_blocks_details" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_details_parent_id_idx" ON "_services_v_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_details_path_idx" ON "_services_v_blocks_details" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_process_steps_order_idx" ON "_services_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_process_steps_parent_id_idx" ON "_services_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_process_order_idx" ON "_services_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_process_parent_id_idx" ON "_services_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_process_path_idx" ON "_services_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_figures_items_order_idx" ON "_services_v_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_figures_items_parent_id_idx" ON "_services_v_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_figures_order_idx" ON "_services_v_blocks_figures" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_figures_parent_id_idx" ON "_services_v_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_figures_path_idx" ON "_services_v_blocks_figures" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_owner_report_metrics_order_idx" ON "_services_v_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_owner_report_metrics_parent_id_idx" ON "_services_v_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_owner_report_actions_order_idx" ON "_services_v_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_owner_report_actions_parent_id_idx" ON "_services_v_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_owner_report_order_idx" ON "_services_v_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_owner_report_parent_id_idx" ON "_services_v_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_owner_report_path_idx" ON "_services_v_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_quote_order_idx" ON "_services_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_quote_parent_id_idx" ON "_services_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_quote_path_idx" ON "_services_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_faq_items_order_idx" ON "_services_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_faq_items_parent_id_idx" ON "_services_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_faq_order_idx" ON "_services_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_faq_parent_id_idx" ON "_services_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_faq_path_idx" ON "_services_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_cta_order_idx" ON "_services_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_cta_parent_id_idx" ON "_services_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_cta_path_idx" ON "_services_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_inquiry_steps_order_idx" ON "_services_v_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_inquiry_steps_parent_id_idx" ON "_services_v_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_inquiry_order_idx" ON "_services_v_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_inquiry_parent_id_idx" ON "_services_v_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_inquiry_path_idx" ON "_services_v_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_contact_routes_items_order_idx" ON "_services_v_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_contact_routes_items_parent_id_idx" ON "_services_v_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_contact_routes_columns_order_idx" ON "_services_v_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_contact_routes_columns_parent_id_idx" ON "_services_v_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_contact_routes_order_idx" ON "_services_v_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_contact_routes_parent_id_idx" ON "_services_v_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_contact_routes_path_idx" ON "_services_v_blocks_contact_routes" USING btree ("_path");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE INDEX "team_bio_order_idx" ON "team_bio" USING btree ("_order");
  CREATE INDEX "team_bio_parent_id_idx" ON "team_bio" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "team_slug_idx" ON "team" USING btree ("slug");
  CREATE INDEX "team_photo_idx" ON "team" USING btree ("photo_id");
  CREATE INDEX "team_updated_at_idx" ON "team" USING btree ("updated_at");
  CREATE INDEX "team_created_at_idx" ON "team" USING btree ("created_at");
  CREATE INDEX "team__status_idx" ON "team" USING btree ("_status");
  CREATE INDEX "_team_v_version_bio_order_idx" ON "_team_v_version_bio" USING btree ("_order");
  CREATE INDEX "_team_v_version_bio_parent_id_idx" ON "_team_v_version_bio" USING btree ("_parent_id");
  CREATE INDEX "_team_v_parent_idx" ON "_team_v" USING btree ("parent_id");
  CREATE INDEX "_team_v_version_version_slug_idx" ON "_team_v" USING btree ("version_slug");
  CREATE INDEX "_team_v_version_version_photo_idx" ON "_team_v" USING btree ("version_photo_id");
  CREATE INDEX "_team_v_version_version_updated_at_idx" ON "_team_v" USING btree ("version_updated_at");
  CREATE INDEX "_team_v_version_version_created_at_idx" ON "_team_v" USING btree ("version_created_at");
  CREATE INDEX "_team_v_version_version__status_idx" ON "_team_v" USING btree ("version__status");
  CREATE INDEX "_team_v_created_at_idx" ON "_team_v" USING btree ("created_at");
  CREATE INDEX "_team_v_updated_at_idx" ON "_team_v" USING btree ("updated_at");
  CREATE INDEX "_team_v_latest_idx" ON "_team_v" USING btree ("latest");
  CREATE INDEX "_team_v_autosave_idx" ON "_team_v" USING btree ("autosave");
  CREATE INDEX "jobs_responsibilities_order_idx" ON "jobs_responsibilities" USING btree ("_order");
  CREATE INDEX "jobs_responsibilities_parent_id_idx" ON "jobs_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "jobs_requirements_order_idx" ON "jobs_requirements" USING btree ("_order");
  CREATE INDEX "jobs_requirements_parent_id_idx" ON "jobs_requirements" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "jobs_slug_idx" ON "jobs" USING btree ("slug");
  CREATE INDEX "jobs_updated_at_idx" ON "jobs" USING btree ("updated_at");
  CREATE INDEX "jobs_created_at_idx" ON "jobs" USING btree ("created_at");
  CREATE INDEX "jobs__status_idx" ON "jobs" USING btree ("_status");
  CREATE INDEX "_jobs_v_version_responsibilities_order_idx" ON "_jobs_v_version_responsibilities" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_responsibilities_parent_id_idx" ON "_jobs_v_version_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_version_requirements_order_idx" ON "_jobs_v_version_requirements" USING btree ("_order");
  CREATE INDEX "_jobs_v_version_requirements_parent_id_idx" ON "_jobs_v_version_requirements" USING btree ("_parent_id");
  CREATE INDEX "_jobs_v_parent_idx" ON "_jobs_v" USING btree ("parent_id");
  CREATE INDEX "_jobs_v_version_version_slug_idx" ON "_jobs_v" USING btree ("version_slug");
  CREATE INDEX "_jobs_v_version_version_updated_at_idx" ON "_jobs_v" USING btree ("version_updated_at");
  CREATE INDEX "_jobs_v_version_version_created_at_idx" ON "_jobs_v" USING btree ("version_created_at");
  CREATE INDEX "_jobs_v_version_version__status_idx" ON "_jobs_v" USING btree ("version__status");
  CREATE INDEX "_jobs_v_created_at_idx" ON "_jobs_v" USING btree ("created_at");
  CREATE INDEX "_jobs_v_updated_at_idx" ON "_jobs_v" USING btree ("updated_at");
  CREATE INDEX "_jobs_v_latest_idx" ON "_jobs_v" USING btree ("latest");
  CREATE INDEX "_jobs_v_autosave_idx" ON "_jobs_v" USING btree ("autosave");
  CREATE INDEX "enquiries_updated_at_idx" ON "enquiries" USING btree ("updated_at");
  CREATE INDEX "enquiries_created_at_idx" ON "enquiries" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_wide_sizes_wide_filename_idx" ON "media" USING btree ("sizes_wide_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_plants_id_idx" ON "payload_locked_documents_rels" USING btree ("plants_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_team_id_idx" ON "payload_locked_documents_rels" USING btree ("team_id");
  CREATE INDEX "payload_locked_documents_rels_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("jobs_id");
  CREATE INDEX "payload_locked_documents_rels_enquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("enquiries_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE INDEX "_site_settings_v_autosave_idx" ON "_site_settings_v" USING btree ("autosave");
  CREATE INDEX "homepage_stats_order_idx" ON "homepage_stats" USING btree ("_order");
  CREATE INDEX "homepage_stats_parent_id_idx" ON "homepage_stats" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_prose_paragraphs_order_idx" ON "homepage_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "homepage_blocks_prose_paragraphs_parent_id_idx" ON "homepage_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_prose_order_idx" ON "homepage_blocks_prose" USING btree ("_order");
  CREATE INDEX "homepage_blocks_prose_parent_id_idx" ON "homepage_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_prose_path_idx" ON "homepage_blocks_prose" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_image_paragraphs_order_idx" ON "homepage_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_image_paragraphs_parent_id_idx" ON "homepage_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_image_order_idx" ON "homepage_blocks_text_image" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_image_parent_id_idx" ON "homepage_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_image_path_idx" ON "homepage_blocks_text_image" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_image_image_idx" ON "homepage_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "homepage_blocks_gallery_images_order_idx" ON "homepage_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "homepage_blocks_gallery_images_parent_id_idx" ON "homepage_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_gallery_images_image_idx" ON "homepage_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "homepage_blocks_gallery_order_idx" ON "homepage_blocks_gallery" USING btree ("_order");
  CREATE INDEX "homepage_blocks_gallery_parent_id_idx" ON "homepage_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_gallery_path_idx" ON "homepage_blocks_gallery" USING btree ("_path");
  CREATE INDEX "homepage_blocks_long_form_order_idx" ON "homepage_blocks_long_form" USING btree ("_order");
  CREATE INDEX "homepage_blocks_long_form_parent_id_idx" ON "homepage_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_long_form_path_idx" ON "homepage_blocks_long_form" USING btree ("_path");
  CREATE INDEX "homepage_blocks_cards_items_order_idx" ON "homepage_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_cards_items_parent_id_idx" ON "homepage_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_cards_order_idx" ON "homepage_blocks_cards" USING btree ("_order");
  CREATE INDEX "homepage_blocks_cards_parent_id_idx" ON "homepage_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_cards_path_idx" ON "homepage_blocks_cards" USING btree ("_path");
  CREATE INDEX "homepage_blocks_details_items_order_idx" ON "homepage_blocks_details_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_details_items_parent_id_idx" ON "homepage_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_details_order_idx" ON "homepage_blocks_details" USING btree ("_order");
  CREATE INDEX "homepage_blocks_details_parent_id_idx" ON "homepage_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_details_path_idx" ON "homepage_blocks_details" USING btree ("_path");
  CREATE INDEX "homepage_blocks_process_steps_order_idx" ON "homepage_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "homepage_blocks_process_steps_parent_id_idx" ON "homepage_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_process_order_idx" ON "homepage_blocks_process" USING btree ("_order");
  CREATE INDEX "homepage_blocks_process_parent_id_idx" ON "homepage_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_process_path_idx" ON "homepage_blocks_process" USING btree ("_path");
  CREATE INDEX "homepage_blocks_figures_items_order_idx" ON "homepage_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_figures_items_parent_id_idx" ON "homepage_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_figures_order_idx" ON "homepage_blocks_figures" USING btree ("_order");
  CREATE INDEX "homepage_blocks_figures_parent_id_idx" ON "homepage_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_figures_path_idx" ON "homepage_blocks_figures" USING btree ("_path");
  CREATE INDEX "homepage_blocks_owner_report_metrics_order_idx" ON "homepage_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "homepage_blocks_owner_report_metrics_parent_id_idx" ON "homepage_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_owner_report_actions_order_idx" ON "homepage_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "homepage_blocks_owner_report_actions_parent_id_idx" ON "homepage_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_owner_report_order_idx" ON "homepage_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "homepage_blocks_owner_report_parent_id_idx" ON "homepage_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_owner_report_path_idx" ON "homepage_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "homepage_blocks_quote_order_idx" ON "homepage_blocks_quote" USING btree ("_order");
  CREATE INDEX "homepage_blocks_quote_parent_id_idx" ON "homepage_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_quote_path_idx" ON "homepage_blocks_quote" USING btree ("_path");
  CREATE INDEX "homepage_blocks_faq_items_order_idx" ON "homepage_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_faq_items_parent_id_idx" ON "homepage_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_faq_order_idx" ON "homepage_blocks_faq" USING btree ("_order");
  CREATE INDEX "homepage_blocks_faq_parent_id_idx" ON "homepage_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_faq_path_idx" ON "homepage_blocks_faq" USING btree ("_path");
  CREATE INDEX "homepage_blocks_cta_order_idx" ON "homepage_blocks_cta" USING btree ("_order");
  CREATE INDEX "homepage_blocks_cta_parent_id_idx" ON "homepage_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_cta_path_idx" ON "homepage_blocks_cta" USING btree ("_path");
  CREATE INDEX "homepage_blocks_inquiry_steps_order_idx" ON "homepage_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "homepage_blocks_inquiry_steps_parent_id_idx" ON "homepage_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_inquiry_order_idx" ON "homepage_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "homepage_blocks_inquiry_parent_id_idx" ON "homepage_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_inquiry_path_idx" ON "homepage_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "homepage_blocks_contact_routes_items_order_idx" ON "homepage_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_contact_routes_items_parent_id_idx" ON "homepage_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_contact_routes_columns_order_idx" ON "homepage_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "homepage_blocks_contact_routes_columns_parent_id_idx" ON "homepage_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_contact_routes_order_idx" ON "homepage_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "homepage_blocks_contact_routes_parent_id_idx" ON "homepage_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_contact_routes_path_idx" ON "homepage_blocks_contact_routes" USING btree ("_path");
  CREATE INDEX "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE INDEX "_homepage_v_version_stats_order_idx" ON "_homepage_v_version_stats" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_stats_parent_id_idx" ON "_homepage_v_version_stats" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_prose_paragraphs_order_idx" ON "_homepage_v_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_prose_paragraphs_parent_id_idx" ON "_homepage_v_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_prose_order_idx" ON "_homepage_v_blocks_prose" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_prose_parent_id_idx" ON "_homepage_v_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_prose_path_idx" ON "_homepage_v_blocks_prose" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_text_image_paragraphs_order_idx" ON "_homepage_v_blocks_text_image_paragraphs" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_text_image_paragraphs_parent_id_idx" ON "_homepage_v_blocks_text_image_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_text_image_order_idx" ON "_homepage_v_blocks_text_image" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_text_image_parent_id_idx" ON "_homepage_v_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_text_image_path_idx" ON "_homepage_v_blocks_text_image" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_text_image_image_idx" ON "_homepage_v_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "_homepage_v_blocks_gallery_images_order_idx" ON "_homepage_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_gallery_images_parent_id_idx" ON "_homepage_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_gallery_images_image_idx" ON "_homepage_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_homepage_v_blocks_gallery_order_idx" ON "_homepage_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_gallery_parent_id_idx" ON "_homepage_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_gallery_path_idx" ON "_homepage_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_long_form_order_idx" ON "_homepage_v_blocks_long_form" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_long_form_parent_id_idx" ON "_homepage_v_blocks_long_form" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_long_form_path_idx" ON "_homepage_v_blocks_long_form" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_cards_items_order_idx" ON "_homepage_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_cards_items_parent_id_idx" ON "_homepage_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_cards_order_idx" ON "_homepage_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_cards_parent_id_idx" ON "_homepage_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_cards_path_idx" ON "_homepage_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_details_items_order_idx" ON "_homepage_v_blocks_details_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_details_items_parent_id_idx" ON "_homepage_v_blocks_details_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_details_order_idx" ON "_homepage_v_blocks_details" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_details_parent_id_idx" ON "_homepage_v_blocks_details" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_details_path_idx" ON "_homepage_v_blocks_details" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_process_steps_order_idx" ON "_homepage_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_process_steps_parent_id_idx" ON "_homepage_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_process_order_idx" ON "_homepage_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_process_parent_id_idx" ON "_homepage_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_process_path_idx" ON "_homepage_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_figures_items_order_idx" ON "_homepage_v_blocks_figures_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_figures_items_parent_id_idx" ON "_homepage_v_blocks_figures_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_figures_order_idx" ON "_homepage_v_blocks_figures" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_figures_parent_id_idx" ON "_homepage_v_blocks_figures" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_figures_path_idx" ON "_homepage_v_blocks_figures" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_owner_report_metrics_order_idx" ON "_homepage_v_blocks_owner_report_metrics" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_owner_report_metrics_parent_id_idx" ON "_homepage_v_blocks_owner_report_metrics" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_owner_report_actions_order_idx" ON "_homepage_v_blocks_owner_report_actions" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_owner_report_actions_parent_id_idx" ON "_homepage_v_blocks_owner_report_actions" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_owner_report_order_idx" ON "_homepage_v_blocks_owner_report" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_owner_report_parent_id_idx" ON "_homepage_v_blocks_owner_report" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_owner_report_path_idx" ON "_homepage_v_blocks_owner_report" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_quote_order_idx" ON "_homepage_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_quote_parent_id_idx" ON "_homepage_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_quote_path_idx" ON "_homepage_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_faq_items_order_idx" ON "_homepage_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_faq_items_parent_id_idx" ON "_homepage_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_faq_order_idx" ON "_homepage_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_faq_parent_id_idx" ON "_homepage_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_faq_path_idx" ON "_homepage_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_cta_order_idx" ON "_homepage_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_cta_parent_id_idx" ON "_homepage_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_cta_path_idx" ON "_homepage_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_inquiry_steps_order_idx" ON "_homepage_v_blocks_inquiry_steps" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_inquiry_steps_parent_id_idx" ON "_homepage_v_blocks_inquiry_steps" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_inquiry_order_idx" ON "_homepage_v_blocks_inquiry" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_inquiry_parent_id_idx" ON "_homepage_v_blocks_inquiry" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_inquiry_path_idx" ON "_homepage_v_blocks_inquiry" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_contact_routes_items_order_idx" ON "_homepage_v_blocks_contact_routes_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_contact_routes_items_parent_id_idx" ON "_homepage_v_blocks_contact_routes_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_contact_routes_columns_order_idx" ON "_homepage_v_blocks_contact_routes_columns" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_contact_routes_columns_parent_id_idx" ON "_homepage_v_blocks_contact_routes_columns" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_contact_routes_order_idx" ON "_homepage_v_blocks_contact_routes" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_contact_routes_parent_id_idx" ON "_homepage_v_blocks_contact_routes" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_contact_routes_path_idx" ON "_homepage_v_blocks_contact_routes" USING btree ("_path");
  CREATE INDEX "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX "_homepage_v_created_at_idx" ON "_homepage_v" USING btree ("created_at");
  CREATE INDEX "_homepage_v_updated_at_idx" ON "_homepage_v" USING btree ("updated_at");
  CREATE INDEX "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX "_homepage_v_autosave_idx" ON "_homepage_v" USING btree ("autosave");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_prose" CASCADE;
  DROP TABLE "pages_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_text_image" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_long_form" CASCADE;
  DROP TABLE "pages_blocks_cards_items" CASCADE;
  DROP TABLE "pages_blocks_cards" CASCADE;
  DROP TABLE "pages_blocks_details_items" CASCADE;
  DROP TABLE "pages_blocks_details" CASCADE;
  DROP TABLE "pages_blocks_process_steps" CASCADE;
  DROP TABLE "pages_blocks_process" CASCADE;
  DROP TABLE "pages_blocks_figures_items" CASCADE;
  DROP TABLE "pages_blocks_figures" CASCADE;
  DROP TABLE "pages_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "pages_blocks_owner_report_actions" CASCADE;
  DROP TABLE "pages_blocks_owner_report" CASCADE;
  DROP TABLE "pages_blocks_quote" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_inquiry_steps" CASCADE;
  DROP TABLE "pages_blocks_inquiry" CASCADE;
  DROP TABLE "pages_blocks_contact_routes_items" CASCADE;
  DROP TABLE "pages_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "pages_blocks_contact_routes" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_prose" CASCADE;
  DROP TABLE "_pages_v_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_text_image" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_long_form" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_details_items" CASCADE;
  DROP TABLE "_pages_v_blocks_details" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_process" CASCADE;
  DROP TABLE "_pages_v_blocks_figures_items" CASCADE;
  DROP TABLE "_pages_v_blocks_figures" CASCADE;
  DROP TABLE "_pages_v_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "_pages_v_blocks_owner_report_actions" CASCADE;
  DROP TABLE "_pages_v_blocks_owner_report" CASCADE;
  DROP TABLE "_pages_v_blocks_quote" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_inquiry_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_inquiry" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_routes_items" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_routes" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "plants_performance_metrics" CASCADE;
  DROP TABLE "plants_performance_index_series" CASCADE;
  DROP TABLE "plants_scope_items" CASCADE;
  DROP TABLE "plants_scope" CASCADE;
  DROP TABLE "plants_description" CASCADE;
  DROP TABLE "plants_highlights" CASCADE;
  DROP TABLE "plants_systems" CASCADE;
  DROP TABLE "plants_gallery" CASCADE;
  DROP TABLE "plants_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "plants_blocks_prose" CASCADE;
  DROP TABLE "plants_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "plants_blocks_text_image" CASCADE;
  DROP TABLE "plants_blocks_gallery_images" CASCADE;
  DROP TABLE "plants_blocks_gallery" CASCADE;
  DROP TABLE "plants_blocks_long_form" CASCADE;
  DROP TABLE "plants_blocks_cards_items" CASCADE;
  DROP TABLE "plants_blocks_cards" CASCADE;
  DROP TABLE "plants_blocks_details_items" CASCADE;
  DROP TABLE "plants_blocks_details" CASCADE;
  DROP TABLE "plants_blocks_process_steps" CASCADE;
  DROP TABLE "plants_blocks_process" CASCADE;
  DROP TABLE "plants_blocks_figures_items" CASCADE;
  DROP TABLE "plants_blocks_figures" CASCADE;
  DROP TABLE "plants_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "plants_blocks_owner_report_actions" CASCADE;
  DROP TABLE "plants_blocks_owner_report" CASCADE;
  DROP TABLE "plants_blocks_quote" CASCADE;
  DROP TABLE "plants_blocks_faq_items" CASCADE;
  DROP TABLE "plants_blocks_faq" CASCADE;
  DROP TABLE "plants_blocks_cta" CASCADE;
  DROP TABLE "plants_blocks_inquiry_steps" CASCADE;
  DROP TABLE "plants_blocks_inquiry" CASCADE;
  DROP TABLE "plants_blocks_contact_routes_items" CASCADE;
  DROP TABLE "plants_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "plants_blocks_contact_routes" CASCADE;
  DROP TABLE "plants" CASCADE;
  DROP TABLE "_plants_v_version_performance_metrics" CASCADE;
  DROP TABLE "_plants_v_version_performance_index_series" CASCADE;
  DROP TABLE "_plants_v_version_scope_items" CASCADE;
  DROP TABLE "_plants_v_version_scope" CASCADE;
  DROP TABLE "_plants_v_version_description" CASCADE;
  DROP TABLE "_plants_v_version_highlights" CASCADE;
  DROP TABLE "_plants_v_version_systems" CASCADE;
  DROP TABLE "_plants_v_version_gallery" CASCADE;
  DROP TABLE "_plants_v_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "_plants_v_blocks_prose" CASCADE;
  DROP TABLE "_plants_v_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "_plants_v_blocks_text_image" CASCADE;
  DROP TABLE "_plants_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_plants_v_blocks_gallery" CASCADE;
  DROP TABLE "_plants_v_blocks_long_form" CASCADE;
  DROP TABLE "_plants_v_blocks_cards_items" CASCADE;
  DROP TABLE "_plants_v_blocks_cards" CASCADE;
  DROP TABLE "_plants_v_blocks_details_items" CASCADE;
  DROP TABLE "_plants_v_blocks_details" CASCADE;
  DROP TABLE "_plants_v_blocks_process_steps" CASCADE;
  DROP TABLE "_plants_v_blocks_process" CASCADE;
  DROP TABLE "_plants_v_blocks_figures_items" CASCADE;
  DROP TABLE "_plants_v_blocks_figures" CASCADE;
  DROP TABLE "_plants_v_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "_plants_v_blocks_owner_report_actions" CASCADE;
  DROP TABLE "_plants_v_blocks_owner_report" CASCADE;
  DROP TABLE "_plants_v_blocks_quote" CASCADE;
  DROP TABLE "_plants_v_blocks_faq_items" CASCADE;
  DROP TABLE "_plants_v_blocks_faq" CASCADE;
  DROP TABLE "_plants_v_blocks_cta" CASCADE;
  DROP TABLE "_plants_v_blocks_inquiry_steps" CASCADE;
  DROP TABLE "_plants_v_blocks_inquiry" CASCADE;
  DROP TABLE "_plants_v_blocks_contact_routes_items" CASCADE;
  DROP TABLE "_plants_v_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "_plants_v_blocks_contact_routes" CASCADE;
  DROP TABLE "_plants_v" CASCADE;
  DROP TABLE "services_sections" CASCADE;
  DROP TABLE "services_covers" CASCADE;
  DROP TABLE "services_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "services_blocks_prose" CASCADE;
  DROP TABLE "services_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "services_blocks_text_image" CASCADE;
  DROP TABLE "services_blocks_gallery_images" CASCADE;
  DROP TABLE "services_blocks_gallery" CASCADE;
  DROP TABLE "services_blocks_long_form" CASCADE;
  DROP TABLE "services_blocks_cards_items" CASCADE;
  DROP TABLE "services_blocks_cards" CASCADE;
  DROP TABLE "services_blocks_details_items" CASCADE;
  DROP TABLE "services_blocks_details" CASCADE;
  DROP TABLE "services_blocks_process_steps" CASCADE;
  DROP TABLE "services_blocks_process" CASCADE;
  DROP TABLE "services_blocks_figures_items" CASCADE;
  DROP TABLE "services_blocks_figures" CASCADE;
  DROP TABLE "services_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "services_blocks_owner_report_actions" CASCADE;
  DROP TABLE "services_blocks_owner_report" CASCADE;
  DROP TABLE "services_blocks_quote" CASCADE;
  DROP TABLE "services_blocks_faq_items" CASCADE;
  DROP TABLE "services_blocks_faq" CASCADE;
  DROP TABLE "services_blocks_cta" CASCADE;
  DROP TABLE "services_blocks_inquiry_steps" CASCADE;
  DROP TABLE "services_blocks_inquiry" CASCADE;
  DROP TABLE "services_blocks_contact_routes_items" CASCADE;
  DROP TABLE "services_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "services_blocks_contact_routes" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "_services_v_version_sections" CASCADE;
  DROP TABLE "_services_v_version_covers" CASCADE;
  DROP TABLE "_services_v_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_prose" CASCADE;
  DROP TABLE "_services_v_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "_services_v_blocks_text_image" CASCADE;
  DROP TABLE "_services_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_services_v_blocks_gallery" CASCADE;
  DROP TABLE "_services_v_blocks_long_form" CASCADE;
  DROP TABLE "_services_v_blocks_cards_items" CASCADE;
  DROP TABLE "_services_v_blocks_cards" CASCADE;
  DROP TABLE "_services_v_blocks_details_items" CASCADE;
  DROP TABLE "_services_v_blocks_details" CASCADE;
  DROP TABLE "_services_v_blocks_process_steps" CASCADE;
  DROP TABLE "_services_v_blocks_process" CASCADE;
  DROP TABLE "_services_v_blocks_figures_items" CASCADE;
  DROP TABLE "_services_v_blocks_figures" CASCADE;
  DROP TABLE "_services_v_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "_services_v_blocks_owner_report_actions" CASCADE;
  DROP TABLE "_services_v_blocks_owner_report" CASCADE;
  DROP TABLE "_services_v_blocks_quote" CASCADE;
  DROP TABLE "_services_v_blocks_faq_items" CASCADE;
  DROP TABLE "_services_v_blocks_faq" CASCADE;
  DROP TABLE "_services_v_blocks_cta" CASCADE;
  DROP TABLE "_services_v_blocks_inquiry_steps" CASCADE;
  DROP TABLE "_services_v_blocks_inquiry" CASCADE;
  DROP TABLE "_services_v_blocks_contact_routes_items" CASCADE;
  DROP TABLE "_services_v_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "_services_v_blocks_contact_routes" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "team_bio" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "_team_v_version_bio" CASCADE;
  DROP TABLE "_team_v" CASCADE;
  DROP TABLE "jobs_responsibilities" CASCADE;
  DROP TABLE "jobs_requirements" CASCADE;
  DROP TABLE "jobs" CASCADE;
  DROP TABLE "_jobs_v_version_responsibilities" CASCADE;
  DROP TABLE "_jobs_v_version_requirements" CASCADE;
  DROP TABLE "_jobs_v" CASCADE;
  DROP TABLE "enquiries" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "homepage_stats" CASCADE;
  DROP TABLE "homepage_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "homepage_blocks_prose" CASCADE;
  DROP TABLE "homepage_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "homepage_blocks_text_image" CASCADE;
  DROP TABLE "homepage_blocks_gallery_images" CASCADE;
  DROP TABLE "homepage_blocks_gallery" CASCADE;
  DROP TABLE "homepage_blocks_long_form" CASCADE;
  DROP TABLE "homepage_blocks_cards_items" CASCADE;
  DROP TABLE "homepage_blocks_cards" CASCADE;
  DROP TABLE "homepage_blocks_details_items" CASCADE;
  DROP TABLE "homepage_blocks_details" CASCADE;
  DROP TABLE "homepage_blocks_process_steps" CASCADE;
  DROP TABLE "homepage_blocks_process" CASCADE;
  DROP TABLE "homepage_blocks_figures_items" CASCADE;
  DROP TABLE "homepage_blocks_figures" CASCADE;
  DROP TABLE "homepage_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "homepage_blocks_owner_report_actions" CASCADE;
  DROP TABLE "homepage_blocks_owner_report" CASCADE;
  DROP TABLE "homepage_blocks_quote" CASCADE;
  DROP TABLE "homepage_blocks_faq_items" CASCADE;
  DROP TABLE "homepage_blocks_faq" CASCADE;
  DROP TABLE "homepage_blocks_cta" CASCADE;
  DROP TABLE "homepage_blocks_inquiry_steps" CASCADE;
  DROP TABLE "homepage_blocks_inquiry" CASCADE;
  DROP TABLE "homepage_blocks_contact_routes_items" CASCADE;
  DROP TABLE "homepage_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "homepage_blocks_contact_routes" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "_homepage_v_version_stats" CASCADE;
  DROP TABLE "_homepage_v_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "_homepage_v_blocks_prose" CASCADE;
  DROP TABLE "_homepage_v_blocks_text_image_paragraphs" CASCADE;
  DROP TABLE "_homepage_v_blocks_text_image" CASCADE;
  DROP TABLE "_homepage_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_homepage_v_blocks_gallery" CASCADE;
  DROP TABLE "_homepage_v_blocks_long_form" CASCADE;
  DROP TABLE "_homepage_v_blocks_cards_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_cards" CASCADE;
  DROP TABLE "_homepage_v_blocks_details_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_details" CASCADE;
  DROP TABLE "_homepage_v_blocks_process_steps" CASCADE;
  DROP TABLE "_homepage_v_blocks_process" CASCADE;
  DROP TABLE "_homepage_v_blocks_figures_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_figures" CASCADE;
  DROP TABLE "_homepage_v_blocks_owner_report_metrics" CASCADE;
  DROP TABLE "_homepage_v_blocks_owner_report_actions" CASCADE;
  DROP TABLE "_homepage_v_blocks_owner_report" CASCADE;
  DROP TABLE "_homepage_v_blocks_quote" CASCADE;
  DROP TABLE "_homepage_v_blocks_faq_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_faq" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta" CASCADE;
  DROP TABLE "_homepage_v_blocks_inquiry_steps" CASCADE;
  DROP TABLE "_homepage_v_blocks_inquiry" CASCADE;
  DROP TABLE "_homepage_v_blocks_contact_routes_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_contact_routes_columns" CASCADE;
  DROP TABLE "_homepage_v_blocks_contact_routes" CASCADE;
  DROP TABLE "_homepage_v" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_prose_surface";
  DROP TYPE "public"."enum_pages_blocks_prose_align";
  DROP TYPE "public"."enum_pages_blocks_text_image_surface";
  DROP TYPE "public"."enum_pages_blocks_text_image_image_side";
  DROP TYPE "public"."enum_pages_blocks_gallery_surface";
  DROP TYPE "public"."enum_pages_blocks_long_form_surface";
  DROP TYPE "public"."enum_pages_blocks_cards_surface";
  DROP TYPE "public"."enum_pages_blocks_cards_columns";
  DROP TYPE "public"."enum_pages_blocks_details_surface";
  DROP TYPE "public"."enum_pages_blocks_details_columns";
  DROP TYPE "public"."enum_pages_blocks_process_surface";
  DROP TYPE "public"."enum_pages_blocks_figures_surface";
  DROP TYPE "public"."enum_pages_blocks_owner_report_surface";
  DROP TYPE "public"."enum_pages_blocks_quote_surface";
  DROP TYPE "public"."enum_pages_blocks_faq_surface";
  DROP TYPE "public"."enum_pages_blocks_cta_surface";
  DROP TYPE "public"."enum_pages_blocks_inquiry_surface";
  DROP TYPE "public"."enum_pages_blocks_inquiry_email_route";
  DROP TYPE "public"."enum_pages_blocks_inquiry_mode";
  DROP TYPE "public"."enum_pages_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum_pages_blocks_contact_routes_surface";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_prose_surface";
  DROP TYPE "public"."enum__pages_v_blocks_prose_align";
  DROP TYPE "public"."enum__pages_v_blocks_text_image_surface";
  DROP TYPE "public"."enum__pages_v_blocks_text_image_image_side";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_surface";
  DROP TYPE "public"."enum__pages_v_blocks_long_form_surface";
  DROP TYPE "public"."enum__pages_v_blocks_cards_surface";
  DROP TYPE "public"."enum__pages_v_blocks_cards_columns";
  DROP TYPE "public"."enum__pages_v_blocks_details_surface";
  DROP TYPE "public"."enum__pages_v_blocks_details_columns";
  DROP TYPE "public"."enum__pages_v_blocks_process_surface";
  DROP TYPE "public"."enum__pages_v_blocks_figures_surface";
  DROP TYPE "public"."enum__pages_v_blocks_owner_report_surface";
  DROP TYPE "public"."enum__pages_v_blocks_quote_surface";
  DROP TYPE "public"."enum__pages_v_blocks_faq_surface";
  DROP TYPE "public"."enum__pages_v_blocks_cta_surface";
  DROP TYPE "public"."enum__pages_v_blocks_inquiry_surface";
  DROP TYPE "public"."enum__pages_v_blocks_inquiry_email_route";
  DROP TYPE "public"."enum__pages_v_blocks_inquiry_mode";
  DROP TYPE "public"."enum__pages_v_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum__pages_v_blocks_contact_routes_surface";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_plants_performance_metrics_trend";
  DROP TYPE "public"."enum_plants_blocks_prose_surface";
  DROP TYPE "public"."enum_plants_blocks_prose_align";
  DROP TYPE "public"."enum_plants_blocks_text_image_surface";
  DROP TYPE "public"."enum_plants_blocks_text_image_image_side";
  DROP TYPE "public"."enum_plants_blocks_gallery_surface";
  DROP TYPE "public"."enum_plants_blocks_long_form_surface";
  DROP TYPE "public"."enum_plants_blocks_cards_surface";
  DROP TYPE "public"."enum_plants_blocks_cards_columns";
  DROP TYPE "public"."enum_plants_blocks_details_surface";
  DROP TYPE "public"."enum_plants_blocks_details_columns";
  DROP TYPE "public"."enum_plants_blocks_process_surface";
  DROP TYPE "public"."enum_plants_blocks_figures_surface";
  DROP TYPE "public"."enum_plants_blocks_owner_report_surface";
  DROP TYPE "public"."enum_plants_blocks_quote_surface";
  DROP TYPE "public"."enum_plants_blocks_faq_surface";
  DROP TYPE "public"."enum_plants_blocks_cta_surface";
  DROP TYPE "public"."enum_plants_blocks_inquiry_surface";
  DROP TYPE "public"."enum_plants_blocks_inquiry_email_route";
  DROP TYPE "public"."enum_plants_blocks_inquiry_mode";
  DROP TYPE "public"."enum_plants_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum_plants_blocks_contact_routes_surface";
  DROP TYPE "public"."enum_plants_operating_status";
  DROP TYPE "public"."enum_plants_status";
  DROP TYPE "public"."enum__plants_v_version_performance_metrics_trend";
  DROP TYPE "public"."enum__plants_v_blocks_prose_surface";
  DROP TYPE "public"."enum__plants_v_blocks_prose_align";
  DROP TYPE "public"."enum__plants_v_blocks_text_image_surface";
  DROP TYPE "public"."enum__plants_v_blocks_text_image_image_side";
  DROP TYPE "public"."enum__plants_v_blocks_gallery_surface";
  DROP TYPE "public"."enum__plants_v_blocks_long_form_surface";
  DROP TYPE "public"."enum__plants_v_blocks_cards_surface";
  DROP TYPE "public"."enum__plants_v_blocks_cards_columns";
  DROP TYPE "public"."enum__plants_v_blocks_details_surface";
  DROP TYPE "public"."enum__plants_v_blocks_details_columns";
  DROP TYPE "public"."enum__plants_v_blocks_process_surface";
  DROP TYPE "public"."enum__plants_v_blocks_figures_surface";
  DROP TYPE "public"."enum__plants_v_blocks_owner_report_surface";
  DROP TYPE "public"."enum__plants_v_blocks_quote_surface";
  DROP TYPE "public"."enum__plants_v_blocks_faq_surface";
  DROP TYPE "public"."enum__plants_v_blocks_cta_surface";
  DROP TYPE "public"."enum__plants_v_blocks_inquiry_surface";
  DROP TYPE "public"."enum__plants_v_blocks_inquiry_email_route";
  DROP TYPE "public"."enum__plants_v_blocks_inquiry_mode";
  DROP TYPE "public"."enum__plants_v_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum__plants_v_blocks_contact_routes_surface";
  DROP TYPE "public"."enum__plants_v_version_operating_status";
  DROP TYPE "public"."enum__plants_v_version_status";
  DROP TYPE "public"."enum_services_blocks_prose_surface";
  DROP TYPE "public"."enum_services_blocks_prose_align";
  DROP TYPE "public"."enum_services_blocks_text_image_surface";
  DROP TYPE "public"."enum_services_blocks_text_image_image_side";
  DROP TYPE "public"."enum_services_blocks_gallery_surface";
  DROP TYPE "public"."enum_services_blocks_long_form_surface";
  DROP TYPE "public"."enum_services_blocks_cards_surface";
  DROP TYPE "public"."enum_services_blocks_cards_columns";
  DROP TYPE "public"."enum_services_blocks_details_surface";
  DROP TYPE "public"."enum_services_blocks_details_columns";
  DROP TYPE "public"."enum_services_blocks_process_surface";
  DROP TYPE "public"."enum_services_blocks_figures_surface";
  DROP TYPE "public"."enum_services_blocks_owner_report_surface";
  DROP TYPE "public"."enum_services_blocks_quote_surface";
  DROP TYPE "public"."enum_services_blocks_faq_surface";
  DROP TYPE "public"."enum_services_blocks_cta_surface";
  DROP TYPE "public"."enum_services_blocks_inquiry_surface";
  DROP TYPE "public"."enum_services_blocks_inquiry_email_route";
  DROP TYPE "public"."enum_services_blocks_inquiry_mode";
  DROP TYPE "public"."enum_services_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum_services_blocks_contact_routes_surface";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_blocks_prose_surface";
  DROP TYPE "public"."enum__services_v_blocks_prose_align";
  DROP TYPE "public"."enum__services_v_blocks_text_image_surface";
  DROP TYPE "public"."enum__services_v_blocks_text_image_image_side";
  DROP TYPE "public"."enum__services_v_blocks_gallery_surface";
  DROP TYPE "public"."enum__services_v_blocks_long_form_surface";
  DROP TYPE "public"."enum__services_v_blocks_cards_surface";
  DROP TYPE "public"."enum__services_v_blocks_cards_columns";
  DROP TYPE "public"."enum__services_v_blocks_details_surface";
  DROP TYPE "public"."enum__services_v_blocks_details_columns";
  DROP TYPE "public"."enum__services_v_blocks_process_surface";
  DROP TYPE "public"."enum__services_v_blocks_figures_surface";
  DROP TYPE "public"."enum__services_v_blocks_owner_report_surface";
  DROP TYPE "public"."enum__services_v_blocks_quote_surface";
  DROP TYPE "public"."enum__services_v_blocks_faq_surface";
  DROP TYPE "public"."enum__services_v_blocks_cta_surface";
  DROP TYPE "public"."enum__services_v_blocks_inquiry_surface";
  DROP TYPE "public"."enum__services_v_blocks_inquiry_email_route";
  DROP TYPE "public"."enum__services_v_blocks_inquiry_mode";
  DROP TYPE "public"."enum__services_v_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum__services_v_blocks_contact_routes_surface";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_team_status";
  DROP TYPE "public"."enum__team_v_version_status";
  DROP TYPE "public"."enum_jobs_type";
  DROP TYPE "public"."enum_jobs_status";
  DROP TYPE "public"."enum__jobs_v_version_type";
  DROP TYPE "public"."enum__jobs_v_version_status";
  DROP TYPE "public"."enum_enquiries_kind";
  DROP TYPE "public"."enum_enquiries_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_status";
  DROP TYPE "public"."enum_homepage_blocks_prose_surface";
  DROP TYPE "public"."enum_homepage_blocks_prose_align";
  DROP TYPE "public"."enum_homepage_blocks_text_image_surface";
  DROP TYPE "public"."enum_homepage_blocks_text_image_image_side";
  DROP TYPE "public"."enum_homepage_blocks_gallery_surface";
  DROP TYPE "public"."enum_homepage_blocks_long_form_surface";
  DROP TYPE "public"."enum_homepage_blocks_cards_surface";
  DROP TYPE "public"."enum_homepage_blocks_cards_columns";
  DROP TYPE "public"."enum_homepage_blocks_details_surface";
  DROP TYPE "public"."enum_homepage_blocks_details_columns";
  DROP TYPE "public"."enum_homepage_blocks_process_surface";
  DROP TYPE "public"."enum_homepage_blocks_figures_surface";
  DROP TYPE "public"."enum_homepage_blocks_owner_report_surface";
  DROP TYPE "public"."enum_homepage_blocks_quote_surface";
  DROP TYPE "public"."enum_homepage_blocks_faq_surface";
  DROP TYPE "public"."enum_homepage_blocks_cta_surface";
  DROP TYPE "public"."enum_homepage_blocks_inquiry_surface";
  DROP TYPE "public"."enum_homepage_blocks_inquiry_email_route";
  DROP TYPE "public"."enum_homepage_blocks_inquiry_mode";
  DROP TYPE "public"."enum_homepage_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum_homepage_blocks_contact_routes_surface";
  DROP TYPE "public"."enum_homepage_status";
  DROP TYPE "public"."enum__homepage_v_blocks_prose_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_prose_align";
  DROP TYPE "public"."enum__homepage_v_blocks_text_image_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_text_image_image_side";
  DROP TYPE "public"."enum__homepage_v_blocks_gallery_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_long_form_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_cards_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_cards_columns";
  DROP TYPE "public"."enum__homepage_v_blocks_details_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_details_columns";
  DROP TYPE "public"."enum__homepage_v_blocks_process_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_figures_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_owner_report_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_quote_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_faq_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_inquiry_surface";
  DROP TYPE "public"."enum__homepage_v_blocks_inquiry_email_route";
  DROP TYPE "public"."enum__homepage_v_blocks_inquiry_mode";
  DROP TYPE "public"."enum__homepage_v_blocks_contact_routes_items_email_route";
  DROP TYPE "public"."enum__homepage_v_blocks_contact_routes_surface";
  DROP TYPE "public"."enum__homepage_v_version_status";`)
}
