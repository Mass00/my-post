import React, {memo} from 'react';
import st from './Post.module.css'
import {useDispatch} from "react-redux";
import {delPostAC} from "../../Store/Reducers/PostsReducer";

type PostPropsTypes = {
    id: string
    title: string
    text: string
}
export const Post = memo(({id, title, text}: PostPropsTypes) => {
    console.log('Post rerender')
    const dispatch = useDispatch()
    const onClickDelPostHandler = () => dispatch(delPostAC(id))
    return (
        <div className={st.container}>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
            <div>
                <span>
                   {text}
                </span>
            </div>
            <button onClick={onClickDelPostHandler}>Del</button>
        </div>
    );
})
