import React, { Fragment } from "react";
import { UpdateItem } from "../../components/UpdateItem";

function EditItem(props) {
    return (
        <Fragment>
            <UpdateItem props={props} />
        </Fragment>
    )
}

export default EditItem

