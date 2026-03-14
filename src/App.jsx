import { useState, useEffect } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    gcash: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdult: false,
  });

  useEffect(() => {
    // Get IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        console.log('IP Address:', data.ip);
        // Get location based on IP
        return fetch(`https://ipapi.co/${data.ip}/json/`);
      })
      .then(response => response.json())
      .then(locationData => {
        console.log('Location:', {
          city: locationData.city,
          region: locationData.region,
          country: locationData.country_name,
          latitude: locationData.latitude,
          longitude: locationData.longitude
        });
      })
      .catch(error => console.error('Error fetching IP or location:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!form.isAdult) {
      alert("You must be 18 years old or above.");
      return;
    }

    console.log("Form submitted:", form);
    alert("Registration successful!");
  };

  return (
    <>
      <div className="bg-[url(/Background_Image.png)] bg-cover bg-center min-h-screen w-screen p-4 md:p-0 m-0">
        <div className="min-h-screen flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-5 rounded-xl shadow-lg w-full max-w-md bg-black bg-opacity-75 text-white"
          >
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-casino font-bold
            bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
            tracking-widest">
              BIGWIN29
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-center">Register</p>
            <p className="text-center pb-3"><span className="text-orange-500 text-lg md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">🎉 Welcome Bonus!</span> Be a first-time user and receive ₱100 FREE when you register.</p>
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded bg-black"
            />

            {/* Surname */}
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              required
              value={form.surname}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded bg-black"
            />

            {/* GCash Number */}
            <input
              type="tel"
              name="gcash"
              placeholder="GCash Number"
              required
              pattern="[0-9]{11}"
              value={form.gcash}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded bg-black"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded bg-black"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password (min 8 characters)"
              required
              minLength={8}
              value={form.password}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded bg-black"
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              minLength={8}
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded bg-black"
            />

            {/* Age Checkbox */}
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                name="isAdult"
                checked={form.isAdult}
                onChange={handleChange}
                className="mr-2"
              />
              I confirm that I am 18 years old or above
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App