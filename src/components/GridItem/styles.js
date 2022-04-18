import styled from 'styled-components';

export const Container = styled.div`
    height: 120px;
    margin: 5px;
    border-radius: 12px;
    border: 2px solid black;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover { box-shadow: 1px 2px 10px #74B3CE; }
    `    
    ;
    

export const Icon = styled.img`
    width: 120px;
    border-radius: 12px;`;