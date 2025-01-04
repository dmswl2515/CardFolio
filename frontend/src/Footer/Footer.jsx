import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/*뉴스레터 영역 */}
            <div className="footer-newsletter">
                <h2>N E W S L E T T E R</h2>
                <p>매주 수요일, 카드고민을 해결할 카고레터를 만나보세요</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="이메일 주소" />
                    <input type="text" placeholder="이름_닉네임도 괜찮아요" />
                    <button>구독하기</button>
                </div>
                <div className="newsletter-agreement">
                    <label>
                        <input type="checkbox" />
                            개인정보 수집 및 이용에 동의합니다.
                    </label>
                    <label>
                        <input type="checkbox" />
                            광고성 정보 수신에 동의합니다.
                    </label>
                </div>
                <div className="newsletter-info">
                    <p>
                        <span className="text-circle">
                            어떤 정보를 받아볼 수 있는지 궁금하다면? &nbsp; 
                            <a href="#"> &gt; &nbsp; 지난 카고레터 보기</a>
                        </span>
                    </p>
                </div>
            </div>


        </footer>
    );
}




export default Footer;