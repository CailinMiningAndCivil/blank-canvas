export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          category: string | null
          content: string | null
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          published: boolean
          published_at: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          read: boolean
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          read?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          read?: boolean
        }
        Relationships: []
      }
      discovery_call_submissions: {
        Row: {
          created_at: string
          email: string
          full_name: string
          has_flights_or_visa: boolean
          id: string
          is_english_fluent: boolean
          phone: string
          qualified: boolean
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          has_flights_or_visa: boolean
          id?: string
          is_english_fluent: boolean
          phone: string
          qualified?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          has_flights_or_visa?: boolean
          id?: string
          is_english_fluent?: boolean
          phone?: string
          qualified?: boolean
        }
        Relationships: []
      }
      haul_truck_applications: {
        Row: {
          created_at: string
          email: string
          evidence_file_path: string | null
          experience_details: string | null
          full_name: string
          has_hr_licence: boolean | null
          hr_licence_file_path: string | null
          id: string
          machines_operated: string | null
          phone: string
          postcode: string | null
          previous_experience: boolean
          qualified: boolean
          source: string | null
        }
        Insert: {
          created_at?: string
          email: string
          evidence_file_path?: string | null
          experience_details?: string | null
          full_name: string
          has_hr_licence?: boolean | null
          hr_licence_file_path?: string | null
          id?: string
          machines_operated?: string | null
          phone: string
          postcode?: string | null
          previous_experience: boolean
          qualified?: boolean
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          evidence_file_path?: string | null
          experience_details?: string | null
          full_name?: string
          has_hr_licence?: boolean | null
          hr_licence_file_path?: string | null
          id?: string
          machines_operated?: string | null
          phone?: string
          postcode?: string | null
          previous_experience?: boolean
          qualified?: boolean
          source?: string | null
        }
        Relationships: []
      }
      logbook_entries: {
        Row: {
          competency: string | null
          created_at: string
          hours: number | null
          id: string
          machine: string | null
          notes: string | null
          session_date: string
          session_type: string
          sign_token: string
          signed_at: string | null
          signed_ip: string | null
          status: string
          student_id: string
          token_expires_at: string
          trainer_id: string | null
          trainer_name: string | null
          trainer_signature_path: string | null
          updated_at: string
        }
        Insert: {
          competency?: string | null
          created_at?: string
          hours?: number | null
          id?: string
          machine?: string | null
          notes?: string | null
          session_date?: string
          session_type: string
          sign_token?: string
          signed_at?: string | null
          signed_ip?: string | null
          status?: string
          student_id: string
          token_expires_at?: string
          trainer_id?: string | null
          trainer_name?: string | null
          trainer_signature_path?: string | null
          updated_at?: string
        }
        Update: {
          competency?: string | null
          created_at?: string
          hours?: number | null
          id?: string
          machine?: string | null
          notes?: string | null
          session_date?: string
          session_type?: string
          sign_token?: string
          signed_at?: string | null
          signed_ip?: string | null
          status?: string
          student_id?: string
          token_expires_at?: string
          trainer_id?: string | null
          trainer_name?: string | null
          trainer_signature_path?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "logbook_entries_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logbook_entries_trainer_id_fkey"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "trainers"
            referencedColumns: ["id"]
          },
        ]
      }
      refresher_training_requests: {
        Row: {
          acknowledged: boolean
          created_at: string
          email: string
          full_name: string
          id: string
          machine: string
          notes: string | null
          phone: string
        }
        Insert: {
          acknowledged?: boolean
          created_at?: string
          email: string
          full_name: string
          id?: string
          machine: string
          notes?: string | null
          phone: string
        }
        Update: {
          acknowledged?: boolean
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          machine?: string
          notes?: string | null
          phone?: string
        }
        Relationships: []
      }
      returning_student_submissions: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          matched: boolean
          selected_machine: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          matched?: boolean
          selected_machine?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          matched?: boolean
          selected_machine?: string | null
        }
        Relationships: []
      }
      signature_extraction_errors: {
        Row: {
          contact_id: string
          created_at: string
          email: string | null
          error: string
          id: string
          name: string | null
        }
        Insert: {
          contact_id: string
          created_at?: string
          email?: string | null
          error: string
          id?: string
          name?: string | null
        }
        Update: {
          contact_id?: string
          created_at?: string
          email?: string | null
          error?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      student_logbook_errors: {
        Row: {
          created_at: string
          error: string
          ghl_contact_id: string | null
          id: string
          student_id: string | null
        }
        Insert: {
          created_at?: string
          error: string
          ghl_contact_id?: string | null
          id?: string
          student_id?: string | null
        }
        Update: {
          created_at?: string
          error?: string
          ghl_contact_id?: string | null
          id?: string
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_logbook_errors_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          created_at: string
          email: string | null
          full_name: string
          ghl_contact_id: string | null
          id: string
          logbook_token: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name: string
          ghl_contact_id?: string | null
          id?: string
          logbook_token?: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string
          ghl_contact_id?: string | null
          id?: string
          logbook_token?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      trainers: {
        Row: {
          active: boolean
          created_at: string
          full_name: string
          id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          full_name: string
          id?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          full_name?: string
          id?: string
          updated_at?: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
