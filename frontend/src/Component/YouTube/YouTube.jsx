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
            url: "https://youtube.com/shorts/h7atcs15IxM?si=d9DAE780eqqkqujw",
            title: "Video 1",
        },
        {
            id: 2,
            thumbnail: "https://img.youtube.com/vi/gS9PHbAL290/hqdefault.jpg",
            url: "https://youtube.com/shorts/gS9PHbAL290?si=mviJtWw23cGCpCum",
            title: "Video 2",
        },
        {
            id: 3,
            thumbnail: "https://img.youtube.com/vi/uJhcXMUln8I/hqdefault.jpg",
            url: "https://youtube.com/shorts/uJhcXMUln8I?si=-E96NL2sS6KgIGPq",
            title: "Video 3",
        },
        {
            id: 4,
            thumbnail: "https://img.youtube.com/vi/N_JtChR7nDw/hqdefault.jpg",
            url: "https://youtube.com/shorts/N_JtChR7nDw?si=vRnWgWkRxC18XYNp",
            title: "Video 4",
        },
        {
            id: 5,
            thumbnail: "https://img.youtube.com/vi/zT1gXMw05Qw/hqdefault.jpg",
            url: "https://youtube.com/shorts/zT1gXMw05Qw?si=Y7E0px2g_YHO7Bm5",
            title: "Video 5",
        },
    ];

    return (
        <div className="youtube">
            <h2 className="shorts-title">Shorts 영상</h2>
            <div className="shorts-container">
                {videos.map((video) => (
                <div
                    key={video.id}
                    className="short-video"
                    onClick={() => openModal(video.url)}
                >
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-button-overlay">▶</div>
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