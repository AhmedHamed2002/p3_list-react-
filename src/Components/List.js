import { useEffect, useRef, useState } from "react";
import '../Css/List.css' ; 
function List() {
    const [items , setItem]  =  useState([])  ; 
    const  input_ref =  useRef() ; 
    
    let handle_input =  () => { 
        const  text  =  input_ref.current.value ; 
        let  newItem =  {text  ,  completed : 0} ; 
        if(input_ref.current.value != "") 
        {
                setItem([...items , newItem])  ;
                input_ref.current.value= ""  ; 
        }
    }

    let  handelDone = (index) => {
        let newItems = [...items];  
        newItems[index].completed ^= 1 ; 
        setItem(newItems) ;  
    }

    let  DeleteItem = (index)  => {
        let newItems  =  [...items];
        newItems.splice(index,1)  ;  
        setItem(newItems) ; 

    }

    return(
        <>
            <div className="box">
                <ul>
                    {
                        items.map(({text , completed} ,  index) => {
                            return(
                                <div className="text">
                                    <li className={completed ? "done" : " "} key={index}  onClick={() => handelDone(index)}>{text}</li>
                                    <span onClick={() => DeleteItem(index)} >x</span>
                                </div>
                            )  ; 
                            } )
                            }
                </ul>
            </div>
            <div className="field">
                <input ref={input_ref} placeholder="Enter your task"></input>
                <button onClick={handle_input}>Add</button>
            </div>
        </>
    )
}

export  default List ; 