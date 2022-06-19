import ProfileUserCard from "../../../../components/containers/card/ProfileUserCard";
import { RecoilRoot } from "recoil";
export default {
    title:"components/containers/cards/ProfileUserCard",
    component:ProfileUserCard,
};
const Template=(args)=>(<ProfileUserCard {...args}/>);
export const UserProfile =Template.bind({});