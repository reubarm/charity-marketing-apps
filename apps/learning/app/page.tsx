"use client";

import { Advert } from "@repo/ui";
import LearningGives from "learning-gives/dist/LearningGives";
import { useEffect, useState } from "react";

export default function Page(): JSX.Element {
  const [refresh, setRefresh] = useState(0);

  const handleRefreshClick = () => {
    setRefresh((prev) => prev + 1);
  };

  useEffect(() => {
    const setApiKeyCookie = (apiKey: string) => {
      const cookieName = "apiKey";
      const expires = "Fri, 31 Dec 9999 23:59:59 GMT";
      document.cookie = `${cookieName}=${encodeURIComponent(apiKey)}; expires=${expires}; path=/`;
    };

    setApiKeyCookie(process.env.NEXT_PUBLIC_API_KEY!);
  }, []);

  useEffect(() => {
    const registerServiceWorkerAndRequestPermission = async () => {
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window) {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js');
          console.log('Service Worker registered with scope:', registration.scope);
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorkerAndRequestPermission();
  }, []);


  return (
    <div style={{ width: "100%" }}>
      <LearningGives refresh={handleRefreshClick} />
      <Advert refresh={refresh} />
    </div>
  );
}
