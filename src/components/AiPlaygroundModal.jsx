import React, { useState } from 'react';
import { X, Sparkles, Bot, CheckCircle, ArrowRight, RefreshCw, Cpu } from 'lucide-react';

const PRESET_PROMPTS = [
  {
    label: '🤖 Autonomous Support Agent',
    prompt: 'Design an AI Agent that integrates with Zendesk, queries Postgres DB, and resolves 80% of tier-1 billing tickets automatically.'
  },
  {
    label: '⚡ Next.js Scale Architecture',
    prompt: 'Architecture review for a SaaS web platform anticipating 100k daily active users with sub-second page response times.'
  },
  {
    label: '📱 Cross-Platform Mobile Flow',
    prompt: 'Spec out a high-converting iOS & Android onboarding flow with biometric authentication and offline local cache.'
  },
  {
    label: '📈 SEO & Growth Funnel',
    prompt: 'Generate a technical SEO and programmatic landing page strategy to capture top-3 Google rankings for B2B software.'
  }
];

export default function AiPlaygroundModal({ isOpen, onClose, onOpenQuote }) {
  const [inputPrompt, setInputPrompt] = useState(PRESET_PROMPTS[0].prompt);
  const [isRunning, setIsRunning] = useState(false);
  const [agentOutput, setAgentOutput] = useState(null);

  if (!isOpen) return null;

  const handleRunAgent = (e) => {
    if (e) e.preventDefault();
    if (!inputPrompt.trim()) return;

    setIsRunning(true);
    setAgentOutput(null);

    // Simulate multi-step reasoning
    setTimeout(() => {
      setIsRunning(false);
      setAgentOutput({
        steps: [
          'Deconstructing user objective and system boundaries...',
          'Selected Model: Synthex-Orchestrator v4.2 + Tool Calling engine',
          'Identified core stack: Vector RAG + Next.js Edge + Supabase DB',
          'Estimated development duration: 2-3 weeks to production'
        ],
        solution: `Synthex AI Architecture Blueprint:
1. Agent Loop: Autonomous task agent with guardrail verification and automated human-in-the-loop escalation.
2. Latency Profile: Sub-200ms streaming responses with edge caching.
3. Integration: Plug-and-play connectors with your existing API and database.
4. Estimated ROI: 75% reduction in operational manual labor within 30 days.`
      });
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content playground-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="playground-modal-header">
          <div className="modal-header-icon-wrap">
            <Cpu size={22} className="text-purple" />
            <div>
              <h3 className="modal-title">Live AI Agent Playground</h3>
              <p className="modal-subtitle">Test our engineering agent on any software or marketing concept</p>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Preset Prompt Pills */}
        <div className="preset-prompts-wrap">
          <span className="preset-label">Choose a template:</span>
          <div className="preset-pill-row">
            {PRESET_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                className="preset-pill"
                onClick={() => {
                  setInputPrompt(p.prompt);
                  setAgentOutput(null);
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleRunAgent} className="playground-input-form">
          <textarea
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Type your software requirements, tech stack questions, or product vision..."
            rows={3}
            className="playground-textarea"
          />
          <div className="playground-form-footer">
            <span className="char-hint">Powered by Synthex Autonomous Agent Core</span>
            <button 
              type="submit" 
              className="btn-primary btn-run-agent"
              disabled={isRunning || !inputPrompt.trim()}
            >
              {isRunning ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Reasoning...</span>
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Run Agent</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Output Area */}
        {agentOutput && (
          <div className="playground-output-box animate-fade">
            <div className="output-header">
              <Bot size={16} className="text-purple" />
              <span>Synthex Agent Reasoning Plan</span>
              <span className="status-live-dot"></span>
            </div>

            <div className="reasoning-steps">
              {agentOutput.steps.map((st, i) => (
                <div key={i} className="step-item">
                  <CheckCircle size={14} className="text-emerald" />
                  <span>{st}</span>
                </div>
              ))}
            </div>

            <pre className="blueprint-code">{agentOutput.solution}</pre>

            <div className="output-action-row">
              <span className="output-cta-hint">Ready to build this exact architecture?</span>
              <button 
                type="button" 
                className="btn-primary btn-sm"
                onClick={() => {
                  onClose();
                  onOpenQuote({ promptText: inputPrompt });
                }}
              >
                <span>Deploy With Synthex</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
