# write-up
The Write-Up Web App is a powerful platform that enables users to seamlessly compose and explore write-ups. This application boasts a user-friendly interface and a range of features to enhance the writing and reading experience, including a sophisticated categorization system and a complementary sidebar suggesting related content.

## Technology Stack

### Frontend
- Developed using **React.js**, ensuring a responsive and interactive user interface.

### Backend
- Powered by **Node.js** and **Express.js**, the backend ensures efficient handling of requests and smooth communication with the database.

### Database
- **MySQL** is employed to store write-ups and user data securely. This relational database system ensures data integrity and scalability.

## Setup and Getting Started
- Download or clone this repo to your local system.
- For this repo, you need to create your own `config.env` file or rename the `config.example` file to `config.env` in the **server** folder. In the **config file**, set the database password equal to `DB_KEY`.
- Create a database and name it **blog**. After that, create two tables: one named **users** with the schema (id, username, email, password, img), and another table named **posts** with the schema (id, title, desc, img, date, uid, cat). Make sure to create a **foreign key** `uid` in the **posts** table, referencing the `id` column in the **users** table.

### Client
In the client directory, you can run:
#### Install dependencies: 
```npm install```

#### To Start Server:
```npm run dev``` 

#### To Visit App:
```localhost:5173```

### Server
In the Server directory, you can run:
#### Install dependencies: 
```npm install```

#### To Start Server:
```npm start``` 