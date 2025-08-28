import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const pulse = keyframes`
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.05);
    }
`;

const cardFloat = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
`;

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 40px;
`;

const SpinnerWrapper = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
`;

const OuterRing = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #ffac00;
    border-radius: 50%;
    animation: ${spin} 1.2s linear infinite;
`;

const InnerRing = styled.div`
    position: absolute;
    top: 25px;
    left: 25px;
    width: 70px;
    height: 70px;
    border: 3px solid #f8f8f8;
    border-bottom: 3px solid #ff8800;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite reverse;
`;

const CardIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #ffac00 0%, #ff8800 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    animation: ${pulse} 2s ease-in-out infinite;
    box-shadow: 0 2px 8px rgba(255, 172, 0, 0.3);
    z-index: 10;
    line-height: 1;
    
    &::before {
        content: '💳';
        display: block;
        text-align: center;
        width: 100%;
        height: 100%;
        line-height: 30px;
    }
`;

const LoadingText = styled.div`
    font-size: 16px;
    color: #666;
    font-weight: 500;
    text-align: center;
    animation: ${pulse} 2s ease-in-out infinite;
`;

const DotsContainer = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
`;

const Dot = styled.div`
    width: 6px;
    height: 6px;
    background-color: #ffac00;
    border-radius: 50%;
    animation: ${pulse} 1.4s ease-in-out infinite;
    animation-delay: ${props => props.delay}s;
`;

const LoadingSpinner = ({ message = "카드를 불러오는 중입니다" }) => {
    return (
        <SpinnerContainer>
            <SpinnerWrapper>
                <OuterRing />
                <InnerRing />
                <CardIcon />
            </SpinnerWrapper>
            <LoadingText>{message}</LoadingText>
            <DotsContainer>
                <Dot delay={0} />
                <Dot delay={0.2} />
                <Dot delay={0.4} />
            </DotsContainer>
        </SpinnerContainer>
    );
};

export default LoadingSpinner;