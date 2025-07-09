import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="space-y-6 pb-8">
          {/* Logo Placeholder */}
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CC</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Start Your Journey
            </h1>
            <p className="text-gray-600 text-sm">
              Create your account to unlock your career potential
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Form Fields */}
          <div className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 h-11 border-gray-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10 h-11 border-gray-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="pl-10 h-11 border-gray-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="pl-10 h-11 border-gray-200 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Create Account Button */}
          <Button
            className="w-full h-11 bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-medium"
            type="submit"
          >
            Create Account
          </Button>

          {/* Legal Text */}
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              By signing up, you agree to our{" "}
              <Link
                href="/terms"
                className="text-[#4A90E2] hover:text-[#3A7BC8] underline underline-offset-2"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-[#4A90E2] hover:text-[#3A7BC8] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Login Link */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium underline underline-offset-2"
              >
                Login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
