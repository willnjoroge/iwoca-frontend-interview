import { render, screen, waitFor } from "@testing-library/react";
import SingleApplication from "./SingleApplication";
import { describe, expect, it } from "vitest";

describe("Single Application", () => {
  const mockApplication = {
    id: 1,
    loan_amount: 37597,
    first_name: "Miles",
    last_name: "Espinoza",
    company: "Qnekt",
    email: "milesespinoza@qnekt.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  };

  it("should render application and column headers", async () => {
    render(<SingleApplication application={mockApplication} />);

    expect(screen.getByText(/Company/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Loan Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/Application Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Expiry date/i)).toBeInTheDocument();
  });

  it("should render application and application data", async () => {
    render(<SingleApplication application={mockApplication} />);

    expect(screen.getByText(/Miles/)).toBeInTheDocument();
    expect(screen.getByText(/Espinoza/)).toBeInTheDocument();
    expect(screen.getByText(/Qnekt/)).toBeInTheDocument();
    expect(screen.getByText(/milesespinoza@qnekt.com/)).toBeInTheDocument();
    expect(screen.getByText(/10-08-2021/)).toBeInTheDocument();
    expect(screen.getByText(/02-12-2021/)).toBeInTheDocument();
  });
});
