# 테스트 방법

```
npm test 파일명[ ex = regex.test.js ]
```

ES6 문법을 사용하려면 몇 가지 추가 설정

```
npm install -D @types/jest @babel/core @babel/preset-env

// babel.config.json
{
  "presets": ["@babel/preset-env"]
}

// jest.config.json
{
  "verbose": true,
  "collectCoverage": true
}
```

## List

- `test`코드 문법

  - `toBe()`
  - `toEqual()`
  - `toBeTruthy(), toBeFalsy()`
  - `toHaveLength(), toContain()`
  - `toMatch()`
  - `toThrow()`

<br/>

- 비동기 `test`코드
  - 콜백
  - `Promise`
  - `async/await`

<br/>

- 테스트 코드 중복 줄이기

  - `beforeEach()` : 각각 테스트 함수가 실행되기 **전**에 매번 실행
  - `afterEach()` : 각각 테스트 함수가 실행되기 **후**에 매번 실행

    ```
    // test() 함수들이 돌아갈때마다 beforeEach()에서 설정한,
    // 여러 객체들을 push한 data.users 데이터를 사용하게 된다.
    beforeEach(() => {
      data.users.push(
        { id: 1, email: "user1@test.com" },
        { id: 2, email: "user2@test.com" },
        { id: 3, email: "user3@test.com" }
      );
    });

    test("find all users", () => {
      // ... 테스트하면서 data.users의 데이터들을 가져와 사용한다.
    });

    test("destory a user", () => {
      // ... 테스트하면서 data.users의 데이터들을 가져와 사용한다.
    });
    ```

  - `beforeAll(), afterAll()`

    - 각각 맨 처음과 맨 끝에 딱 한 번씩만 호출
    - **맨 처음에 한 번 연결을 맺어 놓고, 테스트 여러 함수에 걸쳐서 사용한 후에 맨 마지막에 연결을 종료하는 것이 효율적이다.**

    ```
    let connection;

    // 테스트 실행하기전에 미리 전역 설정
    beforeAll(() => {
    conection = openConnection({ host: "...", port: "..." });
    });

    ... 여러개의 test 코드들
    ... 여러 테스트 함수 내에서 connection 객체를 많이 사용한다.

    // 테스트 완료후 해체
    afterAll(() => {
    conection.close();
    });
    ```

<br/>

- 기타테스트
  - `only(), skip()` : 테스트 코드를 디버깅할 때 유용한 함수
    - `only()` : 파일에 한 함수만 실행하고 싶을 때 사용 (`only`가 붙은 함수만 실행 )
    - `skip()` : `only`와 반대로 파일에서 한 함수만 제외하고 싶을 때 사용
  - `describe(), it()` : 많은 수의 테스트 함수가 작성되어 있는 경우
    - `describe()` : 여러 개의 테스트 함수를 묶는 것이 가능하다.
    - `it(), test()`는 동일한 기능을 하는 함수이다.

<br/>

## 리액트 컴포넌트 테스트 설정

Jest 가 JSX 를 이해할 수 있도록 하는 과정

```

npm install -D @testing-library/jest-dom jest-environment-jsdom
@testing-library/react babel-jest @testing-library/react
@babel/preset-env @babel/preset-react

// babel.config.json
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}

// jest.config.json
{
"verbose": true,
"collectCoverage": true,
"testEnvironment": "jsdom",
"setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
"moduleNameMapper": {
"\\.(css|scss)$": "identity-obj-proxy"
}
}

// jest.setup.js
import "@testing-library/jest-dom";

```

<br/>

### 리액트 컴포넌트를 구현하면서 사용된 테스트코드 간략 설명

- `Counter Component TEST`
  - `render()` 로 컴포넌트를 렌더링
  - `screen.getByText()` 는 텍스트 기반 요소 탐색
  - `fireEvent.click()` 을 사용해 사용자 클릭 이벤트를 시뮬레이션
  - `toBeInTheDocument()` 는 해당 요소가 실제로 렌더링되었는지를 확인

<br/>

- `INPUT Component TEST`
  - `fireEvent.change()` 를 사용해 input 필드에 값을 입력
  - `target: { value: '값' }` 을 넘기면 사용자가 입력한 것처럼 동작
  - 화면에 변화된 텍스트가 반영되는지 확인한다.

<br/>

- `LOGIN Status TEST`

  - isLoggedIn이 true면 “환영합니다!” 표시
  - isLoggedIn이 false면 “로그인이 필요합니다.” 표시

- 추가 TEST
  - 토글 버튼 (ToggleButton 컴포넌트)
  - 입력 필드와 제출 (NameForm 컴포넌트)
  - 조건부 렌더링 리스트 (TodoList 컴포넌트)

### `@testing-library/react`란

| 항목                 | Jest                                        | @testing-library/react                          |
| -------------------- | ------------------------------------------- | ----------------------------------------------- |
| 역할                 | 테스트 실행기(Test Runner) + Assertion 도구 | React UI 컴포넌트를 테스트하는 도구 모음        |
| 핵심 기능            | `test`, `expect`, `jest.fn()` 등            | `render`, `screen`, `fireEvent`, `userEvent` 등 |
| JSX 렌더링 지원 여부 | 기본 지원 안함 (`babel-jest` 필요)          | JSX 컴포넌트 렌더링 지원 (`render()`)           |
| 주로 사용하는 목적   | 논리적 함수, 유닛 테스트                    | 컴포넌트 UI 및 이벤트 기반 테스트               |
