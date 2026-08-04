import { useI18n } from '../i18n/I18nProvider';

export default function ResumeLink({ className = 'resume-link' }) {
  const { t } = useI18n();
  const r = t.resume;

  return (
    <a
      className={`site-cta site-cta--ink ${className}`.trim()}
      href={r.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={r.ariaLabel}
    >
      {r.label} <b>↗</b>
    </a>
  );
}
