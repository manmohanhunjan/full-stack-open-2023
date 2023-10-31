import React from 'react'

const Persons = ({ namesToShow, deletePerson }) => {
    return (
        <div>
            {namesToShow.map(user =>
                <div key={user.id}>
                    <p>{user.name} {user.number}
                        <button onClick={() => deletePerson(user.id)}>delete</button>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Persons