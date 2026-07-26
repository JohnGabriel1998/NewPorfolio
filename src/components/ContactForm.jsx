import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useI18n } from '../i18n/I18nProvider';
import ContactFormModal from './ContactFormModal';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

const RECIPIENT_EMAIL = 'johncaganda0@gmail.com';

function isEmailJsConfigured() {
  return [PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID].every(
    (value) => typeof value === 'string' && value.length > 0,
  );
}

function isWeb3FormsConfigured() {
  return typeof WEB3FORMS_KEY === 'string' && WEB3FORMS_KEY.length > 0;
}

function isConfigured() {
  return isEmailJsConfigured() || isWeb3FormsConfigured();
}

export default function ContactForm() {
  const { t } = useI18n();
  const f = t.contact.form;
  const m = t.contact.modal;
  const [status, setStatus] = useState('idle');
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (isEmailJsConfigured()) {
      emailjs.init({ publicKey: PUBLIC_KEY });
    }
  }, []);

  const closeModal = () => setModal(null);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const sendViaEmailJs = async (sentAt) => {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
      email: form.email,
      message: form.message,
      to_email: RECIPIENT_EMAIL,
      submitted_at: sentAt,
      name: form.name,
      time: sentAt,
    });
  };

  const sendViaWeb3Forms = async () => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        replyto: form.email,
        subject: `Portfolio inquiry from ${form.name}`,
        message: form.message,
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Request failed');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isConfigured()) {
      setModal({
        variant: 'error',
        eyebrow: m.configEyebrow,
        title: m.configTitle,
        description: f.configError,
        showMail: true,
      });
      return;
    }

    setStatus('sending');

    const sentAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Tokyo',
    });

    try {
      if (isEmailJsConfigured()) {
        await sendViaEmailJs(sentAt);
      } else {
        await sendViaWeb3Forms();
      }
      setForm({ name: '', email: '', message: '' });
      setStatus('idle');
      setModal({
        variant: 'success',
        eyebrow: m.successEyebrow,
        title: m.successTitle,
        description: f.success,
        showMail: false,
      });
    } catch (err) {
      const text =
        err && typeof err === 'object' && 'text' in err
          ? String(err.text)
          : err instanceof Error
            ? err.message
            : String(err);
      console.error('Contact form send failed:', err);
      setStatus('idle');
      setModal({
        variant: 'error',
        eyebrow: m.errorEyebrow,
        title: m.errorTitle,
        description: text || f.error,
        showMail: true,
      });
    }
  };

  return (
    <div className="contact-form-panel">
      <p className="contact-form-panel__lead">{f.lead}</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label className="contact-form__field">
          <span>{f.name}</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update('name')}
            autoComplete="name"
            required
            placeholder={f.namePlaceholder}
            disabled={status === 'sending'}
          />
        </label>

        <label className="contact-form__field">
          <span>{f.email}</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update('email')}
            autoComplete="email"
            required
            placeholder={f.emailPlaceholder}
            disabled={status === 'sending'}
          />
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span>{f.message}</span>
          <textarea
            name="message"
            value={form.message}
            onChange={update('message')}
            required
            rows={5}
            placeholder={f.messagePlaceholder}
            disabled={status === 'sending'}
          />
        </label>

        <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
          <b aria-hidden="true">↗</b>
        </button>
      </form>

      <p className="contact-form-panel__direct">
        {f.directLabel}{' '}
        <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>
      </p>

      <ContactFormModal
        open={Boolean(modal)}
        variant={modal?.variant ?? 'success'}
        eyebrow={modal?.eyebrow ?? ''}
        title={modal?.title ?? ''}
        description={modal?.description ?? ''}
        closeLabel={m.close}
        primaryActionLabel={modal?.variant === 'success' ? m.done : m.tryAgain}
        onClose={closeModal}
        secondaryHref={modal?.showMail ? `mailto:${RECIPIENT_EMAIL}` : undefined}
        secondaryLabel={modal?.showMail ? m.mailDirect : undefined}
      />
    </div>
  );
}
