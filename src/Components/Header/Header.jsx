import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user,logOut} =useContext(AuthContext);
    const handleLogOut=() =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))


    }
    return (
        <div className=' '>
           <div className="navbar bg-neutral text-neutral-content mr-9 ">
  <a className="btn btn-ghost normal-case text-xl">Bangladeshi Cuisine</a>
  <div className='gap-4 justify-items-end pl-6 '>
  <Link to='/'>Home</Link>
 <Link to='/blog'>Blog</Link>
 
 {
    user? <>
    <span>{user.img}</span> 
    <button onClick={handleLogOut} className="btn btn-outline">Log Out</button>

    </>
    :<>
    <Link to='/login'>Login</Link>
   
    </>
 }

  </div>

</div>
 
        </div>
    );
};

export default Header;