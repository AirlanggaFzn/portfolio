"use client"

import type React from "react"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

type Errors = Partial<Record<"name" | "email" | "message", string>>

function validate(values: { name: string; email: string; message: string }): Errors {
  const errs: Errors = {}
  if (!values.name?.trim() || values.name.trim().length < 2) {
    errs.name = "Nama minimal 2 karakter."
  }
  const email = values.email?.trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errs.email = "Format email tidak valid."
  }
  if (!values.message?.trim() || values.message.trim().length < 10) {
    errs.message = "Pesan minimal 10 karakter."
  }
  return errs
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const values = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    }
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      return
    }
    setSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 900))
      toast({
        title: "Terima kasih!",
        description: "Pesan Anda telah terkirim (dummy).",
      })
      form.reset()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl" aria-label="Formulir kontak Nyanyaone Ticket" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="name">Nama</Label>
        <Input
          id="name"
          name="name"
          placeholder="Nama Anda"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={errors.name ? "border-destructive" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="email@contoh.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? "border-destructive" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Pesan</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tulis pesan Anda..."
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={errors.message ? "border-destructive" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <Button
          type="submit"
          className="bg-primary text-primary-foreground hover:opacity-90"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? "Mengirim..." : "Kirim Pesan"}
        </Button>
      </div>
    </form>
  )
}
