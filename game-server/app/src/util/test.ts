import { ClientOpts } from "redis";
import { RedisProxy } from "../redis/redis";
import * as mongoose from 'mongoose';
import { Mongoose } from "mongoose";
let mos = mongoose.connect("mongodb://127.0.0.1:27017", connectCall).then((e:Mongoose)=>{
	console.log(e);
});
function connectCall(e) {
	console.log(e);
}
let json = {
	"1":{"Id":1,"Type":1,"Quality":1,"Star":0,"UseType":0,"UseArg":0,"Level":1,"AddNum":-1,"Label":0,"Gift":0,"Source":[]},
	"100210001":{"Id":100210001,"Type":10,"Quality":2,"Star":1,"UseType":0,"UseArg":0,"Level":1,"AddNum":1,"Label":2,"Gift":0,"Source":[{"Id":2001}]},
	"100210002":{"Id":100210002,"Type":10,"Quality":2,"Star":2,"UseType":0,"UseArg":0,"Level":1,"AddNum":1,"Label":2,"Gift":0,"Source":[{"Id":2001}]},
	"9":{"Id":9,"Type":1,"Quality":5,"Star":0,"UseType":0,"UseArg":0,"Level":0,"AddNum":-1,"Label":0,"Gift":0,"Source":[{"Id":1001},{"Id":1002}]}
};

let str = JSON.stringify(json).toString();
async function timer(value: number) {
    // console.log(value);
    setTimeout(() => {
        console.log(value);
        return value;
    }, value);
}

async function setAll(value: number) {
    let num1 = await redisClient.set((value).toString(), str).catch((e)=>{ console.log(e) });
    let num2 = await redisClient.set((value).toString(), str).catch((e)=>{ console.log(e) });
    let num3 = await redisClient.set((value).toString(), str).catch((e)=>{ console.log(e) });
    return { num1, num2, num3 };
}

async function getAll(value: number) {
    let num1 = await redisClient.get((value).toString());
    let num2 = await redisClient.get((value).toString());
    let num3 = await redisClient.get((value).toString());
    return { num1, num2, num3 };
}

async function delAll(value: number) {
    let num1 = await redisClient.del((value).toString());
    let num2 = await redisClient.del((value).toString());
    let num3 = await redisClient.del((value).toString());
    return { num1, num2, num3 };
}

let opt: ClientOpts = {
    host: "127.0.0.1",
    port: 6380,
};
let redisClient = new RedisProxy(opt, console);
redisClient.ping("that is right");

console.time("start");
// for (let i = 1; i < 10000; i++) {
    // let setdata = setAll(i).then((e) => {
    //     console.log(e.num1, e.num2, e.num3);
	// });
	// let setdata = setAll(i).catch((e)=>{console.log(e)});
    // getAll(i).then((e) => {
    //     console.log(e.num1, e.num2, e.num3);
    // });

    // delAll(i).then((e) => {
        // console.log(e.num1, e.num2, e.num3);
    // });
// }
console.timeEnd("start");