import style from './App.module.css';
import UserInput from './components/UserInput/UserInput';

function App() {
  return (
    <div className={style.App}>
      <section className={style['input-sectoin']}>
      <UserInput/>
      </section>
      <section>
        List
      </section>
    </div>
  );
}

export default App;
