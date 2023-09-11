---
title: "Big O"
date: "2023-08-30"
slug: "/algorithm/big-o"
category: "algorithm"
---

# Big O

_Reference; Cracking The Coding Interview_


##### Time Complexity
* What the concept of asymptotic runtime, Big O time.
	
    * Electronic Transfer: The size of file is going up, The time to transfer file is going up. O(s).
    * Airplane Transfer: THe size of file is going up, The time is constant. O(1).
    
-  linear will at some point surpass constant

* Best case / worst case / Expected case

> e.g. quick sort?
> 
> best case: when if all elements are equal, the quick sort will traverse the array once. <O(N)>
> worst case: when if the pivot is repeatedly the biggest element in the array? => Our recursion doesn't devide the array in half, and recurse on each half <O(N^2)>
> expected case: Sometimes the pivot will be very low or very high, but it won't always happen. <O(NlogN)>

##### Space complexity

* the amount of memory or space required by algorithm.
	
    * array size of n -> O(n) space.	
    * two-dimensinal array of size nxn -> O(n*) space.
    
** stack space in recursive calls counts
 
```java
	
    int sum(int n) {
    	
        if(n <= 0)
        	return;
   		
        return n + sum(n-1);
   }    
```

 sum(4) -> sum(3) -> sum(2) -> sum(1)
 - each of there calls is added to the call stack and takes up actual memory.

** because you have n calls, that doesn't mean it takes O(n) space.

```java

int pairSumSequenceFirst() {
	int sum = 0;
    
    for(int i = 0; i < n; i++ {
    	sum += pairSum(i, i+1);   
    }
    
    return sum;
}

int pairSum(int a, int b){
	return a+b;
}
```

* Drop the constants
* Drop the Non-Dominant Terms
* Multi-part Algorithms: Add vs Mutiply.

> O(A+B)

>  ```java
>    for(int a: arrA) {
>        print(a)
>    };
>
>    for(int b: arrB) {
>        print(b)
>    };
>    ```

> O(A*B)

> ```java
>	for(int a: arrA){
>		for(int b: arrB{
>			pinrt(a + "," + b);
>		}
>	}	
> ```

* Amortized Time
* Log N Runtimes
	- When you see a problem where the number of elements in the problem space gets halved each time, that will likely be a O(logN) runtime.
    
* Recursive Runtimes 


    
