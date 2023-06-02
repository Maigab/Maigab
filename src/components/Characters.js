import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "300px", minHeight: "150px" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Characters


/*<h5 className="card-title">{item.temperatura}</h5>
            <div className="card" style={{minWidth: "300px", minHeight:"150px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{item.humedad}</h5>
                    </div>
             </div>

             <div className="card" style={{minWidth: "300px", minHeight:"150px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{item.voltajeradiacion}</h5>
                    </div>
             </div>

             <div className="card" style={{minWidth: "300px", minHeight:"150px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{item.valorradiacion}</h5>
                    </div>
             </div>


*/

 //<img src={item.image} alt=""/>
/*<hr/>
                       <p>spacies: {item.species}</p>
                       <p>location: {item.location.name}</p>*/