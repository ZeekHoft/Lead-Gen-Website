"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Button } from "./ui/button"
import { Loader2, Trash2 } from "lucide-react"
import { DeleteClient } from "@/server/clients";
import { Client } from "@neondatabase/serverless";
import { toast } from "sonner";
interface ClientForm {
    clientId: string;
}

export default function DeleteButton({ clientId }: ClientForm) {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const handleDelete = async () => {
        try {
            setIsLoading(true);
            await DeleteClient(clientId);
            toast.error("Deleted Client information")
            setIsOpen(false);
            router.refresh();
        } catch (error) {
            console.log(error)
            toast.error("Failed to Client information, contact IT for help")

        } finally {
            setIsLoading(false);

        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <Button variant="destructive">
                    <Trash2 />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action will be permanently deleting clients data, there will not be any other way
                        to retreive back the deleted information.
                    </DialogDescription>
                </DialogHeader>
                <Button disabled={isLoading} variant="destructive" onClick={handleDelete}>
                    {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Delete Client Contact"}


                </Button>
            </DialogContent>
        </Dialog>
    )
}

