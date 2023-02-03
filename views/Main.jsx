const React = require("react");

const Layout = require("./Layout");

const Main = (props) => {
  const { plainTodos } = props;
  return (
    <Layout>
      <div className="post-container">
        <ul>
          {plainTodos.length &&
            plainTodos.map(({ id, name, status }) => (
              <li key={id}>
                <div className="task">
                  <h4>{id}</h4>
                  <h3>{name}</h3>
                  <button data-btnid={id} type="submit" value="submit_complete">
                    Выполнено
                  </button>
                  <button data-btnid={id} type="submit" value="submit_edit">
                    Редактировать
                  </button>
                  <button data-btnid={id} type="submit" value="submit_delete">
                    Удалить
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

module.exports = Main;
