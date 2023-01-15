import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const UpdateItem = () => {

    const { editItem, items, itemId } = useContext(GlobalContext)
    const [selected, setSelected] = useState({
        id: '',
        Name: '',
        Marks: '',
        Phone: ''
    })

    const onChange = (e) => {
        setSelected({ ...selected, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const selectedItem = items.find(item => item.id === itemId);
        setSelected(selectedItem);
    }, [itemId, items])

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = {
            id: itemId,
            Name: selected.Name,
            Marks: selected.Marks,
            Phone: selected.Phone
        }
        editItem(updatedItem);
        setSelected({...selected})
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br />
            <input
                value={selected?.Name || ''}
                name='Name'
                type='text'
                onChange={onChange}
            />
            <br />
            <label>Marks</label>
            <br />
            <input
                value={selected?.Marks || ''}
                name='Marks'
                type='number'
                onChange={onChange}
            />
            <br />
            <label>Phone</label>
            <br />
            <input
                value={selected?.Phone || ''}
                name='Phone'
                type='number'
                onChange={onChange}
            />
            <br />
            <button type="submit">Edit</button>
        </form>
    )
}