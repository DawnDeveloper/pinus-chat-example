import { ClientOpts } from "redis";

import { RedisProxy } from "../redis/redis";

let opt: ClientOpts = {
    host: "127.0.0.1",
    port: 6380,
};
let redisClient = new RedisProxy(opt, console);
redisClient.ping("that is right");