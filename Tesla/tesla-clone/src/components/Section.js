import React from 'react'
import styled from 'styled-components'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{ title }</h1>
            <p>{description }</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
               { leftBtnText } 
            </LeftButton>
            <RightButton>
               { rightBtnText } 
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // 원래 horizontal 정렬 -> flex direction을 column으로 변경하면서 vertical 정렬
    align-items: center; // 원래 vertical 정렬 -> flex direction을 column으로 변경하면서 horizontal 정렬
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`

`