import './App.scss';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';


function App() {
  return (
    <div className='main-container'>
      <header className='header'>
        <h1 className='header-title'>Планировщик задач</h1>
      </header>
      <div className='content-container'>
        <div className='card-form'>
          <TaskForm />
        </div>
        <div className='card-list'>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
