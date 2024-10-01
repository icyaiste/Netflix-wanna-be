import { test, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // ekker ersätt med MemoryRouter på samma sätt

test("True to be true", () => {
  expect(true).toBe(true);
});

test("should render headline", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
