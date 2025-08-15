"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNotification } from '@/hooks/use-notification';
import { CheckCircle, XCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';

export default function Home() {
  const { showNotification } = useNotification();

  const handleSuccessNotification = () => {
    showNotification({
      type: 'success',
      title: 'Success!',
      message: 'Your action was completed successfully. Everything is working perfectly.',
      duration: 4000,
    });
  };

  const handleErrorNotification = () => {
    showNotification({
      type: 'error',
      title: 'Error occurred',
      message: 'Something went wrong while processing your request. Please try again later.',
      duration: 6000,
      action: {
        label: 'Retry',
        onClick: () => console.log('Retry clicked'),
      },
    });
  };

  const handleWarningNotification = () => {
    showNotification({
      type: 'warning',
      title: 'Warning',
      message: 'This action cannot be undone. Please review your changes before proceeding.',
      duration: 5000,
    });
  };

  const handleInfoNotification = () => {
    showNotification({
      type: 'info',
      title: 'New features available',
      message: 'Check out the latest updates and improvements to enhance your experience.',
      action: {
        label: 'Learn More',
        onClick: () => console.log('Learn more clicked'),
      },
    });
  };

  const handleQuickNotification = () => {
    showNotification({
      type: 'success',
      title: 'Quick notification',
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notification Modal Demo
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful, accessible, and reusable notification modals with smooth animations and customizable options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CardHeader>
              <CardTitle className="text-2xl">Test Notifications</CardTitle>
              <CardDescription>
                Click any button below to see the notification modal in action. Each type has its own styling and behavior.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  onClick={handleSuccessNotification}
                  className="h-16 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Show Success Notification
                </Button>

                <Button
                  onClick={handleErrorNotification}
                  className="h-16 text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <XCircle className="mr-2 h-5 w-5" />
                  Show Error Notification
                </Button>

                <Button
                  onClick={handleWarningNotification}
                  className="h-16 text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Show Warning Notification
                </Button>

                <Button
                  onClick={handleInfoNotification}
                  className="h-16 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Info className="mr-2 h-5 w-5" />
                  Show Info Notification
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <Button
                  onClick={handleQuickNotification}
                  variant="outline"
                  className="w-full h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  Quick 2-second notification
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Auto-dismiss with customizable duration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Four notification types (success, error, warning, info)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Optional action buttons
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Smooth animations and transitions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Fully responsive design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
{`const { showNotification } = useNotification();

showNotification({
  type: 'success',
  title: 'Success!',
  message: 'Action completed.',
  duration: 4000,
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  }
});`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}