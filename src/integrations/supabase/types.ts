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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_analysis: {
        Row: {
          analysis_type: string
          attempt_id: string | null
          content: Json
          created_at: string | null
          id: string
          topic_id: string | null
          user_id: string
        }
        Insert: {
          analysis_type: string
          attempt_id?: string | null
          content: Json
          created_at?: string | null
          id?: string
          topic_id?: string | null
          user_id: string
        }
        Update: {
          analysis_type?: string
          attempt_id?: string | null
          content?: Json
          created_at?: string | null
          id?: string
          topic_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ai_chat_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          role: string
          session_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          role: string
          session_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          role?: string
          session_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_sessions: {
        Row: {
          created_at: string | null
          id: string
          title: string | null
          topic_id: string | null
          topic_name: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          title?: string | null
          topic_id?: string | null
          topic_name?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          title?: string | null
          topic_id?: string | null
          topic_name?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ai_feedback_logs: {
        Row: {
          attempt_id: string | null
          created_at: string
          id: string
          latency_ms: number | null
          model: string
          source: string
          status: number
          topic_name: string
          user_id: string
        }
        Insert: {
          attempt_id?: string | null
          created_at?: string
          id?: string
          latency_ms?: number | null
          model: string
          source: string
          status: number
          topic_name: string
          user_id: string
        }
        Update: {
          attempt_id?: string | null
          created_at?: string
          id?: string
          latency_ms?: number | null
          model?: string
          source?: string
          status?: number
          topic_name?: string
          user_id?: string
        }
        Relationships: []
      }
      community_bookmarks: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_bookmarks_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_comment_likes: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "community_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      community_comments: {
        Row: {
          author_id: string
          author_name: string
          content: string
          created_at: string
          id: string
          is_accepted_answer: boolean
          likes_count: number
          parent_comment_id: string | null
          post_id: string
          updated_at: string
        }
        Insert: {
          author_id: string
          author_name?: string
          content: string
          created_at?: string
          id?: string
          is_accepted_answer?: boolean
          likes_count?: number
          parent_comment_id?: string | null
          post_id: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          author_name?: string
          content?: string
          created_at?: string
          id?: string
          is_accepted_answer?: boolean
          likes_count?: number
          parent_comment_id?: string | null
          post_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "community_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_post_likes: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          accepted_comment_id: string | null
          author_id: string
          author_name: string
          bookmarks_count: number
          comments_count: number
          created_at: string
          id: string
          image_url: string | null
          image_validation_reason: string | null
          image_validation_status: string
          is_solved: boolean
          likes_count: number
          question_text: string | null
          status_label: string
          title: string | null
          updated_at: string
        }
        Insert: {
          accepted_comment_id?: string | null
          author_id: string
          author_name?: string
          bookmarks_count?: number
          comments_count?: number
          created_at?: string
          id?: string
          image_url?: string | null
          image_validation_reason?: string | null
          image_validation_status?: string
          is_solved?: boolean
          likes_count?: number
          question_text?: string | null
          status_label?: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          accepted_comment_id?: string | null
          author_id?: string
          author_name?: string
          bookmarks_count?: number
          comments_count?: number
          created_at?: string
          id?: string
          image_url?: string | null
          image_validation_reason?: string | null
          image_validation_status?: string
          is_solved?: boolean
          likes_count?: number
          question_text?: string | null
          status_label?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      learn_activities: {
        Row: {
          chapter_name: string
          completion_percentage: number
          created_at: string
          duration_seconds: number
          id: string
          is_completed: boolean
          lesson_index: number
          lesson_name: string
          topic_id: string
          topic_name: string
          user_id: string
          year_level: string
        }
        Insert: {
          chapter_name: string
          completion_percentage?: number
          created_at?: string
          duration_seconds?: number
          id?: string
          is_completed?: boolean
          lesson_index?: number
          lesson_name: string
          topic_id: string
          topic_name: string
          user_id: string
          year_level: string
        }
        Update: {
          chapter_name?: string
          completion_percentage?: number
          created_at?: string
          duration_seconds?: number
          id?: string
          is_completed?: boolean
          lesson_index?: number
          lesson_name?: string
          topic_id?: string
          topic_name?: string
          user_id?: string
          year_level?: string
        }
        Relationships: []
      }
      practice_attempts: {
        Row: {
          correct_answer: string
          created_at: string
          difficulty: string
          hint_used: boolean
          id: string
          question_text: string
          solution_viewed: boolean
          time_taken_seconds: number | null
          topic_id: string | null
          topic_name: string
          user_answer: string | null
          user_id: string
          was_correct: boolean
        }
        Insert: {
          correct_answer: string
          created_at?: string
          difficulty: string
          hint_used?: boolean
          id?: string
          question_text: string
          solution_viewed?: boolean
          time_taken_seconds?: number | null
          topic_id?: string | null
          topic_name: string
          user_answer?: string | null
          user_id: string
          was_correct: boolean
        }
        Update: {
          correct_answer?: string
          created_at?: string
          difficulty?: string
          hint_used?: boolean
          id?: string
          question_text?: string
          solution_viewed?: boolean
          time_taken_seconds?: number | null
          topic_id?: string | null
          topic_name?: string
          user_answer?: string | null
          user_id?: string
          was_correct?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          display_name: string | null
          id: string
          last_studied_topic: string | null
          updated_at: string
          user_id: string
          year_level: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          last_studied_topic?: string | null
          updated_at?: string
          user_id: string
          year_level?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          last_studied_topic?: string | null
          updated_at?: string
          user_id?: string
          year_level?: string | null
        }
        Relationships: []
      }
      quiz_attempt_questions: {
        Row: {
          attempt_id: string
          chosen_answer: string | null
          correct_answer: string
          created_at: string
          error_type: string | null
          id: string
          question_text: string
          skill_tags: string[] | null
          skipped: boolean | null
          user_id: string
          was_correct: boolean
        }
        Insert: {
          attempt_id: string
          chosen_answer?: string | null
          correct_answer: string
          created_at?: string
          error_type?: string | null
          id?: string
          question_text: string
          skill_tags?: string[] | null
          skipped?: boolean | null
          user_id: string
          was_correct: boolean
        }
        Update: {
          attempt_id?: string
          chosen_answer?: string | null
          correct_answer?: string
          created_at?: string
          error_type?: string | null
          id?: string
          question_text?: string
          skill_tags?: string[] | null
          skipped?: boolean | null
          user_id?: string
          was_correct?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempt_questions_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "quiz_attempts"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          created_at: string
          id: string
          percentage: number
          quiz_type: string
          score: number
          skipped: number | null
          time_taken_seconds: number | null
          topic_id: string | null
          topic_name: string
          total: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          percentage: number
          quiz_type: string
          score: number
          skipped?: number | null
          time_taken_seconds?: number | null
          topic_id?: string | null
          topic_name: string
          total: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          percentage?: number
          quiz_type?: string
          score?: number
          skipped?: number | null
          time_taken_seconds?: number | null
          topic_id?: string | null
          topic_name?: string
          total?: number
          user_id?: string
        }
        Relationships: []
      }
      student_skill_profile: {
        Row: {
          last_activity_at: string | null
          mastery_by_topic: Json
          streak_days: number
          strength_skills: Json
          updated_at: string
          user_id: string
          weak_skills: Json
        }
        Insert: {
          last_activity_at?: string | null
          mastery_by_topic?: Json
          streak_days?: number
          strength_skills?: Json
          updated_at?: string
          user_id: string
          weak_skills?: Json
        }
        Update: {
          last_activity_at?: string | null
          mastery_by_topic?: Json
          streak_days?: number
          strength_skills?: Json
          updated_at?: string
          user_id?: string
          weak_skills?: Json
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_key: string
          id: string
          unlocked_at: string
          user_id: string
        }
        Insert: {
          badge_key: string
          id?: string
          unlocked_at?: string
          user_id: string
        }
        Update: {
          badge_key?: string
          id?: string
          unlocked_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_daily_goals: {
        Row: {
          created_at: string
          goal_date: string
          goal_xp: number
          id: string
          updated_at: string
          user_id: string
          xp_earned: number
        }
        Insert: {
          created_at?: string
          goal_date?: string
          goal_xp?: number
          id?: string
          updated_at?: string
          user_id: string
          xp_earned?: number
        }
        Update: {
          created_at?: string
          goal_date?: string
          goal_xp?: number
          id?: string
          updated_at?: string
          user_id?: string
          xp_earned?: number
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed: boolean | null
          created_at: string | null
          id: string
          lesson_index: number | null
          max_score: number | null
          score: number | null
          topic_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          lesson_index?: number | null
          max_score?: number | null
          score?: number | null
          topic_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          lesson_index?: number | null
          max_score?: number | null
          score?: number | null
          topic_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_streaks: {
        Row: {
          current_streak: number | null
          last_activity_date: string | null
          longest_streak: number | null
          streak_days: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          current_streak?: number | null
          last_activity_date?: string | null
          longest_streak?: number | null
          streak_days?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          current_streak?: number | null
          last_activity_date?: string | null
          longest_streak?: number | null
          streak_days?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_xp: {
        Row: {
          created_at: string
          last_login_date: string | null
          level: number
          month_start: string
          monthly_xp: number
          stars: number
          total_xp: number
          updated_at: string
          user_id: string
          week_start: string
          weekly_xp: number
        }
        Insert: {
          created_at?: string
          last_login_date?: string | null
          level?: number
          month_start?: string
          monthly_xp?: number
          stars?: number
          total_xp?: number
          updated_at?: string
          user_id: string
          week_start?: string
          weekly_xp?: number
        }
        Update: {
          created_at?: string
          last_login_date?: string | null
          level?: number
          month_start?: string
          monthly_xp?: number
          stars?: number
          total_xp?: number
          updated_at?: string
          user_id?: string
          week_start?: string
          weekly_xp?: number
        }
        Relationships: []
      }
      xp_events: {
        Row: {
          amount: number
          created_at: string
          id: string
          idempotency_key: string | null
          metadata: Json
          source: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          idempotency_key?: string | null
          metadata?: Json
          source: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          idempotency_key?: string | null
          metadata?: Json
          source?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      award_xp: {
        Args: {
          _amount: number
          _idempotency_key?: string
          _metadata?: Json
          _source: string
          _stars?: number
        }
        Returns: Json
      }
      calc_level: { Args: { _xp: number }; Returns: number }
      get_leaderboard: {
        Args: { _limit?: number; _scope?: string }
        Returns: {
          avatar_url: string
          display_name: string
          level: number
          stars: number
          streak: number
          user_id: string
          xp: number
        }[]
      }
      is_own_profile: { Args: { profile_user_id: string }; Returns: boolean }
      unlock_badge: { Args: { _badge_key: string }; Returns: Json }
      update_user_streak: { Args: { p_user_id: string }; Returns: undefined }
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
