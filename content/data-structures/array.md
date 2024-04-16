---
title: "Array"
date: "2023-09-14"
slug: "/data-structures/array"
category: "data structure"
---

# Array

### Basic 

- lookup O(1)
- push O(1)
- insert O(n)
- delete O(n)

_(When it is dynamic array, it can be O(n))_

### Features

- Organizes items sequentially(one after another)
- Stored in contiguous memory, that is in order
- the smallest footprint of any data structure
  - store some data
  - iterate over it (go one by one, step by step)

### Funtions

- push(O(1))
- pop(O(1))
- unshift(O(n))
- splice(O(n/2))

allocated in adjacent blocks of memory when they're created.
  
### Static and Dynamic

- static - fixed sizes

e.g. 

```java
int[] test = {0,1,2};
```

- dynamic - automatic resizing

```java
int[] test = new int[5];
```
