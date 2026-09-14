import { useState, useEffect, useRef } from 'react';
import type { ReactNode, KeyboardEvent } from 'react';

// ── Palette ───────────────────────────────────────────────────────────────────
const T600  = '#E2673D'; // terracotta primary
const T700  = '#C9552F'; // hover
const T100  = '#FBE4D9'; // tint
const S50   = '#FAF7F2'; // app bg
const S200  = '#E5DDD1'; // border
const S400  = '#B5A695'; // placeholder
const S600  = '#78716C'; // muted text
const S700  = '#57504A';
const S900  = '#2B2622'; // primary text
const SAGE  = '#7A9471'; // success
const SAGE_T = '#E8EEE4';
const AMBER = '#D9A441';
const ERR   = '#C9564A';
const ERR_T  = '#F5DEDA';
const SERIF = "'Fraunces', serif";
const SANS  = "'Inter', sans-serif";

type Screen = 'login' | 'register' | 'forgot' | 'verify' | 'reset';

// ── Icons ─────────────────────────────────────────────────────────────────────

function IEye() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IEyeOff() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function IEnvelope() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" /><path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function IShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ILock() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function ICheck() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={SAGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IBack() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.251 17.64 11.943 17.64 9.2z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.707a5.41 5.41 0 010-3.414V4.961H.957A9.01 9.01 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" />
    </svg>
  );
}

// ── Shared UI ─────────────────────────────────────────────────────────────────

function Field({
  id, label, type = 'text', value, onChange, placeholder, error, helper, right,
}: {
  id: string; label: string; type?: string;
  value: string; onChange: (v: string) => void;
  placeholder?: string; error?: string; helper?: string; right?: ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      <label htmlFor={id} style={{ display: 'block', fontSize: 12, fontWeight: 500, color: S700, marginBottom: 5, fontFamily: SANS }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          id={id} type={type} value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={{
            width: '100%', height: 44,
            padding: `0 ${right ? 44 : 14}px 0 14px`,
            background: 'transparent',
            border: `1.5px solid ${error ? ERR : focused ? T600 : S200}`,
            borderRadius: 10, fontSize: 14, color: S900,
            fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
            transition: 'border-color 0.15s, background 0.15s',
          }}
        />
        {right && (
          <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
            {right}
          </div>
        )}
      </div>
      {(error || helper) && (
        <p style={{ fontSize: 11, color: error ? ERR : S400, marginTop: 4, lineHeight: 1.4, fontFamily: SANS }}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

function PasswordField({ id, label, value, onChange, placeholder, error, helper }: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; error?: string; helper?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <Field
      id={id} label={label} type={show ? 'text' : 'password'}
      value={value} onChange={onChange}
      placeholder={placeholder} error={error} helper={helper}
      right={
        <button
          type="button" onClick={() => setShow(s => !s)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: S400, padding: 0, display: 'flex' }}
        >
          {show ? <IEyeOff /> : <IEye />}
        </button>
      }
    />
  );
}

function PrimaryBtn({ children, onClick, disabled }: { children: ReactNode; onClick?: () => void; disabled?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: '100%', height: 44,
        background: disabled ? T600 : hov ? T700 : T600,
        color: '#fff',
        opacity: disabled ? 0.4 : 1,
        border: 'none', borderRadius: 10,
        fontSize: 14, fontWeight: 600, fontFamily: SANS,
        cursor: disabled ? 'not-allowed' : 'pointer', boxShadow: 'none',
        transition: 'background 0.12s',
      }}
    >
      {children}
    </button>
  );
}

function GoogleBtn({ onClick }: { onClick?: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: '100%', height: 44,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        background: hov ? S50 : '#fff',
        border: `1.5px solid ${S200}`, borderRadius: 10,
        fontSize: 14, fontWeight: 500, color: S900, fontFamily: SANS,
        cursor: 'pointer', boxShadow: 'none', transition: 'background 0.12s',
      }}
    >
      <GoogleG /> Sign in with Google
    </button>
  );
}

function OrDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
      <div style={{ flex: 1, height: 1, background: S200 }} />
      <span style={{ fontSize: 12, color: S400, whiteSpace: 'nowrap', fontFamily: SANS }}>or continue with</span>
      <div style={{ flex: 1, height: 1, background: S200 }} />
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 13, fontWeight: 500, color: hov ? S900 : S600,
        background: 'transparent', border: `1.5px solid ${hov ? T600 : S200}`, borderRadius: 8,
        padding: '6px 12px 6px 8px', cursor: 'pointer', fontFamily: SANS,
        transition: 'color 0.1s, border-color 0.1s', boxShadow: 'none',
      }}
    >
      <IBack /> Back
    </button>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: 56, height: 56, borderRadius: '50%',
      background: T100, color: T600,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: 20,
    }}>
      {children}
    </div>
  );
}

function FooterLink({ text, linkText, onClick }: { text: string; linkText: string; onClick: () => void }) {
  return (
    <p style={{ textAlign: 'center', fontSize: 13, color: S600, marginTop: 20, fontFamily: SANS }}>
      {text}{' '}
      <button onClick={onClick} style={{ background: 'none', border: 'none', color: T600, fontWeight: 600, cursor: 'pointer', padding: 0, fontFamily: SANS, fontSize: 13 }}>
        {linkText}
      </button>
    </p>
  );
}

function StrengthMeter({ password }: { password: string }) {
  const score = (() => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  })();
  const labels = ['', 'Weak', 'Fair', 'Strong'];
  const colors = ['#E5DDD1', '#F04438', '#F79009', '#17B26A'];
  const textColors = ['', '#F04438', '#F79009', '#17B26A'];
  if (!password) return null;
  return (
    <div style={{ marginTop: 6, marginBottom: 14 }}>
      <div style={{ display: 'flex', gap: 4, marginBottom: 5 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: i <= score ? colors[score] : '#E5DDD1',
            transition: 'background 0.2s',
          }} />
        ))}
      </div>
      <p style={{ fontSize: 11, color: textColors[score] || S600, fontFamily: SANS }}>
        {labels[score]}
      </p>
    </div>
  );
}

// ── Left Panel ────────────────────────────────────────────────────────────────

const QUOTES = {
  auth: {
    text: '"I had my CV ready in 20 minutes. It looked more polished than anything I had made before."',
    name: 'Sofia Mbeki', role: 'Marketing Manager',
  },
  register: {
    text: '"Starting fresh felt overwhelming until I found CraftCV. The first step felt completely effortless."',
    name: 'James Okonkwo', role: 'Software Engineer',
  },
  reset: {
    text: '"Forgot my password on day one. Back in and building again within 30 seconds."',
    name: 'Anya Kowalski', role: 'Product Designer',
  },
};

const PANEL_PHOTOS: Record<'login' | 'register', string> = {
  login:    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=2000&fit=crop&auto=format&q=85',
  register: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1400&h=2000&fit=crop&auto=format&q=85',
};

function LeftPanel({ quoteKey, screen }: { quoteKey: keyof typeof QUOTES; screen: 'login' | 'register' }) {
  const q = QUOTES[quoteKey];
  return (
    <div style={{ width: '100%', height: '100%', padding: '12px 0 12px 12px', boxSizing: 'border-box', background: 'transparent' }}>
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 10, background: '#3A2F28' }}>
      {/* Photo */}
      <img
        src={PANEL_PHOTOS[screen]}
        alt="Professional"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
      {/* Warm overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(33,29,26,0.08) 0%, rgba(33,29,26,0.18) 45%, rgba(33,29,26,0.68) 80%, rgba(33,29,26,0.80) 100%)',
      }} />

      {/* Testimonial */}
      <div style={{ position: 'absolute', bottom: 80, left: 40, right: 40 }}>
        <p style={{
          fontFamily: SERIF, fontSize: 24, fontWeight: 400, lineHeight: 1.45,
          color: '#fff', marginBottom: 20, fontStyle: 'italic',
        }}>
          {q.text}
        </p>
        <p style={{ color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: SANS, lineHeight: 1.2 }}>{q.name}</p>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontFamily: SANS, marginTop: 3 }}>{q.role}</p>
      </div>
    </div>
    </div>
  );
}

// ── Login ─────────────────────────────────────────────────────────────────────

function LoginScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <>
      <h1 style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 600, color: S900, letterSpacing: '-0.5px', marginBottom: 8, lineHeight: 1.15 }}>
        Welcome back.
      </h1>
      <p style={{ fontSize: 14, color: S600, marginBottom: 28, lineHeight: 1.5, fontFamily: SANS }}>
        Enter your email and password to continue.
      </p>

      <Field id="email" label="Email address" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
      <PasswordField id="password" label="Password" value={password} onChange={setPassword} placeholder="Your password" />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, marginTop: 2 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}
            style={{ accentColor: T600, width: 14, height: 14 }} />
          <span style={{ fontSize: 13, color: S700, fontFamily: SANS }}>Remember me</span>
        </label>
        <button onClick={() => onNavigate('forgot')}
          style={{ background: 'none', border: 'none', color: T600, fontSize: 13, fontWeight: 500, cursor: 'pointer', padding: 0, fontFamily: SANS }}>
          Forgot password?
        </button>
      </div>

      <PrimaryBtn>Sign in</PrimaryBtn>
      <OrDivider />
      <GoogleBtn />
      <FooterLink text="Don't have an account?" linkText="Sign up" onClick={() => onNavigate('register')} />
    </>
  );
}

// ── Register ──────────────────────────────────────────────────────────────────

function RegisterScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [agreed, setAgreed]       = useState(false);

  return (
    <>
      <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: S900, letterSpacing: '-0.5px', marginBottom: 8, lineHeight: 1.15 }}>
        Create your account.
      </h1>
      <p style={{ fontSize: 14, color: S600, marginBottom: 24, lineHeight: 1.5, fontFamily: SANS }}>
        Build a CV that opens doors. It takes less than 5 minutes.
      </p>

      <Field id="name" label="Full name" value={name} onChange={setName} placeholder="Alexandra Chen" />
      <Field id="reg-email" label="Email address" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
      <PasswordField id="reg-password" label="Password" value={password} onChange={setPassword} placeholder="Create a password" />
      <StrengthMeter password={password} />
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 9, cursor: 'pointer', marginBottom: 22, marginTop: 4 }}>
        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
          style={{ accentColor: T600, width: 14, height: 14, marginTop: 2, flexShrink: 0 }} />
        <span style={{ fontSize: 13, color: S700, lineHeight: 1.5, fontFamily: SANS }}>
          I agree to the{' '}
          <a href="#" style={{ color: T600, textDecoration: 'none', fontWeight: 500 }}>Terms</a>
          {' '}&amp;{' '}
          <a href="#" style={{ color: T600, textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</a>
        </span>
      </label>

      <PrimaryBtn disabled={!agreed}>Create account</PrimaryBtn>
      <OrDivider />
      <GoogleBtn />
      <FooterLink text="Already have an account?" linkText="Sign in" onClick={() => onNavigate('login')} />
    </>
  );
}

// ── Forgot Password — Email ───────────────────────────────────────────────────

function ForgotScreen({ onNavigate, email, setEmail }: {
  onNavigate: (s: Screen) => void;
  email: string; setEmail: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <IconCircle><IEnvelope /></IconCircle>

      <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: S900, letterSpacing: '-0.4px', marginBottom: 10, lineHeight: 1.2 }}>
        Forgot your password?
      </h1>
      <p style={{ fontSize: 14, color: S600, marginBottom: 28, lineHeight: 1.6, fontFamily: SANS, maxWidth: 320 }}>
        Enter the email linked to your account. We'll send you a code to reset your password.
      </p>

      <div style={{ width: '100%', textAlign: 'left' }}>
        <Field id="forgot-email" label="Email address" type="email" value={email} onChange={setEmail}
          placeholder="you@example.com"
          helper="We'll only use this to send your reset code." />
      </div>

      <div style={{ width: '100%', marginTop: 8 }}>
        <PrimaryBtn onClick={() => email && onNavigate('verify')}>Send code</PrimaryBtn>
      </div>

      <button onClick={() => onNavigate('login')} style={{ background: 'none', border: 'none', color: T600, fontSize: 13, cursor: 'pointer', marginTop: 16, fontFamily: SANS, textDecoration: 'underline', padding: 0 }}>
        Back to login
      </button>
    </div>
  );
}

// ── Verify Code ───────────────────────────────────────────────────────────────

function VerifyScreen({ onNavigate, email }: { onNavigate: (s: Screen) => void; email: string }) {
  const [otp, setOtp]             = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown === 0) { setCanResend(true); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleChange = (idx: number, val: string) => {
    const char = val.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[idx] = char;
    setOtp(next);
    if (char && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKey = (idx: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) refs.current[idx - 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const next = [...otp];
    for (let i = 0; i < digits.length; i++) next[i] = digits[i];
    setOtp(next);
    refs.current[Math.min(digits.length, 5)]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setCountdown(30);
    setCanResend(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: 24 }}>
        <BackBtn onClick={() => onNavigate('forgot')} />
      </div>
      <IconCircle><IShield /></IconCircle>

      <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: S900, letterSpacing: '-0.4px', marginBottom: 10, lineHeight: 1.2 }}>
        Check your email.
      </h1>
      <p style={{ fontSize: 14, color: S600, marginBottom: 28, lineHeight: 1.6, fontFamily: SANS, maxWidth: 320 }}>
        We sent a 6-digit code to{' '}
        <button onClick={() => onNavigate('forgot')} style={{ background: 'none', border: 'none', color: S900, fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: SANS }}>
          {email || 'your email'}
        </button>
        . Enter it below.
      </p>

      {/* OTP inputs */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }} onPaste={handlePaste}>
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={el => { refs.current[i] = el; }}
            type="text" inputMode="numeric" maxLength={1}
            value={digit}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKey(i, e)}
            onFocus={() => setFocusedIdx(i)}
            onBlur={() => setFocusedIdx(null)}
            style={{
              width: 44, height: 52,
              textAlign: 'center', fontSize: 20, fontWeight: 700,
              color: S900, fontFamily: SANS,
              background: 'transparent',
              border: `1.5px solid ${focusedIdx === i ? T600 : digit ? T600 : S200}`,
              borderRadius: 10, outline: 'none',
              transition: 'border-color 0.15s, background 0.15s',
            }}
          />
        ))}
      </div>

      {/* Resend */}
      <p style={{ fontSize: 13, color: S600, marginBottom: 24, fontFamily: SANS }}>
        Didn't receive it?{' '}
        <button onClick={handleResend} style={{
          background: 'none', border: 'none', padding: 0, cursor: canResend ? 'pointer' : 'default',
          color: canResend ? T600 : S400, fontWeight: 500, fontSize: 13, fontFamily: SANS,
        }}>
          {canResend ? 'Resend code' : `Resend in 00:${String(countdown).padStart(2, '0')}`}
        </button>
      </p>

      <div style={{ width: '100%' }}>
        <PrimaryBtn onClick={() => otp.every(d => d) && onNavigate('reset')} disabled={otp.some(d => !d)}>
          Verify code
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── Reset Password ────────────────────────────────────────────────────────────

function ResetScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [password, setPassword]   = useState('');
  const [confirm, setConfirm]     = useState('');
  const [success, setSuccess]     = useState(false);

  if (success) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: 20 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: SAGE_T, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <ICheck />
        </div>
        <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: S900, marginBottom: 10 }}>
          Password updated!
        </h1>
        <p style={{ fontSize: 14, color: S600, lineHeight: 1.6, fontFamily: SANS, maxWidth: 280, marginBottom: 28 }}>
          You're all set. Sign in with your new password to get back to building.
        </p>
        <div style={{ width: '100%' }}>
          <PrimaryBtn onClick={() => onNavigate('login')}>Continue to sign in</PrimaryBtn>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: 24 }}>
        <BackBtn onClick={() => onNavigate('verify')} />
      </div>
      <IconCircle><ILock /></IconCircle>

      <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: S900, letterSpacing: '-0.4px', marginBottom: 10, lineHeight: 1.2 }}>
        Set a new password.
      </h1>
      <p style={{ fontSize: 14, color: S600, marginBottom: 24, lineHeight: 1.6, fontFamily: SANS, maxWidth: 320 }}>
        Choose something strong that you haven't used before.
      </p>

      <div style={{ width: '100%', textAlign: 'left' }}>
        <PasswordField id="new-password" label="New password" value={password} onChange={setPassword} placeholder="Create a new password" />
        <StrengthMeter password={password} />
        <PasswordField id="confirm-password" label="Confirm new password" value={confirm} onChange={setConfirm} placeholder="Repeat your new password"
          error={confirm && confirm !== password ? "Passwords don't match" : undefined} />
      </div>

      <div style={{ width: '100%', marginTop: 8 }}>
        <PrimaryBtn
          disabled={!password || !confirm || password !== confirm}
          onClick={() => password && confirm && password === confirm && setSuccess(true)}
        >
          Reset password
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── Auth Page ─────────────────────────────────────────────────────────────────

export default function AuthPage() {
  const [screen, setScreen] = useState<Screen>('login');
  const [email, setEmail]   = useState('');

  const quoteKey: keyof typeof QUOTES =
    screen === 'register' ? 'register' : 'auth';

  const hasPanel   = screen === 'login' || screen === 'register';
  const isCentered = !hasPanel;

  return (
    <div style={{ display: 'flex', height: '100vh', background: S50, overflow: 'hidden' }}>

      {/* Left panel — full-height photo, login + register only */}
      {hasPanel && (
        <div className="hidden md:block" style={{ width: '60%', flexShrink: 0, height: '100vh' }}>
          <LeftPanel quoteKey={quoteKey} screen={screen as 'login' | 'register'} />
        </div>
      )}

      {/* Right panel */}
      <div style={{
        flex: 1, background: '#fff', overflowY: 'auto',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        justifyContent: isCentered ? 'center' : 'flex-start',
        padding: hasPanel ? '48px 64px 52px' : '48px 32px',
        boxSizing: 'border-box',
      }}>
        {/* Logo — top of right panel */}
        {hasPanel && (
          <div style={{ width: '100%', maxWidth: 400, marginBottom: 40, display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 28, height: 28, background: T600, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 15, letterSpacing: '-0.5px', fontFamily: SANS }}>C</span>
            </div>
            <span style={{ color: S900, fontWeight: 700, fontSize: 15, letterSpacing: '-0.2px', fontFamily: SANS }}>CraftCV</span>
          </div>
        )}
        <div style={{ width: '100%', maxWidth: 400 }}>
          {screen === 'login'    && <LoginScreen    onNavigate={setScreen} />}
          {screen === 'register' && <RegisterScreen onNavigate={setScreen} />}
          {screen === 'forgot'   && <ForgotScreen   onNavigate={setScreen} email={email} setEmail={setEmail} />}
          {screen === 'verify'   && <VerifyScreen   onNavigate={setScreen} email={email} />}
          {screen === 'reset'    && <ResetScreen    onNavigate={setScreen} />}
        </div>
      </div>
    </div>
  );
}
