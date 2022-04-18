import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 30px;
    display: flex;
    cursor: pointer;
    padding: 7px;
    border: 2px solid #172A3A;
    border-radius: 6px;
    color: #74B3CE;
    background-color: #74B3CE;
    transition: all ease .2s;
    font-weight: bold;
    

    &:hover { box-shadow: 1px 2px 10px black; }
`;

export const Label = styled.div`
    height: inherit;
    color: #172A3A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;