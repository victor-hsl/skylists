import styled from "styled-components";
import Clouds from '../../assets/backgrounds/clouds.png'
import Stars from '../../assets/backgrounds/stars.png'
import { ThemeContext } from 'styled-components';
import { useContext } from "react";

const Container = styled.div`
    @keyframes moveX {
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
        100% {
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
        animation: moveY 10s infinite linear;
    }
    .stars:after {
        top: 0px;
    }
    .clouds {

        height: 100%;
        width: 100%;
        animation: moveX 7s infinite linear;
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
                <img src={Clouds} className="clouds"/>
            }
        </Container>
    );
}

export default BackgroundImage;