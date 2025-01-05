'use client'

import { useState } from 'react'

export default function Contact() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitMessage('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.')
    }
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-primary-light section-animation">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-dark typing-animation">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-accent p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-text-dark font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-text-dark bg-primary-light border border-primary rounded-lg focus:outline-none focus:border-primary-dark transition duration-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-text-dark font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-text-dark bg-primary-light border border-primary rounded-lg focus:outline-none focus:border-primary-dark transition duration-300"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-text-dark font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-text-dark bg-primary-light border border-primary rounded-lg focus:outline-none focus:border-primary-dark transition duration-300"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent hover:bg-accent/80 text-text-dark font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="text-primary-dark font-semibold">{submitMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

