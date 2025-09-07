"use client";

import LoadingAnimation from "@/components/LoadingAnimation";

export default function LoadingPage() {
  const japaneseLyrics = "「ワタリドリの様に今 旅に発つよ」";
  
  return (
    <LoadingAnimation 
      lyrics={japaneseLyrics}
      duration={3000}
      redirectPath="/home"
    />
  );
}
