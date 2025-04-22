🎩 No hocus, just focus — your AI flashcard wizard is here!

# 📚 AI Flashcard SaaS
An AI-powered flashcard generator that helps users create, manage, and study flashcards efficiently.  
Built using Next.js, Firebase, OpenAI, Stripe, and Clerk for a modern SaaS experience.

## 🚀 Features

- **AI-Generated Flashcards** Input any text, and the app generates concise flashcards using OpenAI's GPT mode.
- **User Authentication** Secure sign-up and login functionality powered by Clerk.
- **Subscription Management** ntegrate Stripe for handling payments and managing Pro subscription.
- **Firestore Integration** Store and retrieve user-generated flashcards in real-time.
- **Responsive UI** Optimized for all screen sizes using Material-UI for a clean and responsive design.

## 🛠 Tech Stack

- **Frontend*: Next.js, React, MaterialUI
- **Backend*: Firebase Firestore, OpenAI API
- **Authentication*: Clerk
- **Payments*: Stripe
- **Deployment*: Vercel

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/afnancrystal/flashcard-saas.git
   cd flashcard-saas
   ``

2. **Install dependencies**:

   ```bash
   npm install
   ``

3. 🔐 **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   OPENAI_API_KEY=your_openai_api_key
   ``

4. **Run the development server locally**:

   ```bash
   npm run dev
   ``

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🧪 Testing the Application

- **Sign Up/Login**: Use the Clerk-powered authentication to create an account or log in.
- **Generate Flashcard(s)**: Navigate to the dashboard and input text to generate flashcards.
- **Upgrade to Pro**: Access premium features by subscribing through the Stripe-integrated payment system.

## 📚 Learn More

For a detailed walkthrough and understanding of how this application was built, refer to the original article by [Hackable](https://medium.com/@hackable-projects/creating-a-flashcard-saas-with-openai-and-stripe-7896ddea1dbb).

## 📝 License

This project is licensed under the MIT license.