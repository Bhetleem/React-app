function TodoItem({text, completed}){
    return(
      <ul>
        <li>
          <div>V</div>
          <p>{text}</p>
          <div>X</div>
        </li>
      </ul>
    );
  }

  export default TodoItem;