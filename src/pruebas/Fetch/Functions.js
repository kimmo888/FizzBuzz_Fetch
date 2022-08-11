import { useEffect, useState } from "react"
import SearchBox from "./components/SearchBox";
import User from './components/User'
import './Styles/AppFetch.scss';


export const AppFetch = () => {
    const [users, setUsers]= useState([])
    const [filterUser, setFilterUser]= useState([])

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=20`)
            .then(response => response.json())
            .then(data => {
                setUsers(data.results);
                setFilterUser(data.results);
            });
    },[]);

    const filtered = (filter)=>{
        const fil = users.filter(user => user.name.first.includes(filter))
        setFilterUser(fil)
    }

    return (
        <div className="AppFetch">
            <SearchBox handleChange={filtered}/>
            { filterUser.length === 0 ? <div className="NoResult"> No hay resultados</div> :
                filterUser.map((user) => (
                <User key={user.phone} name={user.name.first} lastName={user.name.last } />
            ))}
        </div>
    );
}