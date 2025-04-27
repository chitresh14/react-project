import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMockData.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render the RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Dindigul Thalappakatti");
  expect(resName).toBeInTheDocument();
});

it("Should render the withPromoted component (Higher order)", () => {
  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardWithPromotedLabel resData={MOCK_DATA} />);

  const resName = screen.getByText("Promoted");
  expect(resName).toBeInTheDocument();
});
