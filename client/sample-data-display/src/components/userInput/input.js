import React from 'react';
import './input';
import * as styled from '../../StyledComponents/stylecomp';

const userinput=(props)=>{
    return(
        <div>
       
        <styled.FormGroup>

            <styled.Label htmlFor="label">Label</styled.Label>
            <styled.Input id="label" />
            

            <styled.Label htmlFor="label">Label</styled.Label>
            <styled.Input id="label" />
            

            <styled.Label htmlFor="label">Label</styled.Label>
            <styled.Input id="label" />
            

            <styled.Label htmlFor="label">Label</styled.Label>
            <styled.Input id="label" />
           

            <styled.Label htmlFor="label">Label</styled.Label>
            <styled.Input id="label" />
           

            <styled.Label htmlFor="label">Label</styled.Label>
            <styled.Input id="label" />
            {/* <styled.Message>This is the validation message</styled.Message> */}

            <styled.StyledButton >SUBMIT</styled.StyledButton>
        </styled.FormGroup>
    
        </div>
    );
}
export default userinput;