import React from "react";

const MusicPlayer = ({ videoUrl }) => {
    return (
        <div className="col-md-4 d-flex justify-content-center mb-4">
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MusicPlayer;
