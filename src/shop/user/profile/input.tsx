import React from "react";
import {useState} from "react";
import {v1} from "uuid";
import {ErrorInput} from "./errorInput";
import {NewInput} from "./newInput";
import {UserType} from "./profileReducer";

export type AddProfilePropsType = {
    addProfile: (state: Array<UserType>) => void
}


export const AddProfile = (props: AddProfilePropsType) => {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [card, setCard] = useState<string>('')

    const handleClickEvent = () => {
        const state: Array<UserType> = [{id: v1(), name, lastName, card}]
        props.addProfile(state)
    }

    console.log(name)
    console.log(lastName)
    console.log(card)

    return (
        <>
            <div>
                <NewInput placeholder={'name'} item={name} setValue={setName}/>
                <NewInput placeholder={'lastName'} item={lastName} setValue={setLastName}/>
                <NewInput placeholder={'card'} item={card} setValue={setCard}/>

                <button onClick={handleClickEvent}>Add new</button>
            </div>
            {card && <ErrorInput value={card}/>}
        </>
    )
}