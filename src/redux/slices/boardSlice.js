import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
const boardSlice = createSlice({
    name: 'Board',
    initialState:[
        {
            id: 1, 
            color:'#CAF8FF', 
            title:'Earth changes and journey', 
            posts: [
                {
                    id:1, 
                    heading:'Wokanda', 
                    desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English',
                    image :img1
                },
                {
                    id:2, 
                    heading:'Stranger Things', 
                    desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English',
                    image :img2
                }
            ]
        },
        {
            id: 2, 
            color:'#FFEDC1', 
            title:'Eating rights', 
            posts: [
                {
                    id:2, 
                    heading:'Asgard', 
                    desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English',
                    image :img3
                }
            ]},
    ],
    reducers: {
        addBoard: (state, action) => {
            state.push(action.payload);
        },
        deleteBoard: (state, action) => {
            return state = state.filter(({id}) => id !== action.payload)
        },
        editBoard:(state, action) => {
            const {id, rename} = action.payload;
            const existingUser = state.find(board => board.id === id);
            console.log(existingUser.posts)
            if(existingUser) {
                // existingUser.posts.push({id,heading:rename})
                existingUser.title= rename
            }
        },
        addPost : (state, action) => {
            const {id, heading, key, desc, image} = action.payload
            const FindBoard = state.find(board => board.id===id);
            if(FindBoard) {
                FindBoard.posts.push({id:key, image:image, heading:heading, desc:desc})
            }
            console.log(state);
            console.log(action.payload);
        },
        deletePost : (state, action) => {
            const { parentID, id } = action.payload
            console.log(action.payload)
            let FindBoard = state.find(board => board.id === parentID);
            if(FindBoard) {
                const filterArray = FindBoard.posts.filter(({id}) => id !== action.payload)
                FindBoard.posts.pop(filterArray)
            }
        },
        editPost : (state, action) => {
            const {parentID, id, renameHeading, renameDesc, image} = action.payload
            const FindBoard = state.find(board => board.id === parentID);
            const findPost = FindBoard.posts.find(post => post.id === id)
            if(findPost) {
                findPost.heading = renameHeading
                findPost.desc = renameDesc
                findPost.image = image
            }
        }
    },
})
export const {addBoard,deleteBoard, editBoard,addPost, deletePost, editPost} = boardSlice.actions;
export default boardSlice.reducer;