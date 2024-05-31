import Icon from "@mdi/react";
import "./ErrorForm.scss"
import React, { Component, useEffect } from "react";
import { mdiMicrophone } from '@mdi/js';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function startRecognize(){
    
}


function ErrorForm(){
    useEffect(()=>{
        const userTextArea = document.querySelector('#userTextInput')
    })
    return(
        <div className="form-wrapp">
            <h1>У вас проблемы с программой?</h1>
            <Form.Select className="mb-3" aria-label="Тип обращения">
                <option value="1">Тип1</option>
                <option value="2">Тип2</option>
                <option value="3">Тип3</option>
            </Form.Select>
            <h3>Важность обращения</h3>
            <Form className="status-row mb-3">
                <Form.Check name="status-group" type="radio" label="Низкая"/>
                <Form.Check name="status-group" type="radio" label="Средняя"/>
                <Form.Check name="status-group" type="radio" label="Высокая"/>
                <Form.Check name="status-group" type="radio" label="Критическая"/>
            </Form>
            <Form.Select className="mb-3" aria-label="Тип программного прод">
                <option value="1">Продукт 1</option>
                <option value="2">Продукт 2</option>
                <option value="3">Продукт 3</option>
            </Form.Select>
            <div className="speech-wrap">
                <header>
                    <h3>Суть проблемы</h3>
                    <Button className="microphone-btn rounded-circle"><Icon path={mdiMicrophone}></Icon></Button>
                </header>
                <textarea name="" id="userTextInput"></textarea>
            </div>
        </div>
    );
}
export default ErrorForm