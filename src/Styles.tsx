import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
body{
font-family:  'Arial Rounded MT Bold', "Helvetica Rounded", Arial, sans-serif;
width: 100vw;
padding: 0%;
margin: 0%;
overflow-y:hidden;
overflow-x:hidden;

}



`;



export const Container = styled.div`
font-family:  'Arial Rounded MT Bold', "Helvetica Rounded", Arial, sans-serif;
background-image: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
animation: collors 20s ease infinite;
height: 115vh;
width: 100vw;
padding: 0%;
margin: 0%;
background-size: 300% 300%;
display: default;
`;




export const Formcontent = styled.div`




body {



@keyframes colors {
   0% {
       background-position: 0% 50%;
   }
 50% {
        background-position: 100% 50%;
    }
     100% { 
        background-position: 0% 50%;

    }
}
}

#bdd{                                        
     
    position: relative; 
    top: 50%; 
    left: 50%; 
    transform: translate(-26.5%, -1500%); 
    color: black; 
    font-size: 24px; 
 
}

#form {
    top: 50%;
    left: 50%;
    transform: translate(-5%, -80%);
}


.box {
position: relative;
top: 50%;
left: 50%;
transform: translate(-246%, 2%);
background-color: rgba(0, 0, 0, 0.6);
padding: 35px;
border-radius: 15px;
width: 20%;
color: white
}



#data_nascimento{
    color: black
}

fieldset {
 
border: 3px ;
}

legend {
height:40px;
width:1000px;

padding: 8px;
text-align: center;
background-color: dodgerblue;
border-radius: 10px;
}

.inputBox {
    position: relative;
    
    }
.inputUser {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    font-size: 15px;
    width: 100%;
    letter-spacing: 1.5px;
    }

    .labelInput{
        position: absolute;
        top: 0px;
        left: 0px;
        pointer-events: none;
        transition: .5s;
    }

    .inputUser:focus ~ .labelInput,
    .inputUser:valid ~ .labelInput {
top: -20px;
font-size: 12px;
color: dodgerblue;

}
#data_nascimento{
border: none;
padding: 8px;
border-radius: 10px;
outline: none;
font-size: 15px;

}
#submit {
background-image: linear-gradient(to right, blue, red);
animation: colors 15s ease infinite;
background-size: 300% 300%;
width: 100%;
border: none;
padding: 15px;
color: white;
font-size: 15px;
cursor: pointer;
border-radius: 10px;
box-sizing: border-box;
transition: all 400ms ease;
max-width: 100%;
-moz-transition: all 0.3s;
-webkit-transition: all 0.3s;
transition: all 0.3s;
}
#submit:hover{
    -moz-transform: scale(1.05);
-webkit-transform: scale(1.05);
transform: scale(1.05);
}



#sla{
background: #090979;
animation: colors 15s ease infinite;
background-size: 150% 150%;
border: none;
padding: 20px;
color: white;
font-size: 20px;
cursor: pointer;
border-radius: 12px;
box-sizing: border-box;
transition: all 400ms ease;
outline: none;
position: relative;
text-decoration: none;
line-height: 100px;
margin: 50px;
cursor: pointer;
max-width: 100%;
-moz-transition: all 0.3s;
-webkit-transition: all 0.3s;
transition: all 0.3s;
}
#sla:hover{
-moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
transform: scale(1.1);
}



`;

export const Buttonform = styled.button`
width: 100%;
padding: 16px;
color: #fff;
background: red;
border: none;
border-radius: 5px;
font-weight: 700 ;
margin-top: 32px;
`




    
export const tabela = styled.table`
.tabela {

    color: blue;


}



`





