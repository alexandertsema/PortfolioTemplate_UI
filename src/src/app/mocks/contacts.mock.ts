import { ContactType } from "app/models/enums/contactType";

export let mockContacts = [
    {
        id: 1,
        contactType: ContactType.email,
        value: 'alexandertsema@alexandertsema.com'
    },
    {
        id: 2,
        contactType: ContactType.phone,
        value: '+1 917 998 888 22'
    },
    {
        id: 3,
        contactType: ContactType.location,
        value: 'NY, NY, USA'
    },
]