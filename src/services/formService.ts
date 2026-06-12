import { supabase } from '../lib/supabase'

import { ContactFormData } from '../types'

export const formService = {
  /**
   * Envoie les données du formulaire à Supabase
   * @param data Les données du formulaire validées
   * @param source Optionnel: source de la landing page (ex: ?utm_source=fb)
   * @returns Un objet contenant les données insérées ou une erreur
   */
  async submitLead(data: ContactFormData, source?: string) {
    try {
      const { error } = await supabase
        .from('domaine_elegance_form')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          event_type: data.eventType,
          event_date: data.eventDate || null,
          guests: data.guests || null,
          source: source || 'landing_page_v4', // Source par défaut si non spécifiée
          // id, created_at, status sont gérés automatiquement par la DB
        }])

      if (error) {
        console.error("Erreur lors de l'insertion Supabase:", error)
        throw new Error(error.message)
      }

      return { success: true }
    } catch (err: any) {
      console.error("Erreur dans formService:", err)
      return { success: false, error: err.message || "Une erreur est survenue" }
    }
  },

  /**
   * Envoie les données de demande de brochure WhatsApp à Supabase
   */
  async submitBrochureRequest(data: { name: string; whatsapp_number: string; botField?: string }) {
    try {
      const { error } = await supabase
        .from('domaine_elegance_brochure')
        .insert([{
          name: data.name,
          whatsapp_number: data.whatsapp_number,
          // id, created_at, status sont gérés automatiquement par la DB
        }])

      if (error) {
        console.error("Erreur lors de l'insertion Supabase (brochure):", error)
        throw new Error(error.message)
      }

      return { success: true }
    } catch (err: any) {
      console.error("Erreur dans formService (brochure):", err)
      return { success: false, error: err.message || "Une erreur est survenue" }
    }
  }
}
