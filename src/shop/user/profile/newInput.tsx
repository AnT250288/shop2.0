import React, {ChangeEvent, useCallback} from "react";

export type newInputType = {
    setValue: (e: string) => void
    item: string
    placeholder: string
}

export const NewInput = React.memo(({setValue, item, placeholder}: newInputType) => {

    const onChangeItem = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [])
    return (
        <input placeholder={placeholder} value={item} onChange={onChangeItem}/>
    )
})