import { describe, it, vi, expect, beforeAll } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Post from "@/modules/posts/components/Post.tsx";
import type { PostInterface } from "@/modules/posts/interfaces/Post.Interfaces.ts";
import { useGetProfile } from "@/modules/profile";
import useGetComments from "@/modules/posts/hooks/useGetComments.ts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/assets/styles/theme.ts";
import type { ElementType, ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom/vitest";
import postUIStore from "@/modules/posts/store/post.store.ts";

const queryClient = new QueryClient();

vi.mock("@tanstack/react-router", async (importOriginal) => {
   const actual = await importOriginal<typeof import("@tanstack/react-router")>();
   return {
      ...actual,
      Link: ({ to, children }: { to: string; children: ReactNode }) => <a href={to}>{children}</a>,
      createLink: (Component: ElementType) => {
         return (props: { to: string; children?: ReactNode } & Record<string, unknown>) => (
            <Component href={props.to} {...props} />
         );
      },
      useRouter: vi.fn(),
      useParams: vi.fn(() => ({})),
   };
});

vi.mock("@/modules/profile", async (importOriginal) => {
   const actual = await importOriginal<typeof import("@/modules/profile")>();
   return {
      ...actual,
      useGetProfile: vi.fn(() => ({
         isLoading: false,
         data: {
            id: 1,
            firstName: "Ivan",
            lastName: "Ivanov",
            image: "avatar.jpg",
            email: "email@email.com",
         },
      })),
   };
});

vi.mock("@/modules/posts/hooks/useGetComments", () => {
   const mockHook = vi.fn(() => ({
      isLoading: false,
      data: {
         comments: [],
         total: 5,
         limit: 10,
         skip: 0,
      },
   }));
   return {
      default: mockHook,
      useGetComments: mockHook,
   };
});

const renderWithProviders = (children: ReactElement) => {
   return render(
      <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
   );
};

const mockPost: PostInterface = {
   id: 1,
   userId: 1,
   title: "Title",
   body: "Body",
   views: 123,
   reactions: {
      likes: 123,
   },
};

describe("Post Component", () => {
   beforeAll(() => {
      renderWithProviders(<Post {...mockPost} />);
   });

   it("testing render component", () => {
      expect(useGetComments).toBeCalledTimes(1);
      expect(useGetProfile).toBeCalledTimes(1);

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Body")).toBeInTheDocument();
      expect(screen.getByText("Ivan Ivanov")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
   });

   it("testing clicking on like", () => {
      const button = screen.getByRole("button");
      expect(button.textContent).toBe("123");

      fireEvent.click(button);
      expect(button.textContent).toBe("124");
   });

   it("testing clicking article", () => {
      const article = screen.getByRole("article");
      fireEvent.click(article);
      expect(postUIStore.selectedPost).not.toBeNull();
   });
});
