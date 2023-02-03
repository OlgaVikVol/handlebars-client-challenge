const React = require("react");

const Layout = require("./Layout");

const Main = (props) => {
  const { plainTodos } = props;
  return (
    <Layout>
      {plainTodos &&
        plainTodos.map(({ id, name, status }) => (
          <ul>
            <li>
              <div key={id} id={id}>
                <h3>{name}</h3>
              </div>
            </li>
          </ul>
        ))}
    </Layout>
  );
};

module.exports = Main;
