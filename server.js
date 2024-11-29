const http = require('http');

// Function to generate dynamic content
const renderPage = (title, message) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 2rem; }
            h1 { color: #333; }
            p { color: #666; }
        </style>
    </head>
    <body>
        <h1>${title}</h1>
        <p>${message}</p>
    </body>
    </html>
  `;
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const title = 'Welcome to SSR Example!';
    const message = 'This is a simple example of server-side rendering without Express.';
    
    // Write headers and serve the rendered HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(renderPage(title, message));
  } else {
    // Handle 404 for other routes
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(renderPage('404 Not Found', 'The page you are looking for does not exist.'));
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
