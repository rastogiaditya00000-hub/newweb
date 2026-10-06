import React from "react";
// import "./html.css";

const Html = () => {
  const htmlTags = [
    {
      tag: "<h1> to <h6>",
      name: "Heading Tags",
      use: "Website ke headings banane ke liye.",
      example: "<h1>Welcome to My Website</h1>",
    },
    {
      tag: "<p>",
      name: "Paragraph",
      use: "Text ya paragraph likhne ke liye.",
      example: "<p>This is a paragraph.</p>",
    },
    {
      tag: "<a>",
      name: "Anchor",
      use: "Link create karne ke liye.",
      example: '<a href="https://google.com">Google</a>',
    },
    {
      tag: "<img>",
      name: "Image",
      use: "Image show karne ke liye.",
      example: '<img src="image.jpg" alt="My Image" />',
    },
    {
      tag: "<ul>",
      name: "Unordered List",
      use: "Bullet point wali list banane ke liye.",
      example: "<ul><li>HTML</li><li>CSS</li></ul>",
    },
    {
      tag: "<ol>",
      name: "Ordered List",
      use: "Number wali list banane ke liye.",
      example: "<ol><li>HTML</li><li>CSS</li></ol>",
    },
    {
      tag: "<li>",
      name: "List Item",
      use: "List ke andar items banane ke liye.",
      example: "<li>JavaScript</li>",
    },
    {
      tag: "<div>",
      name: "Division",
      use: "Website ke sections ya containers banane ke liye.",
      example: "<div>Content Here</div>",
    },
    {
      tag: "<span>",
      name: "Span",
      use: "Inline text ko style ya target karne ke liye.",
      example: "<span>Hello</span>",
    },
    {
      tag: "<br>",
      name: "Line Break",
      use: "New line me jane ke liye.",
      example: "Hello<br />World",
    },
    {
      tag: "<hr>",
      name: "Horizontal Rule",
      use: "Horizontal line create karne ke liye.",
      example: "<hr />",
    },
    {
      tag: "<button>",
      name: "Button",
      use: "Clickable button banane ke liye.",
      example: "<button>Click Me</button>",
    },
    {
      tag: "<form>",
      name: "Form",
      use: "User se data collect karne ke liye.",
      example: "<form>...</form>",
    },
    {
      tag: "<input>",
      name: "Input",
      use: "User input lene ke liye.",
      example: '<input type="text" placeholder="Enter Name" />',
    },
    {
      tag: "<label>",
      name: "Label",
      use: "Input field ka label dene ke liye.",
      example: "<label>Name</label>",
    },
    {
      tag: "<textarea>",
      name: "Textarea",
      use: "Large text input lene ke liye.",
      example: "<textarea></textarea>",
    },
    {
      tag: "<select>",
      name: "Select",
      use: "Dropdown create karne ke liye.",
      example: "<select><option>HTML</option></select>",
    },
    {
      tag: "<table>",
      name: "Table",
      use: "Tabular data show karne ke liye.",
      example: "<table>...</table>",
    },
    {
      tag: "<tr>",
      name: "Table Row",
      use: "Table ki row banane ke liye.",
      example: "<tr>...</tr>",
    },
    {
      tag: "<td>",
      name: "Table Data",
      use: "Table ka data cell banane ke liye.",
      example: "<td>HTML</td>",
    },
    {
      tag: "<th>",
      name: "Table Header",
      use: "Table heading ke liye.",
      example: "<th>Course</th>",
    },
    {
      tag: "<header>",
      name: "Header",
      use: "Website ke top section ke liye.",
      example: "<header>My Website</header>",
    },
    {
      tag: "<nav>",
      name: "Navigation",
      use: "Navigation links ke liye.",
      example: "<nav><a href="/">Home</a></nav>",
    },
    {
      tag: "<section>",
      name: "Section",
      use: "Website ke different sections ke liye.",
      example: "<section>About Us</section>",
    },
    {
      tag: "<article>",
      name: "Article",
      use: "Independent content/article ke liye.",
      example: "<article>News Content</article>",
    },
    {
      tag: "<footer>",
      name: "Footer",
      use: "Website ke bottom section ke liye.",
      example: "<footer>Copyright 2026</footer>",
    },
  ];

  return (
    <div className="html-page">
      <div className="html-hero">
        <h1>HTML Tags</h1>
        <p>Learn important HTML tags with simple examples.</p>
      </div>

      <div className="tags-container">
        {htmlTags.map((item, index) => (
          <div className="tag-card" key={index}>
            <div className="tag-number">#{index + 1}</div>

            <h2>{item.tag}</h2>

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

export default Html;