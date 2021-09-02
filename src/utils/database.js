const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGO_CONNECION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('database connected');
	})
	.catch((e) => {
        console.log(e);
		process.exit(1);
	});
