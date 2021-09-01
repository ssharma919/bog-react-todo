import TempTag from './TempTag'

const Tags = ({ tags, onDelete }) => {
    return (
        <div>
            {tags.map((tag, index) => (
                <TempTag key={index} tag={tag} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Tags
