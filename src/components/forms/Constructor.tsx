import Icon from "@mdi/react";
import { mdiPencil, mdiEye, mdiDelete  } from '@mdi/js';
import { Form, Button } from "react-bootstrap";
import "../../styles/components/forms/forms.scss"
import "../../styles/components/forms/modalWindow.scss"


export const Constructor = <T extends { id: number; [key: string]: React.ReactNode }>
    ({ head_list, data, showModal, editModal }:
     { head_list: string[], data: T[], showModal: Function, editModal: Function }) => {
    
    const handleDelete = async <T extends {}>(id: number) => {
        // TODO
    };
    
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
                <button onClick={() => editModal(item.id)}><Icon path={mdiPencil}/></button>
                <button onClick={() => showModal(item.id)}><Icon path={mdiEye}/></button>
                <button onClick={() => handleDelete<T>(item.id)}><Icon path={mdiDelete}/></button>
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
    data?: string[];
  }
  
  type GroupedDataItem = DataItem[];
  
  type Data = (DataItem | GroupedDataItem)[];
  
  interface ModalWindowConstructorProps {
    id?: number;
    onClose: Function;
    fields: Data;
    buttonLabel?: string;
    label: string;
  }
  
export const ModalWindowConstructor: React.FC<ModalWindowConstructorProps> = ({ id, onClose, fields, buttonLabel, label }) => {
    const renderFormGroups = (data: Data) => {
      return data.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <div className="content-group" key={`group-${index}`}>
              {item.map((subItem) => (
                <Form.Group key={subItem.label}>
                  <Form.Label>{subItem.label}</Form.Label>
                  <Form.Control type={subItem.type} placeholder={subItem.label} />
                </Form.Group>
              ))}
            </div>
          );
        } else if ('type' in item && item.type === "select" && item.data) {
          return (
            <Form.Group key={item.label}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Select>
                {item.data.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
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
              <Form.Control type={item.type} placeholder={item.label} />
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
          <Form>
            {renderFormGroups(fields)}
            {buttonLabel && <Button type="submit">{buttonLabel}</Button>}
          </Form>
        </div>
      </div>
    );
  };
  