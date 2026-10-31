import React, { useState } from 'react';
import { 
  portfolioData, 
  buildWhatsAppUrl, 
  type ContactChannel 
} from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

interface ContactRowProps {
  channel: ContactChannel;
  isCopied: boolean;
  onCopy: (value: string, channelId: string, label: string) => void;
  isProfile?: boolean;
}

/**
 * ONE row component renders all five channels from contact.channels
 * Row grid: [72px label | 24ch value | auto actions], padding 12px 0, 1px --band-rule between rows, baseline-aligned.
 * In Profiles: auto-width column, min 16ch.
 */
const ContactRow: React.FC<ContactRowProps> = ({ 
  channel, 
  isCopied, 
  onCopy, 
  isProfile = false 
}) => {
  const renderActions = () => {
    if (channel.kind === 'phone') {
      return (
        <>
          <a
            href={`tel:${channel.tel || channel.display.replace(/\s+/g, '')}`}
            aria-label={`Call ${channel.label}`}
            className="band-link min-h-[44px] inline-flex items-center font-sans text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            Call
          </a>
          <a
            href={buildWhatsAppUrl(channel.tel || channel.display, portfolioData.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${channel.label}`}
            className="band-link min-h-[44px] inline-flex items-center font-sans text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => onCopy(channel.display, channel.id, channel.label)}
            aria-label={isCopied ? `${channel.label} copied` : `Copy ${channel.label}`}
            className="band-link min-h-[44px] inline-flex items-center font-sans text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </>
      );
    }

    if (channel.kind === 'email') {
      return (
        <>
          <a
            href={`mailto:${channel.display}`}
            aria-label="Write email"
            className="band-link min-h-[44px] inline-flex items-center font-sans text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            Write
          </a>
          <button
            type="button"
            onClick={() => onCopy(channel.display, channel.id, channel.label)}
            aria-label={isCopied ? "Email address copied" : "Copy email address"}
            className="band-link min-h-[44px] inline-flex items-center font-sans text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </>
      );
    }

    if (channel.kind === 'social') {
      return (
        <a
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${channel.label} (${channel.display})`}
          className="band-link min-h-[44px] inline-flex items-center gap-1 font-sans text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded cursor-pointer"
        >
          <span>Visit</span>
          <svg
            className="w-3 h-3 inline-block shrink-0"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
          </svg>
        </a>
      );
    }

    return null;
  };

  return (
    <div className="py-[12px]">
      <div 
        className={`grid grid-cols-1 ${
          isProfile 
            ? 'sm:grid-cols-[72px_minmax(16ch,auto)_auto]' 
            : 'sm:grid-cols-[72px_24ch_auto]'
        } sm:items-baseline sm:gap-x-4 gap-y-1 sm:gap-y-0`}
      >
        {/* Label: sans 14px/500 --band-muted */}
        <dt className="font-sans text-[14px] font-medium text-[var(--band-muted)] shrink-0">
          {channel.label}
        </dt>

        {/* Value: mono 16px/500 --band-ink, tabular-nums */}
        <dd className="font-mono text-[16px] font-medium text-[var(--band-ink)] tabular-nums text-left">
          {channel.display}
        </dd>

        {/* Actions: sans 14px/600 secondary links with 2px --accent underline */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-[16px] shrink-0">
          {renderActions()}
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrorMessage, setFormErrorMessage] = useState('');

  const directChannels = portfolioData.contact.channels.filter(
    (c) => c.kind === 'phone' || c.kind === 'email'
  );

  const profileChannels = portfolioData.contact.channels.filter(
    (c) => c.kind === 'social'
  );

  const handleCopy = (value: string, channelId: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(channelId);
    setLiveAnnouncement(`${label} copied to clipboard`);
    setTimeout(() => {
      setCopiedId((current) => (current === channelId ? null : current));
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setFormErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setFormStatus('submitting');
    setFormErrorMessage('');

    try {
      const endpoint = `https://formspree.io/f/${portfolioData.contact.formspreeId}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Website Inquiry from Portfolio',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        setFormStatus('error');
        setFormErrorMessage(
          errorData?.error || 'Something went wrong while sending your message. Please reach out directly via email or phone.'
        );
      }
    } catch {
      setFormStatus('error');
      setFormErrorMessage('Network error. Please try again or use direct email.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[var(--band)] text-[var(--band-ink)] py-[clamp(48px,7vw,72px)] overflow-hidden">
      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Polite Live Region for Screen Readers */}
        <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {liveAnnouncement}
        </div>

        {/* Heading + intro on top (left-aligned, max-width 560px) */}
        <SectionHeader
          index="05"
          label="Contact"
          title="GET IN TOUCH"
          subtitle="Available for interviews, site audits, and entry-level IT positions."
          onBand={true}
          className="max-w-[560px]"
        />

        {/* Directory Grid at >=900px: 7fr 5fr, gap 48px; stacked below 900px */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[7fr_5fr] gap-8 min-[900px]:gap-[48px] mt-[24px] items-start">
          
          {/* Left group "Direct": MTN, Telecel, Email */}
          <div>
            <h3 className="font-sans text-[13px] font-semibold text-[var(--band-muted)] pb-2 border-b border-[var(--band-rule)]">
              Direct
            </h3>
            <dl className="divide-y divide-[var(--band-rule)]">
              {directChannels.map((channel) => (
                <ContactRow
                  key={channel.id}
                  channel={channel}
                  isCopied={copiedId === channel.id}
                  onCopy={handleCopy}
                />
              ))}
            </dl>
          </div>

          {/* Right group "Profiles": LinkedIn, X */}
          <div>
            <h3 className="font-sans text-[13px] font-semibold text-[var(--band-muted)] pb-2 border-b border-[var(--band-rule)]">
              Profiles
            </h3>
            <dl className="divide-y divide-[var(--band-rule)]">
              {profileChannels.map((channel) => (
                <ContactRow
                  key={channel.id}
                  channel={channel}
                  isCopied={copiedId === channel.id}
                  onCopy={handleCopy}
                  isProfile={true}
                />
              ))}
            </dl>
          </div>

        </div>

        {/* Message Inquiry Form: transparent panel with 1px --band-rule border and --band-ink text */}
        <div className="mt-12 pt-8 border-t border-[var(--band-rule)]">
          <div className="max-w-[640px]">
            <h3 className="font-sans text-[18px] font-semibold text-[var(--band-ink)] leading-snug">
              Leave a message
            </h3>
            <p className="font-sans text-[14.5px] sm:text-[15px] text-[var(--band-muted)] mt-1.5 leading-relaxed">
              Have an IT support opportunity or technical question? Send a message directly below.
            </p>

            {formStatus === 'success' ? (
              <div className="mt-6 p-4 rounded-[8px] border border-[var(--band-rule)] bg-transparent text-[var(--band-ink)] font-sans">
                <p className="font-semibold text-[15px]">Message sent successfully</p>
                <p className="text-[14px] text-[var(--band-muted)] mt-1">
                  Thank you for reaching out. I will review your message and reply as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="band-link mt-3 font-sans text-[14px] font-semibold cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block font-sans text-[13px] font-medium text-[var(--band-muted)] mb-1"
                    >
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Samuel Mensah"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[var(--band-rule)] bg-[var(--surface)] text-[var(--band-ink)] text-[14px] placeholder:text-[var(--band-muted)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block font-sans text-[13px] font-medium text-[var(--band-muted)] mb-1"
                    >
                      Email Address <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. samuel@example.com"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[var(--band-rule)] bg-[var(--surface)] text-[var(--band-ink)] text-[14px] placeholder:text-[var(--band-muted)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block font-sans text-[13px] font-medium text-[var(--band-muted)] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Job Opportunity / IT Support Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-[var(--band-rule)] bg-[var(--surface)] text-[var(--band-ink)] text-[14px] placeholder:text-[var(--band-muted)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block font-sans text-[13px] font-medium text-[var(--band-muted)] mb-1"
                  >
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message, project scope, or opportunity details here..."
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-[var(--band-rule)] bg-[var(--surface)] text-[var(--band-ink)] text-[14px] placeholder:text-[var(--band-muted)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 transition-colors resize-y"
                  />
                </div>

                {/* Error Banner */}
                {formStatus === 'error' && (
                  <p className="text-[13px] text-[var(--accent)] font-medium">
                    {formErrorMessage}
                  </p>
                )}

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="h-[40px] px-5 inline-flex items-center justify-center rounded-[8px] bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)] font-sans text-[14px] font-semibold transition-colors disabled:opacity-60 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
