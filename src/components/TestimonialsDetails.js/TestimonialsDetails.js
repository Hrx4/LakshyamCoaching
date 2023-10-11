import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item" style={{margin:"auto"}}>
            <div class="shadow-effect">
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;