import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addPostAC} from "../../Store/Reducers/PostsReducer";

export const AddPost = () => {
    const [titleInput, setTitleInput] = useState<string>("")
    const [textInput, setTextInput] = useState<string>("")
    const dispatch = useDispatch()
    const onClickAddPostHandler = () => dispatch(addPostAC(titleInput,textInput))
    return (
        <div>
            <input
                type={"text"}
                value={titleInput}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitleInput(e.currentTarget.value)}
                style={{width: "100%"}}
            />
            <input
                type={"text"}
                value={textInput}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTextInput(e.currentTarget.value)}
                style={{width: "100%"}}
            />
            <button
                onClick={onClickAddPostHandler}
            >Add</button>
        </div>
    );
};