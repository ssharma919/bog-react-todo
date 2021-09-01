import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks'
import Sort from './components/Sort'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Cook dinner',
      date: '2021-08-12',
      tags: ['home', 'food'],
      completed: false,
    },
    {
      id: 1,
      text: 'Do homework',
      date: '2021-08-15',
      tags: ['school'],
      completed: false,
    },
    {
      id: 2,
      text: 'Get groceries',
      date: '2021-08-14',
      tags: ['food'],
      completed: false,
    }
  ])

  const [filteredTasks, setFilteredTasks] = useState([])
  const [dummy, setDummy] = useState(0)

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [])

  const [tagList, setTagList] = useState([
    { value: 'home', label: 'home' },
    { value: 'food', label: 'food' },
    { value: 'school', label: 'school' }
  ])

  const [compToggle, setCompToggle] = useState(false)
  const [dateToggle, setDateToggle] = useState(false)

  const dummyTask = {
    id: 0,
    test: '',
    date: '',
    tags: [],
    completed: false
  }

  const sortByCompletion = () => {
    if (dateToggle) {
      sortByBoth()
      return
    }
    const newTasks = filteredTasks.sort(function (a, b) {
      return (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
    })
    setTasks(newTasks)
    setTasks([...tasks, dummyTask])
    setTasks(tasks.filter((id) => id !== 0))
  }

  const toggleCompletion = () => {
    debugger
    setCompToggle(prevCompToggle => !prevCompToggle)
    sortByCompletion()
  }

  const toggleDate = () => {
    setDateToggle(prevDateToggle => !prevDateToggle)
    sortByDate()
  }

  const sortByDate = () => {
    if (compToggle) {
      sortByBoth()
      return
    }
    const newTasks = filteredTasks.sort(function (a, b) {
      const x = parseInt(a.date.replaceAll('-', ''))
      const y = parseInt(b.date.replaceAll('-', ''))
      return x - y
    })
    setTasks(newTasks)
    setTasks([...tasks, dummyTask])
    setTasks(tasks.filter((id) => id !== 0))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 10
    const newTask = { id, ...task, completed: false }
    setTasks([...tasks, newTask])
    console.log(tasks)
    filterTasks([])
  }

  const sortByBoth = () => {
    const newTasks = filteredTasks.sort(function (a, b) {
      const x = parseInt(a.date.replaceAll('-', ''))
      const y = parseInt(b.date.replaceAll('-', ''))
      return (a.completed === b.completed) ? x - y : a.completed ? 1 : -1
    })
    setTasks(newTasks)
    setTasks([...tasks, dummyTask])
    setTasks(tasks.filter((id) => id !== 0))
  }

  const filterTasks = (tags) => {
    if (tags.length > 0) {
      const filtered = tasks.filter((task) => task.tags.some(tag=> tags.includes(tag)))
      console.log(filtered)
      setFilteredTasks(filtered)
    } else {
      const num = dummy + 1
      setFilteredTasks(tasks)
    }
  }

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  const updateTags = (tag) => {
    setTagList([...tagList, { value: tag, label: tag }])
  }

  return (
    <div className='container'>
      <Header title='Todo List' />
      <TaskForm onAdd={addTask} sbc={sortByCompletion} compToggle={compToggle} tagList={updateTags}/>
      <Sort sbc={toggleCompletion} sbd={toggleDate} compToggle={compToggle} dateToggle={dateToggle} options={tagList} filterTasks={filterTasks}/>
      <Tasks tasks={filteredTasks} sbc={sortByCompletion} compToggle={compToggle} />

    </div>
  );
}

export default App;
