function Card(){
 let items = [{img:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168010524/original/33f7f127c3b24ebdf350ccea5dbc2cfb3d3c9a4a/custom-full-stack-web-developer-front-end-back-end-website-development.png",title:"Nisha Thakran",para:"19 years old Full Stack Developer.Member of the Idiot Developer Group,LIET,Alwar.",button:"Thank U"},{img:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168010524/original/33f7f127c3b24ebdf350ccea5dbc2cfb3d3c9a4a/custom-full-stack-web-developer-front-end-back-end-website-development.png",title:"Nisha Thakran",para:"19 years old Full Stack Developer.Member of the Idiot Developer Group,LIET,Alwar.",button:"Thank U"},{img:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168010524/original/33f7f127c3b24ebdf350ccea5dbc2cfb3d3c9a4a/custom-full-stack-web-developer-front-end-back-end-website-development.png",title:"Nisha Thakran",para:"19 years old Full Stack Developer.Member of the Idiot Developer Group,LIET,Alwar.",button:"Thank U"},{img:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168010524/original/33f7f127c3b24ebdf350ccea5dbc2cfb3d3c9a4a/custom-full-stack-web-developer-front-end-back-end-website-development.png",title:"Nisha Thakran",para:"19 years old Full Stack Developer.Member of the Idiot Developer Group,LIET,Alwar.",button:"Thank U"},{img:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168010524/original/33f7f127c3b24ebdf350ccea5dbc2cfb3d3c9a4a/custom-full-stack-web-developer-front-end-back-end-website-development.png",title:"Nisha Thakran",para:"19 years old Full Stack Developer.Member of the Idiot Developer Group,LIET,Alwar.",button:"Thank U"}]
    return(
        <>
        <div className="row my-2">
            {items.map((item,index)=>(     <div className="card my-4 mx-5" style={{ width: "18rem" }}>
  <img src={item.img} className="card-img-top" alt="..." />
  <div className="card-body ">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
    {item.para}
    </p>
    <a href="#" className="btn btn-primary">
      {item.button}
    </a>
  </div>
</div>))}
</div>    
        </>
    )
}
export default Card