import React from 'react'

const Home = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slid relative mt-9" data-bs-ride="carousel">
      <h1 className='text-center py-3 text-4xl font-bold text-red-600'>FEATURED PRODUCTS</h1>
  <div className="carousel-inner relative overflow-hidden max-h-[500px] w-full max-w-[950px] m-auto">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="imgs/car.jpg"
        className="block w-full h-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="imgs/book.jpg"
        className="block w-full h-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="imgs/computer.jpg"
        className="block w-full h-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <button
    className="carousel-control-prev absolute left-0 top-[50%] flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute right-0 top-[50%] flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <div className="carousel-indicators absolute right-0 bottom-[5%] left-0 flex justify-center p-0 mb-4 gap-x-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  </div>

</div>
  )
}

export default Home