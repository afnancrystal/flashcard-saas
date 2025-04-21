# 📚 AI Flashcard SaaS
An AI-powered flashcard generator that helps users create, manage, and study flashcards efficientlyBuilt with Next.js, Firebase, Stripe, and OpenAI, this SaaS application offers a seamless experience for learners and educators alike

## 🚀 Features

- **AI-Generated Flashcards** Input any text, and the app generates concise flashcards using OpenAI's GPT mode.
- **User Authentication** Secure sign-up and login functionality powered by Cler.
- **Subscription Management** Integrate Stripe for handling payments and managing Pro subscription.
- **Firestore Integration** Store and retrieve user-generated flashcards in real-tim.
- **Responsive UI** Built with Material-UI for a clean and responsive desig.

## 🛠 Tech Stack

- **Frontend*: Next.js, React, MaterialUI
- **Backend*: Firebase Firestore, OpenAI PI
- **Authentication*: Clerk
- **Payments*: Stripe
- **Deployment*: Vercel

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/flashcard-saas.git
   cd flashcard-saas
   ``


2. **Install dependencies**:

   ```bash
   npm install
   ``


3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   OPENAI_API_KEY=your_openai_api_key
   ``


4. **Run the development server**:

   ```bash
   npm run dev
   ``


   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing the Application

- **Sign Up/Logi**: Use the Clerk-powered authentication to create an account or lo in.
- **Generate Flashcard**: Navigate to the dashboard and input text to generate flashcrds.
- **Upgrade to Pr**: Access premium features by subscribing through the Stripe-integrated payment sytem.

## 📚 LearnMore

For a detailed walkthrough and understanding of how this application was built, refer to the original article by Hakable:

linkturn0search0

## 📝 Lcense

This project is licensed under the MIT icense.