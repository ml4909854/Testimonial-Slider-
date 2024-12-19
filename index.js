const testimonials = [
    {
      name: "mahesh kumar",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      text: "Quote is a verb and quotation is a noun. Although, the word quote is now commonly used as a noun since language evolves and grows. Think of a quotation as someone else adding their input on a topic within your writing.",
    },
    {
      name: "Ankit charles",
      photo:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      text: "Quote is a verb and quotation is a noun. Although, the word quote is now commonly used as a noun since language evolves and grows. Think of a quotation as someone else adding their input on a topic within your writing.",
    },
    {
      name: "kumar sangakara",
      photo:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
      text: "A quote, also known as a quotation, is a document issued from a business to a customer outlining the price of a sale before the customer has committed to the purchase.",
    },
  ];
  
  const image = document.querySelector("img");
  const text = document.querySelector(".text");
  const name = document.querySelector(".username");
  
  let currentIndex = 0;
  
  function updateTestimonial() {
    // Destructure current testimonial
    const { name: userName, photo, text: userText } = testimonials[currentIndex];
  
    // Update DOM elements
    image.src = photo;
    text.innerText = userText;
    name.innerText = userName;
  
    // Update index
    currentIndex++;
    if (currentIndex >= testimonials.length) {
      currentIndex = 0;
    }
  
    // Set timeout for the next update
    setTimeout(updateTestimonial, 2000);
  }
  
  // Start the testimonial update
  updateTestimonial();
  