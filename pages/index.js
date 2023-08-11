import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrder";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopBar />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
