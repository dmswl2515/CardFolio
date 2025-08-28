import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const slideIn = keyframes`
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContainer = styled.div`
    background: white;
    border-radius: 16px;
    padding: 40px;
    max-width: 420px;
    width: 90%;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    animation: ${slideIn} 0.3s ease-out;
    position: relative;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const ConstructionIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffac00 0%, #ff8800 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;
    box-shadow: 0 8px 20px rgba(255, 172, 0, 0.3);
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 12px;
`;

const Message = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const CloseButton = styled.button`
    background: linear-gradient(135deg, #ffac00 0%, #ff8800 100%);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 172, 0, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 172, 0, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;

const ServicePrepModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalOverlay onClick={handleOverlayClick}>
            <ModalContainer>
                <IconContainer>
                    <ConstructionIcon>
                        🚧
                    </ConstructionIcon>
                </IconContainer>
                <Title>준비중인 서비스</Title>
                <Message>
                    현재 해당 기능을 개발 중입니다.<br />
                    빠른 시일 내에 서비스를 제공할 예정이니<br />
                    조금만 기다려 주세요! 😊
                </Message>
                <ButtonContainer>
                    <CloseButton onClick={onClose}>
                        확인
                    </CloseButton>
                </ButtonContainer>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default ServicePrepModal;