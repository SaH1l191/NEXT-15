import React from 'react'

const Users = ({ params }: { params: { id: string } }) => {

    const { id } = params
    return (
        <div>
            <h1>  User {id} details page</h1>
        </div>
    )
}

export default Users
