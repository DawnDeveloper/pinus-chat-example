import * as mongoose from 'mongoose';
import UserModel from './UserModel';
let mos = mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true, useUnifiedTopology: true }, connectCall).then((e: mongoose.Mongoose) => {
	console.log(e);
});
var name1 = <{ first: string, last: string }>{};
interface People {
	name: string,
	age: number,
	sex: string,
}
function connectCall(e) {
	console.log(e);
	let nameSchema = new mongoose.Schema({
		name: String,
		age: Number,
		sex: String,
	});
	nameSchema.methods.speak = function () {
		console.log('我的名字叫speak');
	};
	nameSchema.statics.speak = function () {
		console.log('我的名字叫statics speak');
	};
	nameSchema.virtual("name.full").set((name) => {
		var split = name.split(' ');
		name1.first = split[0];
		name1.last = split[1];
		console.log('name:', name1);
	});
	nameSchema.virtualpath("name.full").applySetters("zhan san", "zhan san");
	var nameModel = mongoose.model("nameModel", nameSchema);
	var person = {
		name: "zhansan",
		age: 18,
		sex: "nan"
	};

	nameModel.schema.methods.speak();
	nameModel.schema.statics.speak();

	let zhangsan = new nameModel(person);
	console.log(zhangsan["name"]);
	zhangsan.save((err, zhansan) => {
		console.log(err, zhansan);
	});
	nameModel.find({
		name: "zhansan"
	}, (err, res) => {

	})
}