import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PaymentFormPopup.css';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
const BACKEND = process.env.REACT_APP_BACKEND_URL;

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate('/puja/history',{state: {product: 'Payment Successful!'}});
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            return;
        }

        const { data: {clientSecret} } = await axios.post(`${BACKEND}/api/payment/`, {
            amount: 1000, // amount in cents
        });

        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
        });

        if (confirmError) {
            setError(confirmError.message);
        } else {
            setSuccess(true);
        }
    };

    const cardElementOptions = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content w-25">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="card-element">Credit or debit card</label>
                        <CardElement id="card-element" options={cardElementOptions} />
                    </div>
                    <button type="submit" disabled={!stripe} className="btn btn-primary mt-3">Pay</button>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    {success && <div className="alert alert-success mt-3">Payment Successful!</div>}
                </form>
            </div>
        </div>
    );
};

const PaymentFormWrapper = ({onClose}) => (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
);

export default PaymentFormWrapper;