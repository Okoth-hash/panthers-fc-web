"use client"
import React, { useState } from "react";
import PantherLogo from "../../components/PantherLogo";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real database setup, this would push to your "Complaints" table
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-16">
          <PantherLogo className="w-12 h-12" />
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Contact HQ</h1>
        </header>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] mb-4">The Front Office</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Whether you are a scout with a lead, a player seeking a trial, or a fan with feedback, 
              our Intelligence Center is always listening.
            </p>
            <div className="space-y-4 text-xs font-mono">
              <p><span className="text-[#d4af37]">HQ:</span> Nairobi, Kenya</p>
              <p><span className="text-[#d4af37]">EMAIL:</span> hq@panthersfc.com</p>
            </div>
          </div>

          <section className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-[#d4af37] text-4xl mb-4"></div>
                <h3 className="font-bold text-xl uppercase mb-2">Message Logged</h3>
                <p className="text-gray-500 text-sm">The Intelligence Center has received your dispatch.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-[10px] uppercase font-bold text-[#d4af37] border-b border-[#d4af37]">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Your Identity</label>
                  <input required type="text" placeholder="Full Name" className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:border-[#d4af37] outline-none text-sm transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Category</label>
                  <select className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:border-[#d4af37] outline-none text-sm text-gray-400">
                    <option>General Feedback</option>
                    <option>Scouting Inquiry</option>
                    <option>Technical Complaint</option>
                    <option>Medical Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Message</label>
                  <textarea required rows={4} placeholder="Type your message..." className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:border-[#d4af37] outline-none text-sm transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all">
                  Send Dispatch
                </button>
              </form>
            )}
          </section>
        </div>
        <a href="/" className="inline-block mt-20 text-[10px] font-bold text-gray-600 hover:text-white transition-colors uppercase tracking-[0.2em]"> Return to Base</a>
      </div>
    </div>
  );
}
