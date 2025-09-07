import { ReactNode } from "react";

export const metadata = {
  title: " ",
  description: " ",
};

export default function IntroLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="m-0 p-0 bg-black text-white h-screen w-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}
