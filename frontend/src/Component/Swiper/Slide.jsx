import React from "react";

const Slide = ({ src, alt }) => (
    <div
        style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "#f4f2f2",
            }}
    >
        <img 
                src={src}
                alt={alt}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                }} 
        />
    </div>
);

export default Slide;