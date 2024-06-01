import Icon from "@mdi/react";
import "./ErrorForm.scss"
import React, { Component, useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { mdiMicrophone, mdiMicrophoneOff } from '@mdi/js';
import {Button, ButtonGroup, Form} from 'react-bootstrap';
import axios from 'axios'


function ErrorForm(){

    const {
        transcript,
        listening,
        finalTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();

    const [textValue, setTextValue] = useState('');
    const [replaceTextFlag, setReplaceTextFlag] = useState(false);
    const [speechGroupStatus, setSpeechGroupStatus] = useState(false);
    const textAreaRef = useRef();

    const [priority, setPriority] = useState('');
    const [errorType, setErrorType] = useState('');


    function startSpeech(replaceFlag){
        setReplaceTextFlag(replaceFlag);
        setSpeechGroupStatus(false)
        SpeechRecognition.startListening()
    }

    function openStatus(){
        setSpeechGroupStatus(!speechGroupStatus)
    }
    
    function textareaChange(event){
        setTextValue(event.target.name.value)
    }

    function handleOnSubmit(){
        console.log(textValue, errorType, priority)
        try {
            axios.post(
                'http://localhost/ticket',
                {
                    data:{ "Ticket":{
                        "description": textValue,
                        "type": errorType,
                        "priority": priority
                    }},
                    headers: {
                        "Authorization": "Bearer BmYRLKjs2oGjC-cVENXGZsWgyNrL7TUh",
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin":"*"
                    }
                }
            )    
        } catch (error) {
            console.log('error', error)
        }
        
    }

    useEffect(()=>{
        if(finalTranscript && transcript){
            console.log(transcript)
            if(replaceTextFlag || !textValue){
                setTextValue(transcript)
            }
            else{
                const index = textAreaRef.current.selectionStart;
                setTextValue(textValue.slice(0, index) + " " + transcript + " " + textValue.slice(index))
            }
        }  
    }, [finalTranscript])

    return(
        <form className="form-wrapp">
            <h1>Возникли проблемы с программой?</h1>
            <Form.Select onChange={(e) => setErrorType(e.target.value)} className="mb-3" aria-label="Тип обращения">
                <option value="bug">Ошибка</option>
                <option value="support">Консультация</option>
                <option value="other">Прочее</option>
            </Form.Select>
            <h3>Важность обращения</h3>
            <Form onChange={(e)=>setPriority(e.target.value)} className="status-row mb-3">
                <Form.Check name="status-group" value="low" type="radio" label="Низкая"/>
                <Form.Check name="status-group" value="middle" type="radio" label="Средняя"/>
                <Form.Check name="status-group" value="high" type="radio" label="Высокая"/>
                <Form.Check name="status-group" value="critical" type="radio" label="Критическая"/>
            </Form>
            <Form.Select className="mb-3" aria-label="Тип программного прод">
                <option value="1">Бухгалтерский учет</option>
                <option value="2">Страница поиска</option>
                <option value="3">Панель администратора</option>
            </Form.Select>
            <div className="speech-wrap">
                <textarea ref={textAreaRef} onChange={textareaChange} value={textValue} placeholder="Суть проблемы"></textarea>
                <div className="btn-wrap">
                    <Button onClick={openStatus} className="microphone-btn rounded-circle" disabled={!browserSupportsSpeechRecognition && isMicrophoneAvailable}>
                            <Icon path={browserSupportsSpeechRecognition ? mdiMicrophone : mdiMicrophoneOff}></Icon>
                    </Button>    
                    <ButtonGroup className={speechGroupStatus ? "speechGroupActive" : "speechGroupDisabled"}>
                        <Button onClick={() => startSpeech(false)}>Дополнить</Button>
                        <Button onClick={() => startSpeech(true)}>Заменить</Button>
                    </ButtonGroup>
                </div>
            </div>
            <input className="mb-3" type="file" name="" id="" />
            <Button onClick={handleOnSubmit}>Отправить</Button>
        </form>
    );
}
export default ErrorForm