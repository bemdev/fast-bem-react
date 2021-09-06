module.exports = ({ js, css, body }) => {
    return `
       <!DOCTYPE html>
        <html lang="ru">
          <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/${css}">
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <title>Server-side render react app by Python</title>
          </head>
          <body>
              <div id="root">${body}</div>
          </body>
          <script async src="/${js}" /></script>
        </html>
    `;
};
