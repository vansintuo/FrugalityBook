import BookCard from "../../../components/presentations/cards/BookCard";

export default {
  title: "components/presentations/card",
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;
export const CardBook = Template.bind({});
export const TykeaCard = Template.bind({});

TykeaCard.args = {
  title: "tykea",
};
