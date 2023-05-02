import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' '>
           <div className="navbar bg-neutral text-neutral-content mr-9 ">
  <a className="btn btn-ghost normal-case text-xl">Bangladeshi Cuisine</a>
  <div className='gap-4 justify-items-end pl-6 '>
  <Link to='/'>Home</Link>
 <Link to='/blog'>Blog</Link>
 <Link to='/login'>Login</Link>

  </div>

</div>
 
        </div>
    );
};

export default Header;