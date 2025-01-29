function TodoCounter({total,  completed}){
    return(
    <h1 className="title">Completed {completed} of {total} tasks</h1>
    );
  }

  export default TodoCounter;