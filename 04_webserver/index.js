const http = require('http');
const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/friends') {
        // res.writeHead(200, {
        //     'Content-type': 'application/json',
        // });
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            id: 1,
            name: 'John',
        }));
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Item 1</li>');
        res.write('<li>Item 2</li>');
        res.write('<li>Item 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
})
    

server.listen(PORT, () => {
    console.log(`LISTENING ON: http://localhost:${PORT}/`)
});