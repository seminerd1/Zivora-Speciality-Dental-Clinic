import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Send, User } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const AppointmentModal = ({
  isOpen,
  onClose,
}) => {
  const { lang } = useLanguage();

  // Form State
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [existingMrn, setExistingMrn] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('');

  // Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingSuccessData, setBookingSuccessData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setBookingSuccessData(null);
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!patientName.trim() || !email.trim()) {
      setErrorMessage(
        lang === 'en'
          ? 'Please fill in all required fields (*): Name and Email.'
          : 'እባክዎ ሁሉንም አስፈላጊ መስኮች (*) ይሙሉ።'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName,
          email,
          phone,
          mrn: existingMrn,
          reasonForVisit,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBookingSuccessData(data);
      } else {
        setErrorMessage(data.error || (lang === 'en' ? 'Failed to schedule appointment. Please check details.' : 'ቀጠሮ ማስያዝ አልተሳካም።'));
      }
    } catch (err) {
      setErrorMessage(lang === 'en' ? 'Server connection error. Please try again.' : 'የአገልጋይ ግንኙነት ስህተት።');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a]/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-white border border-[#bae6fd] max-w-2xl w-full p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(2,132,199,0.2)] relative my-auto my-8 text-[#0f172a]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer rounded-xl bg-[#f0f9ff] border border-[#bae6fd] hover:bg-[#e0f2fe]"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        {!bookingSuccessData && (
          <div className="mb-6 pb-4 border-b border-[#bae6fd] flex items-center gap-3.5">
            <div className="p-3 bg-[#e0f2fe] text-[#0284c7] rounded-2xl border border-[#bae6fd] shadow-sm">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="editorial-serif text-2xl sm:text-3xl font-normal text-[#0f172a]">
                {lang === 'en' ? 'Appointment Form' : 'የሕክምና ቀጠሮ ቅጽ'}
              </h3>
              <p className="text-xs text-[#0284c7] font-semibold mt-0.5">
                Zivora Speciality Dental Clinic • {lang === 'en' ? 'Patient Reservation' : 'የታካሚ ቅድመ መያዣ'}
              </p>
            </div>
          </div>
        )}

        {/* Single Page Direct Form */}
        {!bookingSuccessData ? (
          <form onSubmit={handleBookSubmit} className="space-y-5">
            {errorMessage && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5 rounded-xl shadow-sm">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Patient Information Section */}
            <div className="space-y-3 bg-[#f0f9ff] p-4.5 rounded-2xl border border-[#bae6fd]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7] block flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0284c7]" />
                {lang === 'en' ? 'Patient Information' : 'የታካሚው መረጃ'}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#475569] mb-1">
                    {lang === 'en' ? 'Full Name *' : 'ሙሉ ስም *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'en' ? 'e.g. Abebe Bikila' : 'ለምሳሌ፦ አበበ ቢቂላ'}
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#bae6fd] bg-white text-[#0f172a] text-xs font-semibold rounded-xl focus:border-[#0284c7] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#475569] mb-1">
                    {lang === 'en' ? 'Email Address *' : 'ኢሜይል አድራሻ *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="patient@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#bae6fd] bg-white text-[#0f172a] text-xs font-semibold rounded-xl focus:border-[#0284c7] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#475569] mb-1">
                    {lang === 'en' ? 'Phone Number' : 'ስልክ ቁጥር'}
                  </label>
                  <input
                    type="tel"
                    placeholder="+251 91 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#bae6fd] bg-white text-[#0f172a] text-xs font-semibold rounded-xl focus:border-[#0284c7] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#475569] mb-1">
                    {lang === 'en' ? 'Existing Patient MRN (Optional)' : 'የነበረ የታካሚ መለያ ቁጥር (ካለ)'}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ZIV-1001"
                    value={existingMrn}
                    onChange={(e) => setExistingMrn(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#bae6fd] bg-white text-[#0f172a] text-xs font-semibold rounded-xl focus:border-[#0284c7] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#475569] mb-1">
                  {lang === 'en' ? 'Reason for Visit / Notes' : 'የመጡበት ምክንያት / ተጨማሪ ማስታወሻ'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'e.g. Toothache, routine checkup, consultation' : 'ለምሳሌ፦ የጥርስ ህመም፣ አጠቃላይ ምርመራ'}
                  value={reasonForVisit}
                  onChange={(e) => setReasonForVisit(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#bae6fd] bg-white text-[#0f172a] text-xs font-semibold rounded-xl focus:border-[#0284c7] outline-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#bae6fd]">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-[#475569] hover:text-[#0f172a] cursor-pointer"
              >
                {lang === 'en' ? 'Cancel' : 'ሰርዝ'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-[#0284c7] hover:bg-[#0f172a] disabled:opacity-50 text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2 rounded-xl shadow-lg active:scale-95"
              >
                {isSubmitting
                  ? (lang === 'en' ? 'Submitting Form...' : 'በማስገባት ላይ...')
                  : (lang === 'en' ? 'Submit Appointment' : 'ቀጠሮ ያስይዙ')}
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </form>
        ) : (
          /* Success Confirmation Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center mx-auto border border-[#bae6fd] rounded-2xl shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#0284c7] bg-[#e0f2fe] px-4 py-1.5 rounded-full border border-[#bae6fd]">
                {lang === 'en' ? 'Reservation Confirmed' : 'ቀጠሮ ተይዟል'}
              </span>
              <h3 className="editorial-serif text-3xl text-[#0f172a] mt-3">
                {lang === 'en' ? 'Your Appointment is Scheduled!' : 'ቀጠሮዎ በተሳካ ሁኔታ ተመዝግቧል!'}
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm mt-1.5 max-w-md mx-auto font-light leading-relaxed">
                {lang === 'en'
                  ? 'We have registered your appointment in the Zivora clinical database. A confirmation email has been dispatched.'
                  : 'ቀጠሮዎ በዚቮራ የሕክምና መረጃ ቋት ውስጥ ተመዝግቧል። ማረጋገጫ በኢሜይል ተልኮልዎታል።'}
              </p>
            </div>

            {/* Reference Details Box */}
            <div className="p-5 bg-[#f0f9ff] text-[#0f172a] text-left max-w-md mx-auto space-y-2.5 text-xs border border-[#bae6fd] rounded-2xl shadow-inner">
              <div className="flex justify-between pb-2 border-b border-[#bae6fd]">
                <span className="text-[#475569]">{lang === 'en' ? 'Appointment Code:' : 'የቀጠሮ መለያ ቁጥር:'}</span>
                <span className="font-mono font-bold text-[#0284c7]">{bookingSuccessData.data?.appointmentRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#475569]">{lang === 'en' ? 'Patient MRN:' : 'የታካሚ መለያ:'}</span>
                <span className="font-mono font-bold text-[#0f172a]">{bookingSuccessData.mrn}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#0284c7] hover:bg-[#0f172a] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer rounded-xl shadow-lg"
              >
                {lang === 'en' ? 'Done / Return to Clinic' : 'ተጠናቋል / ወደ ዋናው ገጽ ተመለስ'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};