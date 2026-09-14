import { useState } from 'react';
import TemplatesPage from './TemplatesPage';
import AuthPage from './AuthPage';

type Page = 'templates' | 'auth';

export default function App() {
  const [page, setPage] = useState<Page>('auth');
  const [open, setOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: page === 'auth' ? '#FAF7F2' : '#F4F4F4', fontFamily: "'Inter', sans-serif", position: 'relative' }}>

      {page === 'auth'      && <AuthPage />}
      {page === 'templates' && <TemplatesPage />}

      {/* ── Floating page switcher ── */}
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        {open && (
          <div style={{
            background: '#fff', border: '1px solid #E5DDD1', borderRadius: 10,
            padding: '4px', display: 'flex', flexDirection: 'column', gap: 2,
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
          }}>
            {([['auth', 'Auth Flow'], ['templates', 'Templates']] as [Page, string][]).map(([p, label]) => (
              <button
                key={p}
                onClick={() => { setPage(p); setOpen(false); }}
                style={{
                  padding: '7px 14px', borderRadius: 7, fontSize: 12, fontWeight: 500,
                  fontFamily: 'inherit', cursor: 'pointer', border: 'none', boxShadow: 'none',
                  textAlign: 'left', whiteSpace: 'nowrap',
                  background: page === p ? '#FAF7F2' : 'transparent',
                  color: page === p ? '#E2673D' : '#78716C',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: 32, height: 32, borderRadius: '50%',
            background: '#2B2622', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><circle cx="12" cy="5" r="1.2" fill="#fff"/><circle cx="12" cy="12" r="1.2" fill="#fff"/><circle cx="12" cy="19" r="1.2" fill="#fff"/></>
            }
          </svg>
        </button>
      </div>

    </div>
  );
}
