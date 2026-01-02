"use server"

import { db } from "@/db/drizzle";
import { clients, Client } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GetClients() {
    try {
        const allClients = await db.select().from(clients);
        return allClients
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function CreateClient(client: Omit<Client, "id" | "createdAt">) {
    //returns a successs or an error code 

    try {
        const result = await db.insert(clients).values(client).returning();
        return { success: true, data: result };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to create contact information" };
    }
}

export async function DeleteClient(client: string) {
    try {
        await db.delete(clients).where(eq(clients.id, client));
    } catch (error) {
        console.log(error);
        return { error: "Failed to delete client information contact IT for help" }
    }

}





