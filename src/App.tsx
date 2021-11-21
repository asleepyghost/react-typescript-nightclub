import AttendeeList from './components/AttendeeList'
import useAttendees from './custom-hooks/useAttendees'

function App() {
  const [attendees, addAttendee] = useAttendees()

  return (
    <div className="App">
      <AttendeeList
        attendees={attendees}
        addAttendee={(addAttendee)}
      />
    </div>
  );
}

export default App;
