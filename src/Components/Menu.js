import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
background-color: #ccc;
margin-top: 80px;
margin-left: 380px;
`;
const SectionMenu = styled.section`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
            itemList={dbMenu.burger}
            setOpenItem={setOpenItem}
            />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem 
            itemList={dbMenu.other}
            setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
);