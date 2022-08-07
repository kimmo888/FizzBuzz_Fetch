import { useEffect, useState } from "react"


export const AppFetch = () => {
    const [user, setUser]= useState([])

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=20`)
            .then(response => response.json())
            .then(data => {
                setUser(data.results);
            });
    },[]);

    return (
        <div>
            <ul>
            {user.map((user) => (
                <li key={user.phone}>{ user.name.first }, {user.name.last }</li>
            ))}
            </ul>
        </div>
    );
}