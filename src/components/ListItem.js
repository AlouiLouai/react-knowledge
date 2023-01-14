import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ListItem() {
    const { items, removeItem, setItemId, itemId } = useContext(GlobalContext)
    useEffect(() => {
        items
    }, [itemId])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Phone</th>
                        <th colSpan={2}>Actions</th>
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
                                    <button onClick={() => setItemId(element.id) } color="danger">Edit</button>
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