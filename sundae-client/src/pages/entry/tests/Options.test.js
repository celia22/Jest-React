import { render, screen } from "../../../test-utils/testing-ibrary-utils";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import Options from "../Options";

test("displays image for each scoop option from the server", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // Confim alt text of images
  const altText = scoopImages.map((x) => x.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vainilla scoop"]);
});

test("displays image for each topping option from the server", async () => {
  render(<Options optionType="toppings" />);

  //find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // Confim alt text of images
  const altText = toppingImages.map((x) => x.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
