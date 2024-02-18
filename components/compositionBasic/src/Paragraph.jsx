/* eslint-disable react/prop-types */
function Paragraph(props){

    return <p>Hello {props.username}, I just got to know you are from {props.country}, We have a special offer for you 🙂, considering you PPP, The offer is {props.offer}% off on the purchase of ${props.itemPrice}. Thank you for visiting us {props.username}. 🙏</p>
}

export default Paragraph;