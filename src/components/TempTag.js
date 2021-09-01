import { FaTimes } from 'react-icons/fa'

const TempTag = ({ tag, onDelete }) => {
    return (
        <div className='tag'>
            {tag}
            <FaTimes onClick={() => onDelete(tag)}/>
        </div>
    )
}

export default TempTag