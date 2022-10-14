import { useState } from "react";
import style from "./App.module.css";
import Card from "./components/UI/Card/Card";
import UserInput from "./components/UserInput/UserInput";
import UserCard from "./components/UserList/UserCard/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [isUsersAvalilable, setIsUsersAvalilable] = useState(false);

  const addNewUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
    setIsUsersAvalilable(true);
  };
  return (
    <div className={style.App}>
      <UserInput addUser={addNewUser} />x
      <Card
        className={`${style["input-sectoin"]} ${
          !isUsersAvalilable && style.hide
        }`}
      >
        {users.map((u) => (
          <UserCard key={u.id} name={u.name} age={u.age} />
        ))}
      </Card>
    </div>
  );
}

export default App;
