import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useGetProfile } from "@/modules/profile";
import useGetComments from "@/modules/posts/hooks/useGetComments.ts";
import { type Theme, ThemeProvider } from "@emotion/react";
import Post from "@/modules/posts/components/Post.tsx";
import "@testing-library/jest-dom/vitest";
import * as React from "react";

vi.mock("@/modules/profile", () => ({
   useGetProfile: vi.fn(),
}));

vi.mock("@/modules/posts/hooks/useGetComments.ts", () => ({
   default: vi.fn(),
}));

vi.mock("@/modules/posts/store/postUI.store.ts", () => ({
   default: {
      openPostModal: vi.fn(),
   },
}));

vi.mock("@/modules/posts/components/ui/PostHeader/PostHeader.tsx", () => ({
   default: ({ profileName }: { profileName: string }) => (
      <div data-testid="post-header">{profileName}</div>
   ),
}));

vi.mock("@/modules/posts/components/ui/PostMain/PostMain.tsx", () => ({
   default: ({ title, onMainClick }: { title: string; onMainClick: () => void }) => (
      <div data-testid="post-main" onClick={onMainClick}>
         {title}
      </div>
   ),
}));

vi.mock("@/modules/posts/components/ui/PostFooter/PostFooter.tsx", () => ({
   default: ({ onCommentClick }: { onCommentClick: () => void }) => (
      <div data-testid="post-footer" onClick={onCommentClick}>
         Footer
      </div>
   ),
}));

const mockTheme = {
   colors: { background: { content: "#fff" } },
   borders: { base: "1px solid #000" },
} as unknown as Theme;

const mockPostData = {
   id: 123,
   userId: 1,
   title: "Test Post Title",
   body: "Test Body",
   images: [],
   reactions: {
      likes: 123,
   },
   views: 100,
};

const mockUserData = {
   firstName: "Ivan",
   lastName: "Ivanov",
   image: "avatar.jpg",
};

const mockCommentsData = {
   total: 5,
   comments: [],
};

const renderWithTheme = (component: React.ReactNode) => {
   return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("Post Component", () => {
   beforeEach(() => {
      vi.clearAllMocks();
   });

   it("render post header main and footer after loading data", () => {
      vi.mocked(useGetProfile).mockReturnValue({
         data: mockUserData,
         isLoading: false,
         isError: false,
      } as unknown as ReturnType<typeof useGetProfile>);

      vi.mocked(useGetComments).mockReturnValue({
         data: mockCommentsData,
         isLoading: false,
         isError: false,
      } as unknown as ReturnType<typeof useGetComments>);

      renderWithTheme(<Post {...mockPostData} />);

      expect(screen.getByText("Ivan Ivanov")).toBeInTheDocument();
      expect(screen.getByText("Test Post Title")).toBeInTheDocument();
      expect(screen.getByTestId("post-footer")).toBeInTheDocument();
   });

   it("don't render anything when data didn't load", () => {
      vi.mocked(useGetProfile).mockReturnValue({
         data: undefined,
         isLoading: true,
         isError: false,
      } as unknown as ReturnType<typeof useGetProfile>);

      vi.mocked(useGetComments).mockReturnValue({
         data: mockCommentsData,
         isLoading: false,
         isError: false,
      } as unknown as ReturnType<typeof useGetComments>);

      const { container } = renderWithTheme(<Post {...mockPostData} />);

      expect(container.firstChild).toBeNull();
   });
});
