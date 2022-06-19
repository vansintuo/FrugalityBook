import ButtonStatus from "../../../../components/presentations/buttons/ButtonStatus";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Button status test ",()=>{
    let wrapper 
    const status = true
    beforeAll(()=>{
        wrapper = shallow(<ButtonStatus price={14} status={status}/>)
    })
    it("match snapshot",()=>{
        expect(toJson(wrapper)).toMatchSnapshot()
    })
   if(status){
    it("have price($)",()=>{
        expect(wrapper.find('b').text()).toEqual("$"+14)
    })
   }else {
    it("have text unavailable",()=>{
        expect(wrapper.find('b').text()).toEqual("unavailable")
    })
   }
})