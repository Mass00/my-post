
export type PostsReducerType = {
    id: string
    title: string
    text: string
}
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
export const PostsReducer = (state:PostsReducerType[] = initialStatePostsReducer, action: any):PostsReducerType[] => {
    switch (action.type){
        default: return state
    }
};

