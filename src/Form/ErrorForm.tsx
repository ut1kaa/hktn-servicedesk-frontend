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
            <h1>Возникли проблемы с программой?</h1>
            <Form.Select className="mb-3" aria-label="Тип обращения">
                <option value="1">Ошибка</option>
                <option value="2">Консультация</option>
                <option value="3">Прочее</option>
            </Form.Select>
            <h3>Важность обращения</h3>
            <Form className="status-row mb-3">
                <Form.Check name="status-group" type="radio" label="Низкая"/>
                <Form.Check name="status-group" type="radio" label="Средняя"/>
                <Form.Check name="status-group" type="radio" label="Высокая"/>
                <Form.Check name="status-group" type="radio" label="Критическая"/>
            </Form>
            <Form.Select className="mb-3" aria-label="Тип программного прод">
                <option value="1">Бухгалтерский учет</option>
                <option value="2">Страница поиска</option>
                <option value="3">Панель администратора</option>
            </Form.Select>
            <div className="speech-wrap">
                <textarea placeholder="Суть проблемы" name="" id="userTextInput"></textarea>
                <Button className="microphone-btn rounded-circle top-50 end-0"><Icon path={mdiMicrophone}></Icon></Button>                      
            </div>
        </div>
    );
}
export default ErrorForm