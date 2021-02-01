# ThePantry
An Ingredient focused Recipe API and Web App.

This is an Angular Front End Web Application built into ASP.NET Core 5.0. The intent of this application is to provide users a means to look up recipes by ingredients.

The API utilizes ASP.NET Core 5.0 with an MVC design pattern with the intent to keep the API as RESTful as possible. Data persistence utilizes SQL Server 2019, and all interaction with the database is handled through Entity Framework Core. Entities are converted to View Models via AutoMapper Extensions. User Data is handled by ASP.NET Core Authentication and Identity utilizing JwtBearer Tokens.

The front of the application is controlled by ASP MVC routing with Angular Web Components inserted in ASP.NET views. 

// TO DO: Provide documentation for external parties to utilize API
