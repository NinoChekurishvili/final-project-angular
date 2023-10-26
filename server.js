const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);


server.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    const user = router.db.get('users').find({ email }).value();

    if (user && user.password === password) {
        res.status(200).jsonp(user);
    } else {
        res.status(400).jsonp({
            error: "Bad authentication"
        });
    }
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});

