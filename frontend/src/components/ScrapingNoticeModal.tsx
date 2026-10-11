import React from 'react';

interface ScrapingNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScrapingNoticeModal: React.FC<ScrapingNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(15, 23, 18, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="scraping-notice-title"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#faf8f5',
          borderRadius: '24px',
          border: '1px solid #e2ded4',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          padding: '32px 28px',
          color: '#1b261d',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#556355',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#ede8df';
            e.currentTarget.style.color = '#1b261d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#556355';
          }}
          title="Close Notice"
          aria-label="Close"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
        </button>

        {/* Modal Header with Icon */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              backgroundColor: '#fef3c7',
              color: '#d97706',
              border: '1px solid #fde68a',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>gavel</span>
          </div>

          <div style={{ paddingTop: '2px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                backgroundColor: '#fee2e2',
                color: '#b91c1c',
                border: '1px solid rgba(252, 165, 165, 0.5)',
                marginBottom: '6px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                }}
              />
              Service Notice
            </div>
            <h3
              id="scraping-notice-title"
              style={{
                fontSize: '20px',
                fontWeight: 700,
                fontFamily: "'Newsreader', serif",
                color: '#1b261d',
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Web Scraping Update
            </h3>
          </div>
        </div>

        {/* Highlighted Notice Quote Box */}
        <div
          style={{
            padding: '16px 18px',
            borderRadius: '14px',
            border: '1px solid #fde68a',
            backgroundColor: '#fffbeb',
            color: '#78350f',
            marginBottom: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '22px', color: '#d97706', flexShrink: 0, marginTop: '2px' }}
            >
              info
            </span>
            <p
              style={{
                fontSize: '14.5px',
                fontWeight: 600,
                lineHeight: 1.5,
                margin: 0,
                color: '#92400e',
              }}
            >
              &ldquo;due to legal terms of web scrabbing developer have to pause it  !! only the result of jisce is showing&rdquo;
            </p>
          </div>
        </div>

        {/* Supporting Details */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontSize: '13px',
            color: '#4b5548',
            lineHeight: 1.55,
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#15803d',
              fontWeight: 600,
              backgroundColor: '#dcfce7',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid rgba(134, 239, 172, 0.5)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>verified</span>
            <span>JISCE Official Database is fully loaded &amp; operational!</span>
          </div>
          <p style={{ margin: 0, color: '#4b5548' }}>
            All 8 semesters of JISCE curriculum, syllabus, chapter-wise notes, previous year question papers (PYQs), and mock tests remain active.
          </p>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: '16px',
            borderTop: '1px solid #e8e4dc',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '10px 24px',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '14px',
              color: '#ffffff',
              backgroundColor: '#1b4332',
              border: 'none',
              boxShadow: '0 4px 12px rgba(27, 67, 50, 0.25)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2d6a4f';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1b4332';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span>
            <span>Understood</span>
          </button>
        </div>
      </div>
    </div>
  );
};
