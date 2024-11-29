# Server-side Rendering
Here's a basic example of Server-Side Rendering (SSR) without using Express or any additional web framework. This example uses Node.js built-in http module to serve an HTML page with some rendered content.

### Basic SSR Example with Node.js http Module
```javascript
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
```

### How It Works:
- `http.createServer`: The built-in `http` module creates an HTTP server to handle incoming requests.
- Dynamic Content Generation: The `renderPage` function generates an HTML string dynamically based on inputs like the page title and message.
- Routing Logic: The server checks the `req.url` to serve different responses for different routes (e.g., `/` and other paths for 404).
- `res.writeHead` and `res.end`: These are used to send the HTTP headers and the response content to the client.

### Run the Example:
 1. Save the code into a file, e.g., server.js.
 2. Run the file using Node.js:

 ```bash
node server.js
```

3. Open your browser and visit `http://localhost:3000`. You’ll see the dynamically rendered HTML content.

This approach uses pure Node.js for a lightweight SSR implementation.