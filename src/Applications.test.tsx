import { render, screen, waitFor } from "@testing-library/react";
import Applications from "./Applications";
import { describe, expect, it } from "vitest";

describe("Applications", () => {
  it("should render loading state of button", async () => {
    render(<Applications />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render error message when API call fails", async () => {
    render(<Applications />);
    await waitFor(() => {
      const errorMessage =
        "An error occurred while loading the applications. Please try again.";
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
