---
title: Getting started with FastAPI
author: Emiliano García-López
date: 2022-09-23
excerpt: How to get up and running with the FastAPI python framework
hero: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80
---
## Why FastAPI?

There are many python frameworks to choose from, so why would you choose FastAPI? Short answer: simplicity and speed. The longer answer is that, like anything, there is no “perfect” framework, and each one has its use cases; however, the recent explosion in frontend frameworks has half of django’s functionality since most developers prefer to only consume the API from django and implement their own frontend, rather than using Django’s provided frontend framework. Since django is a large, clunky framework that is considered difficult to learn, you are better off using FastAPI if you don’t intend to make use of all of django’s features.

Flask remains a popular option for many developers, but it’s html-centered, meaning that it is not primarily intended for creating API’s and suffers from the same issue as django. Furthermore, Flask is synchronous by default, meaning that each request has to be handled before the next request can be handled.

FastAPI is asynchronous ready out of the box, and it has extensive developer tooling, including auto-generating documentation, support for WebSockets, and a type system based on python’s standard type hints system.

## Getting Started

First you have to install python3 if you haven’t already. To do this, you can visit the [python](python.org) website and download any version above 3.6. After doing this, you should install the necessary packages

```shell
pip install fastapi
pip install uvicorn 
```

Easy enough right? Next, you should create a file that ends in .py.

```python
from fastapi import FastAPI, Path #required import statements
from typing import Optional #allows for the Optional type

app = FastAPI()


inventory = {
    1: {
        "name": "Milk",
        "price": 3.99,
        "brand": "Regular"
    }
}


@app.get("/get-item/{item_id}")
def get_item(item_id: int = Path(None, description="The ID of the item you'd like to view", gt=0, lt=1000)):
    return inventory[item_id]


@app.get("/get-by-name/")
def get_item(*, name: Optional[str] = None, test: int):
   for item_id in inventory:
        if inventory[item_id]["name"] == name:
            return inventory[item_id]
    return {"Data": "Not Found"}

```

To run your file type:

```shell
uvicorn working:app --reload  
```

The --reload flag means that the server will refresh every time you modify the working.py file

There you go! You have a working FastAPI server.