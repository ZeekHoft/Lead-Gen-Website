

import { GetClients } from "@/server/clients"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
async function DisplayContact() {
    const contact = await GetClients();
    return (



        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {contact.map((cntct) => (
                    <TableRow key={cntct.id}>
                        < TableCell className="font-medium" > {cntct.email}</TableCell>
                        <TableCell>{cntct.name}</TableCell>
                        <TableCell>{cntct.country}</TableCell>
                        <TableCell className="text-right">{cntct.job}</TableCell>
                    </TableRow>

                ))}

            </TableBody>
        </Table >
    )
}

export default DisplayContact