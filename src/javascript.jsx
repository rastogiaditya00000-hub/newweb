import React from "react";
// import "./javascript.css";

const Javascript = () => {
  const javascriptTopics = [
    {
      topic: "let",
      name: "Variable",
      use: "Aisi variable banane ke liye jiski value baad mein change ho sakti hai.",
      example: "let name = 'Aditya';",
    },
    {
      topic: "const",
      name: "Constant Variable",
      use: "Aisi variable banane ke liye jiski value reassign nahi ki ja sakti.",
      example: "const age = 25;",
    },
    {
      topic: "var",
      name: "Variable",
      use: "Variable declare karne ka purana JavaScript method.",
      example: "var city = 'Delhi';",
    },
    {
      topic: "console.log()",
      name: "Console Output",
      use: "Console mein value ya message display karne ke liye.",
      example: "console.log('Hello World');",
    },
    {
      topic: "alert()",
      name: "Alert",
      use: "Browser mein alert message show karne ke liye.",
      example: "alert('Welcome!');",
    },
    {
      topic: "prompt()",
      name: "Prompt",
      use: "User se input lene ke liye.",
      example: "let name = prompt('Enter your name');",
    },
    {
      topic: "typeof",
      name: "Data Type Check",
      use: "Variable ka data type check karne ke liye.",
      example: "typeof name;",
    },
    {
      topic: "if",
      name: "If Statement",
      use: "Condition true hone par code execute karne ke liye.",
      example: "if (age >= 18) { console.log('Adult'); }",
    },
    {
      topic: "else",
      name: "Else Statement",
      use: "If condition false hone par code execute karne ke liye.",
      example: "else { console.log('Minor'); }",
    },
    {
      topic: "else if",
      name: "Multiple Conditions",
      use: "Multiple conditions check karne ke liye.",
      example: "else if (age >= 13) { console.log('Teenager'); }",
    },
    {
      topic: "switch",
      name: "Switch Statement",
      use: "Multiple possible values ko check karne ke liye.",
      example: "switch(day) { case 1: console.log('Monday'); break; }",
    },
    {
      topic: "for",
      name: "For Loop",
      use: "Code ko fixed number of times repeat karne ke liye.",
      example: "for (let i = 0; i < 5; i++) { console.log(i); }",
    },
    {
      topic: "while",
      name: "While Loop",
      use: "Jab tak condition true ho tab tak code repeat karne ke liye.",
      example: "while (i < 5) { console.log(i); i++; }",
    },
    {
      topic: "do...while",
      name: "Do While Loop",
      use: "Code ko kam se kam ek baar execute karke condition check karne ke liye.",
      example: "do { console.log(i); i++; } while (i < 5);",
    },
    {
      topic: "function",
      name: "Function",
      use: "Reusable code block banane ke liye.",
      example: "function greet() { console.log('Hello'); }",
    },
    {
      topic: "return",
      name: "Return",
      use: "Function se value return karne ke liye.",
      example: "function add() { return 10 + 20; }",
    },
    {
      topic: "Arrow Function",
      name: "Arrow Function",
      use: "Function ko short syntax mein likhne ke liye.",
      example: "const add = (a, b) => a + b;",
    },
    {
      topic: "Array",
      name: "Array",
      use: "Multiple values ko ek variable mein store karne ke liye.",
      example: "const fruits = ['Apple', 'Mango', 'Banana'];",
    },
    {
      topic: "push()",
      name: "Add Array Item",
      use: "Array ke end mein new item add karne ke liye.",
      example: "fruits.push('Orange');",
    },
    {
      topic: "pop()",
      name: "Remove Last Item",
      use: "Array ke last item ko remove karne ke liye.",
      example: "fruits.pop();",
    },
    {
      topic: "shift()",
      name: "Remove First Item",
      use: "Array ke first item ko remove karne ke liye.",
      example: "fruits.shift();",
    },
    {
      topic: "unshift()",
      name: "Add First Item",
      use: "Array ke beginning mein item add karne ke liye.",
      example: "fruits.unshift('Grapes');",
    },
    {
      topic: "map()",
      name: "Map Method",
      use: "Array ke har item par operation perform karke new array banane ke liye.",
      example: "const result = numbers.map(num => num * 2);",
    },
    {
      topic: "filter()",
      name: "Filter Method",
      use: "Condition ke according array items filter karne ke liye.",
      example: "const result = numbers.filter(num => num > 10);",
    },
    {
      topic: "find()",
      name: "Find Method",
      use: "Array mein condition match karne wala first item find karne ke liye.",
      example: "const result = numbers.find(num => num > 10);",
    },
    {
      topic: "forEach()",
      name: "For Each",
      use: "Array ke har item par function execute karne ke liye.",
      example: "fruits.forEach(item => console.log(item));",
    },
    {
      topic: "includes()",
      name: "Includes",
      use: "Array mein koi specific value exist karti hai ya nahi check karne ke liye.",
      example: "fruits.includes('Apple');",
    },
    {
      topic: "indexOf()",
      name: "Index Of",
      use: "Array mein kisi item ka index find karne ke liye.",
      example: "fruits.indexOf('Apple');",
    },
    {
      topic: "slice()",
      name: "Slice",
      use: "Array ke selected portion ki copy banane ke liye.",
      example: "fruits.slice(0, 2);",
    },
    {
      topic: "splice()",
      name: "Splice",
      use: "Array mein items add, remove ya replace karne ke liye.",
      example: "fruits.splice(1, 1);",
    },
    {
      topic: "Object",
      name: "Object",
      use: "Key-value pairs mein data store karne ke liye.",
      example: "const user = { name: 'Aditya', age: 25 };",
    },
    {
      topic: "Object.keys()",
      name: "Object Keys",
      use: "Object ki saari keys ko array mein convert karne ke liye.",
      example: "Object.keys(user);",
    },
    {
      topic: "Object.values()",
      name: "Object Values",
      use: "Object ki saari values ko array mein lene ke liye.",
      example: "Object.values(user);",
    },
    {
      topic: "Object.entries()",
      name: "Object Entries",
      use: "Object ki keys aur values ko array mein lene ke liye.",
      example: "Object.entries(user);",
    },
    {
      topic: "String",
      name: "String",
      use: "Text data store karne ke liye.",
      example: "const name = 'Aditya';",
    },
    {
      topic: "Number",
      name: "Number",
      use: "Numeric values store karne ke liye.",
      example: "const age = 25;",
    },
    {
      topic: "Boolean",
      name: "Boolean",
      use: "True ya false value store karne ke liye.",
      example: "const isLogin = true;",
    },
    {
      topic: "Math.random()",
      name: "Random Number",
      use: "Random number generate karne ke liye.",
      example: "Math.random();",
    },
    {
      topic: "Math.floor()",
      name: "Floor",
      use: "Decimal number ko neeche wale integer mein convert karne ke liye.",
      example: "Math.floor(4.8);",
    },
    {
      topic: "Math.ceil()",
      name: "Ceil",
      use: "Decimal number ko upar wale integer mein convert karne ke liye.",
      example: "Math.ceil(4.2);",
    },
    {
      topic: "Math.round()",
      name: "Round",
      use: "Number ko nearest integer mein round karne ke liye.",
      example: "Math.round(4.6);",
    },
    {
      topic: "parseInt()",
      name: "Parse Integer",
      use: "String ko integer number mein convert karne ke liye.",
      example: "parseInt('25');",
    },
    {
      topic: "parseFloat()",
      name: "Parse Float",
      use: "String ko decimal number mein convert karne ke liye.",
      example: "parseFloat('25.50');",
    },
    {
      topic: "toUpperCase()",
      name: "Uppercase",
      use: "String ko uppercase mein convert karne ke liye.",
      example: "name.toUpperCase();",
    },
    {
      topic: "toLowerCase()",
      name: "Lowercase",
      use: "String ko lowercase mein convert karne ke liye.",
      example: "name.toLowerCase();",
    },
    {
      topic: "trim()",
      name: "Trim",
      use: "String ke beginning aur ending ke extra spaces remove karne ke liye.",
      example: "name.trim();",
    },
    {
      topic: "split()",
      name: "Split",
      use: "String ko array mein convert karne ke liye.",
      example: "name.split(' ');",
    },
    {
      topic: "replace()",
      name: "Replace",
      use: "String ke text ko replace karne ke liye.",
      example: "name.replace('Aditya', 'Rahul');",
    },
    {
      topic: "length",
      name: "Length",
      use: "String ya array ki length find karne ke liye.",
      example: "name.length;",
    },
    {
      topic: "document.getElementById()",
      name: "Get Element By ID",
      use: "HTML element ko ID ke through select karne ke liye.",
      example: "document.getElementById('title');",
    },
    {
      topic: "querySelector()",
      name: "Query Selector",
      use: "CSS selector ke through HTML element select karne ke liye.",
      example: "document.querySelector('.box');",
    },
    {
      topic: "querySelectorAll()",
      name: "Query Selector All",
      use: "Multiple matching HTML elements select karne ke liye.",
      example: "document.querySelectorAll('.box');",
    },
    {
      topic: "innerText",
      name: "Change Text",
      use: "HTML element ka visible text change karne ke liye.",
      example: "element.innerText = 'Hello';",
    },
    {
      topic: "innerHTML",
      name: "Change HTML",
      use: "Element ke andar HTML content change karne ke liye.",
      example: "element.innerHTML = '<b>Hello</b>';",
    },
    {
      topic: "style",
      name: "Change CSS",
      use: "JavaScript se HTML element ki CSS change karne ke liye.",
      example: "element.style.color = 'red';",
    },
    {
      topic: "addEventListener()",
      name: "Event Listener",
      use: "HTML element par event handle karne ke liye.",
      example: "button.addEventListener('click', function() {});",
    },
    {
      topic: "onclick",
      name: "Click Event",
      use: "Button ya element par click hone par function run karne ke liye.",
      example: "button.onclick = () => alert('Clicked');",
    },
    {
      topic: "onchange",
      name: "Change Event",
      use: "Input ya select ki value change hone par code run karne ke liye.",
      example: "input.onchange = () => console.log(input.value);",
    },
    {
      topic: "onmouseover",
      name: "Mouse Over Event",
      use: "Mouse element ke upar aane par event run karne ke liye.",
      example: "box.onmouseover = () => console.log('Mouse Over');",
    },
    {
      topic: "setTimeout()",
      name: "Set Timeout",
      use: "Code ko specified time ke baad execute karne ke liye.",
      example: "setTimeout(() => console.log('Hello'), 2000);",
    },
    {
      topic: "setInterval()",
      name: "Set Interval",
      use: "Code ko fixed time interval par repeatedly execute karne ke liye.",
      example: "setInterval(() => console.log('Hello'), 1000);",
    },
    {
      topic: "JSON.stringify()",
      name: "Convert To JSON",
      use: "JavaScript object ko JSON string mein convert karne ke liye.",
      example: "JSON.stringify(user);",
    },
    {
      topic: "JSON.parse()",
      name: "Convert From JSON",
      use: "JSON string ko JavaScript object mein convert karne ke liye.",
      example: "JSON.parse(data);",
    },
    {
      topic: "try...catch",
      name: "Error Handling",
      use: "JavaScript errors ko handle karne ke liye.",
      example: "try { code } catch (error) { console.log(error); }",
    },
    {
      topic: "Promise",
      name: "Promise",
      use: "Asynchronous operation ka result handle karne ke liye.",
      example: "const promise = new Promise((resolve, reject) => {});",
    },
    {
      topic: "async",
      name: "Async Function",
      use: "Asynchronous function create karne ke liye.",
      example: "async function getData() { }",
    },
    {
      topic: "await",
      name: "Await",
      use: "Promise ke result ka wait karne ke liye.",
      example: "const data = await fetch(url);",
    },
    {
      topic: "fetch()",
      name: "Fetch API",
      use: "Server/API se data request karne ke liye.",
      example: "fetch('https://api.example.com/data');",
    },
  ];

  return (
    <div className="html-page">
      <div className="html-hero">
        <h1>JavaScript Cheatsheet</h1>
        <p>
          Learn important JavaScript concepts, methods and functions with
          simple examples.
        </p>
      </div>

      <div className="tags-container">
        {javascriptTopics.map((item, index) => (
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

export default Javascript;