"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";

export default function Custom404() {
  const handleGoBack = () => window.history.back();
  const handleGoHome = () => (window.location.href = "/");
  const handleRefresh = () => window.location.reload();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Reatrey-POS</h1>
          <p className="text-sm text-gray-500">Retail Point of Sale System</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                404 - Page Not Found
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Sorry, the page you're looking for doesn't exist or has been
                moved.
              </p>

              <Alert className="mb-4">
                <AlertDescription className="text-sm text-gray-700">
                  Try checking the URL or use one of the options below.
                </AlertDescription>
              </Alert>

              <div className="w-full space-y-2">
                <Button onClick={handleGoHome} className="w-full">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Home
                </Button>
                <div className="flex gap-2">
                  <Button
                    onClick={handleGoBack}
                    variant="outline"
                    className="w-1/2"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Go Back
                  </Button>
                  <Button
                    onClick={handleRefresh}
                    variant="outline"
                    className="w-1/2"
                  >
                    <RefreshCw className="w-4 h-4 mr-1" />
                    Refresh
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Reatrey-POS. All rights reserved.
        </div>
      </div>
    </div>
  );
}
