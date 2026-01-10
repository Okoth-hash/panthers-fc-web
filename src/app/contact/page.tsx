import PantherLogo from '../../components/PantherLogo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="flex flex-col items-center mb-12 text-center">
          <PantherLogo className="w-24 h-24 mb-4" />
          <h1 className="text-4xl font-black uppercase italic tracking-tighter">Communications</h1>
          <p className="text-[#d4af37] text-xs font-mono tracking-[0.3em] mt-2">DIRECT LINE TO HEADQUARTERS</p>
        </header>

        <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-md">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all" placeholder="Enter name..." />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Inquiry Type</label>
                <select className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all text-gray-400">
                  <option>Scouting / Trials</option>
                  <option>Media Inquiry</option>
                  <option>Sponsorship</option>
                  <option>General Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Your Message</label>
              <textarea rows={5} className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all" placeholder="How can we help the hunt?"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#d4af37] text-black font-black py-5 rounded-xl uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
              Send Transmission
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center border-t border-neutral-800 pt-10">
          <div>
            <h3 className="text-[#d4af37] text-xs font-black uppercase mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Panther Arena, Nairobi</p>
          </div>
          <div>
            <h3 className="text-[#d4af37] text-xs font-black uppercase mb-2">Socials</h3>
            <p className="text-gray-400 text-sm">@PanthersFC_Official</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="text-[10px] font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors">
            ← Exit Communications
          </a>
        </div>
      </div>
    </div>
  );
}