---
author: "Layla Porter"
date: 2021-10-20
profileimage: "/images/profile-pictures/layla-porter.jpg"
image: "/images/workshops/bloom-blossom-flora.jpg"
imagealt: "A photograph of a table with a yellow rose, a pink rose and a small antique globe"
linktitle: C# Workshop One
next: /workshops/c-sharp-ws-3
prev: /workshops/c-sharp-ws-1
title: Learning C# - Workshop Two
type: workshop
layout : "workshop"
summary: "In this workshop, we will create a basic application called a console application. This is an app that runs on the console, sometimes known as the terminal or command line."
tags: ["Beginner"]
---

In our first workshop, we installed everything we needed to run C# on our computer.  We even got our first program up and running!
In this workshop, we will start to edit our "Hello World" program.

Open up Visual Studio Code, the code editor we installed in the first workshop.
The welcome page will give you an option to "open a folder". Click this and then find your "HelloWorld" folder that we created inside "Repos".

This will open the directory containing our application.  There should be two files, `HelloWorld.csproj` and `Program.cs`, and one folder called `obj`.

Open the `Program.cs` file; this is the entry point of our application and it will look like this:

```csharp
using System;

namespace HelloWorld
{
   class Program
   {
       static void Main(string[] args)
       {
           Console.WriteLine("Hello World!");
       }
   }
}
```
It has a `Program` class with a `Main` method inside it.

The `Console.WriteLine("Hello World!");` is what printed "Hello World!" inside our console.  Change the contents of the `"` marks to say `"Hello, what is your name?"` as shown below.
```csharp
static void Main(string[] args)
{
   Console.WriteLine("Hello, what is your name?");
}
```
Now if we run the project from the console, using `>dotnet run` again, you should see that our question is printed to the console instead.

## What's going on?
.NET comes with a whole load of ready-made code us to use in the form of *libraries*. See the `using System` at the top of the `Program.cs` file? That's us saying that we want to use the System library. Inside these libraries, we have methods or functions that we can use or call.

`Console.WriteLine();` is a method from the System library that, in this case, takes a string and then writes or prints that string to the console.

## What's a string?
C# is what's known as a *strongly-typed* language. A *string* is a type. It means that the contents will be treated as text.  There are many types and you can create your own types, often called models.  We will cover more types in another workshop.

Let's see if we can get input from the console.

Update your `Main` method inside your `Program` class to the following:

```csharp
static void Main(string[] args)
{
   Console.WriteLine("Hello, what is your name?");
   string name;
   name = Console.ReadLine();
   Console.WriteLine("Your name is " + name);
}
```
<br/><br/>
Now we have *declared* a *variable* called `name`, of type *string*. Whatever we type into the console will be stored in this variable because we have *assigned* the output of `Console.readLine` to it.

We then use another call to `Console.Writeline()` this time passing in a string and our variable, which is also a string.  We can use the `+` sign to combine these.

## Improving what we have
The above code is okay but we can make it a little bit better. This is called *refactoring*.
We can do a declaration and assignation on one line so we now have:
```csharp
string name = Console.ReadLine();
```
<br/><br/>
.NET is clever and most of the time it can tell what type a variable is so instead of `string` we can use `var`.
```csharp
var name = Console.ReadLine();
```
<br/>
We can also tidy up the last line of code using *string interpolation*: so 
```csharp
`Console.WriteLine("Your name is " + name);` 
```
<br/>
becomes:
```csharp
Console.WriteLine($"Your name is {name}");
```
<br/>
Which makes the code a bit more readable.

So in this workshop, we have learned to take input from a user, assign that to a variable and then combine that input with another string, outputting that to the screen!

