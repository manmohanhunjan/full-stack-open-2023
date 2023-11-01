const Notification = ({ message, color }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="notify" style={{ color: color }}>
            {message}
        </div>
    )
}
export default Notification