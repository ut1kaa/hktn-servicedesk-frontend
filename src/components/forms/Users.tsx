import React, { useEffect, useState } from'react';
import { Link } from 'react-router-dom';
import Icon from "@mdi/react";
import { mdiPencil, mdiEye, mdiDelete  } from '@mdi/js';
import "../../styles/components/forms/modalWindow.scss"
import "../../styles/components/forms/forms.scss"
import { Table, Button, Form} from 'react-bootstrap';
import { on } from 'events';


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


export const ShowUsers = ({ data, onShowUser, onEditUser}: {data: User[], onShowUser: Function, onEditUser: Function}) => {
    // const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (id: number) => {
        // TODO
      };

    if (data.length === 0) {
        return <h2>no data found</h2>
    } else {
        return (
            <table className="list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, i) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.role_id}</td>
                                <td className="actions">
                                    <button onClick={() => onEditUser(item.id)}><Icon path={mdiPencil}/></button>
                                    <button onClick={() => onShowUser(item.id)}><Icon path={mdiEye}/></button>
                                    <button onClick={() => handleDelete(item.id)}><Icon path={mdiDelete}/></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}


export const ShowUser = ({id, onClose}: {id: number, onClose: Function}) =>  {
    return (
        <div className='modalWindow' onClick={() => {onClose(false)}}>
            <div className='content' onClick={(e) => { e.stopPropagation(); }}>
                <h1>Информация о челе</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control disabled type="text" placeholder="Email"/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control disabled type="password" placeholder="Password"/> 
                    </Form.Group>
                    <div className="content-group">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control disabled type="text" placeholder="First Name"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control disabled type="text" placeholder="Last Name"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Patronymic</Form.Label>
                            <Form.Control disabled type="text" placeholder="Patronymic"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control disabled type="text" placeholder="Phone"/> 
                        </Form.Group> 
                    </div>
                    <Form.Group >
                        <Form.Label>Departament</Form.Label>
                        <Form.Select disabled>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Post</Form.Label>
                        <Form.Select disabled>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Role</Form.Label>
                        <Form.Select disabled>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}


export const EditUser = ({id, onClose}: {id: number, onClose: Function}) =>  {
    return (
        <div className='modalWindow' onClick={()  =>  {onClose(false)}}>
            <div className='content' onClick={(e) => { e.stopPropagation(); }}>
                <h1>Редактирование чела</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email"/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/> 
                    </Form.Group>
                    <div className="content-group">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Patronymic</Form.Label>
                            <Form.Control type="text" placeholder="Patronymic"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone"/> 
                        </Form.Group> 
                    </div>
                    <Form.Group >
                        <Form.Label>Departament</Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Post</Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Role</Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>

                    <Button>Сохранить</Button>
                </Form>
            </div>
        </div>
    )
}


export const CreateUser = ({onClose}: {onClose: Function})  =>   {
    return (
        <div className='modalWindow' onClick={()  =>  {onClose(false)}}>
            <div className='content' onClick={(e) => { e.stopPropagation(); }}>
                <h1>Создание чела</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email"/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/> 
                    </Form.Group>
                    <div className="content-group">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Patronymic</Form.Label>
                            <Form.Control type="text" placeholder="Patronymic"/> 
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone"/> 
                        </Form.Group> 
                    </div>
                    <Form.Group >
                        <Form.Label>Departament</Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Post</Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Role</Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Form.Group>

                    <Button>Создать</Button>
                </Form>
            </div>
        </div>
    )
}