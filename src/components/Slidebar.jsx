function Slidebar(){
    return(
        <>
        <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={10000}>     
      <img src="https://tse1.mm.bing.net/th?id=OIP.X4BYfMhJdlCku65xJenBXwHaEH&pid=Api&P=0&h=180" className="d-block w-100" alt="..." />
    </div>
      <div className="carousel-item " data-bs-interval={2000}>   
      <img src="https://tse2.mm.bing.net/th?id=OIP.J5WUPGRnSPNyDt0vENnjrwHaDn&pid=Api&P=0&h=180" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">      
      <img src="https://tse1.explicit.bing.net/th?id=OIP.paYnuzPwjYgjN9XiFaSEBgHaE8&pid=Api&P=0&h=180" className="d-block w-100" alt="..." />
    </div>   
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}
export default Slidebar