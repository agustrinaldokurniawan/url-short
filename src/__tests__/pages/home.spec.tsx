import { act, render, screen } from "@testing-library/react";
import Home, { metadata } from "@/app/page";
import { Metadata } from "next";

describe("Home Router", () => {
  it("should set correct metadata", async () => {
    const correctMetadata: Metadata = {
      title: "URL Shortener",
      description: "Under Construction",
    };
    const pageMetadata = metadata;

    expect(pageMetadata).toEqual(correctMetadata);
  });
  it("should contain url shortener title", () => {
    render(<Home />);
    const h5 = screen.getByRole("heading", {
      level: 5,
    });
    expect(h5.textContent).toEqual("URL Shortener");
  });
});
