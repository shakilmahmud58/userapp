import { Link } from "react-router-dom";

function Card(props){
    const {user} = props;
    return(
        <div className="m-4 my-3 border border-2 rounded-lg bg-gray-200">
            <div className="mx-3 my-2"><img className="rounded-full" src="https://www.gateway.dental/wp-content/uploads/2019/08/John_Doe_Profile.jpg" title="Profile Picture"/></div>
            <div className="my-2">{user.name}</div>
            <div className="my-2">{user.email}</div>
            <div className="my-4"><Link to={"/profile/"+user.id} className="text-white bg-blue-500 border border-1 p-2 rounded-md">Show Profile</Link></div>
        </div>
    )
}
export default Card;