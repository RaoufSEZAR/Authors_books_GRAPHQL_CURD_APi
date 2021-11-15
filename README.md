# Authors_books_GRAPHQL_CURD_APi
This Graphql_api for CURD authors and Books using TypeScript,MySQL, Graphql,Node.js,Express,js and typeORM.

```
npm install
```
then to add DB add .env file to api file and write:
```
DB_NAME=YOUR_DATABASE_NAME
DB_USER=YOUR_USER_NAME
DB_PASS=YOUR_DATABASE_PASSWORD
SECRET_KEY=YOUR_SECRET_KEY
```
## the docs for every single api will be like:
### Mutaions

#### create a new User input
```
mutation{
  createUser(name:"sevda",username:"aksu",password:"123456"){
    name
  }
}
```
#### output
```
{
  "data": {
    "createUser": {
      "name": "sevda"
    }
  }
}
```

#### create a new book input
```
mutation{
  createBook(name:"MongoDb Book",genre:"Programming",authorId:"2"){
    name
    genre
  }
}
```
#### output
```
{
  "data": {
    "createBook": {
      "name": "MongoDb Book",
      "genre": "Programming"
    }
  }
}
```

#### update a User password input
```
mutation{
  updatePassword(username:"miral",oldPassword:"123456",newPassword:"1234567"){
    successful
    message
  }
}
```
#### output
```
{
  "data": {
    "updatePassword": {
      "successful": true,
      "message": "PASSWORD UPDATED"
    }
  }
}
```


#### update a book input
```
mutation{
  updateBooK(authorId:2,newName:"mongoDb",id:7,newGenre:"Programming"){
    successful
    message
  }
}
```
#### output
```
{
  "data": {
    "updateBooK": {
      "successful": true,
      "message": "Book UPDATED"
    }
  }
}
```
#### delete a Book input
```
mutation{
  deleteBook(id:1,authorId:2){
    successful
    message
  }
}
```
#### output
```
{
  "data": {
    "deleteBook": {
      "successful": false,
      "message": "the book dose not exist"
    }
  }
}
```
#### or
```
{
  "data": {
    "deleteBook": {
      "successful": true,
      "message": "DELETE WORKED"
    }
  }
}
```

#### delete a User input
```
mutation{
  deleteUser(id:1){
    successful
    message
  }
}
```
#### output
```
{
  "data": {
    "deleteUser": {
      "successful": true,
      "message": "DELETE WORKED"
    }
  }
}
```


### Queries

#### get all users input:
```
{
  getAllUsers{
    id
    name
    username
    password
    books{
      name
    }
  }
}
```
#### output
```
{
  "data": {
    "getAllUsers": [
      {
        "id": "1",
        "name": "rauf",
        "username": "sezar",
        "password": "U2FsdGVkX19eSBja3mJwOLVUh/r74m9zDJry/GkjD0U=",
        "books": [
          {
            "name": "first Book"
          },
          {
            "name": "second Book"
          }
        ]
      },
      {
        "id": "2",
        "name": "sevda",
        "username": "miral",
        "password": "U2FsdGVkX19HGkA2ayZ7Z0q5jb/J+m75bDlmBDmenyU=",
        "books": [
          {
            "name": "third Book"
          },
          {
            "name": "mongoDb"
          }
        ]
      }
    ]
  }
}
```
#### get single user input:
```
{
  getSingleUser(id:1){
    name
    username
    books{
      name
      genre
    }
  }
}
```
#### output
```
{
  "data": {
    "getSingleUser": {
      "name": "rauf",
      "username": "sezar",
      "books": [
        {
          "name": "first Book",
          "genre": "sco"
        },
        {
          "name": "second Book",
          "genre": "sco"
        }
      ]
    }
  }
}
```

#### get all Books input
```
{
  getAllBooks{
    id
    name
    genre
    Author{
      name
    }
  }
}
```

#### output
```
{
  "data": {
    "getAllBooks": [
      {
        "id": "4",
        "name": "first Book",
        "genre": "sco",
        "Author": {
          "name": "rauf"
        }
      },
      {
        "id": "5",
        "name": "second Book",
        "genre": "sco",
        "Author": {
          "name": "rauf"
        }
      },
      {
        "id": "6",
        "name": "third Book",
        "genre": "sco",
        "Author": {
          "name": "sevda"
        }
      },
      {
        "id": "7",
        "name": "mongoDb",
        "genre": "porgrammer",
        "Author": {
          "name": "sevda"
        }
      }
    ]
  }
}
```
#### get single Book input:
```
{
  getSingleBook(id:7){
		name
    genre
		Author{
  	name
		}
  }
}
```
#### output
```
{
  "data": {
    "getSingleBook": {
      "name": "mongoDb",
      "genre": "porgrammer",
      "Author": {
        "name": "sevda"
      }
    }
  }
}
```
