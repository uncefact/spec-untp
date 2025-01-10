import React from "react";

export const YouTube = ({ id, }) => (
    <div>
        <iframe
            style={{ width: '100%', aspectRatio: '16/9' }}
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
    </div>
);

export default YouTube;
