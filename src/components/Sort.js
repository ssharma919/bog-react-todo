import Select from 'react-select';
import { useState, useEffect } from 'react';

const Sort = ({ tasks, sbc, sbd, compToggle, dateToggle, options, filterTasks }) => {

    const btnStyle = {
        margin: 5,
        padding: 5,
        backgroundColor: 'white',
        color: 'green',
        border: '2px solid green',
        borderRadius: 5,
    }

    const btnStyleFocus = {
        margin: 5,
        padding: 5,
        backgroundColor: 'green',
        color: 'white',
        border: '2px solid green',
        borderRadius: 5,
    }

    

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (options) => {
        const tags = []
        options.map(o => tags.push(o.value))
        console.log(tags)
        setSelectedOptions(tags)
        console.log(selectedOptions)
        
    };

    useEffect(() => {
        filterTasks(selectedOptions)
    }, [selectedOptions])

    return (
        <div>
            <div className='sort-container'>
                <button className='btn-sort' onClick={sbc} style={compToggle ? btnStyleFocus : btnStyle}>Completion</button>
                <button className='btn-sort' onClick={sbd} style={dateToggle ? btnStyleFocus : btnStyle}>Date</button>
                {/* <select>
                <option>all</option>
                {tasks.map((task, i) => (task.tags.map((tag, j) => (
                    <option key={i+j}>{tag}</option>
                ))))}
            </select> */}


            </div>
            <div style={{ display: 'block' }}>
                <Select
                    defaultValue={[]}
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleChange}
                /></div>
        </div>
    )
}

export default Sort
