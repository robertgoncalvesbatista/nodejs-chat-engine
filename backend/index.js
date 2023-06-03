import 'dotenv/config'

import express, { json } from "express";
import cors from "cors";

import axios from "axios";

const app = express();

app.use(json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put(
            "https://api.chatengine.io/users",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
        );

        return res.status(response.status).json(response.data)
    } catch (error) {
        return error
    }
});

app.listen(process.env.PORT);