import { useState } from 'react';
import { ShowUser, ShowUsers, EditUser, CreateUser } from '../../components/forms/Users';
import "../../styles/pages/admin/users.scss"
import {Button} from 'react-bootstrap';

const users = [
    {
      id: 1,
      email: 'user1@example.com',
      password: 'password1',
      access_token: 'token123',
      contact_id: 101,
      departament_id: 5,
      post_id: 2,
      role_id: 3
    },
    {
      id: 2,
      email: 'user2@example.com',
      password: 'password2',
      access_token: 'token456',
      contact_id: 102,
      departament_id: 4,
      post_id: 3,
      role_id: 2
    },
  ];
  

const Users = () => {
    const [selectedUser, setSelectedUser] = useState<number>(0);
    const [isShownUser, setIsShownUser] = useState(false);
    const [isEditUser, setIsEditUser] = useState(false);
    const [isCreateUser, setIsCreateUser] = useState(false);

    const handleShowUser = (id: number) => {
        setSelectedUser(id);
        setIsShownUser(true);
    };

    const handleEditUser = (id: number) => {
        setSelectedUser(id);
        setIsEditUser(true);
    };

    const handleCreateUser = () => {
        setIsCreateUser(true);
    }


    return (
        <div className="container">
            <h1>Пользователи</h1>

            <div className="table">
                <ShowUsers data={users} showModal={handleShowUser} editModal={handleEditUser} />
            </div>
            <Button onClick={handleCreateUser}>Create User</Button>
            {isShownUser && <ShowUser id={selectedUser} onClose={() => setIsShownUser(false)} />}
            {isEditUser && <EditUser id={selectedUser} onClose={() => setIsEditUser(false)} />}
            {isCreateUser && <CreateUser onClose={() => setIsCreateUser(false)} />}
        </div>
    );

}

export default Users;