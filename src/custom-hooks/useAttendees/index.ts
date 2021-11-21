import { useState } from 'react';
import { Attendee, AttendeePermission } from "../../types";

const initialAttendees: Attendee[] = [
    {
        name: 'John',
        age: 21,
        permission: AttendeePermission.Admitted
    },
    {
        name: 'Greg',
        age: 14,
        permission: AttendeePermission.Refused
    }
];

export type AddAttendeeFunction = (attendee: Attendee) => void;

const useAttendees = (): [Attendee[], AddAttendeeFunction] => {
    const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees);

    const addAttendee = (newAttendee: Attendee): void => {
        setAttendees([...attendees, newAttendee]);
    }

    return [attendees, addAttendee]
}

export default useAttendees;