import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [chefInfo, setChefInfo]=useState([]);
  useEffect(()=>{
    fetch("https://bangladeshi-cuisine-server-tokymahmud.vercel.app/chef")
    .then((response)=>response.json())
    .then((data)=>setChefInfo(data));
    


  },[]);
 
    return (
        <div>
         <div>
         <div className='flex'>
          <div>
          <h1 className='font-bold text-2xl'>Love for <br></br> <span className='text-orange-300 underline '>Food?</span></h1>
                <br></br>
                <p>We are seeking a talented and experienced cook/chef. The successful candidate will<br></br> be responsible for preparing a variety of fast-food items, ...</p>
                <br></br>
                <p>Want to be a chef?</p>

         </div>
                
                <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src="https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?w=996&t=st=1683175152~exp=1683175752~hmac=445d128b48554c6f9e6dafc06eb076347fb2592f1bffbd62084191d230e037e6" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=740&t=st=1683175186~exp=1683175786~hmac=48be97c59380ee682564ee905938317af8253383beecce1fffceeba8af0e0ab7" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://img.freepik.com/free-photo/professional-male-chef-cook-white-uniform-cook-hat-pointing-sidewith-index-finger-looking-confident-standing-white-background_141793-20622.jpg?w=996&t=st=1683175217~exp=1683175817~hmac=9d7026849dcc9e1dfd583bc7ec87ef3b0de958e5ce471651938847c1f3552603" />
  </div> 
 
</div>
            </div>
         </div>
         <h1 className='text-center '>Available Chefs</h1>
            <div className='grid grid-cols-3 gap-4 mt-6'>
            {chefInfo.map((ci) => (
                

              <div key={ci?.id} >
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={ci?.picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{ci?.name}</h2>
    <p>Experience:{ci?.years_of_experience}</p>
    <p>Numbers of recipes:{ci?.num_recipes}</p>
    <p>Likes:{ci?.likes}</p>

    <div className="card-actions justify-end">
    

      <button  type="button" className="btn btn-primary"><Link to={`/chef/${ci.id}`}>View Recipes</Link> </button>
    </div>
  </div>
</div>
 </div>
  ))}
            </div>

<div className='mt-6'>
<h1 className='text-center '>Available Services</h1>
<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Click Here</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><a>Find a place?</a></li>
      <li><a>Seek Chef?</a></li>
      
    </ul>
  </div>
</div>

        
      </div>
      <div >
      <h1 className='text-center '>Drop CV for chef!</h1>


      <input type="file" className="file-input w-full max-w-xs text-center" />

      </div>
        </div>
    );

};

export default Home;