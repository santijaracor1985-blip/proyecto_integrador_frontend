import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <SignIn
        appearance={{
          elements: {
            rootBox: "flex justify-center",
            card: "bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl",
            headerTitle: "text-white text-3xl font-bold",
            headerSubtitle: "text-gray-300",
            socialButtonsBlockButton:
              "bg-black/40 border border-white/10 text-white hover:bg-purple-600 transition",
            formFieldLabel: "text-gray-300",
            formFieldInput:
              "bg-black/40 border border-white/10 text-white focus:ring-purple-500",
            footerActionText: "text-gray-400",
            footerActionLink: "text-purple-400 hover:text-purple-300",
            formButtonPrimary:
              "bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg hover:shadow-purple-500/40 transition",
          },
        }}
      />
    </div>
  );
}
