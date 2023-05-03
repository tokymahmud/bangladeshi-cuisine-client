import React, { useEffect, useState } from 'react';


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
                <h1 className='font-bold text-2xl'>Love for <br></br> <span className='text-orange-300 underline '>Food</span></h1>
                <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src="https://ibb.co/qxQ4vyP" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://ibb.co/KsSP7cT" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://ibb.co/ZHTD5Dz" />
  </div> 
 
</div>
            </div>
         </div>
            <div>
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
      <button className="btn btn-primary">View Recipes </button>
    </div>
  </div>
</div>
 </div>
  ))}
            </div>

{/* <div >
        {chefInfo[0]?.cis?.map((ci) => (
          <div key={ci?.id} >
            <h2>{ci?.name}</h2>
            <p>{ci?.years_of_experience}</p>
            <p>{ci?.num_recipes}</p>
            <p>{ci?.likes}</p>
           
            // <Link to={`/cis/${ci?.id}`}>
            //   <button>Details</button>
            // </Link>
          </div>
        ))}
      </div> */}
        </div>
    );

};

export default Home;