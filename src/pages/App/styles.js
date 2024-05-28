import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 140px 250px;
    
    
    display: flex;
    flex-direction: column;
    align-items: left;

    overflow-y: auto;


    > header {
        display: flex;
        justify-content: space-between;

        > div {
            display: flex;
            flex-direction: column;
            width: 540px;

            > h1 {
                display: flex;
                flex-direction: column;
                font-size: 56px;
                color: #454545;

                > span {
                    color: ${({ theme }) => theme.COLORS.BLUE}
                }
            } 

            > span {
                font-size: 20px;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                margin-bottom: 12px;
            }

            > p {
                white-space: pre-line;
                font-size: 24px;
                margin-top: 14px;
            }
        }

        > img {
            width: 220px;
            height: 220px;
            border-radius: 100px;
        }
    }

            &::-webkit-scrollbar {
            width: 10px;
            }
            &::-webkit-scrollbar-track {
                border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb {
                background: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
                border-radius: 8px;
            }

`;

export const FollowMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    > span {
        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    >div {
        display: flex;
        gap: 30px;

        > a {
            text-decoration: none;
        
            > svg {
                width: 35px;
                height: 35px;
                margin-top: 14px;
                
                color: ${({ theme }) => theme.COLORS.GRAY_200};
            }
        }
    }
    
`;

export const Projects = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 19px;
`;

export const Skills = styled.ul`
    list-style: none;
    display: flex;
    gap: 19px;
    margin-top: 42px;

    flex-wrap: wrap;
    justify-content: center;
`;

export const ContactMe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: start;
    margin-left: 30px;
    margin-top: 42px;

    > div {
        display: flex;
        align-items: center;
        gap: 20px;

        > svg {
            width: 35px;
            height: 35px;
        }
        > span {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`;