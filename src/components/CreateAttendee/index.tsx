import { ReactElement, useState } from "react"; 
import { AddAttendeeFunction } from "../../custom-hooks/useAttendees";
import { AttendeePermission } from "../../types";

interface CreateAttendeeProps {
    addAttendee: AddAttendeeFunction
}

const permissionsOptions: Record<string, AttendeePermission> = {
    'Admitted': AttendeePermission.Admitted,
    'Banned': AttendeePermission.Banned,
    'Refused': AttendeePermission.Refused,
    'Special Guest': AttendeePermission.SpecialGuest
}

const permissionsKeys = Object.keys(permissionsOptions);

const CreateAttendee = (props: CreateAttendeeProps): ReactElement => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0)
    const [permission, setPermission] = useState<string>(permissionsKeys[0])

    const save = () => {
        props.addAttendee({
            name,
            age,
            permission: permissionsOptions[permission]
        });
    }

    return (
        <div>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter name"
            />
            <br />
            <input
                value={age}
                type="number"
                onChange={e => setAge(Number(e.target.value))}
                placeholder="Enter age"
            />
            <br />
            <select value={permission} onChange={e => setPermission(e.target.value)}>
                {permissionsKeys.map(perm => (
                    <option value={perm}>
                        {perm}
                    </option>
                ))}
            </select>
            <br />
            <button onClick={save}>
                Save
            </button>
        </div>
    )
}

export default CreateAttendee;