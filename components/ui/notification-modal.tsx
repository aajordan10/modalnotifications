"use client";

import React, { useEffect, useState } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Notification } from '@/types/notification';
import { cn } from '@/lib/utils';

interface NotificationModalProps {
  notification: Notification | null;
  onClose: () => void;
}

const typeConfig = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50 dark:bg-green-950/50',
    borderColor: 'border-green-200 dark:border-green-800',
    iconColor: 'text-green-600 dark:text-green-400',
    titleColor: 'text-green-900 dark:text-green-100',
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-50 dark:bg-red-950/50',
    borderColor: 'border-red-200 dark:border-red-800',
    iconColor: 'text-red-600 dark:text-red-400',
    titleColor: 'text-red-900 dark:text-red-100',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-amber-50 dark:bg-amber-950/50',
    borderColor: 'border-amber-200 dark:border-amber-800',
    iconColor: 'text-amber-600 dark:text-amber-400',
    titleColor: 'text-amber-900 dark:text-amber-100',
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
    borderColor: 'border-blue-200 dark:border-blue-800',
    iconColor: 'text-blue-600 dark:text-blue-400',
    titleColor: 'text-blue-900 dark:text-blue-100',
  },
};

export function NotificationModal({ notification, onClose }: NotificationModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (notification) {
      setIsVisible(true);
      setIsAnimating(true);
      
      if (notification.duration && notification.duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, notification.duration);
        
        return () => clearTimeout(timer);
      }
    }
  }, [notification]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 200);
  };

  if (!notification || !isVisible) {
    return null;
  }

  const config = typeConfig[notification.type];
  const IconComponent = config.icon;

  return (
    <div className="fixed top-4 right-4 z-50 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-96 max-w-[calc(100vw-2rem)] transform transition-all duration-300 ease-out",
          isAnimating 
            ? "translate-x-0 opacity-100 scale-100" 
            : "translate-x-full opacity-0 scale-95"
        )}
      >
        <div
          className={cn(
            "relative rounded-lg border shadow-lg backdrop-blur-sm p-4",
            config.bgColor,
            config.borderColor
          )}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Close notification"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>

          <div className="flex items-start space-x-3 pr-8">
            <div className="flex-shrink-0">
              <IconComponent className={cn("h-6 w-6", config.iconColor)} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className={cn("text-sm font-semibold", config.titleColor)}>
                {notification.title}
              </h3>
              
              {notification.message && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {notification.message}
                </p>
              )}
              
              {notification.action && (
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      notification.action?.onClick();
                      handleClose();
                    }}
                    className="text-xs"
                  >
                    {notification.action.label}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}