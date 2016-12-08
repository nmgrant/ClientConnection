### Table of contents
[TOC]

Client Connection
===================

Client Connection is a web application/community that allows both users and business professionals to connect in a way that has never been done before! Client Connection makes looking for and rating contributors a more personal experience. Rather than searching for the law office or business associated with a lawyer, you can directly search and interact with your desired business professional. Our system can make it easier for you to find the business professional you need with our "Suggested Contributors" feature that takes in a number of variables from your profile. 

Not only is it easy for users, but it's easy for developers as well!


----------


Features
-------------



#### <i class="icon-search"></i> Search for a user/contributor

This feature allows the user/contributor to search for a contributor/user. Additional sorting and filtering can be applied. Search results also come with a map showing where each result is geographically.

#### <i class="icon-plus"></i> Add a Contributor

If the user doesn't find the contributor that they're looking for, they can add the contributor with his/her information. Then, the user may rate the contributor.

#### <i class="icon-star"></i> Rate a Contributor

The user, after finding their contributor, is able to rate their contributor. The user can leave a comment and between 0 and 5 stars.

#### <i class="icon-trash"></i> Delete a Rating

If the user wishes to remove, or update, their rating, then they can do so.

#### <i class="icon-user"></i> Fill out Profile

Both the user and the contributor has an ability to create a profile. The user's profile includes information about what kind of contributor they're looking for, while the contributor's profile includes information about what kind of work they do. This allows our system to more easily connect users and contributors.

----------


Installation
-------------------

Just as our application is easy for users and contributors to use alike, so is installing and developing it!

First, make sure you have [node](http://nodejs.org/download/) and [Meteor](http://meteor.com) installed.

Now clone this project's git repo and run:
```bash
  git clone https://github.com/nmgrant/ClientConnection.git
  cd ClientConnection
  meteor npm install --save
  meteor
```

----------


Components
-------------

At the highest level, Client Connection is made up of:

* Meteor
	* An entirely JavaScript web framework that emphasizes real-time data and quick prototyping/implementation
	* Allows for both client and server development of a web application
	* Handles the data between client and server as well as routing the application
* Node
	* A JavaScript runtime environment that has an event-driven architecture capable of asychronous I/O
	* Required to run Meteor
	* NPM (Node Package Manager) is used for installing and tracking third party libraries
* React
	* A JavaScript front-end library that includes a virtual DOM for quicker, scalable web applications with real-time data as well as emphasizing creating modularized components
* MongoDB
	* A NoSQL database included with Meteor that allows for easy data synchronization between the client and server
	* Stores data for the application

This project also uses some third-party libraries from npm that you can see in the package.json of the project.

----------


How to Contribute
--------------------

Simply follow the installation instructions above and give the project's [GitHub page a visit](https://github.com/nmgrant/ClientConnection).

Feel free to make any changes and submit a pull request when you think it's ready for production! We will review the submission and accept/deny it with feedback accordingly.

--------


Support
----------------

If you have any questions/concerns you can either raise an issue on our GitHub project or email any of the following: ngrant40@gmail.com, evan4james@gmail.com, adam.wills2@gmail.com, blakehice4@gmail.com

----