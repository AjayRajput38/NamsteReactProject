    const parent = React.createElement("div", {id: "parent"}, [
        React.createElement("div", {id: "child"},[
            React.createElement("h1", {id: "abc"}, "Hi this is h1"),
            React.createElement("h2", {id: "bcd"}, "this is h2"),
        ]),
        React.createElement("div", {id: "child"},[
            React.createElement("h1", {id: "abc"}, "Hi this is h1"),
            React.createElement("h2", {id: "bcd"}, "this is h2"),
        ]),
    ]);

    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);