import { useState } from 'react';
import type { CSSProperties } from 'react';

const TOOLBAR_H = 52;

const CATEGORIES = [
  { id: 'all',          label: 'All',          info: null },
  { id: 'professional', label: 'Professional',  info: 'Polished, structured layouts for corporate, finance, law, and traditional industries. Built for roles where convention signals credibility.' },
  { id: 'simple',       label: 'Simple',        info: 'Clean, minimal designs with generous whitespace. Your content does the talking — nothing competes with it.' },
  { id: 'modern',       label: 'Modern',        info: 'Two-column and grid-based layouts built for tech, product, and startup roles. Structured without being rigid.' },
  { id: 'creative',     label: 'Creative',      info: 'Expressive layouts for design, media, and creative industries. Hierarchy comes from composition, not just convention.' },
  { id: 'academic',     label: 'Academic',      info: 'Comprehensive formats for scholarships, research grants, fellowships, and faculty positions. Precision over personality.' },
  { id: 'executive',    label: 'Executive',     info: 'Space-efficient layouts for C-suite, VP, and director-level candidates. Authority through restraint, not decoration.' },
];

const TEMPLATES = [
  { id: 1,  name: 'ATLANTIC',  category: 'professional', layout: 'sidebar'  },
  { id: 2,  name: 'CRESTLINE', category: 'simple',       layout: 'single'   },
  { id: 3,  name: 'MERIDIAN',  category: 'modern',       layout: 'sidebar'  },
  { id: 4,  name: 'NOVA',      category: 'creative',     layout: 'header'   },
  { id: 5,  name: 'GROVE',     category: 'academic',     layout: 'single'   },
  { id: 6,  name: 'SUMMIT',    category: 'executive',    layout: 'sidebar'  },
  { id: 7,  name: 'BASELINE',  category: 'simple',       layout: 'minimal'  },
  { id: 8,  name: 'ORBIT',     category: 'modern',       layout: 'sidebar'  },
  { id: 9,  name: 'PRISM',     category: 'creative',     layout: 'header'   },
  { id: 10, name: 'VELLUM',    category: 'academic',     layout: 'single'   },
  { id: 11, name: 'PINNACLE',  category: 'executive',    layout: 'single'   },
  { id: 12, name: 'CANVAS',    category: 'professional', layout: 'sidebar'  },
];

type Layout = 'single' | 'sidebar' | 'header' | 'minimal';

// ── Wireframe line primitives ─────────────────────────────────────────────────

function L({ w, h = 3, c = '#D4D4D4', mb = 0 }: { w: number; h?: number; c?: string; mb?: number }) {
  return <div style={{ height: h, width: `${w}%`, background: c, borderRadius: 2, flexShrink: 0, marginBottom: mb }} />;
}
function Sp({ h }: { h: number }) { return <div style={{ height: h, flexShrink: 0 }} />; }

// ── CV thumbnail variants ─────────────────────────────────────────────────────

function CvThumb({ layout }: { layout: Layout }) {
  if (layout === 'sidebar') return (
    <div style={{ display: 'flex', height: '100%', background: '#EFEFEF', padding: '10px 8px', gap: 8, overflow: 'hidden' }}>
      <div style={{ width: '35%', background: '#E4E4E4', padding: '8px 6px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#C8C8C8', marginBottom: 8, flexShrink: 0 }} />
        <L w={88} h={5} c="#BEBEBE" mb={3} />
        <L w={66} h={3} c="#CACACA" mb={10} />
        {[80,60,72,55,68].map((w,i) => <L key={i} w={w} mb={4} />)}
        <Sp h={8} />
        {[75,58,65].map((w,i) => <L key={i} w={w} mb={4} />)}
      </div>
      <div style={{ flex: 1, padding: '8px 4px', display: 'flex', flexDirection: 'column' }}>
        <L w={78} h={5} c="#C8C8C8" mb={4} />
        <L w={55} h={3} c="#D0D0D0" mb={10} />
        {[88,72,92,66,82,76,62,86,70].map((w,i) => <L key={i} w={w} mb={4} />)}
      </div>
    </div>
  );

  if (layout === 'header') return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#EFEFEF', overflow: 'hidden' }}>
      <div style={{ background: '#DCDCDC', padding: '10px 10px 12px', flexShrink: 0 }}>
        <L w={50} h={6} c="#BEBEBE" mb={6} />
        <L w={33} h={3} c="#CACACA" mb={4} />
        <div style={{ display: 'flex', gap: 10 }}>
          <L w={28} h={3} c="#C8C8C8" />
          <L w={24} h={3} c="#C8C8C8" />
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', gap: 8, padding: '10px 10px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {[80,65,90,72,85,60,76].map((w,i) => <L key={i} w={w} mb={4} />)}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {[70,85,60,80,74,66,82].map((w,i) => <L key={i} w={w} mb={4} />)}
        </div>
      </div>
    </div>
  );

  if (layout === 'minimal') return (
    <div style={{ padding: '18px 14px', background: '#F5F5F5', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <L w={44} h={7} c="#C0C0C0" mb={4} />
      <L w={30} h={3} c="#CACACA" mb={18} />
      <L w={25} h={3} c="#C0C0C0" mb={6} />
      {[88,72,82].map((w,i) => <L key={i} w={w} mb={5} />)}
      <Sp h={14} />
      <L w={28} h={3} c="#C0C0C0" mb={6} />
      {[82,68,76].map((w,i) => <L key={i} w={w} mb={5} />)}
      <Sp h={14} />
      {[55,42,60,38].map((w,i) => <L key={i} w={w} mb={5} />)}
    </div>
  );

  return (
    <div style={{ padding: '10px', background: '#EFEFEF', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <L w={52} h={6} c="#C0C0C0" mb={3} />
      <L w={38} h={3} c="#CACACA" mb={10} />
      <L w={66} h={3} c="#BEBEBE" mb={5} />
      {[88,72,90,66,82].map((w,i) => <L key={i} w={w} mb={4} />)}
      <Sp h={8} />
      <L w={58} h={3} c="#BEBEBE" mb={5} />
      {[76,86,62,80].map((w,i) => <L key={i} w={w} mb={4} />)}
      <Sp h={8} />
      <L w={50} h={3} c="#BEBEBE" mb={5} />
      {[82,68,74].map((w,i) => <L key={i} w={w} mb={4} />)}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

const countFor = (id: string) =>
  id === 'all' ? TEMPLATES.length : TEMPLATES.filter(t => t.category === id).length;

export default function TemplatesPage() {
  const [active, setActive]           = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered  = active === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.category === active);
  const activeCat = CATEGORIES.find(c => c.id === active)!;

  return (
    <div style={{ display: 'flex', minHeight: `calc(100vh - ${TOOLBAR_H}px)`, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Left index rail ── */}
      <aside style={{
        width: 216, flexShrink: 0,
        position: 'sticky', top: TOOLBAR_H, alignSelf: 'flex-start',
        height: `calc(100vh - ${TOOLBAR_H}px)`, overflowY: 'auto',
        background: '#fff', borderRight: '1px solid #EBEBEB',
        padding: '40px 0',
        display: 'flex', flexDirection: 'column',
      }}>
        <p style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#CACACA',
          paddingLeft: 28, marginBottom: 20,
        }}>
          Category
        </p>

        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {CATEGORIES.map(cat => {
            const isActive = active === cat.id;
            return (
              <div key={cat.id}>
                <button
                  onClick={() => setActive(cat.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    paddingTop: 9, paddingBottom: 9,
                    paddingLeft: 26, paddingRight: 20,
                    borderTop: 'none', borderRight: 'none', borderBottom: 'none',
                    borderLeft: `2px solid ${isActive ? '#1A1A1A' : 'transparent'}`,
                    background: 'none',
                    cursor: 'pointer', fontFamily: 'inherit',
                    display: 'flex', alignItems: 'baseline',
                    justifyContent: 'space-between', gap: 8,
                    boxShadow: 'none',
                  }}
                >
                  <span style={{
                    fontSize: 14, lineHeight: 1.3,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#1A1A1A' : '#999',
                    transition: 'color 0.1s',
                  }}>
                    {cat.label}
                  </span>
                  <span style={{ fontSize: 11, color: '#D0D0D0', flexShrink: 0 }}>
                    {countFor(cat.id)}
                  </span>
                </button>

                {/* Contextual description */}
                {isActive && cat.info && (
                  <p style={{
                    fontSize: 11, color: '#AAAAAA', lineHeight: 1.7,
                    paddingLeft: 28, paddingRight: 20,
                    marginTop: 4, marginBottom: 10,
                  }}>
                    {cat.info}
                  </p>
                )}
              </div>
            );
          })}
        </nav>

        {/* Import — bottom of rail */}
        <div style={{ marginTop: 'auto', padding: '0 20px 0 24px' }}>
          <button style={{
            width: '100%', padding: '8px 14px',
            fontSize: 12, fontWeight: 500, fontFamily: 'inherit',
            color: '#AAAAAA', background: 'none',
            borderTop: '1px solid #EBEBEB', borderRight: 'none',
            borderBottom: 'none', borderLeft: 'none',
            cursor: 'pointer', textAlign: 'left',
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: 'none', paddingLeft: 0,
          }}>
            <span style={{ fontSize: 14, lineHeight: 1 }}>↑</span>
            Import existing
          </button>
        </div>
      </aside>

      {/* ── Right content ── */}
      <div style={{ flex: 1, minWidth: 0, background: '#FAFAFA', padding: '40px 52px 80px' }}>

        {/* Page title block */}
        <div style={{ marginBottom: 36 }}>
          {/* Wireframe badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            border: '1px dashed #CCCCCC', borderRadius: 3,
            padding: '2px 8px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#CCCCCC', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Low-fi Wireframe
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
            <h1 style={{
              fontSize: 56, fontWeight: 700, color: '#1A1A1A',
              letterSpacing: '-1.5px', lineHeight: 1,
            }}>
              {active === 'all' ? 'Templates' : activeCat.label}
            </h1>
            <p style={{ fontSize: 12, color: '#CCCCCC', paddingBottom: 6, flexShrink: 0 }}>
              {filtered.length} design{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Subtitle — generic when All, category info when filtered */}
          <p style={{ fontSize: 13, color: '#AAAAAA', marginTop: 10, lineHeight: 1.6, maxWidth: 560 }}>
            {active === 'all'
              ? 'Choose a design. Your content carries across templates — switch anytime.'
              : activeCat.info}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#E8E8E8', marginBottom: 44 }} />

        {/* Template grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '52px 28px' }}>
          {filtered.map(t => (
            <div
              key={t.id}
              onMouseEnter={() => setHoveredCard(t.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{
                aspectRatio: '1 / 1.414',
                border: hoveredCard === t.id ? '1.5px solid #1A1A1A' : '1px solid #E0E0E0',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                transition: 'border-color 0.12s',
                background: '#EFEFEF',
              }}>
                <CvThumb layout={t.layout as Layout} />

                {hoveredCard === t.id && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(10,10,10,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <button style={{
                      padding: '7px 22px', borderRadius: 3,
                      background: '#fff', color: '#1A1A1A',
                      fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
                      border: 'none', cursor: 'pointer', boxShadow: 'none',
                    }}>
                      Use Template
                    </button>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 14 }}>
                <p style={{
                  fontSize: 10, fontWeight: 700, color: '#1A1A1A',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {t.name}
                </p>
                <p style={{ fontSize: 11, color: '#C4C4C4', marginTop: 3, textTransform: 'capitalize' }}>
                  {t.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
