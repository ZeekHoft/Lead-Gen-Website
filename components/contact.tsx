"use client" // MUST BE AT THE TOP

import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Client, JobType } from '@/db/schema'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { CreateClient } from "@/server/clients"
import { useState } from "react"

export const clientFormSchema = z.object({
    name: z.string().min(2, "Name too short").max(50),
    email: z.string().email("Invalid email address"),
    country: z.string().min(1, "Please select a country"),
    compweb: z.string().url("Please enter a valid URL (include https://)"),
    job: z.enum(JobType.enumValues),
});


interface ClientForm {
    client?: Client;
}

export default function ContactSection({ client }: ClientForm) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof clientFormSchema>>({

        resolver: zodResolver(clientFormSchema),
        defaultValues: {
            name: "",
            email: "",
            country: "",
            compweb: "",
            job: undefined,
        }
    });

    async function onSubmit(values: z.infer<typeof clientFormSchema>) {
        setIsSubmitting(true);
        try {
            if (client) {
            } else {
                const response = await CreateClient(values);
                // Checks if what was returned an error code or not
                if (response?.error) {
                    alert(`Error: ${response.error}`);
                } else {
                    alert("Form submitted successfully!");
                    form.reset();
                }
            }
        } catch (error) {
            // This only catches network/critical failures
            console.error("Submission error:", error);
            alert("An unexpected network error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Contact Us!</h1>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    {/* Wrap everything in the Form Provider */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            {/* Full Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Lacey Austin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="compweb"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Website</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://example.com" {...field} />
                                        </FormControl>
                                        <FormDescription>Must start with https://</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Work Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="lacey@company.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Input Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Germany | Philippines | U.S.A" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Job Function (Enum Select) */}
                            <FormField
                                control={form.control}
                                name="job"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Function</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Job Function" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {JobType.enumValues.map((value) => (
                                                    <SelectItem key={value} value={value}>
                                                        {value}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </Form>
                </Card>
            </div>
        </section>
    )
}