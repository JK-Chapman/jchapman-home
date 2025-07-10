import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-gray-700"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:border-blue-500 resize-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "sent" && <p className="text-green-400 mt-2">Message sent!</p>}
      {status === "error" && <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;