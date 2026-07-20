"use client";

import React, { useState } from 'react';
import { FileText, Download, User, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

type AttachmentViewerProps = {
  hospitalDocsUrl?: string | null;
  relevantDocsUrl?: string | null;
  identityProofUrl?: string | null;
};

export default function AttachmentViewer({ hospitalDocsUrl, relevantDocsUrl, identityProofUrl }: AttachmentViewerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setSelectedUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedUrl(null);
  };

  const isPdf = (url: string) => {
    return url.toLowerCase().includes('.pdf');
  };

  const handleDownload = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="space-y-3">
        {hospitalDocsUrl || relevantDocsUrl ? (
          <div 
            onClick={() => openModal(hospitalDocsUrl || relevantDocsUrl!)}
            className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-black/40 hover:bg-white/5 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors">Medical Report</p>
                <p className="text-xs text-white/40">View Document</p>
              </div>
            </div>
          </div>
        ) : null}

        {identityProofUrl ? (
          <div 
            onClick={() => openModal(identityProofUrl)}
            className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-black/40 hover:bg-white/5 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <User className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors">ID Proof</p>
                <p className="text-xs text-white/40">View Document</p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Fallback if no real attachments to match mockup */}
        {!hospitalDocsUrl && !relevantDocsUrl && !identityProofUrl && (
            <p className="text-sm text-white/40 italic">No attachments provided.</p>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
          <div className="absolute inset-0" onClick={closeModal}></div>
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-[60]"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center overflow-hidden z-50 shadow-2xl">
            {isPdf(selectedUrl) ? (
              <iframe 
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(selectedUrl)}&embedded=true`} 
                className="w-full h-full border-none bg-white rounded-lg" 
                title="Document Viewer"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={selectedUrl} 
                alt="Attachment Viewer" 
                className="max-w-full max-h-full object-contain p-2" 
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
