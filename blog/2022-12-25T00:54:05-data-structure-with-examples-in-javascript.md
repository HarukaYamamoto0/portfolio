---
title: Data Structures with Examples in JavaScript
description: Data structures are a fundamental concept in programming and algorithm design, responsible for organizing and manipulating data efficiently in memory to optimize performance and operations.
date: 2022-12-25T00:54:05
tags: [data-structures, programming, javascript, fundamentals]
image: /img/posts/data-structure-with-examples-in-javascript/capa.webp
authors: [HarukaYamamoto0]
slug: data-structure-with-examples-in-javascript
---

**Data structures** are a fundamental concept in building algorithms and programming languages, as they are responsible for organizing and manipulating data more efficiently in the computer's memory — which can lead to the optimization of processes and operations.

<!-- truncate -->

## Types of Data Structures

The most common examples are lists, stacks, queues, trees, and graphs. In the examples below, I’ll use arrays as a base.

### Lists

A list is a collection of values organized in an ordered sequence. In JavaScript, a list is an `Array`. An array is an invaluable data structure when you need to store and manage a collection of items in an ordered way. It offers many useful operations to manipulate these items, such as adding or removing elements, searching for a specific item, etc.

![List](https://imgur.com/uYk6IKs.png)

In general, you should use an array when you need to store and manage a collection of values and want fast access to them through numeric indices.

_Example:_

```js
// Create an empty list
const list = [];

// Add elements to the list
list.push(1); // adds 1 to the end of the list
list.unshift(2); // adds 2 to the beginning of the list

// Remove elements from the list
list.pop(); // removes the last element from the list
list.shift(); // removes the first element from the list

// Access list elements
console.log(list[0]); // prints the first element in the list

// Search for elements in the list
console.log(list.indexOf(1)); // prints the index of element 1 in the list

// Sort elements in the list
list.sort(); // sorts the list elements in ascending order
```

### Stack

A stack is a structure that follows the rule “Last In, First Out” (LIFO), meaning the last item added to the array will be the first one removed.

![Stack](https://imgur.com/U0kETOt.png)

Stacks are very common in programming languages and widely used in applications, such as undoing actions in code editors, browser navigation (when you go back to the previous page), among others.

Below is an example of a stack implementation in JavaScript:

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```

### Queue

A queue is the opposite of a stack because it follows the rule “First In, First Out” (FIFO), meaning the first item added is the first one removed.

![Queue](https://imgur.com/S30TfT4.png)

Queues are very common in customer service systems, such as in banks, gas stations, or supermarket lines. They’re also widely used in many applications, such as background task management and event handling.

Example of a queue implementation in JavaScript:

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```

### Trees

A tree is a bit more complex than the others. It’s a hierarchical data structure consisting of nodes and branches. Each node can have one or more children but only one parent. The very first node of the tree is called the _root_, and nodes without children are called _leaves_.

![Trees](https://imgur.com/mlLuJew.png)

This structure is very useful and widely used in applications such as representing file system structures, implementing search trees, and representing hierarchical relationships in databases.

Example of a tree implementation in JavaScript:

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const tree = new Tree();
const root = new TreeNode(1);
const left = new TreeNode(2);
const right = new TreeNode(3);

root.children.push(left, right);
tree.root = root;
```

### Graphs

A graph in data structures is composed of vertices (also known as nodes) and edges. Each vertex can have a set of edges that connect it to other vertices. The edges can be _directed_ (meaning they have a direction) or _undirected_ (meaning they don’t).
Graphs are used to represent relationships between elements in a dataset and are useful for solving the shortest path problems, representing networks, and modeling complex systems.
[See more](https://medium.com/@rsorage/grafos-introdu%C3%A7%C3%A3o-de-forma-f%C3%A1cil-a4959821e101)

![Graphs](https://imgur.com/1Vr0DrZ.png)

Here’s an example of an undirected graph in JavaScript:

```js
class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  addEdge(node1, node2) {
    this.edges.push([node1, node2]);
  }
}

const graph = new Graph();
const node1 = "A";
const node2 = "B";
const node3 = "C";

graph.addNode(node1);
graph.addNode(node2);
graph.addNode(node3);
graph.addEdge(node1, node2);
graph.addEdge(node2, node3);
```

In this example, we have a `Graph` class that represents the entire graph. The graph has an array of nodes and an array of edges. We added three nodes to the graph and two edges connecting them, resulting in the following structure:

```
A -- B -- C
```

Here’s an example of a directed graph in JavaScript:

```js
class DirectedGraph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  addEdge(node1, node2) {
    this.edges.push([node1, node2]);
  }
}

const graph = new DirectedGraph();
const node1 = "A";
const node2 = "B";
const node3 = "C";

graph.addNode(node1);
graph.addNode(node2);
graph.addNode(node3);
graph.addEdge(node1, node2);
graph.addEdge(node2, node3);
```

In this example, we have a `DirectedGraph` class representing a directed graph. It’s the same as the previous example, except that the edges are directed — meaning they have a defined direction.
This gives us the following structure:

```
A -> B -> C
```

Other examples of graph usage include:

- Representing a computer network and finding the shortest path between two computers.
- Representing a transportation network and finding the fastest route between two locations.
- Representing a relationship network and finding the shortest path between two people.

## Sources

- [Data structures](https://sites.google.com/site/proffdesiqueiraed/aulas/aula-1---introducao-a-estrutura-de-dados)
- The examples were created using ChatGPT because I was too lazy to code them by hand.
- Images: [list](https://www.google.com/amp/s/www.freecodecamp.org/portuguese/news/as-principais-estruturas-de-dados-que-voce-deve-conhecer-para-sua-proxima-entrevista-de-programacao/amp/), [queue](https://www.ime.usp.br/~pf/algoritmos/aulas/fila.html), [stack](https://www.treinaweb.com.br/blog/o-que-e-e-como-funciona-a-estrutura-de-dados-pilha), [trees](https://pt.m.wikipedia.org/wiki/Estrutura_de_dados), [graphs](https://medium.com/@rsorage/grafos-introdu%C3%A7%C3%A3o-de-forma-f%C3%A1cil-a4959821e101)
