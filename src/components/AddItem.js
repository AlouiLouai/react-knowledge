import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


function AddItem() {
    const { addItem } = useContext(GlobalContext)
    const [item, setItem] = useState({
        Name: '',
        Marks: '',
        Phone: ''
    })
    const handleChange = (e) => {
        setItem({...item, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        const newItem = {
            id: Math.trunc(Math.random()*20),
            Name: item.Name,
            Marks: item.Marks,
            Phone: item.Phone
        }
        addItem(newItem);
        setItem({
            Name: '',
            Marks: '',
            Phone: ''
        })
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br />
            <input
                value={item.Name}
                name='Name'
                type='text'
                onChange={handleChange}
            />
            <br />
            <label>Marks</label>
            <br />
            <input
                value={item.Marks}
                name='Marks'
                type='number'
                onChange={handleChange}
            />
            <br />
            <label>Phone</label>
            <br />
            <input
                value={item.Phone}
                name='Phone'
                type='number'
                onChange={handleChange}
            />
            <br />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddItem