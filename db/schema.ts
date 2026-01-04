import { pgEnum, pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';


export const JobType = pgEnum("Job_type", [
    "Finance",
    "Education",
    "Legal"
]);


export const clients = pgTable('clients', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    country: text('country').notNull(),
    compweb: text('website').notNull(),
    job: JobType("job_type").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    phoneNumber: text("phone_number").notNull().default('')

});

export type Client = typeof clients.$inferSelect;

