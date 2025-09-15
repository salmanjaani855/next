import React,{useState} from 'react'

export default function Form() {

  const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  // 🔹 Sirf apni real access key daalo
  formData.append("access_key", "f88f99bd-c75d-449a-b37f-5f5d06d92c06");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully ✅");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};



  return (
    <div>
  
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> */}
<section className="contact-section">
  <div className="container mx-auto px-4 py-8">
    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
      
    
      <div className="p-8 bg-gray-800 text-white">
        <h2 className="text-2xl text-blue-400 mb-8 relative pb-4">
          Contact Information
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
        </h2>
        
       
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h3 className="text-lg mb-1">Our Location</h3>
            <p className="text-gray-300 leading-relaxed">
              United State
            </p>
          </div>
        </div>
        
       
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h3 className="text-lg mb-1">Phone Numbers</h3>
            <p className="text-gray-300 leading-relaxed">
              <a href="tel:+978589658" className="hover:text-blue-400">+91 748598658</a><br />
              <a href="tel:+748596255" className="hover:text-blue-400">+91 789456123</a>
            </p>
          </div>
        </div>
        
       
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h3 className="text-lg mb-1">Email Address</h3>
            <p className="text-gray-300 leading-relaxed">
              <a href="mailto:kuldeepprajapati2111@gmail.com" className="hover:text-blue-400">john5423@gmail.com</a><br />
             
            </p>
          </div>
        </div>
        
    
        <div className="flex gap-4 mt-8">
          <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-500 transform hover:-translate-y-1">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-pink-500 transform hover:-translate-y-1">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-400 transform hover:-translate-y-1">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-700 transform hover:-translate-y-1">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      
      <div className="p-8">
        <h2 className="text-2xl text-blue-500 mb-8 relative pb-4">
          Send Us a Message
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
        </h2>
  <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // ✅ Added name
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email" // ✅ Added name
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message" // ✅ Added name
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
