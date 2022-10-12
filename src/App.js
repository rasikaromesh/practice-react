import style from './App.module.css';
import UserInput from './components/UserInput/UserInput';
import UserCard from './components/UserList/UserCard/UserCard';

function App() {
  return (
    <div className={style.App}>
      <section className={style['input-sectoin']}>
      <UserInput/>
      </section>
      <section className={style['input-sectoin']}>
        <UserCard name='rom' age='32'/>
      </section>
    </div>
  );
}

export default App;
