import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipies = () => {
  
 

    const details = useLoaderData();
    const {id} = useParams();
    const [ChefId, setChefId]=useState({});
    useEffect(()=>{
        const ChefData =details.find(details=>details.id==id);
        setChefId(ChefData);
    },[])
    
    return (
        <div>
            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={ChefId.picture_url}className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{ChefId.name}</h1>
      <p className="py-6">{ChefId.bio}</p>
      <p className="py-6">{ChefId.likes} Likes</p>
      <p className="py-6">Recipies:{ChefId.num_recipes}</p>
      <p className="py-6">{ChefId.years_of_experience} Years of experience</p>
      <button className="btn btn-primary">Contact Now!</button>
    </div>
  </div>
</div>

            </div>
            <div>
                <div>
                <div className='grid grid-cols-3 gap-4 mt-6'>
            {ChefId.recipes?.map((cis) => (
                <div key={cis._id}>
                    
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <div className="card-body">
    <h2 className="card-title">{cis?.name}</h2>
    <p><span className='underline underline-offset-1 text-orange-400'>Ingredients:  </span>{cis?.ingredients}</p>
    <p><span className='underline underline-offset-1 text-orange-400'>cooking method:  </span>{cis?.method}</p>
    <p><span className='underline underline-offset-1 text-orange-400'>Rating:  </span>{cis?.rating}</p>

    
                 </div>
</div>

                </div>
                

  ))}
            </div>
                </div>
                <div></div>
                <div></div>

          

            </div>
         
          
           
        </div>
    );
};

export default ChefRecipies;