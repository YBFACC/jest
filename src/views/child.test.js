import Child from "./child";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

test("Child", () => {
	const wrapper = shallow(<Child />);
	expect(wrapper.html()).toMatchSnapshot();
	wrapper.find("#antd-btn").simulate("click");

	expect(wrapper.html()).toMatchSnapshot();
});
