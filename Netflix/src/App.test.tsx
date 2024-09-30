import { test, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

test("True to be true", () => {
  expect(true).toBe(true);
});

test("should render headline", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });