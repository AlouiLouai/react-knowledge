import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const UpdateItem = (props) => {

    const { editItem, items } = useContext(GlobalContext)
    const [selected, setSelected] = useState({
        id: '',
        Name: '',
        Marks: '',
        Phone: ''
    })

    const currentItemId = props.match.params.id;

    const onChange = (e) => {
        setSelected({...selected, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        const itemId = currentItemId;
        const selectedItem = items.find(item => item.id === itemId);
        setSelected(selectedItem);
    }, [currentItemId, items])

    const handleSubmit = (e) => {
        const updatedItem = {
            id: currentItemId,
            Name,
            Marks,
            Phone
        }
        editItem(updatedItem);
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Update item</label>
            <br />
            <input
                value={Name}
                name='Name'
                type='text'
                onChange={onChange}
            />
            <br />
            <label>Name</label>
            <br />
            <input
                value={Marks}
                name='Marks'
                type='number'
                onChange={onChange}
            />
            <br />
            <label>Phone</label>
            <br />
            <input
                value={Phone}
                name='Phone'
                type='number'
                onChange={onChange}
            />
            <br />
            <button type="submit">Edit</button>
        </form>
    )
}