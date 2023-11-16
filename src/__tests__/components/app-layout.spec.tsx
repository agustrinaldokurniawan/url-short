import AppLayout from "@/components/app-layout";
import { render, screen } from "@testing-library/react";

describe("app layout component", () => {
  beforeEach(() => {
    render(
      <AppLayout>
        <p>children</p>
      </AppLayout>
    );
  });
  it("Layout could contain children", () => {
    const component = screen.getByText("children");
    expect(component).toBeInTheDocument();
  });
});
