
import { useMemo } from "react";
import { getContact } from "../data/items";
import { useParams } from "react-router-dom";

export default function Contact () {
    const params = useParams();
    const contact = useMemo(
        () => getContact(params.contactid),
        [params.contactid]
    );
    return (
        <div>
            <h1>{contact.name}</h1>
            <p>{contact.telephone}</p>
            <p>{contact.favorite}</p>            
        </div>
    )
}