const Post = require("./models/post");
const moment = require("moment");

// Blogs [] array
const blogs = [
  {
    postedOn: moment().format("MMMM Do YYYY"),
    author: "Avinash Murmu",
    title: "Give yourself credits for the things you did as Developer",
    postBody:
      '<p>Give yourself credits for everything you have learned last days, weeks, months or even years! Just see often how much you have been grown!</p><p>Most of the time people say don’t look back, but in the case to be aware of what you already achieved you have to look back.</p><blockquote class="blockquote"><p>Fall seven times, Rise eight!</p></blockquote><p>It is good to document these things for yourself. Make a list for yourself what you have learned last month or week, and write it in a tweet or blog post.</p><p>If you don’t have a blog, we would love to publish it on the Mr Frontend blog 😉. And if you like Twitter more, than just post it there!</p><p>It is so easy to forget where you are coming from, but let us remind ourselves to all the lessons we have learned so we can inspire others to do the same.</p>',
    postSummary:
      "Give yourself credits for everything you have learned last days, weeks, months or even years! Just see often how much you have been grown!",
    img_url:
      "https://i.pinimg.com/originals/f9/a2/25/f9a22515a2fac3cf9e6d5877f5939c41.jpg",
  },
  {
    postedOn: moment().format("MMMM Do YYYY"),
    author: "Shamita Jain",
    title:
      "How JavaScript scoping works with var, let and const variables — in 10 minutes",
    postBody:
      '<p><i>In this blog you will learn how the scope works with the "global scope", "functions", "var", "let", "const" variables. What you can do with it and why it is important to learn this concept.</i></p><br><h3>TLDR</h3><p>For those who don\'t like to read, use this list when your doubting which one to choose. If you want to learn this topic in detail, I highly recommend to scroll down.</p><ul><li><b>const:</b> try to use this <code>const</code> variable everywhere and always. Except if the variable needs to be changed.</li><li><code>let:</code> If the value of the variable needs to be changed, use the <code>let</code> variable.</li><li><code>var:</code> Avoid this variable, it can make your application messy and unpredictable because they can be overwritten from everywhere. <code>let</code> and <code>const</code> prevent this by default 👍</li></ul><br><h3>Types of Scopes</h3><p>What is the scope? A function is used to create a scope which decides the accessibility and visibility of variables, functions, and objects.</p><p>In JavaScript, we have 2 types of scopes:</p><ul><li>Global scope</li><li>Local scope</li></ul><br><h4>What is the Global Scope</h4><p>The global scope is the <code>window</code> object. Which is accessible from everywhere in your application. If you want to make a variable, function or object visible for all other scopes than put it in the global scope.</p><p>But be aware not to put everything in the global scope. The <code>window</code> object is already packed with a lot of information. So if you don\'t need it everywhere put if in a local scope.</p><br><h4>What is Local Scope</h4><p>A local scope is created by a function. That function can make variables, objects and inner functions hidden or visible from outside the function.</p><br><h4>The "var" variable</h4><p>The <code>var</code> keyword can be used everywhere. It can contain Strings, Int, Object, Array, Function.</p><p>Variables can be used for everything, but also everywhere. You can access a <code>var</code> from inside a function, object, if-else statement, really everywhere!</p><p>That maybe sounds cool but can have a big effect on the predictability of a website or web-application.</p><br><h4>Globally scoped</h4><p>A <code>var</code> is or can be globally scoped. Cool to access everything from inside anything! But is that good? There are a few alternatives ahead. They are called <code>let</code> and <code>const</code> and have different behavior than <code>var</code>. But let\'s talk about that later.</p><br><h4>"var" can be changed later</h4><p>A variable can be defined with a string, later on, reassigned to an integer and later it could be a function. That is the power but also a weakness.</p><pre>var globalVariable;<br>globalVariable = \'I Love Pizza!\';<br>console.log(globalVariable); // Output: \'I Love Pizza!\'<br></pre><p>Now I defined a global variable (yes I do love pizza :-)), right after it I added a string to it. So you can see, you can define it and later on change it to the other value.</p>',
    postSummary:
      "Learn how the JavaScript scoping works with var, let and const variables? In this blog I will tell you all about it 😉",
    img_url:
      "https://blog.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Start%20Coding%20The%20Ultimate%20Guide%20for%20Beginner%20Programmers.jpeg",
  },
  {
    postedOn: moment().format("MMMM Do YYYY"),
    author: "Shreyansh Jaiswal",
    title: "How to Mock an API with random data from NodeJS",
    postBody:
      "<p>As a frontend developer you often need data from an API. But sometimes the backend hasn't been setup by your team. In order for you to continue and mock your data, it's a good idea to not store your data structure on memory.</p><p>It's a good idea to start as soon as possible to talk with an external API where your data comes from. In this tutorial I want to go through a minimal setup for mocking your data. After this you should be able to extend it with your own data as needed.</p><br><h3>Dependencies</h3><p>In order to work with Node you need to have it installed on your machine. For the mac users I highly recommend to install it with NVM, because it will make it easier to update NodeJS in the future. (There is also a version for Windows).</p><p>Create a new folder to start for this project. Run <code>npm init -y</code> to initialize the folder with Node and it will create automaticly a package.json for you.</p><p>In order to create the mockserver we need 2 npm dependencies. <b>json-server</b> and <b>casual</b> so we run <code>npm install json-server casual --save-dev</code> in our project.</p><br><h3>Base for the mock-server</h3><p>Create a <code>index.js</code> and paste this code in it.</p><pre>const jsonServer = require('json-server');<br>const server = jsonServer.create();<br>const middlewares = jsonServer.defaults();<br>const port = process.env.PORT || 3000;<br>server.use(jsonServer.bodyParser);<br>server.use(middlewares);<br>server.listen(port, () => {<br>    console.log('JSON Server is running');<br>});</pre><p>We include the json-server in order to use it. Then we create a server instance in the <code>const server</code>. With the middlewares we can set a few options like path to static files, CORS and few more. But here we just use it without and specific options.</p><p>The port is very important. If you want this to run on a server it will first search if there is any default port set for a Node server, otherwise it will pick port <code>3000</code>.</p><p>We include the bodyParser and middleswarses by using <code>server.user()</code>. And after that we do a console log so you know the mock-server is running.</p>",
    postSummary:
      "In this tutorial I want to go through a minimal setup for mocking your data. After this you should be able to extend it with your own data as needed.",
    img_url:
      "https://global-uploads.webflow.com/619e15d781b21202de206fb5/62f4e5e48e19010c69c8fe32_making-your-appium-tests-fast-and-reliable-8.jpg",
  },
];

async function seedDB() {
  await Post.insertMany(blogs);
  console.log("DB seeded successfully!");
}

module.exports = seedDB;
