import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';
import st from './PostsList.module.css'
import {Post} from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../Store/ReduxStore";
import {delPostAC, PostsReducerType} from "../../Store/Reducers/PostsReducer";
type PostsListType = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}
export const PostsList = ({visible, setVisible}: PostsListType) => {
    const [select,setSelect] = useState<string>("")
    const posts = useSelector<storeType,PostsReducerType[]>(state => state.posts)
    const filtredPosts = useMemo(()=>{
        switch (select){
            case "Title":{
                return posts.sort((a,b) => a.title.localeCompare(b.title))
            }
            case "Text": {
                return posts.sort((a,b) => a.text.localeCompare(b.text))
            }
            default: return posts
        }
    },[select,posts])

    return (
        <div className={st.container}>
            <div className={st.settings}>
                <select
                    defaultValue={select}
                    onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setSelect(e.currentTarget.value)}
                >
                    <option disabled value={"Search"}>Поиск...</option>
                    <option value={"Title"}>По заголовку</option>
                    <option value={"Text"}>По тексту</option>
                </select>
                <button onClick={()=>setVisible(!visible)}>Add</button>
            </div>
            {filtredPosts.map(post => <Post key={post.id} id={post.id} title={post.title} text={post.text}/>)}

        </div>
    );
};
