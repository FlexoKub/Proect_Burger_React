import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../image/logo.svg';
import siginImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
position: fixed;
top: 0;
left: 0;
z-index: 999;
height: 80px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
background-color: #299B01;
color: white;
`;
const Logo = styled.div`
display: flex;
align-items: center;
`;
const H1 = styled.h1`
font-size: 35px;
margin-left: 15px;
`;
const ImgLogo = styled.img`
width: 50px;
`;
const Login = styled.button`

position: relative;
display: inline-block;
font-family: Arial,Helvetica,FreeSans,"Liberation Sans","Nimbus Sans L",sans-serif;
font-size: 1.2em;
font-weight: 700;
color: rgb(245,245,245);
text-shadow: 0 -1px rgba(0,0,0,.1);
text-decoration: none;
user-select: none;
padding: .3em 1em;
outline: none;
border: none;
border-radius: 3px;
background: #FFE900 linear-gradient(#FFE900, #BFB330);
box-shadow: inset #FFEF40 0 -1px 1px, inset 0 1px 1px #BFB330, #A69800 0 0 0 1px, rgba(0,0,0,.3) 0 2px 5px;
-webkit-animation: pulsate 1.2s linear infinite;
animation: pulsate 1.2s linear infinite;

:hover {
-webkit-animation-play-state: paused;
animation-play-state: paused;
cursor: pointer;
}
:active {
top: 1px;
color: #fff;
text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff;
box-shadow: 0 -1px 3px rgba(0,0,0,.3), 0 1px 1px #fff, inset 0 1px 2px rgba(0,0,0,.8), inset 0 -1px 0 rgba(0,0,0,.05);
}
@-webkit-keyframes pulsate {
50% {color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff;}
}
@keyframes pulsate {
50% {color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff;}
}
`;

const User = styled.div`
display: flex;
align-items: center;
text-align: center;
`;
const LogOut = styled.span`
font-size: 20px;
font-weight: 700;
cursor: pointer;
margin-right: 30px;
`;
const Figure = styled.figure`
margin: 0 30px;
`;
export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
        <ImgLogo src={LogoImg} alt="лого"/>
        <H1>PiZZa - BuRRger</H1>
        </Logo>
        {authentication ? 
        <User>
            <Figure>
                <img src={siginImg} alt={authentication.displayName}/>
                <figcaption>{authentication.displayName}</figcaption>
            </Figure>
            <LogOut title="Выйти" onClick={logOut}>X</LogOut>
        </User> :
        <Login onClick={logIn}>
            <Figure>
                <img src={siginImg} alt="войти"/>
                <figcaption>Войти</figcaption>
            </Figure>
        </Login>}
    </NavBarStyled>
);