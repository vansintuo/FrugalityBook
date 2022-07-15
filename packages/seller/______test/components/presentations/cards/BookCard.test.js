
import { shallow } from "enzyme";
import BookCard from "../../../../components/presentations/cards/BookCard";
import toJSON from 'enzyme-to-json'
describe("test book card ",()=>{
    let wrapper ;
    beforeAll(()=>{
        wrapper = shallow(<BookCard/>)
    })
    it("snapshot",()=>{
        expect (toJSON(wrapper)).toMatchSnapshot()
    })
    it("tage div have four",()=>{
        expect (wrapper.find('div')).toHaveLength(4)
    })
    it("have to have classe blur ",()=>{
        expect(wrapper.find('div').at(0).props().className).toEqual("makeStyles-blur-2")
    })
    it("have src atribute ",()=>{
        expect ((wrapper.find('img')).props().src).toBeTruthy()
    })
    it("width of image ",()=>{
        expect ((wrapper.find('img')).props().width).toEqual(180)
    })
    it("height of image ",()=>{
        expect ((wrapper.find('img')).props().height).toEqual(230)
    })
    it("objectfit",()=>{
        expect ((wrapper.find('img')).props().objectFit).toEqual("cover")
    })
    it("must have title",()=>{
        expect(wrapper.find('h4').text()).toBeTruthy()
    })
})