import { getOrders } from "./database.js"

export const Orders = async () => {
    const orders = await getOrders();
    return `${orders
      .map((order) => {

        return `<section class="order">
        <input type="button" name="complete" id="${order.id}" value="Complete">
                  ${order.paint.color} car with
                  ${order.wheels.style} wheels,
                  ${order.interior.material} interior,
                  and the ${order.technology.package}
                  for a total cost of
                  ${(
                    order.totalCost
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
              </section>`;
      })
      .join("")}`;
  };
