import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-ibrary-utils";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test.only("handles error for scoops and toopings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alert = await screen.findAllByRole("alert");
    expect(alert).toHaveLength(2);
  });
});

// only y skip se puede usar para hace debugging de los tests y aislar el que peta

test.skip("not a real test, juts to check ONLY and SKIP", () => {});
