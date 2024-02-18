function ContactForm() {
  function stopDefaultReload(e) {
    e.preventDefault();
    const fd = new FormData(e.target);

    // for(const entry of fd.entries()){
    //   console.log(entry)
    // }
    // console.log([...fd.entries()])
    console.table(Object.fromEntries(fd))

  }
  return (
    <form action="" onSubmit={stopDefaultReload}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Your First Name"
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Your Last Name"
      />
      <label htmlFor="yourAge">Your Age</label>
      <input
        type="number"
        name="yourAge"
        id="yourAge"
        placeholder="Enter Your Age Here!"
      />
      <input type="submit" />
    </form>
  );
}

export default ContactForm;
