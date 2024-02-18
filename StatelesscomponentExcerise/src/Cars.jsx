export default function Cars() {
  const cars = ["Tesla", "Tata", "Mandira", "Honda", "Ferrari"];
  // eslint-disable-next-line react/jsx-key
  const carPTags = cars.map((car)=> (<p>{car}</p>))
  return (<>{carPTags}</>);
}
