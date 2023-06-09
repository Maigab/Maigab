import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "300px", minHeight: "150px"}} class="p-3 mb-2 bg-black text-white">
                            <div className="card-body" class="p-3 mb-2 bg-black text-white">
                                <h2>Temperatura</h2>
                                <h5 className="card-title" class="fs-3">{item.temperatura}</h5>
                            </div>
                        </div>
                    </div>
                ))}
                {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "300px", minHeight: "150px" }} class="p-3 mb-2 bg-black text-white">
                            <div className="card-body">
                                <h2>Humedad</h2>
                                <h5 className="card-title" class="fs-3">{item.humedad}</h5>
                            </div>
                        </div>
                    </div>
                ))}
                {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "300px", minHeight: "150px" }} class="p-3 mb-2 bg-black text-white">
                            <div className="card-body">
                                <h2>Voltaje de radiación</h2>
                                <h5 className="card-title" class="fs-3">{item.voltajeradiacion}</h5>
                            </div>
                        </div>
                    </div>
                ))}
                {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "300px", minHeight: "150px" }} class="p-3 mb-2 bg-black text-white">
                            <div className="card-body">
                                <h2>Valor de radiación</h2>
                                <h5 className="card-title" class="fs-3">{item.valorradiacion}</h5>
                            </div>
                        </div>
                    </div>
                ))}
                {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "300px", minHeight: "150px" }} class="p-3 mb-2 bg-black text-white">
                            <div className="card-body">
                                <h2>Niveles de Agua</h2>
                                <h5 className="card-title" class="fs-3">{item.agua}</h5>
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