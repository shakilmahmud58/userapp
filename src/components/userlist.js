import axios from "axios";
import { useEffect, useState } from "react";
import {Link } from 'react-router-dom'
import Card from "./Card";

function UserList(){
   const [users,setUsers]= useState([]);
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        console.log(res.data);
        setUsers(res.data);
    })
   },[])
   return(
    <div>

        <div>This is the userlist</div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 gap-1">
        {users.map(user=>
             <div  key={user.id}><Card user={user}/></div>  
           )
        }
        </div>
    </div>
   )
}

export default UserList;