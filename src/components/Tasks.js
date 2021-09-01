import Task from './Task'

const Tasks = ({ tasks, compToggle, sbc }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} sbc={sbc} compToggle={compToggle}/>
            ))}
        </>
    )
}

export default Tasks
