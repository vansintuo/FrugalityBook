import LoginDialog from "../../../../components/containers/layouts/LoginDialog";
import { RecoilRoot } from "recoil";
export default{
    title:'components/containers/layouts/LoginDialog',
    component:LoginDialog,
    parameters: {
        layout: 'fullscreen',
      },
}

const Template = (args) =>(<RecoilRoot><LoginDialog {...args} open={true}/></RecoilRoot>)
export const Login = Template.bind({})
