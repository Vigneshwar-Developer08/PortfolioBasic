import React, { useState } from 'react';
import { Send, CheckCircle2, Cpu, User, Mail, MessageSquare, Briefcase } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';

export default function Contact({ syntaxTheme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'API Microservices',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  const { developer } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please ensure all fields are filled.");
      return;
    }

    setIsSubmitting(true);
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedResponse(
        `Hi ${formData.name}, your secure inquiry has arrived in ${developer.firstName}'s inbox manager! Regarding: "${formData.category}", a personalized draft estimate has been routed to ${formData.email}. We will coordinate within 1 business day.`
      );
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'API Microservices',
      message: ''
    });
    setSubmittedResponse(null);
    setErrorMessage('');
  };

  const activeFocusClass = 
    syntaxTheme === 'blue' ? 'focus:ring-indigo-600/50 focus:border-indigo-600' : 
    syntaxTheme === 'purple' ? 'focus:ring-purple-600/50 focus:border-purple-600' : 
    'focus:ring-emerald-400/50 focus:border-emerald-500';

  const buttonColorClass = 
    syntaxTheme === 'blue' ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm' : 
    syntaxTheme === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm' : 
    'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm';

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-4xl mx-auto" id="contact">
      <div className="bg-surface rounded-3xl p-6 md:p-10 border border-border relative overflow-hidden shadow-sm">
        
        {/* Glow indicator */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-text mb-4 leading-tight">
            Let's Build <span className={`bg-gradient-to-r ${
              syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : 
              syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 
              'from-emerald-600 to-emerald-800'
            } bg-clip-text text-transparent`}>Together</span>
          </h2>
          <p className="text-sm text-text-secondary font-sans font-semibold leading-relaxed max-w-sm mx-auto">
            Ready to integrate complex architectures or discuss technical roles? Drop a packet!
          </p>
        </div>

        {submittedResponse ? (
          <div className="text-center space-y-6 max-w-md mx-auto py-8">
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-extrabold font-sans text-text">Packet Received Safely!</h3>
            <p className="text-xs text-text-secondary font-sans font-medium leading-relaxed bg-surface-muted p-4 rounded-xl border border-border">
              {submittedResponse}
            </p>
            <button 
              onClick={handleReset}
              className="px-6 py-3 bg-surface-hover border border-border hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 text-xs font-sans font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
            >
              Reset Contact Console
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid sm:grid-cols-2 gap-6">
              
              
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-widest text-slate-700 font-extrabold flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-indigo-600" />
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Vignesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs text-slate-800 font-sans font-semibold focus:outline-none focus:ring-1 ${activeFocusClass} transition-all`}
                />
              </div>

              
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-widest text-slate-700 font-extrabold flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-purple-600" />
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="Vignesh@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs text-slate-800 font-sans font-semibold focus:outline-none focus:ring-1 ${activeFocusClass} transition-all`}
                />
              </div>
            </div>

            {/* Project type select */}
            <div className="space-y-2">
              <label className="text-xs font-sans uppercase tracking-widest text-slate-700 font-extrabold flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5 text-emerald-600" />
                Inquiry Category
              </label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className={`w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs text-slate-700 font-sans font-bold focus:outline-none focus:ring-1 ${activeFocusClass} transition-colors cursor-pointer`}
              >
                <option>API Microservices</option>
                <option>Immersive Front-End Shells</option>
                <option>Full-Stack SaaS Setup</option>
                <option>Full-Time Hirings / Interviews</option>
              </select>
            </div>

            {/* Message payload */}
            <div className="space-y-2">
              <label className="text-xs font-sans uppercase tracking-widest text-slate-700 font-extrabold flex items-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-indigo-600" />
                Message Payload
              </label>
              <textarea 
                required
                rows={5}
                placeholder="Let's build something beautiful..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs text-slate-800 font-sans font-semibold focus:outline-none focus:ring-1 ${activeFocusClass} transition-all resize-none`}
              />
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-sans font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                {errorMessage}
              </div>
            )}

            {/* Submit handle line button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-xs font-sans uppercase font-extrabold tracking-widest transition-all cursor-pointer ${buttonColorClass}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Cpu className="h-4 w-4 animate-spin" />
                  Routing data packets...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Transmission
                </span>
              )}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
