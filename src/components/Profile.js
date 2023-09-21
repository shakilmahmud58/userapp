import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

function Profile(){
    const {id} = useParams()
    console.log(id)
    const [user, setUser]=useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res=>{
            console.log(res.data);
            setLoading(false);
            setUser(res.data)
        })
    },[])
    if(loading)
         return(
              <div>Loading</div>
            )
    else
        return( 
           <div >
               <div className="my-4"><Link to="/"  className="rounded-lg border border-2 p-2 bg-blue-500">Go To Userlist</Link></div>
               <div className="text-2xl font-bold">This is the Profile of {user.username}</div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-5">
                <div></div>
                <div className="mx-3 my-2 bg-blue-500 flex justify-center"><img className="rounded-md" src="https://www.gateway.dental/wp-content/uploads/2019/08/John_Doe_Profile.jpg" title="Profile Picture"/></div>
                <div className="pt-5 bg-gray-200">
                    <div><span className="font-medium">Full Name:</span> {user.name}</div>
                    <div><span className="font-medium">User Name:</span> {user.username}</div>
                    <div><span className="font-medium">Email:</span> {user.email}</div>
                    <div><span className="font-medium">Phone:</span> {user.phone}</div>
                    <div><span className="font-medium">City:</span> {user.address.city}</div>
                    <div><span className="font-medium">Street:</span> {user.address.street}</div>
                    <div><span className="font-medium">Zipcode:</span> {user.address.zipcode}</div>
                    <div><span className="font-medium">Works at:</span> {user.company.name}</div>
                    <div><span className="font-medium">Website:</span> {user.website}</div>
                </div>
               </div>
            </div>
    )
}

export default Profile;