

import { GetClients } from "@/server/clients"

async function DisplayContact() {
    const contact = await GetClients();
    return (
        <div>
            {contact.map((cntct) => (

                cntct.email


            ))}

        </div>
    )
}

export default DisplayContact