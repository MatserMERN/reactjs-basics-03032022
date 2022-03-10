// import Greet from './1.components/1.function/Greet';
// import GreetOne from './1.components/1.function/GreetOne';
// import { Named } from './1.components/1.function/Named';
// import { NamedOne } from './1.components/1.function/NamedOne';
// import Welcome from './1.components/2.class/Welcome';
// import { WelcomeOne } from './1.components/2.class/WelcomeOne';
// import Hello from './2.jsx/Hello';
// import Greeting from './3.props/Greeting';
// import GreetingOne from './3.props/GreetingOne';
import LifeCycleA from "./10.life-cycle/LifeCycleA";
import StudentSQLAPI from "./11.ajax-calls/StudentSQLAPI";
import Todo from "./11.ajax-calls/Todo";
import User from "./11.ajax-calls/User";
import Welcome from "./3.props/Welcome";
import Counter from "./4.state/Counter";
import CounterHook from "./4.state/CounterHook";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import Inline from "./8.styling/Inline";
import Stylesheet from "./8.styling/Stylesheet";
import StylesheetOne from "./8.styling/StylesheetOne";
import Form from "./9.form-handling/Form";
import FormOne from "./9.form-handling/FormOne";


function App() {

  function display(lastName){
    return lastName
  }

  return (
    <div className="App">
      <StudentSQLAPI />
      {/* <User /> */}
      {/* <Todo /> */}
      {/* <LifeCycleA /> */}
      {/* <FormOne /> */}
      {/* <Form /> */}
      {/* <StylesheetOne /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <CounterHook /> */}
      {/* <Person /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Welcome name="Scott" skill="Great Boss"/> */}
        {/* <GreetingOne name="Scott" skill="Great Boss"/> */}
      {/* <Greeting id={1} name="Scott" skill="Great Boss" isAdmin={true} display={display('Desatnick')} />
      <Greeting id={2} name="Adam" skill="Business Analyst" isAdmin={false} display={display('Colson')}/>
      <Greeting id={3} name="Tuan" skill="Tech Boss" isAdmin={false} display={display('Bui')}>
        <h3>This is only for Tuan</h3>
      </Greeting> */}

      {/* <Hello /> */}
      {/* <Greet />
      <GreetOne />
      <Named />
      <NamedOne />
      <Welcome />
      <WelcomeOne /> */}
    </div>
  );
}

export default App;
