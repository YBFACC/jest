import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
	shallow(<App />);
});
