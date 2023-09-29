import { useEffect, useState } from "react";
import { convertToUpperCase } from "../Utils/converToUpperCase";
import { convertToLowerCase } from "../Utils/convertToLowerCase";
import useCounter from '../Background/customHook'

function First({ para, checkThis }) {

    // use State example     ================================================
    // const onChange = () => {
    //     checkThis('true')
    //     return para = false;
    // }
    // return (
    //     <div>
    //         <p>{`${onChange()} 456456456`}</p>
    //     </div>
    // )



    // use Effect example     ================================================
    // const [count, setCount] = useState(0);      //check for dependence of useEffect
    // const [count1, setCount1] = useState(0);    //check for dependence of useEffect
    // useEffect(() => {
    //     console.log('1')
    //     document.title = `Count: ${count + 1}`;
    //     console.log('2')
    //     return () => {
    //         console.log('3')
    //         document.title = `Count: ${count + 1}`;
    //         console.log('4')
    //     };
    // }, [count]);
    // return (
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={() => setCount(count + 1)}>Increment</button>
    //     </div>
    // );



    // Utils example ===============================================
    // const [string1, setString1] = useState('hello, world')
    // const [string2, setString2] = useState('hello, world')
    // const [upperCaseString, setUpperCaseString] = useState('hello, world')
    // const [lowerCaseString, setLowerCaseString] = useState('hello, world')
    // useEffect(() => {
    //     console.log('1.1')
    //     setUpperCaseString(convertToUpperCase(string1));
    //     console.log('1.2')
    //     setLowerCaseString(convertToLowerCase(string2));
    //     console.log('1.3')
    // },[])
    // return (
    //     <div>
    //         {console.log('1')}
    //         <p>{upperCaseString}</p>
    //         {console.log('2')}
    //         <p>{lowerCaseString}</p>
    //         {console.log('3')}
    //     </div>
    // )



    // check Promises =================================================
    // useEffect(() => {
    //     asyncOperation(false)
    //         .then(() => {
    //         })
    //         .catch(() => {
    //         })
    // }, [])
    // function asyncOperation(success) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (success) {
    //                 resolve(para = '');
    //             } else {
    //                 reject();
    //             }
    //         }, 2000);
    //     });
    // }
    // return (
    //     <div>Hello world</div>
    // )

    // custom Hook create ================================== 
    const Counter = () => {
        const { count, increment, decrement } = useCounter();
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        );
    };

    return (
        <div>{Counter()}</div>
    )

}
export default First;
