import React, { useState } from "react";
import ServicePrepModal from '../ServicePrepModal/ServicePrepModal';
import "./Footer.css";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [marketingChecked, setMarketingChecked] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isPrepModalOpen, setIsPrepModalOpen] = useState(false);
    const [alertModal, setAlertModal] = useState({ isOpen: false, title: '', message: '' });

    const showAlert = (title, message) => {
        setAlertModal({ isOpen: true, title, message });
    };

    const handleSubscribe = () => {
        // 유효성 검사
        if (!email.trim()) {
            showAlert('입력 확인', '이메일 주소를 입력해주세요.');
            return;
        }
        if (!name.trim()) {
            showAlert('입력 확인', '이름을 입력해주세요.');
            return;
        }
        // 이메일 형식 검사
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('입력 확인', '올바른 이메일 형식을 입력해주세요.');
            return;
        }
        
        // 체크박스 유효성 검사
        if (!privacyChecked) {
            showAlert('동의 필요', '개인정보 수집 및 이용에 동의해주세요.');
            return;
        }
        if (!marketingChecked) {
            showAlert('동의 필요', '광고성 정보 수신에 동의해주세요.');
            return;
        }

        // 구독 완료 모달 표시
        setIsSuccessModalOpen(true);
        
        // 입력 필드 초기화
        setEmail('');
        setName('');
        setPrivacyChecked(false);
        setMarketingChecked(false);
    };

    const handlePrevNewsletterClick = (e) => {
        e.preventDefault();
        setIsPrepModalOpen(true);
    };

    return (
        <footer className="footer">
            {/*뉴스레터 영역 */}
            <div className="footer-newsletter">
                <h2>N E W S L E T T E R</h2>
                <p>매주 수요일, 카드고민을 해결할 카고레터를 만나보세요</p>
                <div className="newsletter-form">
                    <input 
                        type="email" 
                        placeholder="이메일 주소" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="이름_닉네임도 괜찮아요" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSubscribe}>구독하기</button>
                </div>
                <div className="newsletter-agreement">
                    <label>
                        <input 
                            type="checkbox" 
                            checked={privacyChecked}
                            onChange={(e) => setPrivacyChecked(e.target.checked)}
                        />
                            개인정보 수집 및 이용에 동의합니다.
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={marketingChecked}
                            onChange={(e) => setMarketingChecked(e.target.checked)}
                        />
                            광고성 정보 수신에 동의합니다.
                    </label>
                </div>
                <div className="newsletter-info">
                    <p>
                        <span className="text-circle">
                            어떤 정보를 받아볼 수 있는지 궁금하다면? &nbsp; 
                            <a href="#" onClick={handlePrevNewsletterClick}> &gt; &nbsp; 지난 카고레터 보기</a>
                        </span>
                    </p>
                </div>
            </div>
            
            {/* Footer Links */}
            <div className="footer-links">
                <div className="footer-social">
                    <a href="#" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fa-solid fa-n"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>

                <div className="footer-nav">
                <a href="#">ABOUT</a>
                <a href="#">SERVICE</a>
                <a href="#">CONTACT</a>
                <a href="#">CARDGORILLA</a>
                <a href="#">PRESTIGEGORILLA</a>
                <a href="#">GOSTY</a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="horizontal-container">
                    <p>(주)카드폴리오디스트릭트</p> 
                    <p>대표이사 : 김은지</p> 
                    <p>사업자등록번호 : 304-58-10583</p> 
                    <p>서울특별시 노원구 노원로 532 카드폴리오</p> 
                    <p>광고/제휴문의 :{" "}
                        <a href="mailto:dmswl2515@gmail.com">
                            dmswl2515@gmail.com
                        </a>{" "}</p>
                    <p>고객문의 : <a href>바로가기 &gt;</a></p>
                </div>
                <p>© 2024-2025 CardFolio All Rights Reserved.</p>
            </div>

            {/* 구독 완료 모달 */}
            <ServicePrepModal 
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                title="구독이 완료되었습니다!"
                message={`매주 수요일에 만나요!
유용한 카드 정보를 받아보실 수 있습니다. 📧`}
                buttonText="확인"
                icon="✉️"
            />

            {/* 준비중 서비스 모달 */}
            <ServicePrepModal 
                isOpen={isPrepModalOpen}
                onClose={() => setIsPrepModalOpen(false)}
            />

            {/* 커스텀 Alert 모달 */}
            <ServicePrepModal 
                isOpen={alertModal.isOpen}
                onClose={() => setAlertModal({ isOpen: false, title: '', message: '' })}
                title={alertModal.title}
                message={alertModal.message}
                buttonText="확인"
                icon="⚠️"
            />
        </footer>
    );
}


export default Footer;