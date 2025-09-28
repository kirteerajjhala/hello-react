   
   // neseted 
   
    // <div id="parent">
    //     <div id="child">
    //         <h1> i am inside heading 1 element</h1>
    //     </div>
    // </div>
   
   
   
            let headling  = React.createElement("div" , {id:"parent"}
            ,[
            React.createElement("div" , {id:'child'} , 
            [
            React.createElement("h1" , {id : "heading" }, "i am inside h1 heading ") 
            , React.createElement("h2" ,{} , "i am insdie h2 ")
            ]
            ),

            React.createElement("div" , {id:'child'} ,
            [
            React.createElement("h1" , {id : "heading" }, "i am inside h1 heading ")
            , React.createElement("h2" ,{} , "i am insdie h2 ")

            ]
            )

            ]
            )
    console.log(headling)
  let Root = ReactDOM.createRoot(document.querySelector(".root"))
    Root.render(headling)


