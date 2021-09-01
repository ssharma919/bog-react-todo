import Tag from './Tag'

const Task = ({ task, compToggle, sbc }) => {

    const toggle = () => {
        task.completed = !task.completed
        if (compToggle) {
            sbc()
        }
    }

    return (
        <div className='task'>
            <div className='task-info'>
                <h3>{task.text}</h3>
                <p>{task.date}</p>
            </div>
            <div className='task-info'>
                <div className='task-tags'>
                    {task.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
                <input type='checkbox' onClick={toggle} style={{width:20,height:20}} />
            </div>
        </div>
    )
}

export default Task
