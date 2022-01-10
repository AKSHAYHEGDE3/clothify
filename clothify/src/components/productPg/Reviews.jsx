import React from 'react'

const Reviews = () => {
    return (
        <div>
             <div className="reviewBox">
                <div style={{ textAlign: "center", marginBottom: "1.3%", fontSize: "2rem",color:"#2874f0" }}>Reviews</div>
                    <div style={{ borderTop: "1px solid #2874f0" }} className="row">
                        <div className="col-2"><i style={{ fontSize: "3rem",color:"#f8e831" }} className="fas fa-user-circle mt-4 ms-sm-4"></i></div>
                            <div className="col-10 mt-2">
                                <p>name</p>
                                <p>jbdiwbdpw;fe[fpemelvdelv dv </p>
                            </div>
                        </div>
                 <div style={{ borderTop: "1px solid #2874f0" }} className="row">
                    <div className="col-9 mt-5">
                        <input className="w-100" type="text"  />
                    </div>
                    <div className="col-3 mt-5">
                        <button  className="btb btn-warning">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
