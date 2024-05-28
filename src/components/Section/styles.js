import styled from "styled-components";

export const Container = styled.div`
    margin-top: 95px;

    > span {
        font-size: 40px;
        color: #454545;
        font-weight: 500;
        
    }

    > a {
        margin-left: 777px;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;