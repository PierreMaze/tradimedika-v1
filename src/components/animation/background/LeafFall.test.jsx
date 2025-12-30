import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import LeafFall from "./LeafFall";

vi.mock("../../../hooks/useReducedMotion", () => ({
  useReducedMotion: vi.fn(() => false),
}));

describe("LeafFall", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe("Rendering", () => {
    it("should render the component", () => {
      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      const leafContainer = container.querySelector(
        ".pointer-events-none.absolute.inset-0",
      );
      expect(leafContainer).toBeInTheDocument();
    });

    it("should render falling leaves", () => {
      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      const leaves = container.querySelectorAll("svg");
      expect(leaves.length).toBeGreaterThan(0);
    });

    it("should have correct styling classes", () => {
      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      const leafContainer = container.firstChild;
      expect(leafContainer).toHaveClass("pointer-events-none");
      expect(leafContainer).toHaveClass("absolute");
      expect(leafContainer).toHaveClass("z-0");
    });
  });

  describe("Reduced Motion", () => {
    it("should not render when prefersReducedMotion is true", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(true);

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      expect(container.firstChild).toBeNull();
    });

    it("should render when prefersReducedMotion is false", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(false);

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      expect(container.firstChild).not.toBeNull();
    });
  });

  describe("LocalStorage Override", () => {
    it("should render when force-leaffall is set to true even with prefersReducedMotion", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(true);

      localStorage.setItem("force-leaffall", "true");

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      expect(container.firstChild).not.toBeNull();
    });

    it("should not render when force-leaffall is false and prefersReducedMotion is true", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(true);

      localStorage.setItem("force-leaffall", "false");

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      expect(container.firstChild).toBeNull();
    });

    it("should respect prefersReducedMotion when force-leaffall is not set", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(true);

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      expect(container.firstChild).toBeNull();
    });
  });

  describe("Leaf Icons", () => {
    it("should render leaf icons with correct classes", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(false);

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      const leafIcon = container.querySelector("svg");
      expect(leafIcon).toBeInTheDocument();
      expect(leafIcon).toHaveClass("text-emerald-700/75");
      expect(leafIcon).toHaveClass("drop-shadow-lg");
    });

    it("should have dark mode classes", async () => {
      const { useReducedMotion } =
        await import("../../../hooks/useReducedMotion");
      useReducedMotion.mockReturnValue(false);

      const { container } = render(<LeafFall />);
      act(() => {
        vi.runAllTimers();
      });
      const leafIcon = container.querySelector("svg");
      expect(leafIcon).toBeInTheDocument();
      expect(leafIcon).toHaveClass("dark:text-emerald-500/75");
    });
  });
});
