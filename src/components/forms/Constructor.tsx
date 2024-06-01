import Icon from "@mdi/react";
import { mdiPencil, mdiEye, mdiDelete  } from '@mdi/js';
import { Form, Button } from "react-bootstrap";
import "../../styles/components/forms/forms.scss"
import "../../styles/components/forms/modalWindow.scss"


export const Constructor = <T extends { id: number; [key: string]: React.ReactNode }>
    ({ head_list, data, showModal, editModal, handleDelete }:
     { head_list: string[], data: T[], showModal: Function, editModal: Function, handleDelete: Function }) => {
    
    return (
      <table className="list-table">
        <thead>
          <tr>
            {head_list?.map((item) => (
              <th key={item}>{item}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              {head_list.map((headItem) => (
                <td key={`${item.id}-${headItem}`}>{item[headItem]}</td>
              ))}
            <td className="actions">
                <Button onClick={() => editModal(item.id)}><Icon className="btn-icon" path={mdiPencil}/></Button>
                <Button onClick={() => showModal(item.id)}><Icon className="btn-icon" path={mdiEye}/></Button>
                <Button onClick={() => handleDelete(item.id)}><Icon className="btn-icon" path={mdiDelete}/></Button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

  interface DataItem {
    label: string;
    type: string;
    data?: string[] | number[];
    value?: string | number;
  }
  
  type GroupedDataItem = DataItem[];
  
  type Data = (DataItem | GroupedDataItem)[];
  
type ButtonData = {
  label: string;
  onClick: Function
}

  interface ModalWindowConstructorProps {
    id?: number;
    onClose: Function;
    fields: Data;
    button?: ButtonData;
    label: string;
    disabled?: boolean;
  }
  
export const ModalWindowConstructor: React.FC<ModalWindowConstructorProps> = ({ id, onClose, fields, button, label, disabled=false}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    button!.onClick(id, formDataObj)
  };  
  
  const renderFormGroups = (data: Data) => {
      return data.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <div className="content-group" key={`group-${index}`}>
              {item.map((subItem) => (
                <Form.Group key={subItem.label}>
                  <Form.Label>{subItem.label}</Form.Label>
                  <Form.Control name={subItem.label} type={subItem.type} placeholder={subItem.label} defaultValue={subItem.value} disabled={disabled}/>
                </Form.Group>
              ))}
            </div>
          );
        } else if ('type' in item && item.type === "select" && item.data) {
          return (
            <Form.Group key={item.label}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Select name={item.label} disabled={disabled}>
                {item.data.map((option, optionIndex) => (
                  <option key={optionIndex} defaultValue={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          );
        } else if ('type' in item) {
          return (
            <Form.Group key={item.label}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control name={item.label} type={item.type} placeholder={item.label} defaultValue={item.value} disabled={disabled}/>
            </Form.Group>
          );
        }
        return null;
      });
    };
  
    return (
      <div className="modalWindow" onClick={() => onClose(false)}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
        <h1>{label}</h1>
          <Form onSubmit={handleSubmit}>
            {renderFormGroups(fields)}
            {button && <Button type="submit">{button.label}</Button>}
          </Form>
        </div>
      </div>
    );
  };
  