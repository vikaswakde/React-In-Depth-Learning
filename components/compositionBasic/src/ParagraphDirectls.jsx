/* eslint-disable react/prop-types */
function ParagraphDirect({username, country, offer, itemPrice}) {
    return <p>Hello {username}! 🙂 <br /> 
    We Noticed you are from {country}. <br />
    We are happy that you are here, We got you an offer, {offer}% <br />
    If you buy the course for ${itemPrice}, <br />
    <strong>Thank you for visiting us! 🙏 </strong>
    </p>
}

export default ParagraphDirect;