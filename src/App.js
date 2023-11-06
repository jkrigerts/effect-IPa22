import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Post from "./Post";
import PostList from "./PostList";

function App() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hello");
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const data = await response.json();
      console.log(data);
      setTodo(data);
      setLoading(false);
    }

    getData();
  }, []);
  // const todo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: true,
  // };
  return (
    <div className="App">
      <h1>Hi</h1>
      {loading ? <p>Lādējas...</p> : <ToDo {...todo} />}
      <Post />
      <PostList />
    </div>
  );
}

export default App;
