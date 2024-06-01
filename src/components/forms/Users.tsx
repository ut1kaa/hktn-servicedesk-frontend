import React, { useEffect, useState } from'react';
import "../../styles/components/forms/modalWindow.scss"
// import "../../styles/components/forms/forms.scss"
import { Table, Button, Form} from 'react-bootstrap';
import { Constructor, ModalWindowConstructor } from './Constructor';


type User = {
    id: number;
    email: string;
    password: string;
    access_token: string;
    contact_id: number;
    departament_id: number;
    post_id: number;
    role_id: number;
  };

const fields = [
    {label: "email", type: "text"},
    {label: "Password", type: "password"},
    [{"label": "First Nmae", "type": "text"}, {"label": "Last Nmae", "type": "text"}],
    {"label": "Departrament", "type": "select", "data": ["1","2","3"]}]

export const ShowUsers = ({ data, showModal, editModal}: {data: User[], showModal: Function, editModal: Function}) => {

    const handleDelete = async (id: number) => {
        // setIsLoading(true);
        // TODO
        
    };

    if (data.length === 0) {
        return <h2>no data found</h2>
    } else {
        return ( 
            <Constructor<User> head_list={["id", "email", "password", "role_id"]} data={data} handleDelete={handleDelete} showModal={showModal} editModal={editModal}/>
        )
    }
}

export const ShowUser = ({id, onClose}: {id: number, onClose: Function}) =>  {

    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={fields}  label={"Информация о пользователе"}/>
    )
}

export const EditUser = ({id, onClose}: {id: number, onClose: Function}) =>  {

    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={fields}  buttonLabel={"Сохранить"} label={"Редактировать пользователя"}/>
    )
}

export const CreateUser = ({onClose}: {onClose: Function}) =>  {
    return (
        <ModalWindowConstructor onClose={onClose} fields={fields}  buttonLabel={"Добавить"} label={"Добавить пользователя"}/>
    )
}