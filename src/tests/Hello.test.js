import React from 'react'
import Hello from '../components/Hello'
import { render } from '@testing-library/react'

test("Component should display Hello text", () => {
    // const comp = render(<Hello />);
    // let helloText = comp.getByText("Hello!");
    // comp.debug();

    // deconstruct 할 수 있다.
    const { getByText } = render(<Hello />);

    // getBy, queryBy, findBy 세 가지 종류가 있다.
    //

    let helloText = getByText("Hello!");
    expect(helloText).toBeTruthy();

    expect(helloText.tagName).toBe("H1");
    expect(helloText.textContent).toBe("Hello!");
})