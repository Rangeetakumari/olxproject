const express = require('express');
const mongo = require('./DB');
const CategorySchema = require('./CategorySchema');
const cors = require('cors');
const UserRegisterSchema = require('./UserRegisterSchema');

// const { default: Register } = require('../client/src/Register');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const newUsers = UserRegisterSchema({ name, email, password });
    newUsers.save();
    console.log("Register success");
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const userExist = await UserRegisterSchema.findOne({ email });

    if (userExist) {
        if (userExist.password === password) {
            res.json({
                message: "success",
                user: {
                    id:userExist._id,
                    name: userExist.email,
                    pass: userExist.password
                }
            })
            console.log("Login success");
        } else {
            res.json({ message: "incorrect" });
            console.log("password is incorrect");
        }
    }
    else {
        res.json({ message: "user not exist" });
        console.log("user not exist");
    }
});

app.get('/olx')


mongo();
app.get('/', async (req, res) => {
    CategorySchema.find({})
        .then(category => {
            res.json(category);
            console.log("category", category);
        })
})
app.get('/details/:id', async (req, res) => {
   await CategorySchema.findById(req.params.id)
        .then(category => {
            res.json(category);
            console.log("category", category);
        })
})


CategorySchema.find({})
    .then(category => {
        console.log("category", category);
    })

app.get('/', (req, res) => {
    res.json("hello world!");

});

const tree = () => {
    console.log("local server is running");
}

const port = 200;
app.listen(port, tree);