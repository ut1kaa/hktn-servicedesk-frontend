import React, { useEffect, useState } from'react';
import "../../styles/components/forms/modalWindow.scss"
// import "../../styles/components/forms/forms.scss"
import { Table, Button, Form} from 'react-bootstrap';
import { Constructor, ModalWindowConstructor } from './Constructor';
import { Loader } from "../Loader";
import axios from "axios";


const showApi = "http://localhost/user";


export const ShowMany = ({ showModal, editModal}) => {
    const [data, setData] = useState({ items: [] });
    const [isLoading, setIsLoading] = useState(false);


    const handleDelete = async (id) => {
        setIsLoading(true);
        axios.delete(showApi + "/" + id).catch((err) => {
            console.log(err);
        }).then()
        setIsLoading(false);
    };
    

    useEffect(() => {
        getData();
      }, [handleDelete]);
    
      const getData = () => {
        axios
          .get(showApi, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };


    if (data.items.length === 0) {
        
        return <h2>no data found</h2>
    } else {
        return ( 
            <div>
                {isLoading && <Loader/>}
                {/* {error && <p>Error: {error}</p>} */}
                <Constructor head_list={["id", "email", "password", "role", "status"]} data={data.items} showModal={showModal} editModal={editModal} handleDelete={handleDelete}/>
            </div>
           )
    }
}

export const ShowSingle = ({id, onClose}) =>  {
    const [data, setData] = useState();
    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        axios
          .get(showApi + "/" + id, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const field_fields = [
        {label: "email", type: "text", value: data?.email},
        {label: "Password", type: "password", value: data?.password},
        [{"label": "First_Name", "type": "text"}, {"label": "Last_name", "type": "text"}, {"label": "patronymic", "type": "text"}, {"label": "Department_id", "type": "text"}, {"label": "Post_id", "type": "text"}, {"label": "phone", "type": "text"}],
        {"label": "Role", "type": "select", "data": [data?.role]}, {"label": "Status", "type": "select", "data": ["active"]}]
    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={field_fields} label={"Информация о пользователе"} disabled={true}/>
    )
}

export const EditSingle = ({id, onClose}) =>  {
    const [data, setData] = useState();

    const commitChanges = async (id, formDataObj) => {
        axios.put(showApi + "/" + id, {"User":{"email": formDataObj["email"], "password": formDataObj["Password"], "role": formDataObj["Role"]},
         "Contact": {"first_name": formDataObj["First_Name"],
          "last_name": formDataObj["Last_name"], 
          "patronymic": formDataObj["patronymic"],
          "department_id": formDataObj["Department_id"],
          "post_id": formDataObj["Post_id"],
          "phone": formDataObj["phone"]}}).catch((err) => {
            console.log(err);
        }).then(onClose(true))
    };
    
    useEffect(() => {
        getData();
      }, [commitChanges]);
    
      const getData = () => {
        axios
          .get(showApi + "/" + id, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    // const field_fields = [
    //     {"label": "Название", "type": "text", "value": data?.title},
    //     {"label": "Company", "type": "select", "data": [data?.company_id]}]
    
    const field_fields = [
            {label: "email", type: "text", value: data?.email},
            {label: "Password", type: "password", value: data?.password},
            [{"label": "First_Name", "type": "text"}, {"label": "Last_name", "type": "text"}, {"label": "patronymic", "type": "text"}, {"label": "Department_id", "type": "text"}, {"label": "Post_id", "type": "text"}, {"label": "phone", "type": "text"}],
            {"label": "Role", "type": "select", "data": [data?.role]}, {"label": "Status", "type": "select", "data": ["active"]}]

    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={field_fields}  button={{"label":"Сохранить", "onClick": commitChanges}} label={"Редактировать пользователя"}/>
    )
}

const fields = [
        {label: "email", type: "text"},
        {label: "Password", type: "password"},
        [{"label": "First_Name", "type": "text"}, {"label": "Last_name", "type": "text"}, {"label": "patronymic", "type": "text"}, {"label": "Department_id", "type": "text"}, {"label": "Post_id", "type": "text"}, {"label": "phone", "type": "text"}],
        {"label": "Role", "type": "select", "data": ["user", "tech", 'admin']}, {"label": "Status", "type": "select", "data": ["active"]}]
export const CreateSingle = ({onClose}) =>  {
    const [data, setData] = useState();

    const commitChanges = async (id, formDataObj) => {
        axios.post(showApi, {"User":{"email": formDataObj["email"], "password": formDataObj["Password"], "role": formDataObj["Role"]},
         "Contact": {"first_name": formDataObj["First_Name"],
          "last_name": formDataObj["Last_name"], 
          "patronymic": formDataObj["patronymic"],
          "department_id": formDataObj["Department_id"],
          "post_id": formDataObj["Post_id"],
          "phone": formDataObj["phone"]}}).catch((err) => {
            console.log(err);
        }).then(onClose(true))
    };
        
    useEffect(() => {
        getData();
      }, [commitChanges]);
    
      const getData = () => {
        axios
          .get(showApi, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return (
        <ModalWindowConstructor onClose={onClose} fields={fields} button={{"label":"Добавить", "onClick": commitChanges}} label={"Добавить пользователя"}/>
    )
}