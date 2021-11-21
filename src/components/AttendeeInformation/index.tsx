import { ReactElement } from "react";
import { Attendee, AttendeePermission } from "../../types";

interface AttendeeInformationProps {
    attendee: Attendee
}

const getBackgroundColor = (attendeePermission: AttendeePermission): string => {
    switch (attendeePermission) {
        case AttendeePermission.Admitted: {
            return "green";
        }

        case AttendeePermission.Banned: {
            return "grey";
        }

        case AttendeePermission.Refused: {
            return "red";
        }

        case AttendeePermission.SpecialGuest: {
            return "gold";
        }
    }
}

const AttendeeInformation = (props: AttendeeInformationProps): ReactElement => {
    return (
        <div style={{ backgroundColor: props.attendee.permission }}>
            {props.attendee.name} | {props.attendee.age}
        </div>
    )
}

export default AttendeeInformation;