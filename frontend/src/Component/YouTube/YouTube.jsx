import React, { useState } from "react";
import "./YouTube.css";

const YouTube = () => {
    // Modal state management
    const [videoUrl, setVideoUrl,] = useState(null);

    const openModal = (url) => {
        setVideoUrl(url);
    };

    const closeModal = () => {
        setVideoUrl(null);
    };

    const videos = [
        {
            id: 1,
            thumbnail: "https://img.youtube.com/vi/h7atcs15IxM/hqdefault.jpg",
            url: "https://www.youtube.com/embed/h7atcs15IxM",
            title: "Video 1",
        },
        {
            id: 2,
            thumbnail: "https://img.youtube.com/vi/gS9PHbAL290/hqdefault.jpg",
            url: "https://www.youtube.com/embed/gS9PHbAL290",
            title: "Video 2",
        },
        {
            id: 3,
            thumbnail: "https://img.youtube.com/vi/uJhcXMUln8I/hqdefault.jpg",
            url: "https://www.youtube.com/embed/uJhcXMUln8I",
            title: "Video 3",
        },
        {
            id: 4,
            thumbnail: "https://img.youtube.com/vi/N_JtChR7nDw/hqdefault.jpg",
            url: "https://www.youtube.com/embed/N_JtChR7nDw",
            title: "Video 4",
        },
        {
            id: 5,
            thumbnail: "https://img.youtube.com/vi/zT1gXMw05Qw/hqdefault.jpg",
            url: "https://www.youtube.com/embed/zT1gXMw05Qw",
            title: "Video 5",
        },
    ];

    return (
        <div className="youtube">
            <h1 className="shorts-title">Shorts 영상</h1>
            <div className="shorts-container">
                {videos.map((video) => (
                <div
                    key={video.id}
                    className="short-video"
                    onClick={() => openModal(video.url)}
                >
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-button-overlay">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                ))}
            </div>

            {/* Modal */}
            {videoUrl && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <iframe
                            width="560"
                            height="350"
                            src={videoUrl}
                            title="YouYube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}   
        </div>
    );
};

export default YouTube;