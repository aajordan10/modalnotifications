"use client";

import React, { createContext, useCallback, useState } from 'react';
import { Notification } from '@/types/notification';
import { NotificationModal } from '@/components/ui/notification-modal';

interface NotificationContextType {
  showNotification: (notification: Omit<Notification, 'id'>) => void;
  hideNotification: () => void;
}

export const NotificationContext = createContext<NotificationContextType | null>(null);

interface NotificationProviderProps {
  children: React.ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  const showNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      id,
      duration: 5000,
      ...notification,
    };
    
    setCurrentNotification(newNotification);
  }, []);

  const hideNotification = useCallback(() => {
    setCurrentNotification(null);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification }}>
      {children}
      <NotificationModal
        notification={currentNotification}
        onClose={hideNotification}
      />
    </NotificationContext.Provider>
  );
}