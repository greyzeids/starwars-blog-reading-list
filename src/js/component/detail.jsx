import React from "react";

const Detail = () => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card mb-3" style={{ width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={item.imageUrl}
                            className="img-fluid rounded-start"
                            alt={item.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                {item.description ||
                                    "No additional information available."}
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    Last updated just now
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
