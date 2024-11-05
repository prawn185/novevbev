import React from 'react';
import { ArrowRight, Eye, Bot, BrainCircuit, FileSearch, Lightbulb, BrainCog, Globe, Stethoscope, Database, Network } from 'lucide-react';

const PresentationSlide = ({ title, icon: Icon, children, notes }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 relative">
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <Icon className="text-blue-500" />
      {title}
    </h3>
    {children}
    {notes && (
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm text-slate-600 font-medium">Speaker Notes:</p>
        <p className="text-sm text-slate-600">{notes}</p>
      </div>
    )}
  </div>
);

const Presentation = () => {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Title Slide */}
      <PresentationSlide 
        title="The Novevbev Problem" 
        icon={Eye}
        notes="Open with writing 'November' in cursive on a board/screen. Ask audience what they see, then reveal what AI sees. This creates immediate engagement and understanding of the problem."
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">The Novevbev Problem</h1>
          <h2 className="text-xl text-slate-600">When AI Reads What's Actually There</h2>
          <div className="mt-8 text-slate-500">Your Name</div>
        </div>
      </PresentationSlide>

      {/* Discovery Slide */}
      <div className="grid grid-cols-2 gap-8">
        <PresentationSlide 
          title="The Discovery" 
          icon={Eye}
          notes="Share the moment of realization - when you noticed AI wasn't making a mistake, but seeing something humans were trained to ignore."
        >
          <div className="text-4xl font-serif italic mb-4">November</div>
          <div className="text-4xl font-serif italic text-blue-500">Novevbev</div>
          <div className="mt-4 text-slate-600">
            "It's not that AI is wrong - it's that it sees what's actually written"
          </div>
        </PresentationSlide>

        <PresentationSlide 
          title="The Analysis" 
          icon={Bot}
          notes="Walk through how the cursive 'm' creates this ambiguity. Show examples if possible of the stroke patterns."
        >
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-center gap-2">
              <ArrowRight className="text-blue-500" size={16} />
              Cursive 'm' appears as 'v'+'b'+'v'
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="text-blue-500" size={16} />
              Human context vs. AI pattern matching
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="text-blue-500" size={16} />
              Both interpretations are valid
            </li>
          </ul>
        </PresentationSlide>
      </div>

      {/* Human Pattern Recognition */}
      <PresentationSlide 
        title="Human Pattern Recognition" 
        icon={BrainCog}
        notes="Get audience interaction here - have them try to read the scrambled text. Point out how quickly their brains auto-correct."
      >
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-slate-700">Missing Letters</h4>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded">
                <p className="text-2xl font-mono">N_v_mb_r</p>
                <p className="text-sm text-slate-600 mt-2">You still read "November"</p>
              </div>
              <div className="p-4 bg-slate-50 rounded">
                <p className="text-2xl font-mono">T_d_y</p>
                <p className="text-sm text-slate-600 mt-2">Instantly recognizable as "Today"</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-slate-700">Contextual Reading</h4>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded">
                <p className="text-xl">The 30th of Nvmbr</p>
                <p className="text-sm text-slate-600 mt-2">Brain automatically corrects to "November"</p>
              </div>
              <div className="p-4 bg-slate-50 rounded">
                <p className="text-xl">Tdy is the 30th of Nov</p>
                <p className="text-sm text-slate-600 mt-2">Context fills in missing information</p>
              </div>
            </div>
          </div>
        </div>
      </PresentationSlide>

      {/* The Science & Solution */}
      <div className="grid grid-cols-2 gap-8">
        <PresentationSlide 
          title="The Science & Challenge" 
          icon={BrainCircuit}
          notes="Emphasize that we don't want to make AI more error-prone like humans, but rather combine the best of both approaches."
        >
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded">
              <h4 className="font-bold mb-2">Current State</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Humans:</p>
                  <ul className="text-sm">
                    <li>• Context-rich</li>
                    <li>• Error-prone</li>
                    <li>• Prediction-based</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">AI:</p>
                  <ul className="text-sm">
                    <li>• Pattern-perfect</li>
                    <li>• Context-blind</li>
                    <li>• Data-driven</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PresentationSlide>

        <PresentationSlide 
          title="The Solution" 
          icon={Network}
          notes="This is where we bridge the gap - explain how modern AI can combine precise pattern recognition with contextual understanding."
        >
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">LLM Integration</h4>
              <ul className="text-sm space-y-2">
                <li>• Word probability analysis</li>
                <li>• Context validation</li>
                <li>• Semantic understanding</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Big Data Advantage</h4>
              <ul className="text-sm space-y-2">
                <li>• Pattern libraries</li>
                <li>• Historical context</li>
                <li>• Cross-referencing</li>
              </ul>
            </div>
          </div>
        </PresentationSlide>
      </div>

      {/* Real-World Applications */}
      <div className="grid grid-cols-2 gap-8">
        <PresentationSlide 
          title="Historical Documents" 
          icon={Globe}
          notes="Use specific examples of historical documents where context is crucial for accurate transcription."
        >
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded">
              <h4 className="font-bold mb-2">Challenges</h4>
              <ul className="space-y-2 text-sm">
                <li>• Multiple writing styles</li>
                <li>• Damaged documents</li>
                <li>• Period-specific context</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">LLM Solution</h4>
              <ul className="space-y-2 text-sm">
                <li>• Historical language models</li>
                <li>• Period verification</li>
                <li>• Cross-document validation</li>
              </ul>
            </div>
          </div>
        </PresentationSlide>

        <PresentationSlide 
          title="Medical Records" 
          icon={Stethoscope}
          notes="Emphasize the critical nature of accuracy in medical contexts. Share statistics about medical errors due to misread handwriting."
        >
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded">
              <h4 className="font-bold mb-2">Critical Accuracy</h4>
              <ul className="space-y-2 text-sm">
                <li>• Prescription reading</li>
                <li>• Patient records</li>
                <li>• Time-sensitive decisions</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-bold mb-2">Smart Recognition</h4>
              <ul className="space-y-2 text-sm">
                <li>• Medical terminology database</li>
                <li>• Drug interaction checking</li>
                <li>• Probability validation</li>
              </ul>
            </div>
          </div>
        </PresentationSlide>
      </div>

      {/* Big Data & Context */}
      <PresentationSlide 
        title="The Power of Context" 
        icon={Database}
        notes="This is where you bring it all together - how modern AI can use vast datasets and language understanding to solve the Novevbev problem."
      >
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-slate-50 rounded">
            <h4 className="font-bold mb-2">Pattern Recognition</h4>
            <ul className="text-sm space-y-2">
              <li>• Stroke analysis</li>
              <li>• Character matching</li>
              <li>• Visual processing</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 rounded">
            <h4 className="font-bold mb-2">LLM Context</h4>
            <ul className="text-sm space-y-2">
              <li>• Word probability</li>
              <li>• Semantic analysis</li>
              <li>• Context validation</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 rounded">
            <h4 className="font-bold mb-2">Big Data</h4>
            <ul className="text-sm space-y-2">
              <li>• Historical patterns</li>
              <li>• Domain knowledge</li>
              <li>• Cross-validation</li>
            </ul>
          </div>
        </div>
      </PresentationSlide>

      {/* Conclusion */}
      <PresentationSlide 
        title="Key Takeaways" 
        icon={Lightbulb}
        notes="End with the broader implications - this isn't just about reading 'November' correctly, it's about building AI that combines precision with understanding."
      >
        <div className="grid grid-cols-3 gap-8 text-slate-600">
          <div className="p-4 bg-slate-50 rounded">
            <p>AI's precise pattern recognition is a feature, not a bug</p>
          </div>
          <div className="p-4 bg-slate-50 rounded">
            <p>Context awareness through LLMs bridges the gap</p>
          </div>
          <div className="p-4 bg-slate-50 rounded">
            <p>The future is hybrid: precision + understanding</p>
          </div>
        </div>
      </PresentationSlide>
    </div>
  );
};

export default Presentation;
