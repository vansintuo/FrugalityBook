import CheckoutButton from "../components/presentations/buttons/CheckoutButton";
import Enzyme, { shallow } from "enzyme";

it("button match with snapshot", () => {
  const checkoutButton = shallow(<CheckoutButton />);
  expect(checkoutButton).toMatchSnapshot();
});
