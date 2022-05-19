import {AddProfile} from "./input";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {EditableSpan} from "../../admin/changeTitle";
import {AppStateType} from "../../../store/store";
import {createNewUser} from "./profileActions";
import {ProfileStateType, UserType} from "./profileReducer";


export function Profile() {

    const [visible, setVisible] = useState<boolean>(true)

    const user = useSelector<AppStateType, ProfileStateType>(state => state.userStore)
    const dispatch = useDispatch()
    const changeTitle = () => {
        return (
            user.newUser.map(u => {
                return u.id === user.id
                    ? {...u, title: user.title}
                    : u;
            })
        )
    }

    const addProfileHandler = (state: Array<UserType>) => {
        dispatch(createNewUser(state))
        setVisible(false)
    }

    return (
        <>
            <h1>User Information</h1>
            <div>
                {visible
                    ? <AddProfile addProfile={addProfileHandler}/>
                    : <div>
                        {user.newUser.map(u => (
                            <div key={u.id}>
                                <EditableSpan id={u.id} title={u.name} changeTitle={changeTitle}/>
                                <EditableSpan id={u.id} title={u.lastName} changeTitle={changeTitle}/>
                                <EditableSpan id={u.id} title={u.card} changeTitle={changeTitle}/>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}

