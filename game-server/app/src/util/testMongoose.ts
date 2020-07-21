import * as mongoose from 'mongoose';
let mos = mongoose.connect("mongodb://127.0.0.1:27017/test", connectCall).then((e: mongoose.Mongoose) => {
	console.log(e);
});
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
	let nameModel = mongoose.model("nameModel", nameSchema);
	let person: People = {
		name: "zhansan",
		age: 18,
		sex: "nan"
	};
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