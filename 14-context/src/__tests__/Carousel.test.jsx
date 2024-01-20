import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Carousel from "../Carousel";

test("the carousel thumbnail clicked should change the hero image", async () => {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  const carousel = render(<Carousel images={images} />);

  const heroImage = await carousel.findByTestId("hero");
  expect(heroImage.src).toContain(images[0]);

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const thumbnailImage = await carousel.findByTestId(`thumbnail${i}`);

    expect(thumbnailImage.src).toContain(image);
    await thumbnailImage.click();

    expect(Array.from(thumbnailImage.classList)).toContain("active");
    expect(heroImage.src).toContain(image);
  }

  carousel.unmount();
});
