"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pinus_1 = require("pinus");
const preload_1 = require("./preload");
/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload_1.preload();
/**
 * Init app for client.
 */
let app = pinus_1.pinus.createApp();
app.set('name', 'testServer');
// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        heartbeat: 3,
        useDict: true,
        useProtobuf: true
    });
});
app.configure('production|development', 'game', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        useProtobuf: true
    });
});
app.configure('production|development', 'gate', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        useProtobuf: true
    });
});
// start app
app.start();
// let opt: ClientOpts = {
//     host: "127.0.0.1",
//     port: 6380,
// };
// let redisClient = new RedisProxy(opt, console);
// let result = redisClient.set("test", "I am ok");
// result.then((value) => {
//     console.log("value:", value);
// });
// let getResult = redisClient.get("test");
// console.log("to get");
// getResult.then((getResult) => {
//     console.log("getResult:", getResult);
// });
// console.time("start");
// let data = asyncTest(redisClient);
// console.timeEnd("start");
// console.log("to end data", data);
// data.then(() => {
//     console.log("to end then data", data);
// })
// async function asyncTest(redisClient) {
//     console.log("to start get");
//     let one = redisClient.get("test");
//     console.log("to start get two");
//     let two = redisClient.get("test");
//     let three = redisClient.get("test");
//     console.log("to end get");
//     console.log("to end", one, two, three);
//     return await one + await two + await three; 
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBQzlCLHVDQUFvQztBQUlwQzs7OztHQUlHO0FBQ0gsaUJBQU8sRUFBRSxDQUFDO0FBRVY7O0dBRUc7QUFDSCxJQUFJLEdBQUcsR0FBRyxhQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFOUIsb0JBQW9CO0FBQ3BCLEdBQUcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0lBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQ3JCO1FBQ0ksU0FBUyxFQUFFLGFBQUssQ0FBQyxVQUFVLENBQUMsZUFBZTtRQUMzQyxTQUFTLEVBQUUsQ0FBQztRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRTtJQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUNyQjtRQUNJLFNBQVMsRUFBRSxhQUFLLENBQUMsVUFBVSxDQUFDLGVBQWU7UUFDM0MsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRTtJQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUNyQjtRQUNJLFNBQVMsRUFBRSxhQUFLLENBQUMsVUFBVSxDQUFDLGVBQWU7UUFDM0MsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSCxZQUFZO0FBQ1osR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRVosMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6QixrQkFBa0I7QUFDbEIsS0FBSztBQUNMLGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsMkJBQTJCO0FBQzNCLG9DQUFvQztBQUNwQyxNQUFNO0FBQ04sMkNBQTJDO0FBQzNDLHlCQUF5QjtBQUN6QixrQ0FBa0M7QUFDbEMsNENBQTRDO0FBQzVDLE1BQU07QUFDTix5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsb0JBQW9CO0FBQ3BCLDZDQUE2QztBQUM3QyxLQUFLO0FBRUwsMENBQTBDO0FBQzFDLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDLHlDQUF5QztBQUN6QywyQ0FBMkM7QUFDM0MsaUNBQWlDO0FBQ2pDLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFDbkQsSUFBSSJ9