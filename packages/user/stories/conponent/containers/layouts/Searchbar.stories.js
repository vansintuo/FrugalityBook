import SearchBar from '../../../../components/containers/layouts/SearchBar'
import { RecoilRoot } from 'recoil'
export default{
    title:'components/containers/layouts/SearchBar',
    component:SearchBar,
}

const Template = (args ) =>(
    <RecoilRoot>
        <SearchBar {...args}/>
    </RecoilRoot>
)
export const search = Template.bind({})