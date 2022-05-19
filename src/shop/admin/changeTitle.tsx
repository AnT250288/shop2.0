import React, {ChangeEvent, useState} from "react";
import p from "./../user/profile/userStyle.module.css"


type EditableSpanPropsType = {
    id: string
    title: string
    changeTitle: (id: string, editTitle: string) => void
}

export const EditableSpan = React.memo(({title, ...props}: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState<string>(title)

    const onChangeSetTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(props.id, editTitle)
    }

    return (
        editMode
            ? <input
                className={p.span}
                onChange={onChangeSetTitleHandler}
                onBlur={offEditMode}
                autoFocus
                value={editTitle}/>
            : <div className={p.user} onDoubleClick={onEditMode}>{editTitle}</div>
    )
})
