import React from "react";

const ChartPage = () => {
    return(
        <div style={{ textAlign: "center" }}>
            <h2>Chart Visualization</h2>
            <p>차트를 표시할 자리입니다.</p>

            <div style={{ width: "80%", margin: "0 auto", backgroundColor: "#f0f0f0", padding: "20px" }}>
                {/* 차트 라이브러리 (예: Chart.js, Recharts 등) 삽입 가능 */}
                <p>여기에 차트 컴포넌트를 추가하세요.</p>
            </div>
        </div>
    );
};

export default ChartPage;
