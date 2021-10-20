---
author: "Layla Porter"
profileimage: "/images/profile-pictures/layla-porter.jpg"
date: 2021-10-20
image: "/images/workshops/asphalt-dark-dawn-531321.jpg"
imagealt: "A pretty picture"
linktitle: C# Workshop One
next: /workshops/c-sharp-ws-2
title: Learning C# - Workshop One
type: workshop
summary: "In this workshop, we will create a basic application called a console application. This is an app that runs on the console, sometimes known as the terminal or command line."
layout : "workshop"
tags: ["Beginner"]
---


## Introduction
In this workshop, we will create a basic application called a console application. This is an app that runs on the terminal, sometimes known as the console or command line.
On a Windows machine, we can use the cmd or Powershell as our console.
On Linux, it's the terminal.
And on macOS, it's also terminal or you can download iTerm and use that instead.

We will also be using the command line to create and run our application.

## Setting up our development environment.

To get started with C# we will need to download a Software Development Kit, or SDK. C# runs on a framework called .NET (dot net) and we will download the .NET SDK [here](https://dotnet.microsoft.com/download).
Choose the correct download for your operating system, e.g. Windows, and follow the installation instructions.

We will also need a code editor to enable us to edit our code.  [Visual Studio Code](https://code.visualstudio.com/download) is a free and very versatile editor, so let's download that one, again, choosing the right download for your operating system.

To check if the .NET SDK installed correctly, open the terminal and type in `dotnet` and press enter.
You should see something similar to this
<br/><br/>
![image showing dotnet in the console](/images/workshops/dotnet-check.png)
<br/><br/>
Now that we know the SDK is installed correctly we can make our first application.
When you open the terminal it will most likely open in a certain folder or directory on your computer.
If you type in `ls` and press enter, you should see a list of all the folders and files in the current directory.  It may look something like this:
<br/><br/>
![image showing contents of new console app](/images/workshops/ls-console.png)
<br/><br/>
We need to create a new directory for our code to live in.
To make a new directory we will use the following command:

```bash
>mkdir Repos
```
</br>
Repos is short for repositories.  A repository is a place where your coding files can be stored.

If you type in `ls` again, you should see we now have a new directory called Repos.
We now need to change directory (cd) so that our terminal is inside our new folder.

```bash
>cd Repos
```
</br>
Now we are in the right folder, let's create a new .NET project.

```bash
>dotnet new
```
<br/><br/>
![image showing dotnet new in the console](/images/workshops/dotnet-new.png)
<br/><br/>
The above command will bring up all the available templates projects that came with the SDK.  We want to build a console app, so enter the following command:
</br>
```bash
>dotnet new console -n HelloWorld
```
</br>

This command will create a new Directory called `HelloWorld` and add a new console application inside it.
If cd into the `HelloWorld` directory and list all the files we will see with have 2 files called `Program.cs` and `HelloWorld.csproj`.
<br/><br/>
![image showing contents of new console app](/images/workshops/ls-console.png)
<br/><br/>
We now have a basic application that we can run.
Type in the following command:
```bash
>dotnet run
```
</br>
And we should see that "Hello World!" is printed in the console.

We have made our first program!
</br></br>
[Let's go edit our program!](/workshops/c-sharp-ws-2)