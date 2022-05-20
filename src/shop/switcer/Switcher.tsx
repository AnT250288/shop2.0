import React, {ChangeEvent, useState} from "react";
import t from "../../admin-client/switch.module.css";
import {Toggle} from "../../admin-client/toggle";
import {Admin} from "../admin/admin";
import {Client} from "../user/client/client";


export const Switcher = React.memo(() => {

    const [admin, setAdmin] = useState<boolean>(false)
    const setRole = (e: ChangeEvent<HTMLInputElement>) => {
        setAdmin(e.target.checked)
    }

    return (
        <>
            <div>
                <div className={t.box}>
                    <Toggle onChange={setRole}/>
                    <p>You select {!admin ? "Admin" : "Client"}</p>
                </div>
                <div>
                    {!admin
                        ? <Admin/>
                        : <Client/>
                    }
                </div>
            </div>


        </>

    )

})