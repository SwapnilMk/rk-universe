import React from 'react';
import { Check, Eye, MessageSquare, Megaphone, FileText } from 'lucide-react';

type StoryStepperProps = {
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

const STEPS = [
  { id: 1, key: 'pending', label: '1. Submitted', icon: FileText, dateLabel: 'Submitted On' },
  { id: 2, key: 'review', label: '2. Under Review', icon: Eye, dateLabel: 'In Progress' },
  { id: 3, key: 'query', label: '3. Query (If Any)', icon: MessageSquare, dateLabel: 'Waiting for Response' },
  { id: 4, key: 'approved', label: '4. Approved', icon: Check, dateLabel: 'Ready to Publish' },
  { id: 5, key: 'promotion', label: '5. Promotion', icon: Megaphone, dateLabel: 'Run on Social Media' },
];

export default function StoryStepper({ status, createdAt, updatedAt }: StoryStepperProps) {
  
  // Determine current step index based on status
  let currentIndex = 1; // Default to under review if pending
  if (status === 'query') currentIndex = 2;
  else if (status === 'approved') currentIndex = 3;
  else if (status === 'promotion') currentIndex = 4;
  else if (status === 'rejected') currentIndex = 1; // Keep it at review if rejected

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    });
  };

  return (
    <div className="relative mb-10 w-full pt-4">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 -translate-y-1/2"></div>
      
      {/* Dynamic progress bar line */}
      <div 
        className="absolute top-1/2 left-0 h-[1px] bg-[#d4af37] -z-10 -translate-y-1/2 transition-all duration-500 ease-in-out"
        style={{ width: `${(currentIndex / (STEPS.length - 1)) * 100}%` }}
      ></div>

      <div className="flex items-start justify-between">
        {STEPS.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isActive = index === currentIndex;
          const isPending = index > currentIndex;
          
          let dateText = "-";
          if (index === 0) dateText = formatDate(createdAt);
          else if (isActive) {
            if (status === 'query') dateText = "Waiting for Response";
            else if (status === 'approved') dateText = formatDate(updatedAt);
            else if (status === 'promotion') dateText = "Running on Social Media";
            else dateText = "In Progress";
          }
          else if (isCompleted) {
             dateText = formatDate(updatedAt); // Simplified for mockup
          } else {
             if (step.key === 'query') dateText = "No Query";
             else if (step.key === 'approved') dateText = "Pending";
             else if (step.key === 'promotion') dateText = "Pending";
          }

          return (
            <div key={step.id} className="flex flex-col items-center gap-3 relative bg-[#0a0a0a] px-4 z-10 w-32 text-center">
              
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-110" : 
                  isCompleted ? "bg-transparent border border-white text-white" : 
                  "bg-transparent border border-white/20 text-white/40"
                }`}>
                <step.icon className={`w-4 h-4 ${isCompleted ? 'text-white' : ''}`} />
              </div>
              
              <div>
                <p className={`text-xs font-bold whitespace-nowrap ${isActive ? 'text-[#d4af37]' : isCompleted ? 'text-white' : 'text-white/40'}`}>
                  {step.label}
                </p>
                <p className={`text-[9px] mt-1 ${isActive ? 'text-white/70' : isCompleted ? 'text-white/50' : 'text-white/30'}`}>
                  {dateText}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
