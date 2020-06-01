const express = require('express');
const app = express();
const router = express.Router();
app.use(router)

// handle production
// if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/dist/'));

    // handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'));
// }

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})