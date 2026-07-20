"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Users, ShieldCheck, Globe,
  Plus, GraduationCap, AlertTriangle, MoreHorizontal,
  UploadCloud,
  Phone, Mail, MessageCircle, User,
  Shield, Lock, FileText, Check, ChevronRight, ChevronLeft, ArrowLeft, CheckCircle, Home, MapPin
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  relationship: z.string().min(1, "Relationship is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  city: z.string().min(2, "Location is required"),

  category: z.string().min(1, "Category is required"),
  storyDescription: z.string().min(10, "Please provide more details").max(1000, "Maximum 1000 characters"),

  identityProof: z.any().optional(),
  relevantDocs: z.any().optional(),
  hospitalDocs: z.any().optional(),
  otherDocs: z.any().optional(),

  contactPreference: z.string().min(1, "Please select a preference"),

  consentTrue: z.literal(true, { message: 'Required' }),
  consentReview: z.literal(true, { message: 'Required' }),
  consentNoFunds: z.literal(true, { message: 'Required' }),
  consentNoGuarantee: z.literal(true, { message: 'Required' }),
  consentApproval: z.literal(true, { message: 'Required' }),
});

type FormValues = z.infer<typeof formSchema>;

const STEPS = [
  { id: 1, title: "BASIC INFORMATION", subtitle: "Tell us who you are", fields: ["fullName", "relationship", "contactNumber", "email", "city"] },
  { id: 2, title: "STORY INFORMATION", subtitle: "Tell us about the situation", fields: ["category", "storyDescription"] },
  { id: 3, title: "VERIFICATION INFORMATION", subtitle: "Supporting details (Optional)", fields: ["identityProof", "relevantDocs", "hospitalDocs", "otherDocs"] },
  { id: 4, title: "PREFERRED CONTACT", subtitle: "How should we contact you?", fields: ["contactPreference"] },
  { id: 5, title: "CONSENT & DECLARATION", subtitle: "Your consent is important", fields: ["consentTrue", "consentReview", "consentNoFunds", "consentNoGuarantee", "consentApproval"] }
];

export default function ShareYourStoryPage() {
  const container = useRef(null);
  const stepContainerRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control, trigger, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "Medical Situation",
      contactPreference: "Phone Call",
    },
    mode: "onChange"
  });

  const categoryValue = watch("category");
  const contactPreferenceValue = watch("contactPreference");
  const storyDesc = watch("storyDescription") || "";

  // Watch file inputs to display selected file names
  const identityProof = watch("identityProof");
  const relevantDocs = watch("relevantDocs");
  const hospitalDocs = watch("hospitalDocs");
  const otherDocs = watch("otherDocs");

  useGSAP(() => {
    // Hero animation
    gsap.from(".hero-animate", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Form container entry animation
    gsap.from(".form-wrapper", {
      scrollTrigger: {
        trigger: ".form-wrapper",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Footer badges animation
    const badges = gsap.utils.toArray(".badge-item");
    gsap.from(badges, {
      scrollTrigger: {
        trigger: ".badges-container",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: container });

  // Animate step changes
  useEffect(() => {
    if (stepContainerRef.current) {
      gsap.fromTo(stepContainerRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentStep]);

  const categories = [
    { name: "Medical Situation", icon: Plus },
    { name: "Education Support", icon: GraduationCap },
    { name: "Emergency Situation", icon: AlertTriangle },
    { name: "Community Need", icon: Users },
    { name: "Other", icon: MoreHorizontal },
  ];

  const contactMethods = [
    { name: "Phone Call", icon: Phone },
    { name: "Email", icon: Mail },
    { name: "WhatsApp", icon: MessageCircle },
    { name: "No Preference", icon: User },
  ];

  const handleNext = async () => {
    const currentFields = STEPS[currentStep - 1].fields as any[];
    const isStepValid = await trigger(currentFields);

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleStepClick = async (targetStep: number) => {
    if (targetStep === currentStep) return;

    if (targetStep < currentStep) {
      setCurrentStep(targetStep);
    } else {
      let isValid = true;
      for (let i = currentStep; i < targetStep; i++) {
        const fieldsToValidate = STEPS[i - 1].fields as any[];
        const stepValid = await trigger(fieldsToValidate);
        if (!stepValid) {
          isValid = false;
          setCurrentStep(i);
          break;
        }
      }
      if (isValid) {
        setCurrentStep(targetStep);
      }
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        const val = (data as any)[key];
        if (key === 'identityProof' || key === 'relevantDocs' || key === 'hospitalDocs' || key === 'otherDocs') {
          if (val && val.length > 0) {
            formData.append(key, val[0]);
          }
        } else if (val !== undefined && val !== null) {
          formData.append(key, val.toString());
        }
      });

      const response = await fetch('/api/stories', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSubmittedData(data);
        setSubmitted(true);
      } else {
        console.error("Failed to submit story");
      }
    } catch (error) {
      console.error("Error submitting story:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black relative">

      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050505]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />

        <main className="flex-1 relative w-full pt-16">

          {/* Hero Section */}
          <div className="w-full max-w-7xl mx-auto relative py-12 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[400px]">
            {/* Background Image for Hero */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <Image src="/helpinghands.png" alt="Hands" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#050505]"></div>
            </div>

            {/* Hero Left Content */}
            <div className="relative z-10 flex flex-col w-full lg:w-1/2">
              <div className="hero-animate flex items-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                <span className="text-[#d4af37] font-['--font-cinzel'] font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase">RK UNIVERSE CARE CIRCLE</span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              </div>

              <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-['--font-cinzel'] font-bold tracking-wider mb-6">
                SHARE <span className="text-[#d4af37]">YOUR STORY</span>
              </h1>

              <p className="hero-animate text-white/80 text-sm md:text-base leading-relaxed font-light mb-12 max-w-md">
                Help us understand genuine situations and create awareness through responsible storytelling.
              </p>

              <div className="hero-animate flex flex-wrap lg:flex-nowrap gap-6 md:gap-10">
                <div className="flex flex-col items-center lg:items-start">
                  <Heart className="w-8 h-8 text-[#d4af37] mb-2" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-1">REAL STORIES</span>
                  <span className="text-white/60 text-[9px]">Real People</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <Users className="w-8 h-8 text-[#d4af37] mb-2" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-1">COMMUNITY</span>
                  <span className="text-white/60 text-[9px]">Stronger Together</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-2" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-1">TRANSPARENCY</span>
                  <span className="text-white/60 text-[9px]">Trust & Integrity</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <Globe className="w-8 h-8 text-[#d4af37] mb-2" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-1">HUMANITY</span>
                  <span className="text-white/60 text-[9px]">One Family</span>
                </div>
              </div>
            </div>

            {/* Hero Right Quote */}
            <div className="hero-animate relative z-10 w-full lg:w-1/3 mt-12 lg:mt-0 flex justify-end">
              <div className="border border-white/10 rounded-lg p-6 bg-black/40 backdrop-blur-sm relative max-w-xs">
                <div className="text-[#d4af37] text-4xl font-serif absolute top-2 left-4">“</div>
                <p className="text-white/90 text-sm md:text-base italic leading-relaxed font-serif px-6 py-2">
                  Every story has the power to inspire, bring hope and connect humanity.
                </p>
                <div className="text-[#d4af37] text-4xl font-serif absolute bottom-[-10px] right-4">”</div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="form-wrapper w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 pt-8">
            {!submitted ? (
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/30 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden">
                <div className="h-1 w-full bg-black">
                  <div
                    className="h-full bg-[#d4af37] transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  ></div>
                </div>

                <div className="p-8 md:p-12">
                  {/* Step Indicator */}
                  <div className="flex items-center justify-between mb-10 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 -translate-y-1/2"></div>
                    {STEPS.map((step) => (
                      <div 
                        key={step.id} 
                        onClick={() => handleStepClick(step.id)}
                        className="flex flex-col items-center gap-2 relative bg-[#0a0a0a] px-2 z-10 cursor-pointer group"
                      >
                        <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs transition-all duration-300 ${currentStep === step.id ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-110"
                            : currentStep > step.id ? "bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] group-hover:bg-[#d4af37]/30"
                              : "bg-black border border-white/20 text-white/40 group-hover:border-white/50"
                          }`}>
                          {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                    <div ref={stepContainerRef} className="min-h-[350px]">
                      {/* Step Header */}
                      <div className="mb-8">
                        <h3 className="text-[#d4af37] font-bold text-lg tracking-widest uppercase mb-1">{STEPS[currentStep - 1].title}</h3>
                        <p className="text-white/50 text-xs">{STEPS[currentStep - 1].subtitle}</p>
                      </div>

                      {/* --- STEP 1: Basic Info --- */}
                      {currentStep === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                            <input
                              {...register("fullName")}
                              placeholder="Enter full name"
                              className={`w-full bg-black/50 border rounded p-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors ${errors.fullName ? "border-red-500" : "border-white/10"}`}
                            />
                            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Relationship with person needing support <span className="text-red-500">*</span></label>
                            <select
                              {...register("relationship")}
                              className={`w-full bg-black/50 border rounded p-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors appearance-none ${errors.relationship ? "border-red-500" : "border-white/10"}`}
                            >
                              <option value="" className="bg-[#111]">Select relationship</option>
                              <option value="self" className="bg-[#111]">Self</option>
                              <option value="family" className="bg-[#111]">Family Member</option>
                              <option value="friend" className="bg-[#111]">Friend</option>
                              <option value="other" className="bg-[#111]">Other</option>
                            </select>
                            {errors.relationship && <p className="text-red-500 text-xs">{errors.relationship.message}</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Contact Number <span className="text-red-500">*</span></label>
                            <div className={`flex border rounded overflow-hidden focus-within:border-[#d4af37] transition-colors bg-black/50 ${errors.contactNumber ? "border-red-500" : "border-white/10"}`}>
                              <div className="px-4 py-3 flex items-center gap-2 border-r border-white/10">
                                <span className="text-sm">🇮🇳 +91</span>
                              </div>
                              <input
                                {...register("contactNumber")}
                                placeholder="Enter mobile number"
                                className="w-full bg-transparent p-3 text-sm text-white placeholder-white/30 focus:outline-none"
                              />
                            </div>
                            {errors.contactNumber && <p className="text-red-500 text-xs">{errors.contactNumber.message}</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Email Address (Optional)</label>
                            <input
                              {...register("email")}
                              placeholder="Enter email address"
                              className={`w-full bg-black/50 border rounded p-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors ${errors.email ? "border-red-500" : "border-white/10"}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <label className="text-white/80 text-sm font-medium">City / State / Country <span className="text-red-500">*</span></label>
                            <input
                              {...register("city")}
                              placeholder="Enter your city / state / country"
                              className={`w-full bg-black/50 border rounded p-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors ${errors.city ? "border-red-500" : "border-white/10"}`}
                            />
                            {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
                          </div>
                        </div>
                      )}

                      {/* --- STEP 2: Story Info --- */}
                      {currentStep === 2 && (
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <label className="text-white/80 text-sm font-medium">Category <span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {categories.map((cat, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => setValue("category", cat.name, { shouldValidate: true })}
                                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border text-sm cursor-pointer transition-all duration-300 text-center ${categoryValue === cat.name ? 'border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_15px_rgba(212,175,55,0.15)] scale-[1.02]' : 'border-white/10 hover:border-white/30 bg-black/40'}`}
                                >
                                  <cat.icon className={`w-6 h-6 ${categoryValue === cat.name ? 'text-[#d4af37]' : 'text-white/50'}`} />
                                  <span className={categoryValue === cat.name ? 'text-white font-medium' : 'text-white/70'}>{cat.name}</span>
                                </div>
                              ))}
                            </div>
                            {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium flex justify-between">
                              <span>Brief Description <span className="text-red-500">*</span></span>
                              <span className="text-white/40">{storyDesc.length}/1000</span>
                            </label>
                            <p className="text-white/40 text-[10px] mb-2 leading-relaxed">Please explain your situation, requirement, background and any relevant information.</p>
                            <textarea
                              {...register("storyDescription")}
                              placeholder="Write your story here..."
                              rows={6}
                              className={`w-full bg-black/50 border rounded p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none ${errors.storyDescription ? "border-red-500" : "border-white/10"}`}
                            ></textarea>
                            {errors.storyDescription && <p className="text-red-500 text-xs">{errors.storyDescription.message}</p>}
                          </div>
                        </div>
                      )}

                      {/* --- STEP 3: Verification --- */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { label: "Identity Proof", key: "identityProof", value: identityProof },
                              { label: "Relevant Documents", key: "relevantDocs", value: relevantDocs },
                              { label: "Hospital / Institution Documents", key: "hospitalDocs", value: hospitalDocs },
                              { label: "Other Supporting Info", key: "otherDocs", value: otherDocs }
                            ].map((doc, idx) => (
                              <div key={idx} className="relative flex items-center justify-between border border-white/10 rounded-lg p-5 hover:border-[#d4af37]/50 bg-black/40 cursor-pointer transition-all group overflow-hidden">
                                <input
                                  type="file"
                                  {...register(doc.key as any)}
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                                    <FileText className="w-5 h-5 text-[#d4af37]" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-white/90 font-medium mb-1">{doc.label}</div>
                                    <div className="text-xs text-white/40 flex items-center gap-1 group-hover:text-[#d4af37] transition-colors">
                                      {doc.value && doc.value.length > 0 ? doc.value[0].name : "Upload document"}
                                    </div>
                                  </div>
                                </div>
                                <UploadCloud className="w-5 h-5 text-white/20 group-hover:text-[#d4af37] transition-colors relative z-0" />
                              </div>
                            ))}
                          </div>

                          <div className="border border-[#d4af37]/30 rounded-lg p-5 bg-[#d4af37]/5 mt-4">
                            <div className="flex items-center gap-2 mb-2">
                              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                              <span className="text-[#d4af37] text-[11px] font-bold uppercase tracking-widest">Note</span>
                            </div>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Please share only necessary information. Sensitive personal information will be handled responsibly.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* --- STEP 4: Preferred Contact --- */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactMethods.map((method, idx) => (
                              <div
                                key={idx}
                                onClick={() => setValue("contactPreference", method.name, { shouldValidate: true })}
                                className={`flex items-center gap-4 border rounded-lg p-5 cursor-pointer transition-all duration-300 bg-black/40 ${contactPreferenceValue === method.name ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-white/10 hover:border-white/30'}`}
                              >
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${contactPreferenceValue === method.name ? 'border-[#d4af37]' : 'border-white/40'}`}>
                                  {contactPreferenceValue === method.name && <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>}
                                </div>
                                <method.icon className={`w-5 h-5 ${contactPreferenceValue === method.name ? 'text-[#d4af37]' : 'text-white/40'}`} />
                                <span className={`text-sm ${contactPreferenceValue === method.name ? 'text-white font-medium' : 'text-white/70'}`}>{method.name}</span>
                              </div>
                            ))}
                          </div>
                          {errors.contactPreference && <p className="text-red-500 text-[10px]">{errors.contactPreference.message}</p>}

                          <div className="border border-[#d4af37]/30 rounded-lg p-6 bg-transparent relative mt-8">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37] rounded-l-lg"></div>
                            <h4 className="text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-2 ml-2">IMPORTANT</h4>
                            <p className="text-white/70 text-xs leading-relaxed ml-2">
                              RK Universe Care Circle is an awareness platform. We do not collect, request, handle or distribute any funds or donations.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* --- STEP 5: Consent --- */}
                      {currentStep === 5 && (
                        <div className="space-y-6">
                          <div className="bg-black/40 border border-white/5 rounded-lg p-6 space-y-5">
                            {[
                              { key: "consentTrue", text: "I confirm that the information provided by me is true and accurate to the best of my knowledge." },
                              { key: "consentReview", text: "I authorize RK Universe Care Circle to review my submitted information for awareness and community connection purposes." },
                              { key: "consentNoFunds", text: "I understand that RK Universe Care Circle is an awareness platform and does not collect, receive, manage, or distribute funds." },
                              { key: "consentNoGuarantee", text: "I understand that sharing a story does not guarantee any assistance or outcome." },
                              { key: "consentApproval", text: "I provide consent for my story/information to be used only after confirmation and approval." }
                            ].map((consent, idx) => (
                              <div key={idx} className="flex items-start gap-4 cursor-pointer group">
                                <div className="pt-1">
                                  <input
                                    type="checkbox"
                                    {...register(consent.key as keyof FormValues)}
                                    className="w-4 h-4 rounded border-white/30 text-[#d4af37] focus:ring-[#d4af37] bg-black accent-[#d4af37]"
                                  />
                                </div>
                                <label className="text-white/70 text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-colors cursor-pointer w-full">
                                  {consent.text}
                                </label>
                              </div>
                            ))}
                          </div>
                          {Object.keys(errors).some(k => k.startsWith("consent")) && (
                            <p className="text-red-500 text-xs">Please agree to all declarations to proceed.</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-8">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 border border-white/20 rounded-md text-white/70 hover:text-white hover:border-white/50 transition-all text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" /> BACK
                        </button>
                      ) : <div></div>}

                      {currentStep < 5 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3 bg-[#d4af37] text-black rounded-md hover:bg-[#e5c158] transition-all text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        >
                          NEXT STEP <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-8 py-3 bg-gradient-to-r from-[#b3952f] to-[#e5c158] text-black rounded-md transition-all text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                        >
                          <UploadCloud className="w-4 h-4 fill-current" /> {isSubmitting ? "SUBMITTING..." : "SUBMIT STORY"}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4 w-full relative">
                
                {/* Logo */}
                <div className="mb-6 relative w-48 h-48">
                  <Image src="/rkcarecirelelogo.png" alt="RK Universe Care Circle" fill className="object-contain" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-['--font-cinzel'] text-[#d4af37] mb-4 font-bold tracking-widest uppercase text-center drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  THANK YOU!
                </h2>
                <h3 className="text-sm md:text-lg text-white mb-8 tracking-[0.2em] font-serif uppercase text-center font-bold">
                  YOUR STORY HAS BEEN SUBMITTED
                </h3>
                
                {/* Decorative Separator */}
                <div className="flex items-center justify-center gap-4 mb-8 w-full max-w-md mx-auto opacity-70">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] shrink-0"></div>
                  <div className="h-[1px] w-48 bg-[#d4af37]/30"></div>
                  <div className="w-2 h-2 rotate-45 bg-[#d4af37] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                  <div className="h-[1px] w-48 bg-[#d4af37]/30"></div>
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] shrink-0"></div>
                </div>
                
                <div className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12 font-serif text-center">
                  <p className="mb-2">We appreciate your trust in sharing your story with<br className="hidden md:block" /> RK Universe Care Circle.</p>
                  <p>Your voice matters. Your story can inspire change.</p>
                </div>

             
                
                {/* Contact Box */}
                <div className="border border-[#d4af37]/30 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-transparent text-center md:text-left max-w-2xl mx-auto mb-16 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#d4af37] flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#d4af37] font-bold tracking-[0.1em] text-[13px] md:text-sm uppercase mb-2">OUR TEAM WILL CONTACT YOU SHORTLY</h4>
                    <p className="text-white/80 text-sm md:text-[15px] leading-relaxed font-serif">
                      Our team carefully reviews every story.<br className="hidden md:block" /> You will hear from us soon.
                    </p>
                  </div>
                </div>
                
                {/* Glowing line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent relative mb-12 max-w-4xl mx-auto">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[2px] bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
                </div>

                {/* Badges inline */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl mx-auto mb-12">
                  <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <div className="w-10 h-10 rounded border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-bold text-[10px] tracking-widest uppercase mb-1">PRIVACY FIRST</h4>
                      <p className="text-white/60 text-[10px] leading-relaxed">Your privacy is our priority. We never share your information without consent.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <div className="w-10 h-10 rounded border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-bold text-[10px] tracking-widest uppercase mb-1">SECURE & SAFE</h4>
                      <p className="text-white/60 text-[10px] leading-relaxed">All data is protected with high security standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <div className="w-10 h-10 rounded border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-bold text-[10px] tracking-widest uppercase mb-1">RESPONSIBLE REVIEW</h4>
                      <p className="text-white/60 text-[10px] leading-relaxed">Every story is reviewed responsibly and with care.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <div className="w-10 h-10 rounded border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-bold text-[10px] tracking-widest uppercase mb-1">HUMANITY DRIVEN</h4>
                      <p className="text-white/60 text-[10px] leading-relaxed">We connect stories with communities through awareness, not finance.</p>
                    </div>
                  </div>
                </div>

                {/* Footer Box */}
                <div className="w-full max-w-5xl mx-auto border border-[#d4af37]/30 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a0a0a] mb-12">
                  <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 relative">
                      <Users className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
                      <Heart className="w-4 h-4 text-[#d4af37] absolute -top-1 -right-1" strokeWidth={2} fill="#d4af37" />
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-bold tracking-[0.1em] text-[12px] md:text-sm uppercase mb-1">TOGETHER, WE CREATE A BETTER TOMORROW</h4>
                      <p className="text-white/80 text-[11px] md:text-sm font-serif">One Community. One Heart. One Humanity.</p>
                    </div>
                  </div>
                  <Link href="/" className="px-6 py-3 bg-gradient-to-r from-[#b3952f] to-[#e5c158] text-black rounded font-bold text-[11px] tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                    <Home className="w-4 h-4" /> RETURN TO HOME
                  </Link>
                </div>

                <button onClick={() => { setSubmitted(false); setSubmittedData(null); setCurrentStep(1); }} className="text-[#d4af37]/70 text-[10px] font-bold tracking-widest uppercase hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37]/50 pb-1">
                  Submit Another Story
                </button>

              </div>
            )}
          </div>

          {/* Bottom Badges */}
          {!submitted && (
            <div className="badges-container w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-8">
              <div className="badge-item flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md border border-[#d4af37] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-bold text-[11px] tracking-widest uppercase mb-1.5">PRIVACY FIRST</h4>
                  <p className="text-white/60 text-[9px] leading-relaxed">Your privacy is our priority. Information is never shared publicly without consent.</p>
                </div>
              </div>

              <div className="badge-item flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md border border-[#d4af37] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-bold text-[11px] tracking-widest uppercase mb-1.5">SECURE & SAFE</h4>
                  <p className="text-white/60 text-[9px] leading-relaxed">All data is encrypted and handled with the highest security standards.</p>
                </div>
              </div>

              <div className="badge-item flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md border border-[#d4af37] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-bold text-[11px] tracking-widest uppercase mb-1.5">RESPONSIBLE REVIEW</h4>
                  <p className="text-white/60 text-[9px] leading-relaxed">Our team reviews every story carefully before any awareness sharing.</p>
                </div>
              </div>

              <div className="badge-item flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md border border-[#d4af37] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-bold text-[11px] tracking-widest uppercase mb-1.5">HUMANITY DRIVEN</h4>
                  <p className="text-white/60 text-[9px] leading-relaxed">We connect stories with communities through awareness, not through financial support.</p>
                </div>
              </div>
              </div>
            </div>
          )}

        </main>

        <Footer />
      </div>
    </div>
  );
}
