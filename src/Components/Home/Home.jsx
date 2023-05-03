import React from 'react';

const Home = () => {
    return (
        <div>
         <div>
         <div className='flex'>
                <h1 className='font-bold text-2xl'>Love for <br></br> <span className='text-orange-300 underline '>Food</span></h1>
                <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
  </div>
</div>
            </div>
         </div>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Home;