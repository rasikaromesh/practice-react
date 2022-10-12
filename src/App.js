import { useState } from "react";
import style from "./App.module.css";
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
      <section className={style["input-sectoin"]}>
        <UserInput addUser={addNewUser} />
      </section>
      <section
        className={`${style["input-sectoin"]} ${
          !isUsersAvalilable && style.hide
        }`}
      >
        {users.map((u) => (
          <UserCard key={u.id} name={u.name} age={u.age} />
        ))}
      </section>
    </div>
  );
}

export default App;
