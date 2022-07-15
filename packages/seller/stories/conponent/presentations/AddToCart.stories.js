import AddToCard from "../../../components/presentations/cards/AddToCard";
import { RecoilRoot } from "recoil";
export default {
  title: "components/presentations/card",
  component: AddToCard,
};

const Template = (args) => (
  <RecoilRoot>
    <AddToCard {...args} />;
  </RecoilRoot>
);

export const AddToCart = Template.bind({});
