import React, { Fragment, useContext } from "react";
import AddItem from "../../components/AddItem";
import {UpdateItem} from "../../components/UpdateItem";
import { GlobalContext } from "../../context/GlobalContext";

function CreateOrUpdate() {
    const { itemId } = useContext(GlobalContext)
    return (
        <Fragment>
            {(itemId !== 0) ? (
                <UpdateItem />
            ) : (
                <AddItem />
            )}
        </Fragment>
    )
}

export default CreateOrUpdate