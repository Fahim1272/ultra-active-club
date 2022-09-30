import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import logo from '../../Images/ashraful.jpg';
import './Cart.css'

const Cart = (props) => {
    const [breakes, setBreakes] = useState('');

    const Toast = () => {
        toast.success('Alhamdulillah What aaaaaaaaa easy assignment')
    }


    useEffect(() => {
        const storedCart = localStorage.getItem("break");
        if (storedCart) {
            setBreakes(JSON.parse(storedCart));
        } else {
            setBreakes("0");
        }
    }, [breakes]);

    const addToBreak = (e) => {
        localStorage.setItem("break", JSON.stringify(e.target.innerText));
        setBreakes(e.target.innerText);
    };

    const { cart } = props;
    console.log(cart);
    let total = 0;
    for (const study of cart) {
        console.log(study);
        total = total + parseInt(study.time);
    }


    return (
        <div className='cart-details'>
            <img src={logo} alt="" />

            <div className='card-info'>
                <h5>Name: Ashraful Hossain</h5>
                <h5>Junior Web Developer</h5>
                <h5>Nationality: Bangladeshi</h5>
            </div>

            <h4 className='text'>Add A Break</h4>
            <div className='card-break'>
                <button onClick={addToBreak}>10s</button>
                <button onClick={addToBreak}>20s</button>
                <button onClick={addToBreak}>30s</button>
                <button onClick={addToBreak}>40s</button>
                <button onClick={addToBreak}>50s</button>

            </div>
            <h3 className='details'>Study Details</h3>
            <div className='timing'>
                <h5>Reading Time: {total}</h5>
            </div>
            <div className='break'>
                <h5>Break Time: {breakes}</h5>
            </div>

            <button className='btn-details' onClick={Toast}>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;