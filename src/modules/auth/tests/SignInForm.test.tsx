import { describe, it, vi, expect, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { SignInForm } from "@/modules/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/assets/styles/theme.ts";
import "@testing-library/jest-dom/vitest";

const queryClient = new QueryClient();

vi.mock("@tanstack/react-router", async (importOriginal) => {
   const actual = await importOriginal<typeof import("@tanstack/react-router")>();
   return {
      ...actual,
      useLocation: vi.fn(() => ({ pathname: "/auth/sign-in" })),
      Link: ({ to, children }: { to: string; children: ReactNode }) => <a href={to}>{children}</a>,
   };
});

const renderWithProviders = (children: ReactElement) => {
   return render(
      <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
   );
};

afterEach(() => {
   cleanup();
});

describe("SignInForm RHF + zod tests", () => {
   it("should throw to errors with clear input fields", async () => {
      renderWithProviders(<SignInForm />);

      const button = screen.getByRole("button");

      fireEvent.click(button);

      expect(await screen.findByText(/Invalid email format/i)).toBeInTheDocument();
      expect(await screen.findByText(/Password must be at least/i)).toBeInTheDocument();
   });

   it("should throw all password errors", async () => {
      renderWithProviders(<SignInForm />);

      const button = screen.getByRole("button");

      const emailInput = screen.getByPlaceholderText(/Email/i);
      const passwordInput = screen.getByPlaceholderText(/Password/i);

      fireEvent.change(emailInput, { target: { value: "user@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "qwertyui" } });
      fireEvent.click(button);

      expect(await screen.findByText(/Password must/i)).toBeInTheDocument();

      fireEvent.change(passwordInput, { target: { value: "qwertyui1" } });
      expect(await screen.findByText(/Password must/i)).toBeInTheDocument();

      fireEvent.change(passwordInput, { target: { value: "Qwertyui1" } });
      expect(await screen.findByText(/Password must/i)).toBeInTheDocument();

      fireEvent.change(passwordInput, { target: { value: "Qwertyui1-" } });
      expect(await screen.findByText(/Password must/i)).not.toBeInTheDocument();
   });
});

describe("SignInForm snapshot tests", () => {
   it("should match the snapshot", () => {
      const { asFragment } = renderWithProviders(<SignInForm />);
      expect(asFragment()).toMatchSnapshot();
   });
});
