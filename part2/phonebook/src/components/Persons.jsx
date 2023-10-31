import React from 'react'

const Persons = ({ namesToShow }) => {
    return (
        <div>
            {namesToShow.map(user =>
                <div key={user.id}>
                    <p>{user.name} {user.number}</p>
                </div>
            )}
        </div>
    )
}

export default Persons