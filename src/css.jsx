import React from "react";
// import "./css.css";

const Css = () => {
  const cssProperties = [
    {
      property: "color",
      name: "Text Color",
      use: "Text ka color change karne ke liye.",
      example: "color: red;",
    },
    {
      property: "background-color",
      name: "Background Color",
      use: "Element ka background color change karne ke liye.",
      example: "background-color: blue;",
    },
    {
      property: "font-size",
      name: "Font Size",
      use: "Text ka size change karne ke liye.",
      example: "font-size: 20px;",
    },
    {
      property: "font-family",
      name: "Font Family",
      use: "Text ke liye font family set karne ke liye.",
      example: "font-family: Arial, sans-serif;",
    },
    {
      property: "font-weight",
      name: "Font Weight",
      use: "Text ko normal, bold ya different thickness dene ke liye.",
      example: "font-weight: bold;",
    },
    {
      property: "font-style",
      name: "Font Style",
      use: "Text ko normal, italic ya oblique banane ke liye.",
      example: "font-style: italic;",
    },
    {
      property: "text-align",
      name: "Text Alignment",
      use: "Text ko left, center, right ya justify karne ke liye.",
      example: "text-align: center;",
    },
    {
      property: "text-decoration",
      name: "Text Decoration",
      use: "Text par underline, overline ya line-through lagane ke liye.",
      example: "text-decoration: underline;",
    },
    {
      property: "text-transform",
      name: "Text Transform",
      use: "Text ko uppercase, lowercase ya capitalize karne ke liye.",
      example: "text-transform: uppercase;",
    },
    {
      property: "line-height",
      name: "Line Height",
      use: "Text ki lines ke beech spacing set karne ke liye.",
      example: "line-height: 1.5;",
    },
    {
      property: "letter-spacing",
      name: "Letter Spacing",
      use: "Letters ke beech space set karne ke liye.",
      example: "letter-spacing: 2px;",
    },
    {
      property: "word-spacing",
      name: "Word Spacing",
      use: "Words ke beech spacing set karne ke liye.",
      example: "word-spacing: 5px;",
    },
    {
      property: "width",
      name: "Width",
      use: "Element ki width set karne ke liye.",
      example: "width: 300px;",
    },
    {
      property: "height",
      name: "Height",
      use: "Element ki height set karne ke liye.",
      example: "height: 200px;",
    },
    {
      property: "min-width",
      name: "Minimum Width",
      use: "Element ki minimum width set karne ke liye.",
      example: "min-width: 200px;",
    },
    {
      property: "max-width",
      name: "Maximum Width",
      use: "Element ki maximum width set karne ke liye.",
      example: "max-width: 1200px;",
    },
    {
      property: "min-height",
      name: "Minimum Height",
      use: "Element ki minimum height set karne ke liye.",
      example: "min-height: 300px;",
    },
    {
      property: "max-height",
      name: "Maximum Height",
      use: "Element ki maximum height set karne ke liye.",
      example: "max-height: 500px;",
    },
    {
      property: "margin",
      name: "Margin",
      use: "Element ke bahar spacing dene ke liye.",
      example: "margin: 20px;",
    },
    {
      property: "padding",
      name: "Padding",
      use: "Element ke andar spacing dene ke liye.",
      example: "padding: 20px;",
    },
    {
      property: "margin-top",
      name: "Top Margin",
      use: "Element ke top par space dene ke liye.",
      example: "margin-top: 20px;",
    },
    {
      property: "margin-right",
      name: "Right Margin",
      use: "Element ke right side par space dene ke liye.",
      example: "margin-right: 20px;",
    },
    {
      property: "margin-bottom",
      name: "Bottom Margin",
      use: "Element ke bottom par space dene ke liye.",
      example: "margin-bottom: 20px;",
    },
    {
      property: "margin-left",
      name: "Left Margin",
      use: "Element ke left side par space dene ke liye.",
      example: "margin-left: 20px;",
    },
    {
      property: "border",
      name: "Border",
      use: "Element ke around border lagane ke liye.",
      example: "border: 1px solid black;",
    },
    {
      property: "border-radius",
      name: "Border Radius",
      use: "Element ke corners ko round karne ke liye.",
      example: "border-radius: 10px;",
    },
    {
      property: "box-shadow",
      name: "Box Shadow",
      use: "Element ke around shadow lagane ke liye.",
      example: "box-shadow: 0 4px 10px rgba(0,0,0,0.2);",
    },
    {
      property: "opacity",
      name: "Opacity",
      use: "Element ki transparency set karne ke liye.",
      example: "opacity: 0.5;",
    },
    {
      property: "display",
      name: "Display",
      use: "Element ka display behavior set karne ke liye.",
      example: "display: block;",
    },
    {
      property: "display: flex",
      name: "Flexbox",
      use: "Elements ko flexible layout mein arrange karne ke liye.",
      example: "display: flex;",
    },
    {
      property: "justify-content",
      name: "Justify Content",
      use: "Flex items ko horizontal/main axis par align karne ke liye.",
      example: "justify-content: center;",
    },
    {
      property: "align-items",
      name: "Align Items",
      use: "Flex items ko cross axis par align karne ke liye.",
      example: "align-items: center;",
    },
    {
      property: "flex-direction",
      name: "Flex Direction",
      use: "Flex items ki direction set karne ke liye.",
      example: "flex-direction: column;",
    },
    {
      property: "flex-wrap",
      name: "Flex Wrap",
      use: "Flex items ko next line mein wrap karne ke liye.",
      example: "flex-wrap: wrap;",
    },
    {
      property: "gap",
      name: "Gap",
      use: "Flex ya Grid items ke beech spacing dene ke liye.",
      example: "gap: 20px;",
    },
    {
      property: "position",
      name: "Position",
      use: "Element ki positioning control karne ke liye.",
      example: "position: relative;",
    },
    {
      property: "top",
      name: "Top",
      use: "Positioned element ko top se move karne ke liye.",
      example: "top: 20px;",
    },
    {
      property: "right",
      name: "Right",
      use: "Positioned element ko right se move karne ke liye.",
      example: "right: 20px;",
    },
    {
      property: "bottom",
      name: "Bottom",
      use: "Positioned element ko bottom se move karne ke liye.",
      example: "bottom: 20px;",
    },
    {
      property: "left",
      name: "Left",
      use: "Positioned element ko left se move karne ke liye.",
      example: "left: 20px;",
    },
    {
      property: "z-index",
      name: "Z Index",
      use: "Overlapping elements ki layer order set karne ke liye.",
      example: "z-index: 10;",
    },
    {
      property: "overflow",
      name: "Overflow",
      use: "Element ke bahar nikle content ko control karne ke liye.",
      example: "overflow: hidden;",
    },
    {
      property: "cursor",
      name: "Cursor",
      use: "Mouse cursor ka style change karne ke liye.",
      example: "cursor: pointer;",
    },
    {
      property: "visibility",
      name: "Visibility",
      use: "Element ko visible ya hidden karne ke liye.",
      example: "visibility: hidden;",
    },
    {
      property: "float",
      name: "Float",
      use: "Element ko left ya right side float karne ke liye.",
      example: "float: left;",
    },
    {
      property: "clear",
      name: "Clear",
      use: "Float elements ke effect ko clear karne ke liye.",
      example: "clear: both;",
    },
    {
      property: "grid-template-columns",
      name: "Grid Columns",
      use: "CSS Grid mein columns define karne ke liye.",
      example: "grid-template-columns: repeat(3, 1fr);",
    },
    {
      property: "grid-template-rows",
      name: "Grid Rows",
      use: "CSS Grid mein rows define karne ke liye.",
      example: "grid-template-rows: 100px 200px;",
    },
    {
      property: "background-image",
      name: "Background Image",
      use: "Element ke background mein image lagane ke liye.",
      example: "background-image: url('image.jpg');",
    },
    {
      property: "background-size",
      name: "Background Size",
      use: "Background image ka size control karne ke liye.",
      example: "background-size: cover;",
    },
    {
      property: "background-position",
      name: "Background Position",
      use: "Background image ki position set karne ke liye.",
      example: "background-position: center;",
    },
    {
      property: "transition",
      name: "Transition",
      use: "CSS property changes ko smooth banane ke liye.",
      example: "transition: all 0.3s ease;",
    },
    {
      property: "transform",
      name: "Transform",
      use: "Element ko rotate, scale, move ya skew karne ke liye.",
      example: "transform: scale(1.1);",
    },
    {
      property: "animation",
      name: "Animation",
      use: "Element par CSS animation apply karne ke liye.",
      example: "animation: slide 2s ease;",
    },
    {
      property: "list-style",
      name: "List Style",
      use: "List ke bullets ya numbering ka style change karne ke liye.",
      example: "list-style: none;",
    },
    {
      property: "white-space",
      name: "White Space",
      use: "Text ke spaces aur wrapping ko control karne ke liye.",
      example: "white-space: nowrap;",
    },
    {
      property: "vertical-align",
      name: "Vertical Align",
      use: "Inline ya table elements ko vertically align karne ke liye.",
      example: "vertical-align: middle;",
    },
    {
      property: "object-fit",
      name: "Object Fit",
      use: "Image ya video ko container ke andar fit karne ke liye.",
      example: "object-fit: cover;",
    },
  ];

  return (
    <div className="html-page">
      <div className="html-hero">
        <h1>CSS Properties</h1>
        <p>Learn important CSS properties with simple examples.</p>
      </div>

      <div className="tags-container">
        {cssProperties.map((item, index) => (
          <div className="tag-card" key={index}>
            <div className="tag-number">#{index + 1}</div>

            <h2>{item.property}</h2>

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

export default Css;