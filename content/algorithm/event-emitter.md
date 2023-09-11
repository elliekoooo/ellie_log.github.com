---
title: "Event Emitter"
date: "2023-09-08"
slug: "/algorithm/event-emitter"
category: "algorithm"
---

# Event Emitter

_Reference; Leet code_

### Approach


전역변수로 events 배열을 만들어서, eventName을 키로, Callback 함수를 값으로 하는 object를 push한다. 

결과적으로 이러한 형태가 된다.

```script

events = [
	eventName1: [callback1, callback2...]
  	eventName2: [callback3, callback4...]
	...
]  
```

unsubscribe는 간단히 pop()을 활용한다.

emit은 events 배열에 저장된 함수들을 실행시켜주면 된다.




### Code

```script

type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  events: any[] = [{}];

  subscribe(eventName: string, callback: Callback): Subscription {  
    if(callback == undefined)
      return;
    
    if(this.events[eventName] == undefined)
      this.events[eventName] = [];

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        this.events[eventName]?.pop();
      }
    };
  }

  emit(eventName: string, args: any[] = []): any {
    return this.events[eventName]?.map(callback => callback(...args)) ?? [];
  }
}


```