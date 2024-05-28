import styled from "styled-components";

export const Container = styled.div`
    width: 180px;
    height: 50px;

    border-radius: 6px;
    border: 1px solid rgba(65, 105, 225, 0.30);
    background: #FFF;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;

    > img {
        width: 30px;
        height: 30px;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
    }

    transition: all.4s;

    &:hover {
        transform: scale(1.1, 1.1);
        background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
        box-shadow: 0px 0px 6px ${({ theme }) => theme.COLORS.BLUE_WHITE};
        
        > span {
            color: ${({ theme }) => theme.COLORS.BLUE_WHITE};
            text-shadow: 0px 0px 4px ${({ theme }) => theme.COLORS.BLUE_WHITE};
        }
    }
`;