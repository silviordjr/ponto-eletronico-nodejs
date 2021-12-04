import React from "react";
import { useHistory } from "react-router-dom";
import { goToForm, goToHome, goToRecords } from "../routes/coordinator";
import { Button, MainHeader } from '../style/HeaderStyle';

function Header (){
    const history = useHistory()
    return(
        <MainHeader>
            <div>
                <h1>Manga Rosa</h1>
            </div>
            <div>
                <Button onClick={() => goToHome(history)} >Home</Button>
                <Button onClick={() => goToForm(history)} >Formulário</Button>
                <Button onClick={() => goToRecords(history)} >Registros</Button>
            </div>
        </MainHeader>
    )
}

export default Header