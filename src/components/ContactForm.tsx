"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@asdkjke.info";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message before sending.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Message from ${name} via Vapour Notes`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="rounded-2xl bg-white p-4 text-sm text-ink/70 ring-1 ring-plum/10">
        This form opens your email app with the message pre-filled, addressed
        to {CONTACT_EMAIL}. Nothing is sent from this page directly, so
        please check your email client opens and press send there.
      </p>

      {error && (
        <p role="alert" className="rounded-xl bg-[#F3E1EE] px-4 py-3 text-sm font-semibold text-[#7A2A63]">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-plum">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-plum/20 bg-white px-4 py-2.5 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-plum">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-plum/20 bg-white px-4 py-2.5 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-plum">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-plum/20 bg-white px-4 py-2.5 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-plum px-6 py-3 text-sm font-bold text-lilac shadow-md shadow-plum/30 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
      >
        Open email to send
      </button>
    </form>
  );
}
