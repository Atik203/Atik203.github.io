// Newsletter subscription utility

export interface NewsletterSubscription {
  email: string;
  timestamp: Date;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  error?: string;
}

// API configuration - Uses environment variables
const API_BASE_URL = "https://my-portfolio-email-backend.vercel.app/api"; // Local development fallback

// Newsletter subscription using your backend API
export const subscribeToNewsletter = async (
  email: string
): Promise<NewsletterResponse> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "Invalid email format",
      };
    }

    // Check if already subscribed (localStorage check for better UX)
    if (isEmailSubscribed(email)) {
      return {
        success: false,
        message: "This email is already subscribed to our newsletter.",
        error: "Already subscribed",
      };
    }

    // Send subscription request to your backend
    const response = await fetch(`${API_BASE_URL}/newsletter/subscribe/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // Store subscription locally for duplicate prevention
      const subscriptions = getStoredSubscriptions();
      const newSubscription: NewsletterSubscription = {
        email,
        timestamp: new Date(),
      };

      subscriptions.push(newSubscription);
      localStorage.setItem(
        "newsletter_subscriptions",
        JSON.stringify(subscriptions)
      );

      return {
        success: true,
        message:
          data.message ||
          "Successfully subscribed! Check your email for confirmation.",
      };
    } else {
      return {
        success: false,
        message: data.error || "Failed to subscribe. Please try again later.",
        error: data.error,
      };
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    // Check if it's a network error
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        message:
          "Network error. Please check your internet connection and try again.",
        error: "Network error",
      };
    }

    return {
      success: false,
      message: "Failed to subscribe. Please try again later.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const getStoredSubscriptions = (): NewsletterSubscription[] => {
  try {
    const stored = localStorage.getItem("newsletter_subscriptions");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error reading stored subscriptions:", error);
    return [];
  }
};

export const isEmailSubscribed = (email: string): boolean => {
  const subscriptions = getStoredSubscriptions();
  return subscriptions.some(
    (sub) => sub.email.toLowerCase() === email.toLowerCase()
  );
};
