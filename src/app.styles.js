import styled from 'styled-components';

export const Cointainer = styled.div`
    width: 100%;
    max-width: 751px;
    margin: auto;
    display: flex;
    padding: 50px 0;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 750px) {flex-direction: column;}
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
    justify-content: center;
    

    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const NomeJogo = styled.a`
    display: block;
    width: 200px;
    justify-content: center;
    align-items: center;

`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    

    @media (max-width: 750px) {
        
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

export const Button = styled.div`
    width: 150px;
    padding: 5px;
    border: 1px solid #74B3CE;
    text-align: center;
    color: #74B3CE;
    background-color: #172A3A;
     
`; 

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px){
        justify-content: center;
        margin: 0 20px;
        flex-direction: column;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-content: center;
    

    @media (max-width: 560px){
        
        grid-template-columns: repeat(3, 1fr);
    }
`;