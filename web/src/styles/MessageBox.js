import styled from 'styled-components';

export const Message = styled.div`
background: rgba(0, 0, 0, .3);
width:600px;
height:600px;
position:relative;
overflow-x:hidden;  

@media (max-width: 500px)
    {
        width:350px;
        height:550px;
    }

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

    @media (max-width: 500px)
    {
        max-width:200px;
    }
   

    &+&{
        margin-top:20px;
    }

`