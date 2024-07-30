import React, {useState} from 'react';
import './Faq.scss';

const faqs = [
    {
        question: "How does this application works for user persepctive?",
        answer: "This app helps you to check the details of users."
    },
    {
        question: "Will there be more details to be added going onwards",
        answer: "Yes, there's the chances of getting more user details to add on the list"
    },
    {
        question: "How this app will be helpful for physical disabled means how can they use it",
        answer: "We have planning to add accessibility once we onboarded more than 100 users"
    }
]

const FAQ = () => {
    const [openIndex , setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
  return (
    <section className='faq'>
        <h2 className='faq__title'>
            Frequently asked questions
        </h2>
        <div className='faq__list'>
            {faqs.map((faq, index) => (
                <div key={index} className='faq__item'>
                    <div className='faq__question' onClick={() => handleClick(index)}>{faq.question}</div>
                    {openIndex === index && <div className='faq__answer'>{faq.answer}</div>}
                </div>
            ))}
        </div>

    </section>
  );
};

export default FAQ;