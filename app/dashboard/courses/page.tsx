"use client";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabase"; // Ensure this path is correct

interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  video_url?: string;
  chapters: { title: string; timestamp: number; duration: string }[];
  documents: string[];
}

interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  status: "Not Started" | "In Progress" | "Completed";
  certificate_id?: string;
}

interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  course_id: string;
  text: string;
  timestamp: string;
}

const EducationalCoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!supabase) {
        console.error("Supabase client is not initialized");
        return;
      }

      const fetchCourses = async () => {
        const { data, error } = await supabase.from("courses").select("*");
        if (error) {
          console.error("Error fetching courses:", error.message);
          // Fallback to empty array if table doesn't exist yet
          setCourses([]);
        } else {
          setCourses(data || []);
        }
      };

      const fetchEnrollments = async () => {
        const { data: session } = await supabase.auth.getSession();
        if (session?.session?.user?.id) {
          const { data, error } = await supabase
            .from("enrollments")
            .select("*")
            .eq("user_id", session.session.user.id);
          if (error) console.error("Error fetching enrollments:", error.message);
          else setEnrollments(data || []);
        }
      };

      const fetchMessages = async () => {
        if (selectedCourseId) {
          const { data, error } = await supabase
            .from("messages")
            .select("*")
            .eq("course_id", selectedCourseId)
            .order("timestamp", { ascending: true });
          if (error) console.error("Error fetching messages:", error.message);
          else setMessages(data || []);
        }
      };

      await Promise.all([fetchCourses(), fetchEnrollments(), fetchMessages()]);
    };

    fetchData();
  }, [selectedCourseId]);

  useEffect(() => {
    videoRefs.current = Array(courses.length).fill(null);
  }, [courses.length]);

  const handleEnroll = async (courseId: string) => {
    if (!supabase) {
      console.error("Supabase client is not initialized");
      return;
    }
    const { data: session } = await supabase.auth.getSession();
    if (session?.session?.user?.id) {
      const { error } = await supabase.from("enrollments").insert({
        user_id: session.session.user.id,
        course_id: courseId,
        status: "Not Started",
      });
      if (error) console.error("Error enrolling:", error.message);
      else await fetchEnrollments();
    }
  };

  const handleComplete = async (enrollmentId: string) => {
    if (!supabase) {
      console.error("Supabase client is not initialized");
      return;
    }
    const certificateId = `CERT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const { error } = await supabase
      .from("enrollments")
      .update({ status: "Completed", certificate_id: certificateId })
      .eq("id", enrollmentId);
    if (error) console.error("Error completing course:", error.message);
    else await fetchEnrollments();
  };

  const handleSendMessage = async () => {
    if (!supabase) {
      console.error("Supabase client is not initialized");
      return;
    }
    const { data: session } = await supabase.auth.getSession();
    if (session?.session?.user?.id && selectedCourseId && newMessage.trim()) {
      const { error } = await supabase.from("messages").insert({
        sender_id: session.session.user.id,
        recipient_id: "admin-id", // Replace with actual trainer/admin ID
        course_id: selectedCourseId,
        text: newMessage,
        timestamp: new Date().toISOString(),
      });
      if (error) console.error("Error sending message:", error.message);
      else {
        setNewMessage("");
        await fetchMessages();
      }
    }
  };

  const handleChapterClick = (courseIndex: number, timestamp: number) => {
    const videoElement = videoRefs.current[courseIndex];
    if (videoElement) {
      videoElement.currentTime = timestamp;
      videoElement.play().catch((error) => console.error("Error playing video:", error));
    }
  };

  const fetchEnrollments = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (session?.session?.user?.id) {
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", session.session.user.id);
      if (error) console.error("Error fetching enrollments:", error.message);
      else setEnrollments(data || []);
    }
  };

  const fetchMessages = async () => {
    if (selectedCourseId) {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("course_id", selectedCourseId)
        .order("timestamp", { ascending: true });
      if (error) console.error("Error fetching messages:", error.message);
      else setMessages(data || []);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Educational Courses</h1>
        <div className="grid gap-8">
          {courses.length > 0 ? (
            courses.map((course, index) => {
              const enrollment = enrollments.find((e) => e.course_id === course.id);
              return (
                <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900">{course.title}</h2>
                    <p className="text-gray-600 mt-2">Instructor: {course.instructor}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">★ {course.rating}</span>
                      <span className="ml-2 text-gray-500">({course.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-700 mt-4">{course.description}</p>
                    {course.video_url && (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        controls
                        className="mt-4 w-full rounded"
                      >
                        <source src={course.video_url} type="video/mp4" />
                        Your browser does not support video.
                      </video>
                    )}
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">Chapters</h3>
                      <ul className="mt-2 space-y-2">
                        {course.chapters.map((chapter, i) => (
                          <li key={i} className="text-gray-600">
                            <button
                              onClick={() => handleChapterClick(index, chapter.timestamp)}
                              className="text-indigo-600 hover:text-indigo-800"
                            >
                              {chapter.title} ({chapter.duration})
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {course.documents.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">Documents</h3>
                        <ul className="mt-2 space-y-1">
                          {course.documents.map((doc, i) => (
                            <li key={i} className="text-gray-600">
                              <a href={`/documents/${doc}`} className="text-indigo-600 hover:text-indigo-800">
                                {doc}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-6">
                      <p className="text-lg font-medium text-gray-900">
                        {course.price === 0 ? "Free" : `$${course.price}`}
                      </p>
                      {enrollment ? (
                        enrollment.status === "Completed" ? (
                          <p className="text-green-600 mt-2">
                            Completed! Certificate ID: {enrollment.certificate_id || "N/A"}
                          </p>
                        ) : enrollment.status === "In Progress" ? (
                          <button
                            onClick={() => handleComplete(enrollment.id)}
                            className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                          >
                            Complete Course
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEnroll(course.id)}
                            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                          >
                            Continue Course
                          </button>
                        )
                      ) : (
                        <button
                          onClick={() => handleEnroll(course.id)}
                          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                          Enroll Now
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setSelectedCourseId(course.id);
                          setIsChatOpen(true);
                        }}
                        className="mt-2 ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Chat with Instructor
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600">No courses available. Please check back later or contact the admin.</p>
          )}
        </div>

        {isChatOpen && selectedCourseId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Chat with Instructor</h3>
              <div className="h-64 overflow-y-auto mb-4 border border-gray-200 p-2">
                {messages.map((msg) => (
                  <div key={msg.id} className="mb-2">
                    <p className="text-gray-700">{msg.text}</p>
                    <p className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</p>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalCoursesPage;