<div align="center" id="top"> 
  <img src="https://ik.imagekit.io/orb/bank_bl8qVd2IE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1637803496240" alt="Littledb" width="200" style="display: block; margin: auto" />
  <!-- <a href="https://littledb.netlify.app">Demo</a> -->
</div>

<h1 align="center">Bad Bank</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/oscartic/littledb?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/{{YOUR_GITHUB_USERNAME}}/littledb?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/{{YOUR_GITHUB_USERNAME}}/littledb?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/{{YOUR_GITHUB_USERNAME}}/littledb?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/littledb?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/littledb?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/littledb?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Littledb 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Bad Bank is a project for academic purposes that seeks to develop full stack programming skills with MERN.
It is a well-defined three-tier application (React + express + mongo) that allows actions typical of a bank, such as deposits and transactions, logging in with a user account and accessing its services.

It is important to emphasize that a mongo docker image must be created in order to have data persistence.


## :sparkles: Features ##

:heavy_check_mark: Create account;\
:heavy_check_mark: login;\
:heavy_check_mark: access to bad-bank;\
:heavy_check_mark: deposit, withdraw, balance;\


## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/en/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://pt-br.reactjs.org/)


## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone git@github.com:Oscartic/badBank-front-back.git

#up mongoDB docker container
$ docker run -p 27017:27017 --name badbank -d mongo

# Access
$ cd badBank-front-back

# Install dependencies
$ npm install

# Run the project
$ node index.js

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/oscartic" target="_blank">MITxPRO</a>

&#xa0;

<a href="#top">Back to top</a>
