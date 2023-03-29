'use client';

import { useForm, ValidationError } from '@formspree/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xgebnvaw');

  if (state.succeeded) {
    return (
      <p className="mt-8 text-lg font-bold text-slate-700">
        🎉 Message sent successfully!
      </p>
    );
  }

  return (
    <form
      className="mt-8"
      name="contact"
      onSubmit={handleSubmit}
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputWithLabel id="name" label="Name" required />
      <InputWithLabel
        className="mt-4"
        id="email"
        label="Email"
        type="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="flex flex-col gap-1 mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className={clsx(
            'px-4 py-3 focus:ring-slate-500 focus:border-slate-500 block sm:text-sm border border-gray-300 shadow-sm rounded w-full'
          )}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" className="mt-4 btn primary">
        <PaperAirplaneIcon className="w-5 h-5 inline-block" />
        Send Message
      </button>
    </form>
  );
}

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

function InputWithLabel({
  id,
  label,
  className,
  ...props
}: InputWithLabelProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        name={id}
        id={id}
        className={clsx(
          'px-4 py-3 focus:ring-slate-500 focus:border-slate-500 block sm:text-sm border border-gray-300 shadow-sm rounded w-full'
        )}
        {...props}
      />
    </div>
  );
}
