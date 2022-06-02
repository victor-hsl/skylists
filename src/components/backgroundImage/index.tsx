import styled from "styled-components";
import Cloud1 from '../../assets/backgrounds/clouds_1.png'
import Cloud2 from '../../assets/backgrounds/clouds_2.png'
import Cloud3 from '../../assets/backgrounds/clouds_3.png'
import Stars from '../../assets/backgrounds/stars_big.png'
import { ThemeContext } from 'styled-components';
import { useContext, useState } from "react";

const Container = styled.div`
    @keyframes moveX {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(30px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    @keyframes moveP {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(50px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    @keyframes moveY {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(150px);
        }
        100%{
            transform: translateY(300px);
        }
    }
    top: 0px;
    left: 0px;
    z-index: -1;
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    .stars {
        position: absolute;
        top: -300px;
        width: 100%;
        animation: moveY 30s infinite linear;
    }
    .cloud{

        height: 100%;
        width: 100%;
        animation: moveX 7s infinite linear;
    }

    .c {
        height: 100vh;
    }
    .i1 {
        width: 100%;
        margin-bottom: -40px;
        animation: moveX 13s infinite linear;
    }
    .i2{
        width: 100%;
        margin-left: -30px;
        animation: moveP 13s infinite linear;
    }
    .i3{
        margin-left: 30px;
        width: 100%;
        animation: moveX 13s infinite linear;
    }
    .i4{
        margin-top: -20px;
        width: 100%;
        animation: moveP 13s infinite linear;
    }
    @media (min-width: 576px) {
        height: 100vh;
        .c {
            height: 100vh;
        } 
        .i1 {
            width: 50%;
            margin: 0 0 0 auto;
        }
        .i2{
            width: 60%;
            margin: 0 auto;
        }
        .i3{
            width: 50%;
        }
        .i4{
            width: 50%;
            margin: 0 auto;
        }
    }
    
    
`;

const BackgroundImage = () => {
    const { title } = useContext(ThemeContext);
    
    return(
        <Container>
            {title === 'dark' &&
                <img src={Stars} className="stars"/>
            }
            {title === 'light' && 
                <div className="c d-flex flex-column">
                    <img src={Cloud1} className="i1"/>
                    <img src={Cloud2} className="i2 my-auto"/>
                    <img src={Cloud2} className="i3 my-auto"/>
                    <img src={Cloud3} className="i4"/>
                </div>
            }
        </Container>
    );
}

export default BackgroundImage;