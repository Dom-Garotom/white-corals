import styled from "styled-components"

export const WrapperHeader = styled.header`
    min-block-size: 64px;
`

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;

    span{
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        &::before{
            content: "";
            height: 25px;
            width: 2px;
            background-color: #121212;
        }

        &:hover{
            color: #3B6AE1;
        }
    }


    a{
        text-decoration: none;
        font-weight: 600;
        color: #121212;

        &:hover{
            color: #3B6AE1;
        }
    }

    div{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    #NameUser{
        display: flex;
        gap: 10px;
    }

    @media screen and (max-width : 800px) {
        gap: 5px;

        #NameUser{
            margin-right: 5px;
        }

        span::before{
            content: none;
        }

        span::after{
            content: "";
            height: 25px;
            width: 2px;
            background-color: #121212;
        }
    }

    @media screen and (max-width : 365px) {
        gap: 0px;

        #NameUser{
            margin-right: 0px;
        }

        span::before{
            content: none;
        }

        span::after{
            content: none;
        }
    }

`

export const WrapperContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    background-color: #FFF;

    @media screen and (max-width: 500px) {
        padding: 0px 0px;        
    }
`

type MenuWrapper = {
    block : boolean;
}
export const WrapperMenu = styled.div<MenuWrapper>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F5F5;
    gap: 30px;
    padding: 20px 0px;

    a{
        text-decoration: none;
        font-weight: 600;
        color: #121212;

        &:hover{
            color: #3B6AE1;
        }
    }

    pointer-events: ${(props) => (props.block ? 'auto' : 'none')};
    display: ${(props) => (props.block ? 'flex' : 'none')};
    opacity: ${(props) => (props.block ? '1' : '0')};
    transform: ${(props) => (props.block ? 'translateY(0)' : 'translateY(1rem)')};
    transition: opacity 0.20s ease, transform 0.60s ease;

`


