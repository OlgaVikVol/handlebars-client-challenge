const React = require("react");

const Layout = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/application.css" />
        <script defer src="js/index.js" />
        <title>Document</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

module.exports = Layout;
