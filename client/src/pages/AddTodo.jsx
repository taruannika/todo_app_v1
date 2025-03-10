import Wrapper from "../Wrappers/AddTodo";

const AddTodo = () => {
  return (
    <Wrapper>
      <div className="page">
        <div className="page-content">
          <h2>Add New Todo</h2>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" placeholder="title" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" id="dueDate" />
            </div>

            <div className="form-group-checkbox">
              <label htmlFor="important">Important</label>
              <input type="checkbox" name="important" id="important" />
            </div>
            <button>Add</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddTodo;
