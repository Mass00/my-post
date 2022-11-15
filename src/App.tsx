import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {PostsList} from "./components/Post/PostsList";
import {MyModalWindow} from "./UI/MyModalWindow";
import {AddPost} from "./components/Post/AddPost";

function App() {
    const [visible,setVisible] = useState<boolean>(false)

  return (
    <div className="App">
        <MyModalWindow
            visible={visible}
            setVisible={setVisible}
        >
                <AddPost/>
        </MyModalWindow>
      <PostsList
          visible={visible}
          setVisible={setVisible}
      />
    </div>
  );
}

export default App;
