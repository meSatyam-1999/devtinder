mongodb url - mongodb+srv://nodepractice1:nodepractice1@cluster0.d90ga.mongodb.net/



1 - create a express server
2 - set up nodemon
3 - create a admin & user middleware and check it on different routes
4 - connect mongodb to express server (first connect mongodb -> Then listening on port)
5 - create a model for user (create a user schema & user model)
6 - create a dummy /signup API contain try-catch method and add a user to mongoDB compass
7 - make the /signup API dynamic(not adding user in App.js)by using express.json()
8 - create API - Get user by email ***(/usersearchbyemail)
9 - create API - To get all the users from database ***(/usersalldata)
10 - create API - To get user by ID ***(/usersearchbyid)
11 - create API - To delete a user ***(/userdelete)
12 - create API - To update a user ***(/userupdate)
13 - Add required,unique,lowercase,min,minLength,trim key in user schema
14 - Add default key
15 - create a custom validate function for gender
16 - add timestamps in user schema
17 - Add Api level validation on PATCH request & signup POST Api
18 - install validator and validate for password,email,photourl (npm i validator)
19 - **** Lets make dev tinder first Api - /signup
20 - hash the password by using bcrypt.js (npm i bcrypt)
21 - **** DevTinder /login api
22 - **** create a auth middleware
23 - make the JWT Authentication (npm i jsonwebtoken) & (npm i cookie-parser)
24 - **** create /sendConnectionRequest api
25 - set JWT Token expiry time
26 - set expiry of jwt token & cookies to 7 days.
27 - create userSchema method to "getJWT()"
28 - create userSchema method to compare password(passwordInputByUser)
29 - *****create /logout api
30 - ****create /prifile/edit api
31 - ****create /sendconnection api
32 - Add db index for fast searching 
33 - *****create coonection accpted/rejected api
34 - ***** Create to show pending connection request api
35 - **** Create user total connections api(friend list)
36 - **** Create the /feed api
37 - **** Create the pagination option inside /feed api