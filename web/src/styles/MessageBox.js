import styled from 'styled-components';

export const Message = styled.div`
background: rgba(0, 0, 0, .3);
width:600px;
height:600px;
position:relative;
overflow-x:hidden;  

`

export const Content = styled.div`
    background: rgba(0, 0, 0, .5);
    width:auto;
    max-width:450px;
    padding:10px;
    border-radius:10px;
    position:relative;
    top:20px;
    left:15px;    
    color:white;

    &+&{
        margin-top:20px;

        .name{
            color:${props => props.color[5]}
        }
    }

`