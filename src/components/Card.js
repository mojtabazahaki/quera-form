import React from "react";

const Card = ({data}) => {




const dataform = data.map((data1)=>{

   
     return(
      <div key={data1.id}
      className="card text-white bg-dark mb-3"
      style={{ maxWidth: "18rem" }}
    >
          <div className="card-header">{data1.name}</div>
          <div className="card-body">
          <p className="card-text">{data1.occupation}</p>
          <h5 className="card-title">{data1.birthdate}</h5>
      </div>
    </div>
      
     )
})



  return (

    <main data-testid="card" className="d-flex gap-4 p-5">
     {dataform}
    </main>
  );
};

export default Card;
