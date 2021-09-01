const Button = ({title, onClick }) => {
    return (
        <div>
            <button className='btn' onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button
