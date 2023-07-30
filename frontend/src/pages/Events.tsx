import { useContext } from "react";
import UserContext from "../core/UserContext";

function Events() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Events</p>
    </div>
  );
}

export default Events;
