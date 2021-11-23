import React from 'react'
import Hello from '../components/Hello'
import { render, fireEvent, getByRole } from '@testing-library/react'

test("Component should display Hello text", () => {
    // const comp = render(<Hello />);
    // let helloText = comp.getByText("Hello!");
    // comp.debug();

    // deconstruct 할 수 있다.
    const { getByText, getByTestId, getByRole } = render(<Hello />);

    // element 찾을 때는 getBy, queryBy, findBy 세 가지 종류가 있다.

    let helloText = getByText("Hello!");
    expect(helloText).toBeTruthy();

    expect(helloText.tagName).toBe("H1");
    expect(helloText.textContent).toBe("Hello!");

    // 컴포넌트에 data-testid 값을 주어 테스트를 위한 id 값을 부여할 수 있다.
    let helloTestText = getByTestId("my-heading");
    expect(helloText).toBe(helloTestText);

    // 클릭 이벤트 테스트
    let myBtn = getByRole('button');
    fireEvent.click(myBtn);

    // change 이벤트를 통한 state 변경 테스트
    let myInput = getByRole('textbox')
    expect(myInput).toHaveValue('')
    fireEvent.change(myInput, {target: {value: "ooooo"}});
    expect(myInput).toHaveValue('ooooo')
})