import { useEffect, useId } from 'react';

function ModalMark({ variant }) {
  if (variant === 'success') {
    return (
      <span className="contact-form-modal__mark contact-form-modal__mark--success" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
          <path
            d="M14 25l7 7 13-14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="contact-form-modal__mark contact-form-modal__mark--error" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
        <path d="M24 16v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="33" r="1.5" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function ContactFormModal({
  open,
  variant = 'success',
  eyebrow,
  title,
  description,
  closeLabel,
  primaryActionLabel,
  onClose,
  secondaryHref,
  secondaryLabel,
}) {
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isSuccess = variant === 'success';

  return (
    <div
      className="contact-form-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
    >
      <button
        type="button"
        className="contact-form-modal__backdrop"
        onClick={onClose}
        aria-label={closeLabel}
      />
      <div className={`contact-form-modal__sheet contact-form-modal__sheet--${variant}`}>
        <p className="contact-form-modal__eyebrow">{eyebrow}</p>
        <ModalMark variant={isSuccess ? 'success' : 'error'} />
        <h3 className="contact-form-modal__title" id={titleId}>
          {title}
        </h3>
        {description && (
          <p className="contact-form-modal__description" id={descId}>
            {description}
          </p>
        )}
        <div className="contact-form-modal__actions">
          <button type="button" className="contact-form-modal__primary" onClick={onClose}>
            {primaryActionLabel}
            <b aria-hidden="true">↗</b>
          </button>
          {secondaryHref && secondaryLabel && (
            <a className="contact-form-modal__secondary" href={secondaryHref}>
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
