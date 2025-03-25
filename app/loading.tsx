import {Skeleton} from "@/components/ui/skeleton"
import React from "react";

const styling = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  alignItems: "center",
  height: "100vh",
  width: "100%",
} as React.CSSProperties

export default function SkeletonDemo() {
  return (
    <div style={styling} className="p-4">
      <div className="flex gap-1 justify-center items-center">
        <div>
          <Skeleton className="h-24 w-24 rounded-full"/>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-8 w-[500px]"/>
          <Skeleton className="h-8 w-[460px]"/>
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div>
          <Skeleton className="h-24 w-24 rounded-full"/>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-8 w-[500px]"/>
          <Skeleton className="h-8 w-[460px]"/>
        </div>
      </div>
    </div>
  )
}
