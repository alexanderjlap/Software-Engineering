import './App.css'
import './intro.tsx'
import './title.tsx'
import './list.tsx'
import Intro from "./intro.tsx";
import Title from "./title.tsx";
import List from "./list.tsx";
import Table from "./table.tsx";
import Form from "./form.tsx";

function App() {
    //use props to pass in names in intro.tsx
    return (
        <>

            <Intro name="Alexander Lap and Tri Vien Le"/>
            <Title about="Hello, I'm Alexander Lap. I enjoy gaming in my free time. My interest are cooking, gym, sleeping, gaming,
            and ultimate frisbee."/>
            <Title about="Hello! My name is Tri Vien Le. I am a CS Major. I live in Chicago, Illinois.
            I love going to the gym, playing sports, video games, and hanging out with friends."/>
            <h3>All hobbies for Alexander Lap and Tri Vien Le</h3>
            <List/>
            <h3>Hobbies Table</h3>
            <center><Table/></center>
            <Form/>
        </>
    )
}

export default App
