import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';
import st from './PostsList.module.css'
import {Post} from "./Post";
import {useSelector} from "react-redux";
import {storeType} from "../../Store/ReduxStore";
import {PostsReducerType} from "../../Store/Reducers/PostsReducer";
type PostsListType = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}
export const PostsList = ({visible, setVisible}: PostsListType) => {
    const [select,setSelect] = useState<string>("")
    const [searchQ,setSearchQ] = useState<string>("")
    const posts = useSelector<storeType,PostsReducerType[]>(state => state.posts)

    const filtredPosts = useMemo(()=>{
        return select
            ? posts.sort((a,b) => a[select as keyof PostsReducerType].localeCompare(b[select as keyof PostsReducerType]))
            : posts
    },[select,posts])

    const sortedAndFiltredPosts = useMemo(()=>{
        return searchQ
            ? filtredPosts.filter(posts => posts.title.includes(searchQ))
            : filtredPosts
    },[searchQ,filtredPosts])

    return (
        <div className={st.container}>
            <div className={st.settings}>
                <select
                    defaultValue={select}
                    onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setSelect(e.currentTarget.value)}
                >
                    <option disabled value={"Search"}>Поиск...</option>
                    <option value={"title"}>По заголовку</option>
                    <option value={"text"}>По тексту</option>
                </select>
                <input
                    type={"search"}
                    value={searchQ}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchQ(e.currentTarget.value)}
                    style={{outline: "none"}
                }/>
                <button onClick={()=>setVisible(!visible)}>Add</button>
            </div>
            {sortedAndFiltredPosts.map(post => <Post key={post.id} id={post.id} title={post.title} text={post.text}/>)}
        </div>
    );
};
