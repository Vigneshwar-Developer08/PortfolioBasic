import React, { useState } from 'react';
import { Send, CheckCircle2, Cpu, User, Mail, MessageSquare, Briefcase } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';

export default function Contact({ syntaxTheme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'API Microservices',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const { developer } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please ensure all fields are filled.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedResponse(`Hi ${formData.name}, your inquiry has arrived in ${developer.firstName}'s inbox. Regarding "${formData.category}", a tailored response is being prepared for ${formData.email}.`);
    }, 1600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', category: 'API Microservices', message: '' });
    setSubmittedResponse(null);
    setErrorMessage('');
  };

  const activeFocusClass = syntaxTheme === 'blue' ? 'focus:ring-indigo-600/50 focus:border-indigo-600' : syntaxTheme === 'purple' ? 'focus:ring-purple-600/50 focus:border-purple-600' : 'focus:ring-emerald-400/50 focus:border-emerald-500';
  const buttonColorClass = syntaxTheme === 'blue' ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm' : syntaxTheme === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm';

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto" id="contact">
      <div className="section-shell rounded-[1.75rem] p-4 sm:p-6 md:p-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center mb-10">
          <div className="section-pill mb-6">Contact</div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-text mb-4 leading-tight">
            Let’s build <span className={`bg-gradient-to-r ${syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 'from-emerald-600 to-emerald-800'} bg-clip-text text-transparent`}>something strong</span>.
          </h2>
          <p className="text-sm text-text-secondary font-sans font-semibold leading-relaxed max-w-xl mx-auto">
            For product work, feature builds, or technical collaboration, I’m happy to talk through the scope and shape of the right solution.
          </p>
        </div>

        {submittedResponse ? (
          <div className="text-center space-y-6 max-w-md mx-auto py-8">
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-extrabold font-sans text-text">Message delivered</h3>
            <p className="text-xs text-text-secondary font-sans font-medium leading-relaxed bg-surface-muted p-4 rounded-xl border border-border">{submittedResponse}</p>
            <button onClick={handleReset} className="px-6 py-3 bg-surface-hover border border-border hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 text-xs font-sans font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-colors">
              Start a new request
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10">
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-text-secondary font-extrabold flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-indigo-600" />
                    Full Name
                  </label>
                  <input type="text" required placeholder="Vignesh" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full bg-surface-muted border border-border rounded-xl px-4 py-3.5 text-xs text-text font-sans font-semibold focus:outline-none focus:ring-1 ${activeFocusClass} transition-all`} />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-text-secondary font-extrabold flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-purple-600" />
                    Business Email
                  </label>
                  <input type="email" required placeholder="hello@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full bg-surface-muted border border-border rounded-xl px-4 py-3.5 text-xs text-text font-sans font-semibold focus:outline-none focus:ring-1 ${activeFocusClass} transition-all`} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-widest text-text-secondary font-extrabold flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-600" />
                  Project Type
                </label>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className={`w-full bg-surface-muted border border-border rounded-xl px-4 py-3.5 text-xs text-text font-sans font-bold focus:outline-none focus:ring-1 ${activeFocusClass} transition-colors cursor-pointer`}>
                  <option>API or SDK Development</option>
                  <option>Immersive Front-End Shells</option>
                  <option>Full-Stack SaaS Setup</option>
                  <option>Product Design / Discovery</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-widest text-text-secondary font-extrabold flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 text-indigo-600" />
                  Project Summary
                </label>
                <textarea required rows={7} placeholder="Provide the scope, timeline, and business goals." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full bg-surface-muted border border-border rounded-xl px-4 py-3.5 text-xs text-text font-sans font-semibold focus:outline-none focus:ring-1 ${activeFocusClass} transition-all resize-none`} />
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-sans font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                  {errorMessage}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl text-xs font-sans uppercase font-extrabold tracking-widest transition-all cursor-pointer ${buttonColorClass}`}>
                {isSubmitting ? <span className="flex items-center justify-center gap-2"><Cpu className="h-4 w-4 animate-spin" />Routing request...</span> : <span className="flex items-center justify-center gap-2"><Send className="h-4 w-4" />Submit Request</span>}
              </button>
            </form>

            <aside className="rounded-[1.5rem] border border-border bg-surface p-8 shadow-sm space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-text-secondary font-bold">Contact details</p>
                <div className="space-y-4 text-sm text-text-secondary">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-text">Email</p>
                      <a href={`mailto:${developer.email}`} className="text-indigo-600 hover:underline text-sm">{developer.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-4 w-4 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-text">Location</p>
                      <p>{developer.contactLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-4 w-4 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-text">Availability</p>
                      <p>Open to product engagements, retainers, and technical leadership.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-surface-muted p-4 text-xs text-text-secondary">
                <p className="font-semibold text-text mb-2">Professional note</p>
                <p>Responses are typically shared within one business day. NDA requests, enterprise integration, and polished delivery are standard.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
