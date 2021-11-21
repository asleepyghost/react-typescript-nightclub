import { ReactElement } from "react";
import { AddAttendeeFunction } from "../../custom-hooks/useAttendees";
import { Attendee } from "../../types";
import AttendeeInformation from "../AttendeeInformation";
import CreateAttendee from "../CreateAttendee";

interface AttendeeListProps {
    attendees: Attendee[],
    addAttendee: AddAttendeeFunction,
}

const AttendeeList = (props: AttendeeListProps): ReactElement => {
    return (
        <div className="AttendeeList">
            {props.attendees.map(attendee => <AttendeeInformation attendee={attendee} />)}
            <br />
            <CreateAttendee addAttendee={props.addAttendee} />
        </div>
    )
};

export default AttendeeList;