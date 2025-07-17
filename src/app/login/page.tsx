import Link from "next/link";
import { Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232946] to-[#121629] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#181c2a] shadow-2xl border-0">
        <CardHeader className="space-y-6 pb-8 pt-8">
          {/* Logo Placeholder */}
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CC</span>
            </div>
          </div>

          {/* Welcome Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-white font-sans">
              Welcome Back!
            </h1>
            <p className="text-gray-300 text-sm">
              Sign in to your Candidacy Craft account
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pb-8">
          <form className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-200"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-11 border-gray-700 bg-[#232946] text-white placeholder-gray-400 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-200"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 h-11 border-gray-700 bg-[#232946] text-white placeholder-gray-400 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold mt-6 shadow-md cursor-pointer"
            >
              Login
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-[#7ec4fa] hover:text-[#4A90E2] hover:underline font-semibold transition-colors duration-150"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="text-center pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-300">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-[#7ec4fa] hover:text-[#4A90E2] hover:underline font-semibold transition-colors duration-150"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
