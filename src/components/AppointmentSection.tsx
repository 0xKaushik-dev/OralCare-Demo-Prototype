import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  LucideIcon,
  PlusIcon,
  Clock,
  Shield,
  Phone,
  ArrowRight
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

const ContactCard = ({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) => {
  return (
    <div
      className={cn(
        'bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden',
        className,
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-primary" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-primary" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-primary" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-primary" />
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-6 py-12 md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl font-[Sora]">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          'bg-muted/30 flex h-full w-full items-center border-t p-8 md:col-span-1 md:border-t-0 md:border-l',
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn('flex items-center gap-3 py-1', className)} {...props}>
      <div className="bg-primary/10 rounded-lg p-3">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-medium text-sm">{label}</p>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  );
}

const AppointmentSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", service: "", date: "", time: "" });
  };

  const contactDetails = [
    {
      icon: Clock,
      label: "Quick Response",
      value: "Within 24 hours"
    },
    {
      icon: Shield,
      label: "Dental Care",
      value: "Personalized Plan"
    },
    {
      icon: Phone,
      label: "Emergency",
      value: "+1 (555) 000-0000"
    }
  ];

  return (
    <section id="appointment" className="py-24 bg-background px-6">
      <div className="max-w-6xl mx-auto">
        <ContactCard
          title="Book Your Appointment"
          description="Ready for a perfect smile? Fill out the form below to request an appointment. Our team will get back to you to confirm the time."
          contactInfo={contactDetails}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-background border rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full bg-background border rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
              className="w-full bg-background border rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm appearance-none"
            >
              <option value="">Select Service</option>
              <option value="general">General Dentistry</option>
              <option value="orthodontics">Orthodontics</option>
              <option value="cosmetic">Cosmetic Dentistry</option>
              <option value="surgery">Oral Surgery</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
                className="w-full bg-background border rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              />
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
                className="w-full bg-background border rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-2"
            >
              Submit Appointment <ArrowRight size={18} />
            </button>
          </form>
        </ContactCard>
      </div>
    </section>
  );
};

export default AppointmentSection;
