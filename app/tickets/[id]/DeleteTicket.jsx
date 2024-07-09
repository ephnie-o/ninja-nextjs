"use client"

import { useRouter } from "next/navigation"

export default function DeleteTicket({ ticketId }) {
    const router = useRouter()

    const handleClick = (id) => {
        fetch(`http://localhost:4000/tickets/${ticketId}`, {
            method: "DELETE"
        }).then(() => {
            router.push('/tickets')
            router.refresh()
        })
    }

    return (
        <div>
            <button className="bg-primary text-white rounded-md" onClick={handleClick}>Delete</button>
        </div>
    )
}
