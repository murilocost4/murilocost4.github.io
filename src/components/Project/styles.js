import styled from "styled-components";

export const Container = styled.div`
    width: 231px;
    height: 167px;

    background-color: WHITE;
    box-shadow: 0px 0px 6px 2px rgba(64, 64, 64, 0.16);
    border-radius: 15px;
    margin-top: 42px;

    display: flex;
    gap: 26px;
    flex-direction: column;
    text-align: center;
    padding: 40px;

    white-space: nowrap;

    > h4 {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-size: 28px;
        font-weight: 500;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 16px;
    }

`;