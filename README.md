# enerator 사용하기
javascript의 generator를 이해하기 위해 예제를 연습한다.

[Understanding Generators](https://medium.com/javascript-in-plain-english/javascript-understanding-generators-d7488fbf2c9a) 에 내용에 기반한다.

배열의 원소를 반복적으로 접근해서 처리하는 방법은 여러가지가 있다. 그 대표적인 것으로 forEach를 이용하는 방법과 for-of 루프를 이용하는 방법이 있다. 

forEach 메소드는 Array의 프로토타입으로 정의되어 있고, for-of를 통해서는 배열이나, 맵(map), 셋(set), 문자열 등의 각 원소를 반복적으로 접근할 수 있다.

## 반복자(Iterator)
iterator 프로토콜을 구현한 객체를 iterator라고 한다. iterator 프로토콜을 구현하기 위해서는 next()라는 메소드를 만들고, 반환값은 내부에 가지고 있는 원소의 다음을 가리키도록 하는 객체로 해주면 된다. 이 객체는 두 가지 프로퍼티를 가지는데, done과 value가 된다. 

done은 원소가 끝에 도달했는지의 여부를 알려주는 값이고, value는 현재 위치의 값이다.

iterator.js 에서 관련 예제를 정리한다.

## Iterable
iterator 프로토콜을 구현한다고 해도 for-of 구문에서 사용할 수 없다. iterable 프로토콜을 구현해줘야 한다. iterable 프로토콜은 Symbol.iterator를 키에 대해 반복자를 반환하는 함수를 값으로 넘겨주도록 구현해주면 된다.

iterable.js 에서 관련 예제를 정리한다.

## Generator
ES2015에서 generator라는 개념을 도입했다. iterable/iterator 방식을 좀 더 직관적으로 구현할 수 있는 방법이다.

주요 특징을 정리하면,
* generator는 iterable과 iterator 둘 다 가진다.
* next()를 호출하면, yield가 있는 위치까지 실행을 진행한다.
* 더 이상 yield 구문이 없다면 반복을 완료한다.

앞의 예제에서 실행한 것과 동일한 작업을 generator를 통해 처리한 내용을 generator.js에서 정리한다.

주의할 점이 있다면, generator를 선언할 때 function 이름 앞에 "*" 을 붙여줘야 한다.
