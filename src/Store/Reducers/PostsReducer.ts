import {v1} from "uuid";
export type PostsReducerType = {
    id: string
    title: string
    text: string
}
type PostReducerActionTypes = addPostACType | delPostACType
const initialStatePostsReducer = [
    {
    id: "1",
    title: "Title1",
    text: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        " Cras gravida velit vel orci molestie, in pulvinar justo consectetur. Aenean ut."
    },
    {
    id: "2",
    title: "Title2",
    text: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        " Cras gravida velit vel orci molestie, in pulvinar justo consectetur. Aenean ut."
    },

    ]
export const PostsReducer = (state:PostsReducerType[] = initialStatePostsReducer, action: PostReducerActionTypes):PostsReducerType[] => {
    switch (action.type){
        case "ADD-POST": {
            return [...state,{...action.payload}]
        }
        case "DEL-POST": {
            return state.filter(post => post.id !== action.payload.id)
        }
        default: return state
    }
};
type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (title: string, text: string) => {
    return {type: 'ADD-POST', payload: {id: v1(), title, text}} as const
}
type delPostACType = ReturnType<typeof delPostAC>
export const delPostAC = (id: string) => {
    return {type: 'DEL-POST', payload: {id}} as const
}