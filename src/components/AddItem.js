import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


function AddItem() {
    const { addItem } = useContext(GlobalContext)
    const [Name, setName] = useState('')
    const [Marks, setMarks] = useState('')
    const [Phone, setPhone] = useState('')
    const handleSubmit = (e) => {
        const newItem = {
            id: Math.trunc(Math.random()*20),
            Name,
            Marks,
            Phone
        }
        addItem(newItem);
        setName('');
        setMarks('');
        setPhone('')
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Add ITem</label>
            <br />
            <input
                value={Name}
                name='Name'
                type='text'
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Name</label>
            <br />
            <input
                value={Marks}
                name='Marks'
                type='number'
                onChange={(e) => setMarks(e.target.value)}
            />
            <br />
            <label>Phone</label>
            <br />
            <input
                value={Phone}
                name='Phone'
                type='number'
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddItem