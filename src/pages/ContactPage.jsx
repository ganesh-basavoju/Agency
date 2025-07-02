
const ContactPage = () => {
  return (
    <div className="bg-black -mt-20 text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-lg shadow-lg mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" className="p-3 rounded bg-gray-800 w-full" required />
            <input type="text" placeholder="Company *" className="p-3 rounded bg-gray-800 w-full" required />
            <input type="email" placeholder="Work Email *" className="p-3 rounded bg-gray-800 w-full" required />
            <input type="text" placeholder="Phone Number *" className="p-3 rounded bg-gray-800 w-full" required />
            <select className="p-3 rounded bg-gray-800 w-full" required>
              <option value="" disabled selected>
                What are you looking for? *
              </option>
              <option>E-Commerce / Web Development</option>
              <option>Digital Marketing</option>
              <option>ADA Compliance</option>
              <option>UI / UX Design</option>
              <option>Apps</option>
              <option>Partnership</option>
            </select>
            <input type="text" placeholder="How did you hear about us? *" className="p-3 rounded bg-gray-800 w-full" required />
            <select className="p-3 rounded bg-gray-800 w-full" required>
              <option value="" disabled selected>
                Select Budget
              </option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000 - $20,000</option>
              <option>$20,000+</option>
            </select>
          </div>
          <textarea placeholder="Description" className="p-3 mt-4 rounded bg-gray-800 w-full"></textarea>
          <div className="mt-4">
            <input type="file" className="p-3 bg-gray-800 rounded w-full" />
          </div>
          <div className="mt-6 flex items-center">
            <input type="checkbox" id="captcha" className="mr-2" required />
            <label htmlFor="captcha" className="text-gray-400">I am agreeing to share i</label>
          </div>
          <button className="mt-6 w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
