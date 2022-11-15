import React, {memo} from 'react';
import st from './Post.module.css'

type PostPropsTypes = {
    id: string
    title: string
    text: string
}
export const Post = memo(({id, title, text}: PostPropsTypes) => {
    console.log('Post rerender')
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
        </div>
    );
})
