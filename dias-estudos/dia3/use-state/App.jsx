/* eslint-disable no-unused-vars */
import React from "react";
import ButtonModal from "./use-state/ButtonModal";
import Modal from "./use-state/Modal";

const App = () => {

    const [modal,setModal] = React.useState(false);
   
    return (
        <div>
            <Modal modal={modal} setModal={setModal}/>
            <ButtonModal setModal={setModal}/>
        </div>
    )
    
}

export default App;