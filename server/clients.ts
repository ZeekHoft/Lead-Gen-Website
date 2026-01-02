import { db } from "@/db/drizzle";
import { clients, Client } from "@/db/schema";

export async function GetClients() {
    try {
        const allClients = await db.select().from(clients);
        return allClients
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function CreateClinet(client: Omit<Client, "id" | "created_at">) {
    try {
        const newClient = await db.insert(clients).values(client);
        return newClient;
    } catch (error) {
        console.log(error);
        return { error: "Failed to create contact information" };
    }


}






