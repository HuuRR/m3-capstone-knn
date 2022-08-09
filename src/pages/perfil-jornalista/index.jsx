import { useContext } from "react";
import CardJournalist from "../../components/cardJournalist";
import { UserContext } from "../../contexts/UserContext";
import UserEditPage from "../userEditPage";

function JournalistProfilePage() {
  const { user } = useContext(UserContext);
  
  return (
    <div>
      {user?.type === "reader" ? (<UserEditPage />) : (<CardJournalist />)}
    </div>
  );
}

export default JournalistProfilePage;
