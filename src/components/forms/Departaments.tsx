import React, { useEffect, useState } from'react';
import "../../styles/components/forms/modalWindow.scss"
// import "../../styles/components/forms/forms.scss"
import { Table, Button, Form} from 'react-bootstrap';
import { Constructor, ModalWindowConstructor } from './Constructor';
import { Loader } from "../Loader";
import axios from "axios";

const showApi = "http://localhost/department";

type Departament = {
    id: number;
    title: string;
    company_id: number;
  };

  interface Data {
    items: Departament[];
  }


export const ShowMany = ({ showModal, editModal}: {showModal: Function, editModal: Function}) => {
    const [data, setData] = useState<Data>({ items: [] });
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getData();
      }, []);
    
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

    const handleDelete = async (id: number) => {
        setIsLoading(true);
        axios.delete(showApi + "/" + id).catch((err) => {
            console.log(err);
        }).then()
        setIsLoading(false);
    };
    

    if (data.items.length === 0) {
        
        return <h2>no data found</h2>
    } else {
        return ( 
            <div>
                {isLoading && <Loader/>}
                {/* {error && <p>Error: {error}</p>} */}
                <Constructor<Departament> head_list={["id", "title", "company_id"]} data={data.items} showModal={showModal} editModal={editModal} handleDelete={handleDelete}/>
            </div>
           )
    }
}

export const ShowSingle = ({id, onClose}: {id: number, onClose: Function}) =>  {
    const [data, setData] = useState<Departament>();
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
        <ModalWindowConstructor id={id} onClose={onClose} fields={field_fields} label={"Информация о пользователе"} disabled={true}/>
    )
}

export const EditSingle = ({id, onClose}: {id: number, onClose: Function}) =>  {
    const [data, setData] = useState<Departament>();
    
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
    
      const commitChanges = async (id: number, formDataObj: { Название: string; Company: number }): Promise<void> => {
        axios.put(showApi + "/" + id, {"title": formDataObj["Название"], "company_id": formDataObj["Company"]}).catch((err) => {
            console.log(err);
        }).then(onClose(true))
    };

    const field_fields = [
        {"label": "Название", "type": "text", "value": data?.title},
        {"label": "Company", "type": "select", "data": [data?.company_id]}]

    return (
        <ModalWindowConstructor id={id} onClose={onClose} fields={field_fields}  button={{"label":"Сохранить", "onClick": commitChanges}} label={"Редактировать пользователя"}/>
    )
}

const fields = [
    {label: "Название", type: "text"},
    {"label": "Company", "type": "select", "data": ["1","2","3"]}]

export const CreateSingle = ({onClose}: {onClose: Function}) =>  {

    const commitChanges = async (id: number, formDataObj: { Название: string; Company: number }): Promise<void> => {
        axios.post(showApi, {"title": formDataObj["Название"], "company_id": formDataObj["Company"]}).catch((err) => {
            console.log(err);
        }).then(onClose(true))
    };
    return (
        <ModalWindowConstructor onClose={onClose} fields={fields} button={{"label":"Добавить", "onClick": commitChanges}} label={"Добавить пользователя"}/>
    )
}