
import React from "react";
// import "./react.css";

const Re = () => {
  const reactTopics = [
    {
      topic: "Component",
      name: "React Component",
      use: "UI ko reusable parts mein divide karne ke liye.",
      example: "function App() { return <h1>Hello React</h1>; }",
    },
    {
      topic: "JSX",
      name: "JavaScript XML",
      use: "JavaScript ke andar HTML jaisa syntax likhne ke liye.",
      example: "const element = <h1>Hello World</h1>;",
    },
    {
      topic: "Functional Component",
      name: "Function Component",
      use: "Function ke through React component create karne ke liye.",
      example: "const Home = () => { return <h1>Home</h1>; };",
    },
    {
      topic: "export default",
      name: "Default Export",
      use: "Component ko doosri file mein import karne ke liye export karna.",
      example: "export default App;",
    },
    {
      topic: "import",
      name: "Import",
      use: "Doosri file se component ya package use karne ke liye.",
      example: "import React from 'react';",
    },
    {
      topic: "useState()",
      name: "State Hook",
      use: "Component ke andar data/state manage karne ke liye.",
      example: "const [count, setCount] = useState(0);",
    },
    {
      topic: "setState",
      name: "Update State",
      use: "State ki value ko update karne ke liye.",
      example: "setCount(count + 1);",
    },
    {
      topic: "useEffect()",
      name: "Effect Hook",
      use: "Side effects jaise API call, timer aur event handling ke liye.",
      example: "useEffect(() => { console.log('Loaded'); }, []);",
    },
    {
      topic: "useRef()",
      name: "Reference Hook",
      use: "DOM element ya mutable value ko reference karne ke liye.",
      example: "const inputRef = useRef(null);",
    },
    {
      topic: "useContext()",
      name: "Context Hook",
      use: "Multiple components ke beech data share karne ke liye.",
      example: "const value = useContext(MyContext);",
    },
    {
      topic: "useMemo()",
      name: "Memoization Hook",
      use: "Expensive calculation ke result ko optimize karne ke liye.",
      example: "const result = useMemo(() => calculate(), [value]);",
    },
    {
      topic: "useCallback()",
      name: "Callback Hook",
      use: "Function ko unnecessary recreate hone se bachane ke liye.",
      example: "const handleClick = useCallback(() => {}, []);",
    },
    {
      topic: "Props",
      name: "Properties",
      use: "Parent component se child component ko data bhejne ke liye.",
      example: "<User name='Aditya' />",
    },
    {
      topic: "props",
      name: "Receive Props",
      use: "Child component mein parent se aaye data ko receive karne ke liye.",
      example: "const User = (props) => <h2>{props.name}</h2>;",
    },
    {
      topic: "Destructuring Props",
      name: "Props Destructuring",
      use: "Props ko directly variables ke form mein use karne ke liye.",
      example: "const User = ({ name }) => <h2>{name}</h2>;",
    },
    {
      topic: "children",
      name: "Children Prop",
      use: "Component ke opening aur closing tag ke beech content receive karne ke liye.",
      example: "const Box = ({ children }) => <div>{children}</div>;",
    },
    {
      topic: "onClick",
      name: "Click Event",
      use: "Button ya element par click hone par function run karne ke liye.",
      example: "<button onClick={handleClick}>Click</button>",
    },
    {
      topic: "onChange",
      name: "Change Event",
      use: "Input ki value change hone par function execute karne ke liye.",
      example: "<input onChange={(e) => setName(e.target.value)} />",
    },
    {
      topic: "onSubmit",
      name: "Submit Event",
      use: "Form submit hone par function execute karne ke liye.",
      example: "<form onSubmit={handleSubmit}>...</form>",
    },
    {
      topic: "onMouseEnter",
      name: "Mouse Enter Event",
      use: "Mouse element ke upar aane par event handle karne ke liye.",
      example: "<div onMouseEnter={handleMouse}>Hello</div>",
    },
    {
      topic: "Conditional Rendering",
      name: "Condition Based UI",
      use: "Condition ke according different UI show karne ke liye.",
      example: "{isLogin ? <Home /> : <Login />}",
    },
    {
      topic: "Ternary Operator",
      name: "Ternary",
      use: "Short condition ke through UI render karne ke liye.",
      example: "{age >= 18 ? 'Adult' : 'Minor'}",
    },
    {
      topic: "&&",
      name: "Logical AND",
      use: "Condition true hone par component ya content show karne ke liye.",
      example: "{isLogin && <h2>Welcome</h2>}",
    },
    {
      topic: "map()",
      name: "Render List",
      use: "Array ke data ko multiple React elements mein convert karne ke liye.",
      example: "{items.map(item => <li>{item}</li>)}",
    },
    {
      topic: "key",
      name: "React Key",
      use: "List items ko uniquely identify karne ke liye.",
      example: "{items.map(item => <li key={item.id}>{item.name}</li>)}",
    },
    {
      topic: "Controlled Input",
      name: "Controlled Component",
      use: "React state ke through form input ko control karne ke liye.",
      example: "<input value={name} onChange={e => setName(e.target.value)} />",
    },
    {
      topic: "Form",
      name: "React Form",
      use: "User se information collect karne ke liye.",
      example: "<form onSubmit={handleSubmit}>...</form>",
    },
    {
      topic: "Fragment",
      name: "React Fragment",
      use: "Extra HTML element add kiye bina multiple elements return karne ke liye.",
      example: "<><h1>Hello</h1><p>React</p></>",
    },
    {
      topic: "React.Fragment",
      name: "Fragment",
      use: "Multiple JSX elements ko ek invisible wrapper mein rakhne ke liye.",
      example: "<React.Fragment><h1>Hello</h1></React.Fragment>",
    },
    {
      topic: "createContext()",
      name: "Create Context",
      use: "Global/shared data ke liye Context create karne ke liye.",
      example: "const UserContext = createContext();",
    },
    {
      topic: "Context.Provider",
      name: "Context Provider",
      use: "Context ka data child components ko provide karne ke liye.",
      example: "<UserContext.Provider value={user}>...</UserContext.Provider>",
    },
    {
      topic: "Lifting State Up",
      name: "Share State",
      use: "Common parent ke through sibling components ke beech data share karne ke liye.",
      example: "Parent state ko child components mein pass karna.",
    },
    {
      topic: "React Router",
      name: "Routing",
      use: "React application mein different pages/routes create karne ke liye.",
      example: "<Route path='/about' element={<About />} />",
    },
    {
      topic: "BrowserRouter",
      name: "Browser Router",
      use: "React application mein browser-based routing enable karne ke liye.",
      example: "<BrowserRouter><App /></BrowserRouter>",
    },
    {
      topic: "Routes",
      name: "Routes Container",
      use: "Application ke different routes ko define karne ke liye.",
      example: "<Routes>...</Routes>",
    },
    {
      topic: "Route",
      name: "Route",
      use: "Specific URL ko specific component se connect karne ke liye.",
      example: "<Route path='/home' element={<Home />} />",
    },
    {
      topic: "Link",
      name: "Navigation Link",
      use: "Page reload kiye bina React route par navigate karne ke liye.",
      example: "<Link to='/about'>About</Link>",
    },
    {
      topic: "useNavigate()",
      name: "Navigate Hook",
      use: "JavaScript code ke through kisi route par navigate karne ke liye.",
      example: "const navigate = useNavigate(); navigate('/home');",
    },
    {
      topic: "useParams()",
      name: "URL Parameters",
      use: "URL se dynamic parameter read karne ke liye.",
      example: "const { id } = useParams();",
    },
    {
      topic: "fetch()",
      name: "API Request",
      use: "API/server se data fetch karne ke liye.",
      example: "fetch('https://api.example.com/users');",
    },
    {
      topic: "async / await",
      name: "Async API Handling",
      use: "Asynchronous API operations ko handle karne ke liye.",
      example: "const data = await fetch(url);",
    },
    {
      topic: "React StrictMode",
      name: "Strict Mode",
      use: "Development mein potential problems identify karne mein help karta hai.",
      example: "<React.StrictMode><App /></React.StrictMode>",
    },
    {
      topic: "React.memo()",
      name: "Component Memoization",
      use: "Unnecessary component re-render ko reduce karne ke liye.",
      example: "export default React.memo(User);",
    },
    {
      topic: "Fragment <>",
      name: "Short Fragment",
      use: "Extra DOM element ke bina multiple JSX elements return karne ke liye.",
      example: "<><h1>Hello</h1><p>World</p></>",
    },
    {
      topic: "npm start",
      name: "Start Development Server",
      use: "React project ka development server start karne ke liye.",
      example: "npm start",
    },
    {
      topic: "npm run build",
      name: "Production Build",
      use: "React application ka production build create karne ke liye.",
      example: "npm run build",
    },
  ];

  return (
    <div className="html-page">
      <div className="html-hero">
        <h1>React Cheatsheet</h1>
        <p>
          Learn important React concepts, hooks, components and routing with
          simple examples.
        </p>
      </div>

      <div className="tags-container">
        {reactTopics.map((item, index) => (
          <div className="tag-card" key={index}>
            <div className="tag-number">#{index + 1}</div>

            <h2>{item.topic}</h2>

            <h3>{item.name}</h3>

            <p>
              <strong>Use:</strong> {item.use}
            </p>

            <div className="example-box">
              <strong>Example:</strong>
              <code>{item.example}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Re;