import { render, screen, waitFor } from "@testing-library/react";
import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./index";
import '@testing-library/jest-dom/extend-expect';

describe("ThemeProvider", () => {
  it("renders children without crashing", () => {
    render(
      <ThemeProvider>
        <div data-testid="test-child">Hello world</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("toggles theme when toggle function is called", async () => {
    const ChnageTheme = () => {
      const { toggle } = useContext(ThemeContext);

      return (
        <button onClick={toggle} data-testid="test-button">
          Toggle
        </button>
      );
    };

    render(
      <ThemeProvider>
        <ChnageTheme />
      </ThemeProvider>
    );

    const button = screen.getByTestId("test-button");
    const html = document.getElementsByTagName("html")[0];

    expect(html.style.cssText).toBe("--bg-color: var(--bg-light); --text-color: var(--text-light); --bg-element: var(--color-white);");
    expect(html.style.backgroundColor).toBe("");


    // click button to toggle theme

    await waitFor(() => {
      button.click();

    });
    await waitFor(() => {
      expect(html.style.cssText).toBe("--bg-color: var(--bg-dark); --text-color: var(--color-white); --bg-element: var(--elements-dark);");
    });


    await waitFor(() => {
      button.click();

    });
    await waitFor(() => {
      expect(html.style.cssText).toBe("--bg-color: var(--bg-light); --text-color: var(--text-light); --bg-element: var(--color-white);");
    });

  });
});