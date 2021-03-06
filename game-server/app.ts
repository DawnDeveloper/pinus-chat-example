import { pinus } from 'pinus';
import { preload } from './preload';
import { RedisProxy } from './app/src/redis/redis';
import { ClientOpts } from 'redis';

/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload();

/**
 * Init app for client.
 */
let app = pinus.createApp();
app.set('name', 'testServer');

// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig',
        {
            connector: pinus.connectors.hybridconnector,
            heartbeat: 3,
            useDict: true,
            useProtobuf: true
        });
});

app.configure('production|development', 'game', function () {
    app.set('connectorConfig',
        {
            connector: pinus.connectors.hybridconnector,
            useProtobuf: true
        });
});

app.configure('production|development', 'gate', function () {
    app.set('connectorConfig',
        {
            connector: pinus.connectors.hybridconnector,
            useProtobuf: true
        });
});

// start app
app.start();

let opt: ClientOpts = {
    host: "127.0.0.1",
    port: 6380,
};

let redisClient = new RedisProxy(opt, console);
let result = redisClient.set("test", "I am ok");
result.then((value) => {
    console.log("value:", value);
});

let getResult = redisClient.get("test");
getResult.then((getResult) => {
    console.log("getResult:", getResult);
});

