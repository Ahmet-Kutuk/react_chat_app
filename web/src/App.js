import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import Header from './Compoments/Header';
import MessageBox from './Compoments/MessageBox';
import Send from './Compoments/Send';

const socket = io.connect('http://localhost:4000');
function App() {  

const [state,setState] = useState({message:'',name:''});
const [chat,setChat] = useState([]);

useEffect(() => {
  socket.on('message', ({ name, message }) => {
    setChat([...chat, { name, message }]);
  })
},[chat])

const onTextChange = (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
}

console.log(state);
console.log(chat);

const onMessageSubmit = e => {
  e.preventDefault()
  const { name, message } = state
  socket.emit('message', { name, message })
  setState({ message: '', name })
}

  return (
    <div className="App">
        <Header name={state.name} action={onTextChange} />
        <MessageBox chat={chat}>

        </MessageBox>
        <Send action={onMessageSubmit} message={state.message} text={onTextChange} />
    </div>
  );
}

export default App;
