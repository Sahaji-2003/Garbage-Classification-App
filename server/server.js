const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can choose any port you want

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://SigmaMS:Sigma%40123@cluster0.gsa79xn.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema 
const Schema = mongoose.Schema;
const myModelSchema = new Schema({
  // Define your schema fields here
  user_name: {
    type: String,
    required: true
},
first_name: {
    type: String,
    required: true,

},
last_name: {type: String},
email_user: {
    type: String,
    required: true,
    unique: true   
},
phone_no: {
    type: Number,   
},
user_role: {
    type: String
},
user_password: {
  type: String
}

       

},{
versionKey: false
})

// Define a model
const MyModel = mongoose.model('MyModel', myModelSchema);

// Routes
app.get('/api/data', async (req, res) => {
  try {
    const data = await MyModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const newData = new MyModel(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// // Route for handling user login
app.post('/api/login', async (req, res) => {
  const { user_name, user_password } = req.body;

  try {
    // Find user by username and password
    const user = await MyModel.findOne({ user_name, user_password });

    if (user) {
      const { user_name, phone_no, email_user, user_password } = user;
      res.json({ success: true, user_name, user_password, phone_no, email_user });
    } else {
      // If user not found or password incorrect, send failure response
      res.json({ success: false });
    }
  } catch (error) {
    // If an error occurs, send error response
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Add routes for update and delete operations as needed

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });























// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000; // You can choose any port you want

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb+srv://SigmaMS:Sigma%40123@cluster0.gsa79xn.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define a schema 
// const Schema = mongoose.Schema;
// const myModelSchema = new Schema({
//   // Define your schema fields here
// user_name: {
//     type: String,
//     required: true,
//     unique: true
// },
// first_name: {
//     type: String,
//     required: true,

// },
// last_name: {type: String},
// email_user: {
//     type: String,
//     required: true,
//     unique: true   
// },
// phone_no: {
//     type: Number,   
// },
// user_role: {
//     type: String
// },
// password: {
//     type: String,
// },
// // machine_assign: {
// //     type: Number
// // }         

// },{
// versionKey: false
// })

// // Define a model
// const MyModel = mongoose.model('MyModel', myModelSchema);

// // Routes
// app.get('/api/data', async (req, res) => {
//   try {
//     const data = await MyModel.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post('/api/data', async (req, res) => {
//   try {
//     console.log('Received data:', req.body);
//     const newData = new MyModel(req.body);
//     await newData.save();
//     res.status(201).json(newData);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Add routes for update and delete operations as needed

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// Import necessary modules
// Import necessary modules
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Create an Express app
// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb+srv://SigmaMS:Sigma%40123@cluster0.gsa79xn.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define a schema for your existing data
// const myModelSchema = new mongoose.Schema({
//   // Define your schema fields here
//   user_name: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: { type: String },
//   email_user: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   phone_no: {
//     type: Number,
//   },
//   user_role: {
//     type: String
//   },
//   password: {
//     type: String,
//     required: true,
//     unique: true
//   }
// }, {
//   versionKey: false
// });

// // Define a model
// const MyModel = mongoose.model('MyModel', myModelSchema);

// // Route for handling user login
// app.post('/api/login', async (req, res) => {
//   const { user_name, password } = req.body;

//   try {
//     // Find user by username and password
//     const user = await MyModel.findOne({ user_name, password });

//     if (user) {
//       // If user found, send success response
//       res.json({ success: true });
//     } else {
//       // If user not found or password incorrect, send failure response
//       res.json({ success: false });
//     }
//   } catch (error) {
//     // If an error occurs, send error response
//     console.error('Error logging in:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Routes for existing data
// app.get('/api/data', async (req, res) => {
//   try {
//     const data = await MyModel.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post('/api/data', async (req, res) => {
//   try {
//     console.log('Received data:', req.body);
//     const newData = new MyModel(req.body);
//     await newData.save();
//     res.status(201).json(newData);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

