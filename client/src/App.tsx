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
          <h2 className='card-title'>Добавить задачу</h2>
          <TaskForm />
        </div>
        <div className='card-list'>
          <h2 className='card-title'>Список задач</h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
