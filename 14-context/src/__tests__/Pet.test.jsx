import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pet from "../Pet";
import { MemoryRouter } from "react-router-dom";

test("displays a default thumbnail", async () => {
  const pet = render(
    <MemoryRouter>
      <Pet />
    </MemoryRouter>
  );

  const petThumbnail = await pet.findByTestId("pet_thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
  pet.unmount();
});

test("displays a non-default thumbnail", async () => {
  const pet = render(
    <MemoryRouter>
      <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
    </MemoryRouter>
  );

  const petThumbnail = await pet.findByTestId("pet_thumbnail");
  expect(petThumbnail.src).toContain("1.jpg");
  pet.unmount();
});
