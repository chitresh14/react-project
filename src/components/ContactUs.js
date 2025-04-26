const ContactUs = () => {
  return (
    <div className="text-center mb-2">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Details</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg placeholder-gray-300"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg placeholder-gray-300"
          placeholder="message"
        ></input>
        <button
          className="border border-black p-3 m-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
