import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const SearchInput = styled.input`
    width: 120px;
    padding: 6px;
    text-align: center;
    border: none;
    border-radius: 20px;
    background: #f4f2f2;
    display: ${(props) => (props.visible ? "block" : "none")}; /* 토글 */
    outline: none;
  `;

const SearchButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
`;


function SearchComponent() {
    const [showInput, setShowInput] = useState(false);

    return (
        <SearchContainer>
            <SearchInput visible={showInput} placeholder="검색어를 입력하세요." />
            <SearchButton onClick={() => setShowInput((prev) => !prev)}>🔍</SearchButton>
        </SearchContainer>
    );
}

export default SearchComponent;