import Icon from "@mdi/react";
import "./ErrorForm.scss"
import React, { Component, useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { mdiMicrophone, mdiMicrophoneOff } from '@mdi/js';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function ErrorForm(){

    const {
        transcript,
        listening,
        finalTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [textValue, setTextValue] = useState('');
    const [replaceTextFlag, setReplaceTextFlag] = useState(false);
    const textAreaRef = useRef();
    
    function textareaChange(event){
        setTextValue(event.target.name.value)
    }

    useEffect(()=>{
        if(finalTranscript){
            if(replaceTextFlag || !textValue){
                setTextValue(transcript)
            }
            else{
                const index = textAreaRef.current.selectionStart;
                setTextValue(" "+ textValue.slice(0, index) + transcript + textValue.slice(index) + " ")
            }
        }  
    }, [finalTranscript])

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
                    <Button onClick={SpeechRecognition.startListening} className="microphone-btn rounded-circle">
                        <Icon path={browserSupportsSpeechRecognition ? mdiMicrophone : mdiMicrophoneOff}></Icon>
                    </Button>
                </header>
                <textarea ref={textAreaRef} onChange={textareaChange} value={textValue}></textarea>
            </div>
        </div>
    );
}
export default ErrorForm