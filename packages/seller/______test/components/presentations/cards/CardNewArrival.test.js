
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardNewArrival from "../../../../components/presentations/cards/CardNewArrival";

describe("Test card New  Arrival",()=>{
    let wrapper 
    beforeAll(()=>{
        wrapper = shallow(<CardNewArrival href="href" src="mainBg.jpg" price={12}/>)
    })
    it("have to match snapshot",()=>{
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it("should have text SEE DETAIL",()=>{
        const seeDetail = wrapper.find('div')
        expect(seeDetail.find('p').at(3).text()).toBe('SEE DETAIL')
    })
    it("have to have href : ",()=>{ 
        const link = (wrapper.find('Link').props().href)
        expect(link).toBe('href')
    })
    it("should display price :",()=>{
        const seeDetail = wrapper.find('div')
        expect(seeDetail.find('p').at(2).text()).toBe('Price : $12')
    })
    it("should diplay image : ",()=>{
        const img = wrapper.find('img')
        expect(img.props().src).toBe("mainBg.jpg")
    })
})