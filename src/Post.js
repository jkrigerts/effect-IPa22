function Post(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>user: {props.userId}</p>
      <p>id: {props.id}</p>
      <p>{props.body}</p>
    </article>
  );
}

export default Post;
// Visas 4 īpa'šibas saņemt kā props
// un parādīt
