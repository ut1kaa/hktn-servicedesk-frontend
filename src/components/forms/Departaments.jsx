import React, { useEffect, useState } from'react';
import "../../styles/components/forms/modalWindow.scss"
// import "../../styles/components/forms/forms.scss"
import { Table, Button, Form} from 'react-bootstrap';
import { Constructor, ModalWindowConstructor } from './Constructor';
import { Loader } from "../Loader";
import axios from "axios";

const showApi = "http://localhost/department";


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
                <Constructor head_list={["id", "title", "company_id"]} data={data.items} showModal={showModal} editModal={editModal} handleDelete={handleDelete}/>
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
        {"label": "Название", "type": "text", "value": data?.title},
        {"label": "Company", "type": "text", "value": data?.company_id}]

    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={field_fields} label={"Информация об отделе"} disabled={true}/>
    )
}

export const EditSingle = ({id, onClose}) =>  {
    const [data, setData] = useState();

    const commitChanges = async (id, formDataObj) => {
        axios.put(showApi + "/" + id, {"title": formDataObj["Название"], "company_id": formDataObj["Company"]}).catch((err) => {
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
    


    const field_fields = [
        {"label": "Название", "type": "text", "value": data?.title},
        {"label": "Company", "type": "select", "data": [data?.company_id]}]

    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={field_fields}  button={{"label":"Сохранить", "onClick": commitChanges}} label={"Редактировать отдел"}/>
    )
}

const fields = [
    {label: "Название", type: "text"},
    {"label": "Company", "type": "select", "data": ["1","2","3"]}]

export const CreateSingle = ({onClose}) =>  {
    const [data, setData] = useState();

    const commitChanges = async (id, formDataObj) => {
        axios.post(showApi, {"title": formDataObj["Название"], "company_id": formDataObj["Company"]}).catch((err) => {
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
        <ModalWindowConstructor onClose={onClose} fields={fields} button={{"label":"Добавить", "onClick": commitChanges}} label={"Добавить отдел"}/>
    )
}