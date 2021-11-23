// Jest는 최소 하나 이상의 테스트 함수가 필요함


describe("Our First Tests", () => {
    test("First", () => {
        // assertions 를 여기에 작성
        expect(2 + 3).toBe(5);
        expect(2 + 3).toBe(5);
        expect(2 + 3).toBe(5);
        expect(2 + 3).toBe(5);
        expect(2 + 3).toBe(5);
    })

    it("1-Second", () => {
        expect(2 + 1).toBe(3);
    })
})
describe("Our Second Tests", () => {

    it("some other test", () => {
        expect(2 + 1).toBe(3);
    })
})


function add(x, y) {
    return x + y
}

function fakeAdd(x, y) {
    return 3
}

let myValue = 1;

beforeAll(() => myValue = 3);

beforeEach(() => {
    // console.log("Before Test")
    myValue = 2
})

// afterEach(() => console.log("After the Test"))


test("Function and Variables", () => {
    let myValue2 = 3;
    expect(myValue2).toBe(3);
    expect(add(1, myValue2)).toBe(4);
    expect(fakeAdd(1,2)).toBe(3);
    // expect(fakeAdd(4, 5)).toBe(9); // => 실패할 것임
})

test("Before and After", () => {
    expect(add(1, 2)).toBe(3);
    expect(myValue).toBe(2);
})

// 이 테스트만 실행됨
// test.only("only this one", () => {
//     expect(add(1, 2)).toBe(3);
// })

// 이 테스트만 스킵됨
test.skip("Skipped", () => {
    expect(add(1, 2)).toBe(3);
})

// timeout은 기본적으로 5초로 설정되어 있다. 이것보다 오래 걸리면 테스트 실패로 간주한다.
// 세 번째 인자 값을 바꾸어서 timeout 시간을 늘리거나 줄여줄 수 있다.
test.skip("Timeout", () => {
    expect(add(1, 2)).toBe(3);
}, 1000)

// 혹은 jest의 설정 자체를 바꾸어 모든 테스트의 timeout 시간을 늘릴 수 있다.
jest.setTimeout(15000);

let numbers = [
    [1, 2, 3],
    [2,2,4],
    [4,5,9]
]

test.each(numbers)("Add %i to  %i", (a, b, total) => {
    expect(add(a, b)).toBe(total);
})

const obj1 = {name: "hi"}
const obj2 = {name: "hi"}

let animals = ["cat", "dog"]

let name = "hi";

test("Matcher", () => {
    expect(obj1).toBe(obj1); // 특정 값인지 확인하기 (===)
    expect(obj1).toEqual(obj2); // == 인지 확인하기

    expect(myValue).toBeGreaterThan(0); // > 0
    expect(myValue).toBeLessThanOrEqual(10); // <= 10

    expect(name).toMatch(/HI/i); // 정규식을 사용하여 검사 가능

    expect(animals).toContain("cat");
    expect(animals).not.toContain("tiger");
})

let p = null;
test("Falsy", () => {
    expect(p).toBeNull();
    expect(p).not.toBeUndefined();

    expect(p).toBeFalsy();
    expect(p).not.toBeTruthy();
})

function check() {
    throw new Error("Fatal Mistake!");
}

test("Error", () => {
    expect(check).toThrow();
    expect(check).toThrow(Error);
    expect(check).toThrow("Fatal Mistake!");
    expect(check).toThrow(/fatal/i);
})