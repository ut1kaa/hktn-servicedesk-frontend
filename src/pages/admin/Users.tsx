import { useState } from 'react';
import "../../styles/pages/admin/users.scss"
import {Button} from 'react-bootstrap';
import { CreateSingle, EditSingle, ShowMany, ShowSingle } from '../../components/forms/Users';

const Users = () => {
    const [selected, setSelected] = useState<number>(0);
    const [isShown, setIsShown] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const handleShow = (id: number) => {
        setSelected(id);
        setIsShown(true);
    };

    const handleEdit = (id: number) => {
        setSelected(id);
        setIsEdit(true);
    };

    const handleCreate = () => {
        setIsCreate(true);
    }



    return (
        <div className="container">
            <h1>Пользователи</h1>

            <div className="table">
                <ShowMany showModal={handleShow} editModal={handleEdit} />
            </div>
            <Button onClick={handleCreate}>Добавить отдел</Button>
            {isShown && <ShowSingle id={selected} onClose={() => setIsShown(false)} />}
            {isEdit && <EditSingle id={selected} onClose={() => setIsEdit(false)} />}
            {isCreate && <CreateSingle onClose={() => setIsCreate(false)} />}
        </div>
    );

}

export default Users;