import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    linkedinUsername: "",
    email: "",
    message: "",
  });


  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName) errs.firstName = "First name is required";
    if (!formData.lastName) errs.lastName = "Last name is required";
    if (!formData.company) errs.company = "Company website is required";
    if (!formData.linkedinUsername || /\s/.test(formData.linkedinUsername))
      errs.linkedinUsername = "LinkedIn username is required and must not contain spaces";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Please enter a valid email";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const errs = validate();
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  // ✅ Combine LinkedIn prefix with the username
  const fullLinkedInURL = `https://www.linkedin.com/in/${formData.linkedinUsername}`;

  const finalFormData = {
    ...formData,
    linkedinUsername: fullLinkedInURL, // replace 'linkedinUsername' with full URL
  };

  console.log("Form submitted:", finalFormData);
  setSubmitted(true);
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-gray-400 focus:border-brand-lavender focus:ring-0 transition";

  if (submitted) {
    return (
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Thank you for reaching out!</h2>
        <p className="text-gray-400">
          We'll review your message and reach out as appropriate.
        </p>
      </div>
    );
  }

  return (
    <section className="relative -mt-24 pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <header className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="brand-section-kicker text-brand-lavender">Not into DMs? Fill out the form below.</p>
        </header>

        <form onSubmit={handleSubmit} className="brand-card space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm uppercase tracking-[0.2em] text-brand-lavender">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.firstName && (
                  <p className="text-xs text-brand-pink mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm uppercase tracking-[0.2em] text-brand-lavender">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.lastName && (
                  <p className="text-xs text-brand-pink mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

          <div>
            <label className="brand-section-subhead text-brand-lavender">Company Website</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.company && (
              <p className="text-xs text-brand-pink mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <label className="brand-section-subhead text-brand-lavender">LinkedIn URL</label>
            <div className="flex rounded-lg overflow-hidden border border-white/10 bg-slate-900/60 text-white">
              <span className="flex items-center px-3 text-sm text-gray-300 bg-slate-900/80 border-r border-white/10">
                https://www.linkedin.com/in/
              </span>
              <input
                type="text"
                name="linkedinUsername"
                value={formData.linkedinUsername}
                onChange={handleChange}
                placeholder="your-username"
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none"
              />
            </div>
            {errors.linkedinUsername && (
              <p className="text-xs text-brand-pink mt-1">{errors.linkedinUsername}</p>
            )}
          </div>

          <div>
            <label className="brand-section-subhead text-brand-lavender">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.email && (
              <p className="text-xs text-brand-pink mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="brand-section-subhead text-brand-lavender">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} min-h-[140px]`}
            />
            {errors.message && <p className="text-xs text-brand-pink mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
