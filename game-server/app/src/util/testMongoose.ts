import * as mongoose from 'mongoose';
let mos = mongoose.connect("mongodb://127.0.0.1:27017", connectCall).then((e:mongoose.Mongoose)=>{
	e.set("testMogoose", "is a mongoose test");
	e.get("testMogoose");
	console.log(e);
});
function connectCall(e) {
	console.log(e);
}