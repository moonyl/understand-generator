# understand-generator
javascript의 generator를 이해하기 위해 예제를 연습한다.

[Understanding Generators](https://medium.com/javascript-in-plain-english/javascript-understanding-generators-d7488fbf2c9a) 에 내용에 기반한다.

배열의 원소를 반복적으로 접근해서 처리하는 방법은 여러가지가 있다. 그 대표적인 것으로 forEach를 이용하는 방법과 for-of 루프를 이용하는 방법이 있다. forEach 메소드는 Array의 프로토타입으로 정의되어 있고, for-of를 통해서는 배열이나, 맵(map), 셋(set), 문자열 등의 각 원소를 반복적으로 접근할 수 있다.

## 반복자(Iterator)
iterator 프로토콜을 구현한 객체를 iterator라고 한다. iterator 프로토콜을 구현하기 위해서는 next()라는 메소드를 만들고, 반환값은 내부에 가지고 있는 원소의 다음을 가리키도록 하는 객체로 해주면 된다. 이 객체는 두 가지 프로퍼티를 가지는데, done과 value가 된다. done은 원소가 끝에 도달했는지의 여부를 알려주는 값이고, value는 현재 위치의 값이다.
iterator.js 에서 관련 예제를 정리한다.