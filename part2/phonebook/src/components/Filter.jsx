const Filter = ({ newFilter, handleNameChangeFilter }) => (
    <div>filter shown with <input
        value={newFilter}
        onChange={handleNameChangeFilter}
    /></div>
)

export default Filter
