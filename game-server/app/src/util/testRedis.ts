import { ClientOpts } from "redis";

import { RedisProxy } from "../redis/redis";

let opt: ClientOpts = {
    host: "127.0.0.1",
    port: 6380,
};
let redisClient = new RedisProxy(opt, console);
redisClient.exists("age").then((value) => {
    console.log("value:",value);
})
redisClient.set("age", "18").then((value) => {
    console.log("value:",value);
});