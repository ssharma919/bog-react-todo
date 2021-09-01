import { useState } from 'react'
import Button from './Button'
import Tags from './Tags'

const TaskForm = ({ onAdd, tasks, sbc, sbd, compToggle, tagList }) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])

    const onSubmit = () => {
        if (!text || !date) {
            alert('Please add a task and date')
            return
        }
        console.log(compToggle)
        onAdd({ text, date, tags })
        if (compToggle) {
            sbc()
        }

        setText('')
        setDate('')
        setTag('')
        setTags([])
    }

    const addTag = () => {

        if (!tag) {
            alert('Please add a tag')
            return
        }

        setTags([...tags, tag])
        tagList(tag)
        setTag('')
    }

    const deleteTag = (tagName) => {
        setTags(tags.filter((tag) => tag !== tagName))
    }

    return (
        <div className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input
                    type='date'
                    placeholder='DD-MM-YYYY'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Tags</label>
                <div className='tag-container'>
                    <input
                        type='text'
                        placeholder='Add Tags'
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                    <button className='btn-tag' onClick={addTag}>Add</button>
                </div>
            </div>
            <div>

                <Tags tags={tags} onDelete={deleteTag} />
            </div>
            <Button title='Add Task' onClick={onSubmit} />
            
        </div>
    )
}

export default TaskForm
