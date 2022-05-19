import React from "react";

export const ErrorInput = React.memo((props:any) => {

    const warning = () => {
        if (props.value.length === 16) {
            return "ok"
        } else if (props.value.length > 16) {
            return 'Card length more then 16'
        } else if (props.value.length < 16) {
            return 'Card length less then 16'
        }
    }

    return (
        <div>{warning()}</div>
    )
})