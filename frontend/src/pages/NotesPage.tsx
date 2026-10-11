import React, { useState, useMemo, useEffect } from 'react';
import type { Student } from '../types';
import { getTopicsForSubject, type TopicData, type NoteItem } from '../data/notesData';
import { SEMESTER_SUBJECTS_MAP } from '../data/semesterSubjects';

interface NotesPageProps {
  student: Student;
  onNavigateTab?: (tab: string) => void;
}

export const NotesPage: React.FC<NotesPageProps> = ({ student, onNavigateTab }) => {
  // Filters & State
  const [selectedSemester, setSelectedSemester] = useState<string>(
    String(student.semester || 2)
  );
  
  const semesterSubjects = useMemo(() => {
    return SEMESTER_SUBJECTS_MAP[selectedSemester] || SEMESTER_SUBJECTS_MAP['2'];
  }, [selectedSemester]);

  const [selectedSubject, setSelectedSubject] = useState<string>(
    semesterSubjects.find((s) => s.toLowerCase().includes('data structure')) ||
      semesterSubjects[0] ||
      'Data Structures and Algorithms'
  );

  const [searchQuery, setSearchQuery] = useState('');

  // Genuine curriculum topics exclusively for the chosen subject
  const allTopics: TopicData[] = useMemo(() => {
    return getTopicsForSubject(selectedSubject);
  }, [selectedSubject]);

  const [activeTopicId, setActiveTopicId] = useState<string>(() => {
    const init = getTopicsForSubject(
      semesterSubjects.find((s) => s.toLowerCase().includes('data structure')) ||
        semesterSubjects[0] ||
        'Data Structures and Algorithms'
    );
    return init[0]?.id || 'dsa-1';
  });

  // Automatically sync active topic when subject or topics catalog changes
  useEffect(() => {
    if (allTopics && allTopics.length > 0) {
      if (!allTopics.some((t) => t.id === activeTopicId)) {
        setActiveTopicId(allTopics[0].id);
      }
    }
  }, [selectedSubject, allTopics, activeTopicId]);

  const [activeFormatTab, setActiveFormatTab] = useState<
    'notes' | 'summary' | 'mindmap' | 'keypoints' | 'practice'
  >('notes');

  // Filter Dropdown Open States
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [isSemDropdownOpen, setIsSemDropdownOpen] = useState(false);
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);

  // Reader Modal State
  const [viewingNote, setViewingNote] = useState<NoteItem | null>(null);
  const [notesStatus, setNotesStatus] = useState<Record<string, 'completed' | 'in_progress' | 'not_started'>>({
    'n-1-1': 'completed',
    'n-1-2': 'in_progress',
    'n-1-3': 'not_started',
    'n-1-4': 'not_started',
  });

  // Video / AI Modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtered topics based on search query
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return allTopics;
    const q = searchQuery.toLowerCase();
    return allTopics.filter(
      (t) =>
        t.shortTitle.toLowerCase().includes(q) ||
        t.fullTitle.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.notes.some((n) => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q))
    );
  }, [allTopics, searchQuery]);

  // Current active topic
  const activeTopic = useMemo(() => {
    return allTopics.find((t) => t.id === activeTopicId) || allTopics[0] || {
      id: 'default',
      number: 1,
      shortTitle: selectedSubject,
      fullTitle: `${selectedSubject} — Unit 1`,
      description: `Comprehensive study notes for ${selectedSubject}.`,
      notesCount: 0,
      notes: [],
      summary: [],
      keyPoints: [],
      mindMap: [],
      practiceQs: [],
      videos: [],
    };
  }, [allTopics, activeTopicId, selectedSubject]);

  // Progress metrics for active topic
  const progressMetrics = useMemo(() => {
    const total = activeTopic.notes.length;
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;

    activeTopic.notes.forEach((n) => {
      const st = notesStatus[n.id] || n.status;
      if (st === 'completed') completed++;
      else if (st === 'in_progress') inProgress++;
      else notStarted++;
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, inProgress, notStarted, percent };
  }, [activeTopic, notesStatus]);

  const toggleNoteStatus = (noteId: string) => {
    setNotesStatus((prev) => {
      const current = prev[noteId] || 'not_started';
      const next =
        current === 'not_started'
          ? 'in_progress'
          : current === 'in_progress'
          ? 'completed'
          : 'not_started';
      return { ...prev, [noteId]: next };
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadAll = () => {
    const textContent = `# ${activeTopic.fullTitle}\n\n${activeTopic.description}\n\n` +
      activeTopic.notes.map((n) => `## ${n.title}\n${n.description}\n\n${n.contentMarkdown}\n\n---\n`).join('\n');
    const blob = new Blob([textContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeTopic.shortTitle.replace(/\s+/g, '_')}_Notes.md`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded notes as Markdown bundle!');
  };

  const handleAddToRevision = () => {
    try {
      const existing = JSON.parse(localStorage.getItem('CollegeBuddy_revision_topics') || '[]');
      if (!existing.includes(activeTopic.fullTitle)) {
        existing.push(activeTopic.fullTitle);
        localStorage.setItem('CollegeBuddy_revision_topics', JSON.stringify(existing));
      }
      showToast(`Added "${activeTopic.shortTitle}" to Revision Plan!`);
    } catch {
      showToast('Added to Revision!');
    }
  };

  return (
    <div className="eb-notes-page">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="eb-notes-toast animate-fade-in">
          <span className="material-symbols-outlined text-emerald-600">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Page Title & Subtitle */}
      <div className="eb-notes-header">
        <h1 className="eb-notes-title">Notes</h1>
        <p className="eb-notes-subtitle">Well-structured notes for all topics in your syllabus.</p>
      </div>

      {/* Filter Bar Row */}
      <div className="eb-notes-filter-card">
        {/* Subject Filter */}
        <div className="eb-filter-group relative">
          <button
            type="button"
            className="eb-filter-btn"
            onClick={() => {
              setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
              setIsSemDropdownOpen(false);
              setIsTopicDropdownOpen(false);
            }}
          >
            <span className="material-symbols-outlined eb-filter-icon">menu_book</span>
            <div className="eb-filter-text">
              <span className="eb-filter-label">Subject</span>
              <span className="eb-filter-val" title={selectedSubject}>
                {selectedSubject}
              </span>
            </div>
            <span className="material-symbols-outlined eb-filter-arrow">expand_more</span>
          </button>

          {isSubjectDropdownOpen && (
            <div className="eb-dropdown-menu">
              {semesterSubjects.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  className={`eb-dropdown-item ${selectedSubject === sub ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSubject(sub);
                    const newTopics = getTopicsForSubject(sub);
                    if (newTopics.length > 0) {
                      setActiveTopicId(newTopics[0].id);
                    }
                    setIsSubjectDropdownOpen(false);
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Semester Filter */}
        <div className="eb-filter-group relative">
          <button
            type="button"
            className="eb-filter-btn"
            onClick={() => {
              setIsSemDropdownOpen(!isSemDropdownOpen);
              setIsSubjectDropdownOpen(false);
              setIsTopicDropdownOpen(false);
            }}
          >
            <span className="material-symbols-outlined eb-filter-icon">description</span>
            <div className="eb-filter-text">
              <span className="eb-filter-label">Semester</span>
              <span className="eb-filter-val">Semester {selectedSemester}</span>
            </div>
            <span className="material-symbols-outlined eb-filter-arrow">expand_more</span>
          </button>

          {isSemDropdownOpen && (
            <div className="eb-dropdown-menu eb-sem-dropdown">
              {['1', '2', '3', '4', '5', '6', '7', '8'].map((sem) => (
                <button
                  key={sem}
                  type="button"
                  className={`eb-dropdown-item ${selectedSemester === sem ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSemester(sem);
                    const nextSubs = SEMESTER_SUBJECTS_MAP[sem] || SEMESTER_SUBJECTS_MAP['2'];
                    if (nextSubs.length > 0) {
                      setSelectedSubject(nextSubs[0]);
                      const newTopics = getTopicsForSubject(nextSubs[0]);
                      if (newTopics.length > 0) {
                        setActiveTopicId(newTopics[0].id);
                      }
                    }
                    setIsSemDropdownOpen(false);
                  }}
                >
                  Semester {sem}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Topic Filter */}
        <div className="eb-filter-group relative">
          <button
            type="button"
            className="eb-filter-btn"
            onClick={() => {
              setIsTopicDropdownOpen(!isTopicDropdownOpen);
              setIsSubjectDropdownOpen(false);
              setIsSemDropdownOpen(false);
            }}
          >
            <span className="material-symbols-outlined eb-filter-icon">sell</span>
            <div className="eb-filter-text">
              <span className="eb-filter-label">Topic</span>
              <span className="eb-filter-val" title={activeTopic ? `${activeTopic.number}. ${activeTopic.shortTitle}` : 'All Topics'}>
                {activeTopic ? `${activeTopic.number}. ${activeTopic.shortTitle}` : 'All Topics'}
              </span>
            </div>
            <span className="material-symbols-outlined eb-filter-arrow">expand_more</span>
          </button>

          {isTopicDropdownOpen && (
            <div className="eb-dropdown-menu eb-topic-dropdown max-h-60 overflow-y-auto">
              <button
                type="button"
                className={`eb-dropdown-item ${!activeTopicId ? 'active' : ''}`}
                onClick={() => {
                  if (allTopics.length > 0) {
                    setActiveTopicId(allTopics[0].id);
                  }
                  setIsTopicDropdownOpen(false);
                }}
              >
                All Topics ({allTopics.length})
              </button>
              {allTopics.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`eb-dropdown-item ${activeTopicId === t.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTopicId(t.id);
                    setIsTopicDropdownOpen(false);
                  }}
                >
                  {t.number}. {t.shortTitle}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input with Topic Suggestions */}
        <div className="eb-filter-search relative">
          <span className="material-symbols-outlined text-gray-400">search</span>
          <input
            type="text"
            placeholder={`Search ${allTopics.length} topics in ${selectedSubject}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="eb-notes-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-gray-400 hover:text-gray-600 mr-1"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}

          {searchQuery.trim().length > 0 && (
            <div className="eb-search-suggestions-dropdown">
              <div className="eb-suggestions-header">
                Suggestions in {selectedSubject} ({filteredTopics.length})
              </div>
              {filteredTopics.length === 0 ? (
                <div className="eb-suggestions-empty">
                  No matching topics in this subject
                </div>
              ) : (
                filteredTopics.slice(0, 6).map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    className="eb-suggestion-row"
                    onClick={() => {
                      setActiveTopicId(st.id);
                      setSearchQuery('');
                    }}
                  >
                    <span className="material-symbols-outlined text-sm text-[#284232]">
                      check_circle
                    </span>
                    <span className="truncate text-left font-medium">
                      {st.number}. {st.shortTitle}
                    </span>
                    <span className="text-[11px] text-gray-400 ml-auto whitespace-nowrap">
                      {st.notesCount} notes
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main 3-Column Content Layout */}
      <div className="eb-notes-content-grid">
        {/* ================= COLUMN 1: TOPICS LIST ================= */}
        <div className="eb-topics-sidebar-card">
          <div className="eb-topics-sidebar-header">
            <h2 className="eb-topics-sidebar-title">Topics</h2>
            <span className="eb-topics-count-badge">{filteredTopics.length} Topics</span>
          </div>

          <div className="eb-topics-list-scroll">
            {filteredTopics.length === 0 ? (
              <div className="p-4 text-center text-xs text-stone-500">
                No topics matching "{searchQuery}" in {selectedSubject}.
              </div>
            ) : (
              filteredTopics.map((topic) => {
                const isActive = topic.id === activeTopic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setActiveTopicId(topic.id)}
                    className={`eb-topic-item-btn ${isActive ? 'active' : ''}`}
                  >
                    <div className="eb-topic-item-left">
                      <div className={`eb-topic-number-circle ${isActive ? 'active' : ''}`}>
                        {topic.number}
                      </div>
                      <div className="eb-topic-item-info">
                        <span className="eb-topic-item-title">{topic.shortTitle}</span>
                        <span className="eb-topic-item-notes-count">{topic.notesCount} notes</span>
                      </div>
                    </div>
                    <span
                      className={`material-symbols-outlined eb-topic-chevron ${
                        isActive ? 'active text-emerald-700' : 'text-gray-400'
                      }`}
                    >
                      chevron_right
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* ================= COLUMN 2: ACTIVE TOPIC DETAILS & NOTES ================= */}
        <div className="eb-topic-main-card">
          {/* Active Topic Header */}
          <div className="eb-topic-hero">
            <div className="eb-topic-hero-top">
              <span className="eb-topic-pill-badge">
                Topic {activeTopic.number} of {allTopics.length}
              </span>

              <div className="eb-total-content-pill">
                <span className="material-symbols-outlined text-[#284232] text-[18px]">
                  menu_book
                </span>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#284232]">
                    {activeTopic.notes.length} Notes
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium">Total Content</div>
                </div>
              </div>
            </div>

            <h2 className="eb-active-topic-title">{activeTopic.fullTitle}</h2>
            <p className="eb-active-topic-desc">{activeTopic.description}</p>
          </div>

          {/* Format Tabs Bar (Pill Buttons) */}
          <div className="eb-format-tabs-bar">
            <button
              type="button"
              className={`eb-format-tab-btn ${activeFormatTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveFormatTab('notes')}
            >
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Notes</span>
            </button>

            <button
              type="button"
              className={`eb-format-tab-btn ${activeFormatTab === 'summary' ? 'active' : ''}`}
              onClick={() => setActiveFormatTab('summary')}
            >
              <span className="material-symbols-outlined text-[16px]">article</span>
              <span>Summary</span>
            </button>

            <button
              type="button"
              className={`eb-format-tab-btn ${activeFormatTab === 'mindmap' ? 'active' : ''}`}
              onClick={() => setActiveFormatTab('mindmap')}
            >
              <span className="material-symbols-outlined text-[16px]">hub</span>
              <span>Mind Map</span>
            </button>

            <button
              type="button"
              className={`eb-format-tab-btn ${activeFormatTab === 'keypoints' ? 'active' : ''}`}
              onClick={() => setActiveFormatTab('keypoints')}
            >
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span>Key Points</span>
            </button>

            <button
              type="button"
              className={`eb-format-tab-btn ${activeFormatTab === 'practice' ? 'active' : ''}`}
              onClick={() => setActiveFormatTab('practice')}
            >
              <span className="material-symbols-outlined text-[16px]">quiz</span>
              <span>Practice Qs</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="eb-tab-content-area">
            {/* 1. NOTES TAB */}
            {activeFormatTab === 'notes' && (
              <div className="eb-notes-list-stack">
                {activeTopic.notes.map((note) => {
                  const currentSt = notesStatus[note.id] || note.status;
                  return (
                    <div key={note.id} className="eb-note-card-item">
                      {/* Left Document Icon */}
                      <div className={`eb-note-icon-circle color-${note.color}`}>
                        <span className="material-symbols-outlined text-[20px]">
                          picture_as_pdf
                        </span>
                      </div>

                      {/* Middle Note Info */}
                      <div className="eb-note-card-info">
                        <div className="flex items-center gap-2">
                          <h3 className="eb-note-card-title">{note.title}</h3>
                          {currentSt === 'completed' && (
                            <span className="eb-status-tag completed">Completed</span>
                          )}
                          {currentSt === 'in_progress' && (
                            <span className="eb-status-tag in-progress">In Progress</span>
                          )}
                        </div>
                        <p className="eb-note-card-desc">{note.description}</p>
                      </div>

                      {/* Right Meta & Action */}
                      <div className="eb-note-card-right">
                        <div className="eb-note-badge-pill">
                          <span className="font-bold">{note.format}</span>
                          <span className="text-gray-400">•</span>
                          <span>{note.pages} pages</span>
                        </div>

                        <button
                          type="button"
                          className="eb-note-view-btn"
                          onClick={() => setViewingNote(note)}
                        >
                          <span className="material-symbols-outlined text-[15px]">menu_book</span>
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 2. SUMMARY TAB */}
            {activeFormatTab === 'summary' && (
              <div className="eb-summary-view-card">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-700">auto_awesome</span>
                    <h3 className="font-serif font-bold text-lg text-gray-900">
                      AI Exam Synthesis & Quick Cheatsheet
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => showToast('Generated fresh revision bullet points!')}
                    className="text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">refresh</span> Regenerate
                  </button>
                </div>

                <div className="space-y-3">
                  {activeTopic.summary.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                      <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-gray-800 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. MIND MAP TAB */}
            {activeFormatTab === 'mindmap' && (
              <div className="eb-mindmap-view-card">
                <div className="mb-4 pb-2 border-b border-gray-100">
                  <h3 className="font-serif font-bold text-lg text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-600">hub</span>
                    Topic Concept Architecture
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Visual hierarchy of sub-concepts and algorithmic implementations.
                  </p>
                </div>

                <div className="eb-mindmap-tree">
                  <div className="eb-mindmap-root">
                    <span className="material-symbols-outlined text-sm mr-1.5">schema</span>
                    {activeTopic.shortTitle}
                  </div>

                  <div className="eb-mindmap-branches">
                    {activeTopic.mindMap.map((branch, bIdx) => (
                      <div key={bIdx} className="eb-mindmap-branch-card">
                        <div className="eb-branch-title">{branch.title}</div>
                        <ul className="eb-branch-list">
                          {branch.children?.map((ch, cIdx) => (
                            <li key={cIdx} className="eb-branch-item">
                              <span className="eb-branch-dot" />
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. KEY POINTS TAB */}
            {activeFormatTab === 'keypoints' && (
              <div className="eb-keypoints-view-card">
                <div className="mb-4 pb-2 border-b border-gray-100">
                  <h3 className="font-serif font-bold text-lg text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-500">star</span>
                    High-Yield Exam Focus Points & Complexities
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeTopic.keyPoints.map((kp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60">
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-bold text-sm text-gray-900">{kp.title}</h4>
                        {kp.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                            {kp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed font-mono bg-white/80 p-2 rounded border border-amber-100">
                        {kp.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. PRACTICE QUESTIONS TAB */}
            {activeFormatTab === 'practice' && (
              <div className="eb-practice-view-card">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                  <h3 className="font-serif font-bold text-lg text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-rose-500">quiz</span>
                    Targeted Examination Questions ({activeTopic.practiceQs.length})
                  </h3>
                  {onNavigateTab && (
                    <button
                      type="button"
                      onClick={() => onNavigateTab('test')}
                      className="text-xs text-emerald-800 font-semibold hover:underline flex items-center gap-1"
                    >
                      Take Timed Test <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {activeTopic.practiceQs.map((q, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            {q.marks} Marks
                          </span>
                          <span className="text-xs text-gray-500">Year: {q.year}</span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            q.difficulty === 'Easy'
                              ? 'bg-blue-100 text-blue-800'
                              : q.difficulty === 'Medium'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">{q.question}</p>
                      <div className="text-xs text-gray-600 bg-white p-2.5 rounded-lg border border-stone-200/80">
                        <span className="font-bold text-emerald-800">Answer Approach: </span>
                        {q.answerSnippet}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= COLUMN 3: RIGHT PROGRESS & ACTIONS ================= */}
        <div className="eb-right-widgets-col">
          {/* Card 1: Your Progress */}
          <div className="eb-widget-card">
            <h3 className="eb-widget-card-title">Your Progress</h3>

            <div className="eb-progress-donut-container">
              {/* Circular SVG Donut Chart */}
              <div className="eb-donut-wrapper">
                <svg className="eb-donut-svg" viewBox="0 0 100 100">
                  <circle
                    className="eb-donut-bg-track"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="10"
                  />
                  <circle
                    className="eb-donut-fill-circle"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * progressMetrics.percent) / 100}
                  />
                </svg>
                <div className="eb-donut-center-label">
                  <span className="eb-donut-percent">{progressMetrics.percent}%</span>
                </div>
              </div>

              {/* Progress Legend */}
              <div className="eb-progress-legend-list">
                <div className="eb-progress-legend-row">
                  <span className="eb-legend-dot completed" />
                  <span className="eb-legend-name">Completed</span>
                  <span className="eb-legend-count">{progressMetrics.completed}</span>
                </div>
                <div className="eb-progress-legend-row">
                  <span className="eb-legend-dot in-progress" />
                  <span className="eb-legend-name">In Progress</span>
                  <span className="eb-legend-count">{progressMetrics.inProgress}</span>
                </div>
                <div className="eb-progress-legend-row">
                  <span className="eb-legend-dot not-started" />
                  <span className="eb-legend-name">Not Started</span>
                  <span className="eb-legend-count">{progressMetrics.notStarted}</span>
                </div>
              </div>
            </div>

            <div className="eb-total-notes-footer">
              <span>Total Notes</span>
              <span className="font-bold">{progressMetrics.total}</span>
            </div>
          </div>

          {/* Card 2: Quick Actions (2x2 Grid) */}
          <div className="eb-widget-card">
            <h3 className="eb-widget-card-title">Quick Actions</h3>

            <div className="eb-quick-actions-grid">
              <button
                type="button"
                className="eb-quick-action-btn action-download"
                onClick={handleDownloadAll}
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Download All Notes</span>
              </button>

              <button
                type="button"
                className="eb-quick-action-btn action-print"
                onClick={handlePrint}
              >
                <span className="material-symbols-outlined text-[20px]">print</span>
                <span>Print Notes</span>
              </button>

              <button
                type="button"
                className="eb-quick-action-btn action-revision"
                onClick={handleAddToRevision}
              >
                <span className="material-symbols-outlined text-[20px]">bookmark</span>
                <span>Add to Revision</span>
              </button>

              <button
                type="button"
                className="eb-quick-action-btn action-ai-summary"
                onClick={() => {
                  setActiveFormatTab('summary');
                  showToast('AI Summary generated for topic!');
                }}
              >
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                <span>Generate Summary (AI)</span>
              </button>
            </div>
          </div>

          {/* Card 3: Related Resources */}
          <div className="eb-widget-card">
            <h3 className="eb-widget-card-title">Related Resources</h3>

            <div className="eb-related-resources-list">
              <button
                type="button"
                className="eb-related-resource-item"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <div className="eb-resource-left">
                  <span className="eb-resource-icon-circle red">
                    <span className="material-symbols-outlined text-[18px]">smart_display</span>
                  </span>
                  <span className="eb-resource-title">Recommended Videos</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  chevron_right
                </span>
              </button>

              <button
                type="button"
                className="eb-related-resource-item"
                onClick={() => {
                  if (onNavigateTab) onNavigateTab('syllabus');
                }}
              >
                <div className="eb-resource-left">
                  <span className="eb-resource-icon-circle purple">
                    <span className="material-symbols-outlined text-[18px]">article</span>
                  </span>
                  <span className="eb-resource-title">Extra Study Material</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  chevron_right
                </span>
              </button>

              <a
                href="https://geeksforgeeks.org/data-structures"
                target="_blank"
                rel="noreferrer"
                className="eb-related-resource-item text-left"
              >
                <div className="eb-resource-left">
                  <span className="eb-resource-icon-circle blue">
                    <span className="material-symbols-outlined text-[18px]">link</span>
                  </span>
                  <span className="eb-resource-title">Important Links</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  chevron_right
                </span>
              </a>

              <button
                type="button"
                className="eb-related-resource-item"
                onClick={() => {
                  if (onNavigateTab) onNavigateTab('pyqs');
                }}
              >
                <div className="eb-resource-left">
                  <span className="eb-resource-icon-circle green">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </span>
                  <span className="eb-resource-title">Practice Questions</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NOTE VIEWER MODAL ================= */}
      {viewingNote && (
        <div className="eb-note-modal-backdrop" onClick={() => setViewingNote(null)}>
          <div className="eb-note-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="eb-note-modal-header">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-800">
                  {activeTopic.shortTitle} • {viewingNote.format} ({viewingNote.pages} pages)
                </span>
                <h2 className="text-xl font-bold font-serif text-gray-900 mt-1">
                  {viewingNote.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleNoteStatus(viewingNote.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition ${
                    (notesStatus[viewingNote.id] || viewingNote.status) === 'completed'
                      ? 'bg-emerald-800 text-white border-emerald-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {(notesStatus[viewingNote.id] || viewingNote.status) === 'completed'
                      ? 'check_circle'
                      : 'radio_button_unchecked'}
                  </span>
                  <span>
                    {(notesStatus[viewingNote.id] || viewingNote.status) === 'completed'
                      ? 'Completed'
                      : 'Mark Completed'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                  title="Print Note"
                >
                  <span className="material-symbols-outlined">print</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewingNote(null)}
                  className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                  title="Close Modal"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            <div className="eb-note-modal-body">
              <div className="prose max-w-none text-gray-800 leading-relaxed space-y-4">
                <div
                  className="eb-markdown-rendered-view"
                  dangerouslySetInnerHTML={{
                    __html: viewingNote.contentMarkdown
                      .replace(/### (.*?)\n/g, '<h3 class="text-lg font-bold text-gray-900 mt-4 mb-2">$1</h3>')
                      .replace(/#### (.*?)\n/g, '<h4 class="text-base font-bold text-emerald-900 mt-3 mb-1.5">$1</h4>')
                      .replace(/##### (.*?)\n/g, '<h5 class="text-sm font-semibold text-gray-800 mt-2 mb-1">$1</h5>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre class="bg-gray-900 text-emerald-300 p-4 rounded-xl text-xs font-mono overflow-x-auto my-3">$2</pre>')
                      .replace(/`([^`]+)`/g, '<code class="bg-stone-200 text-stone-900 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
                      .replace(/\n\n/g, '<p class="my-2"></p>')
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= RECOMMENDED VIDEOS MODAL ================= */}
      {isVideoModalOpen && (
        <div className="eb-note-modal-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div className="eb-video-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-600">smart_display</span>
                <h3 className="font-serif font-bold text-lg text-gray-900">
                  Recommended Videos for {activeTopic.shortTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3 mt-4">
              {activeTopic.videos.map((vid, idx) => (
                <a
                  key={idx}
                  href={vid.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-stone-50 hover:bg-stone-100 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">play_arrow</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-rose-700 transition">
                        {vid.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {vid.educator} • {vid.duration}
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-700 text-sm">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesPage;
