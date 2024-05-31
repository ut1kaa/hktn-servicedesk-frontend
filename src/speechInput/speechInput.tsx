import Icon from "@mdi/react";
import React, { Component } from "react";
import { mdiMicrophone } from '@mdi/js';
import {Button} from 'react-bootstrap'

class InputSpeach extends Component {
    render() {
        return (
            <div>
                <textarea name="" id="">
                    
                </textarea>
                <Button><Icon path={mdiMicrophone}/></Button>
            </div>
        )
    }
}
export default InputSpeach