// a newsletter component that will be used in the footer
import { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your newsletter signup logic here
    // For example, sending the email to your backend
    console.log("Email submitted:", email);
    // Reset the input field
    setEmail("");
  };

  return (
    <div className="mt-3 p-6 rounded-lg shadow-md mx-auto border border-red-300 font-semibold text-center">
      <h2 className="md mx-auto bg-gradient-orange text-transparent bg-clip-text  font-semibold w-fit">
        Subscribe to My Newsletter
      </h2>
      <p className="bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text  font-semibold  text-center">
        Stay up to date with the latest posts.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onInput={handleEmailChange}
              required
              className="w-full py-2 px-3 border border-orange-300 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
          </div>
          <div className="flex-1">
            <button
              type="submit"
              className="mt-3 bg-sky-500 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;
