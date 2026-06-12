export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      domaine_elegance_form: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          event_type: string
          event_date: string | null
          guests: string | null
          source: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          event_type: string
          event_date?: string | null
          guests?: string | null
          source?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          event_type?: string
          event_date?: string | null
          guests?: string | null
          source?: string | null
          status?: string
        }
        Relationships: []
      }
      domaine_elegance_brochure: {
        Row: {
          id: string
          created_at: string
          name: string
          whatsapp_number: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          whatsapp_number: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          whatsapp_number?: string
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
