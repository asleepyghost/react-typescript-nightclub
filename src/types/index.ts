export enum AttendeePermission {
    Admitted = "green",
    Refused = "red",
    Banned = "grey",
    SpecialGuest = "gold"
}

export interface Attendee {
    name: string,
    age: number,
    permission: AttendeePermission
}