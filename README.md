# API-s
Assignment Api's (1. meetingAPI. 2.userAPI)
Inside this API'S folder there are two API files .
1. meetingApi.
2.userApi.
//lets talk about meetingApi first.
//MeetingApi netlify link https://gracious-bassi-baba1f.netlify.app
//Now download this file.
//In order to run this file you need to follow these steps are listed below. 
STEPS.
1. run (npm init) command in your terminal.
2.Now start the server by typing (npm start) command.
3. Now you can test the API routes by using postman or thunder client or whatever you are comfortable with.

4.In your postman or thnder client paste this url (http://localhost:5000/meetings/new) if you want to add a new meeting.

5.If you want to add a new meeting then just add uid1 and uid2 in your body in json format and then click on send.But before sending the request make sure you are on post route in your postman or whatever you are using. In this way you can add new meeting.

//Lets me help you by just giving you a example how you can add a new meeting.

{
"uid1" : "Sahil",
"uid2" : "Aarun"
}
after this just click on send button.

6.Now if you want to get the information of all the meetings that are present in your database then all you need to do is replace post route with get route and in the url replace new with all and thats it . now you will get all the meetings that are stored in your database.

//Example for getting all meetings//

(http://localhost:5000/meetings/all) this is url , which will gonna return you all the meetings with date as well.

//Now lets talk about the libraries that i have used in this API.

1.EXPRESS.JS = ExpressJS is a prebuilt NodeJS framework that can help us in creating server-side web applications faster and smarter. Simplicity, minimalism, flexibility, scalability are some of its characteristics and since it is made in NodeJS itself, it inherited its performance as well.

2.MONGOOSE  = Using mongoose , WE can define the schema for the documents in a particular collection.. It provides a lot of convenience in the creation and management of data in MongoDB.

3.NODEMON = Nodemon is a utility that will monitor for any changes in my source and automatically restart your server. Perfect for development.

//NOW LETS TALK ABOUT OUR SECOND API called userApi.
//userApi netlify link https://festive-sinoussi-ec5999.netlify.app 

//Now download this file.
//In order to run this file you need to follow these steps are listed below. 
STEPS.
1. run (npm init) command in your terminal.
2.Now start the server by typing (npm start) command.
3. Now you can test the API routes by using postman or thunder client or whatever you are comfortable with.

4.In your postman or thnder client paste this url (http://localhost:5000/users/new) if you want to add a new user.

5.If you want to add a new user then just add username in your body in json format and then click on send.But before sending the request make sure you are on post route in your postman or whatever you are using. In this way you can add new user to your database.

//Lets me help you by just giving you a example how you can add a new meeting.

{
"username" : "Sahil",
}

after this just click on send button.

6.Now if you want to get the information of all the users that are present in your database then all you need to do is replace post route with get route and in the url replace new with all and thats it . now you will get all the users that are stored in your database.

//Example for getting all users//

(http://localhost:5000/users/all) this is url , which will gonna return you all the users stored in the database.

//Now lets talk about the libraries that i have used in this API.

1.EXPRESS.JS = ExpressJS is a prebuilt NodeJS framework that can help us in creating server-side web applications faster and smarter. Simplicity, minimalism, flexibility, scalability are some of its characteristics and since it is made in NodeJS itself, it inherited its performance as well.

2.MONGOOSE  = Using mongoose , WE can define the schema for the documents in a particular collection.. It provides a lot of convenience in the creation and management of data in MongoDB.

3.NODEMON = Nodemon is a utility that will monitor for any changes in my source and automatically restart your server. Perfect for development.
