import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

let items;

describe("Emoji functionality tests", () => {
    beforeEach(()=> {
        render(<App />);
        items = screen.getAllByText("Click to copy emoji");
    })

    test("emoji list rendered", ()=> {
        expect(items.length).toEqual(20);
    })
    test("filter emoji", ()=> {
        const inputText = screen.getByText(/1234/i);
        expect(inputText).toBeInTheDocument("1234");
    })
    test("emoji must be copied", () => {
        expect(items[0]).parentElement;
    });

})
