import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";
import { render, renderHook } from "@testing-library/react";
import { expect, test } from "vitest";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

test("gives an empty list when no animal is provided", async () => {
  const { result } = renderHook(() => useBreedList(), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });

  const [breedList, status] = result.current;

  expect(breedList).toHaveLength(0);
  expect(status).toBe("loading");
});
