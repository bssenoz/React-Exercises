import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header";
import '@testing-library/jest-dom'

test("Header rendering", () => {
    render(<Header />);
    const headerText = screen.getByText(/Emoji Search/i);
    expect(headerText).toBeInTheDocument();
  });