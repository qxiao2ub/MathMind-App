import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AppLayout } from "@/components/layout/AppLayout";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { PublicOnlyRoute } from "@/routes/PublicOnlyRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import YearTopics from "./pages/YearTopics";
import TopicDetail from "./pages/TopicDetail";
import LessonDetail from "./pages/LessonDetail";
import TopicQuiz from "./pages/TopicQuiz";
import CategoryQuiz from "./pages/CategoryQuiz";
import Quiz from "./pages/Quiz";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthCallback from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";
import HistoryPage from "./pages/History";
import Community from "./pages/Community";
import CommunityPostDetail from "./pages/CommunityPostDetail";
import MyQuestions from "./pages/MyQuestions";

import Leaderboard from "./pages/Leaderboard";
import { GamificationFeedback } from "@/components/gamification/GamificationFeedback";
import { DailyLoginRewards } from "@/components/gamification/DailyLoginRewards";

const queryClient = new QueryClient();

function ProtectedAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <AppLayout>{children}</AppLayout>
    </ProtectedRoute>
  );
}

// Open browsing — no auth required. Used for Dashboard, Learn, year/topic
// browsing, and Community feed. Gated actions inside these pages still
// trigger sign-in via ProtectedRoute on the destination route.
function BrowseAppLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <GamificationFeedback />
          <DailyLoginRewards />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
            <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            {/* Dashboard requires sign-in */}
            <Route path="/dashboard" element={<ProtectedAppLayout><Dashboard /></ProtectedAppLayout>} />
            <Route path="/learn" element={<BrowseAppLayout><Learn /></BrowseAppLayout>} />
            <Route path="/learn/:yearId" element={<BrowseAppLayout><YearTopics /></BrowseAppLayout>} />
            <Route path="/learn/:yearId/:topicId" element={<BrowseAppLayout><TopicDetail /></BrowseAppLayout>} />
            <Route path="/community" element={<BrowseAppLayout><Community /></BrowseAppLayout>} />


            {/* Gated — require sign-in (preserves redirect) */}
            <Route path="/learn/:yearId/:topicId/lesson/:lessonIndex" element={<ProtectedAppLayout><LessonDetail /></ProtectedAppLayout>} />
            <Route path="/learn/:yearId/:topicId/topic-quiz" element={<ProtectedAppLayout><TopicQuiz /></ProtectedAppLayout>} />
            <Route path="/learn/:yearId/category-quiz/:categoryId" element={<ProtectedAppLayout><CategoryQuiz /></ProtectedAppLayout>} />
            <Route path="/quiz" element={<ProtectedAppLayout><Quiz /></ProtectedAppLayout>} />
            <Route path="/practice" element={<ProtectedAppLayout><Practice /></ProtectedAppLayout>} />
            <Route path="/community/:postId" element={<ProtectedAppLayout><CommunityPostDetail /></ProtectedAppLayout>} />
            <Route path="/history" element={<ProtectedAppLayout><HistoryPage /></ProtectedAppLayout>} />
            <Route path="/profile" element={<ProtectedAppLayout><Profile /></ProtectedAppLayout>} />
            <Route path="/profile/my-questions" element={<ProtectedAppLayout><MyQuestions /></ProtectedAppLayout>} />
            <Route path="/leaderboard" element={<BrowseAppLayout><Leaderboard /></BrowseAppLayout>} />
            <Route path="/chat" element={<ProtectedAppLayout><Chat /></ProtectedAppLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
