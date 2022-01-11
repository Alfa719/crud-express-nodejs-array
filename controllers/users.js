import { v4 as uuidv4 } from "uuid";

// Database Sementara
let users = [];

export const index = (req, res) => {
    console.log(users);
    res.send(users);
}
export const store = (req, res) => {
    users.push({...req.body, id:uuidv4()});
    res.send(`Users added`);
}
export const show = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}
export const update = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { name, address, age } = req.body;

    if (name) user.name = name;
    if (address) user.address = address;
    if (age) user.age = age;

    res.send(users);
}
export const destroy = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(users);
}
