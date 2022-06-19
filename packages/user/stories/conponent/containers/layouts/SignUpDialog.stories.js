import SignUpDialog from '../../../../components/containers/layouts/SignUpDialog'
import {RecoilRoot} from 'recoil'
export default{
    title:'components/containers/layouts/SignUpDialog',
    component:SignUpDialog,
}

const Template = (args) =>
(
<RecoilRoot>
    <SignUpDialog {...args}/>
</RecoilRoot>
    )
export const signUp = Template.bind({})