import React from 'react'

export const Persons = ({ namesToShow }) => {
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
