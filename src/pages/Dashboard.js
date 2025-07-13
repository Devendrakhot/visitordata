// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { VisitorTable } from "../components/VisitorTable";

const socket = io("https://visitor-jbk2.onrender.com", {
  transports: ["websocket"], // Ensure full websocket support
  reconnection: true,
});

const Dashboard = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await axios.get("https://visitor-jbk2.onrender.com/api/visitors");
        setVisitors(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch visitors", err);
      }
    };

    fetchVisitors();

    // Connect and listen for updates
    if (socket.connected === false) {
      socket.connect();
    }

    socket.on("connect", () => {
      console.log("🔌 Connected to backend socket");
    });

    socket.on("new-visitor", (newVisitor) => {
      console.log("📡 New visitor received:", newVisitor);
      setVisitors((prev) => [newVisitor, ...prev]);
    });

    socket.on("disconnect", () => {
      console.warn("⚠️ Socket disconnected");
    });

    return () => {
      socket.off("new-visitor");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Visitor Tracking Dashboard
      </h1>
      <VisitorTable visitors={visitors} />
    </div>
  );
};

export default Dashboard;
