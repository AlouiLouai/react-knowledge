import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ListItem() {
    const { items, removeItem, editItem } = useContext(GlobalContext)
    useEffect(() => {
        items
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(element => {
                        return (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td>{element.Name}</td>
                                <td>{element.Marks}</td>
                                <td>{element.Phone}</td>
                                <td>
                                    <button onClick={() => editItem(element.id)} color="danger">Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => removeItem(element.id)} color="danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListItem