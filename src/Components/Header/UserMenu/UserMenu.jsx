import person from "../../../Services/images/person.png";
import { Button, P, Wrapper } from "./UserMenu.styled";

const UserMenu = () => {
  const userEmail = localStorage.getItem("email");

  const handleLogout = async () => {
    // костиль для розлогінювання юзера
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Wrapper>
      <img src={person} alt="person" width="20px" />
      <P>{userEmail}</P>
      <Button onClick={handleLogout}>Logout</Button>
    </Wrapper>
  );
};

export default UserMenu;
